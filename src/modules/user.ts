import { db } from '../firebase/index';

// todo: 引数にuidを追加
export const getUser = async () => {
  try {
    const uid = 'Gc6R90CFKaGWT02s4OGi'; // todo: 後ほど削除
    const colRef = db.collection('users').doc(uid);
    const colDoc = await colRef.get();

    if (!colDoc.exists) {
      // todo: 404ページへ？
      throw new Error("userドキュメントが取得できませんでした");
    };

    return colDoc.data();
  } catch (e) {
    console.error(e);
  }
};
