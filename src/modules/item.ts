import { db } from '../firebase/index';

// todo: 引数にitemIdを追加
export const getItem = async () => {
  try {
    const itemId = 'xZE9h9Y5yjdkXjpaOl7J'; // todo: 後ほど削除
    const colRef = db.collection('items').doc(itemId);
    const colDoc = await colRef.get();

    if (!colDoc.exists) {
      // todo: 404ページへ？
      throw new Error("itemドキュメントが取得できませんでした");
    };

    return colDoc.data();
  } catch (e) {
    console.error(e);
  }
};
