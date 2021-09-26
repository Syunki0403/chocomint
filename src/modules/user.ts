import firebase, { db } from '../firebase/index';

type User = {
  authId: string;
  name: string;
};

// todo: 引数にuidを追加
export const getUser = async () => {
  try {
    const uid = 'Gc6R90CFKaGWT02s4OGi'; // todo: 後ほど削除
    const colRef = db.collection('users').doc(uid);
    const colDoc = await colRef.get();

    if (!colDoc.exists) {
      // todo: 404ページへ？
      throw new Error('userドキュメントが取得できませんでした');
    }

    return colDoc.data();
  } catch (e) {
    console.error(e);
  }
};

export const postUser = async (values: User) => {
  try {
    const docId = db.collection('users').doc().id;
    db.collection('users').doc(docId).set({
      docId: docId,
      authId: values.authId,
      name: values.name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // todo: post完了後のページへ
  } catch (e) {
    console.error(e);
  }
};
