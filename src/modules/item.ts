import firebase, { db } from '../firebase/index';

type Item = {
  constructor: string;
  images: string[];
  name: string;
  price: number;
  score: number;
  score_chocolate: number;
  score_mint: number;
  shops: string[];
  supplement: string;
};

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

export const postItem = async (values: Item) => {
  try {
    const docId = db.collection('items').doc().id;
    db.collection('items').doc(docId).set({
      docId: docId,
      constructor: values.constructor,
      images: values.images,
      name: values.name,
      price: values.price,
      score: values.score,
      score_chocolate: values.score_chocolate,
      score_mint: values.score_mint,
      shops: values.shops,
      supplement: values.supplement,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // todo: post完了後のページへ
  } catch (e) {
    console.error(e);
  }
};
