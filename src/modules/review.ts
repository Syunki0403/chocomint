import Router from 'next/router';
import firebase, { db } from '../firebase/index';
import { TPostReview, DBReviewObj } from '../types/Review';

// todo: 引数にreviewIdを追加
export const getReview = async () => {
  try {
    const reviewId = 'Om4zy0P0pSG3uVlkm6ZI'; // todo: 後ほど削除
    const colRef = db.collection('reviews').doc(reviewId);
    const colDoc = await colRef.get();

    if (!colDoc.exists) {
      // todo: 404ページへ？
      throw new Error('reviewドキュメントが取得できませんでした');
    }

    return colDoc.data();
  } catch (e) {
    console.error(e);
  }
};

export const postReview = async (review: TPostReview) => {
  try {
    const reviewObj: DBReviewObj = {
      item_id: review.item_id,
      sentence: review.sentence,
      score_mint: review.score_mint,
      score_chocolate: review.score_chocolate,
      score: review.score,
      user_info: {
        id: 'test1234',
        name: '田中太郎',
      },
      created_at: firebase.firestore.Timestamp.now().toDate(),
      updated_at: firebase.firestore.Timestamp.now().toDate(),
    };
    await db.collection('reviews').doc().set(reviewObj);

    Router.push('/items');
  } catch (e) {
    console.error(e);
  }
};
