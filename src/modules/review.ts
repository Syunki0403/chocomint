import firebase, { db } from '../firebase/index';

type Review = {
  image: string,
  score: number,
  score_chocolate: number,
  score_mint: number,
  sentence: number,
}

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

export const postReview = async (values: Review) => {
  try {
    const docId = db.collection("items").doc().id;
    db.collection("items").doc(docId).set({
      docId: docId,
      image: values.image,
      score: values.score,
      score_chocolate: values.score_chocolate,
      score_mint: values.score_mint,
      sentence: values.sentence,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // todo: post完了後のページへ
  } catch (e) {
    console.error(e);
  }
};
