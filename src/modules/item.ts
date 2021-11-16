import Router from 'next/router';
import firebase, { db, storage } from '../firebase/index';
import { TPostItem, DBItemObj } from '../types/Item';
import { toast } from 'react-toastify';
import { TItem } from '../types/Item';

export const getItem = async (itemId: string) => {
  try {
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

export const getItemList = async (): Promise<TItem[] | undefined> => {
  try {
    const itemList: TItem[] = [];
    await db
      .collection('items')
      .get()
      .then((query) => {
        query.forEach((doc) => {
          const data = doc.data();
          itemList.push({
            id: doc.id,
            name: data.name,
            images: data.images,
            price: data.price,
            shops: data.shops,
            period_start: data.period_start,
            period_end: data.period_end,
            score_mint: data.score_mint,
            score_chocolate: data.score_chocolate,
            score: data.score,
            supplement: data.supplement,
            user_info: data.user_info,
            created_at: data.created_at,
            updated_at: data.updated_at,
          });
        });
      });
    return itemList;
  } catch (e) {
    console.error(e);
    return [];
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

    await Router.push('/items').then(() => {
      toast.success('商品登録が完了しました');
    });
  } catch (e) {
    console.error(e);
    toast.success('error', {
      type: 'error',
    });
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
    return uploadTask.snapshot.ref.getDownloadURL().then((downloadURL: string) => {
      return downloadURL;
    });
  });
};
