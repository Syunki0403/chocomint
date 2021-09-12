import { db } from '../firebase/index';

// todo: 引数にreviewIdを追加
export const getReview = async () => {
  try {
    const reviewId = 'Om4zy0P0pSG3uVlkm6ZI'; // todo: 後ほど削除
    const colRef = db.collection('reviews').doc(reviewId);
    const colDoc = await colRef.get();

    if (!colDoc.exists) {
      // todo: 404ページへ？
      throw new Error("reviewドキュメントが取得できませんでした");
    };

    return colDoc.data();
  } catch (e) {
    console.error(e);
  }
};
