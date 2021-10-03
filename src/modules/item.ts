import Router from 'next/router';
import ItemDetails from 'src/pages/items/[id]';
import firebase, { db, storage } from '../firebase/index';
import { TPostItem, DBItemObj } from '../types/Item';

// todo: 引数にitemIdを追加
export const getItem = async () => {
  try {
    const itemId = 'xZE9h9Y5yjdkXjpaOl7J'; // todo: 後ほど削除
    const colRef = db.collection('items').doc(itemId);
    const colDoc = await colRef.get();

    if (!colDoc.exists) {
      // todo: 404ページへ？
      throw new Error('itemドキュメントが取得できませんでした');
    }

    return colDoc.data();
  } catch (e) {
    console.error(e);
  }
};

export const postItem = async (item: TPostItem) => {
  try {
    // const docId = db.collection('items').doc().id;
    const itemObj: DBItemObj = {
      name: item.name,
      images: item.images,
      price: item.price,
      shops: item.shops,
      period_start: item.period_start,
      period_end: item.period_end,
      score_mint: item.score_mint,
      score_chocolate: item.score_chocolate,
      score: item.score,
      supplement: item.supplement,
      user_info: {
        id: 'test1234',
        name: '田中太郎',
      },
      created_at: firebase.firestore.Timestamp.now().toDate(),
      updated_at: firebase.firestore.Timestamp.now().toDate(),
    };
    await db.collection('items').doc().set(itemObj);

    Router.push('/items');
  } catch (e) {
    console.error(e);
  }
};

export const uploadImage = (image: File) => {
  // ランダムな16文字の文字列を作成
  const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const N = 16;
  const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
    .map((n) => S[n % S.length])
    .join('');

  const uploadRef = storage.ref('itemImages').child(fileName);
  const uploadTask = uploadRef.put(image);

  return uploadTask.then(() => {
    // 完了時に正常なアップロード処理を行う
    return uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      return downloadURL;
    });
  });
};
