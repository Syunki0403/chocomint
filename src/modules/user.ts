import { db } from '../firebase/index';

export const getUser = async () => {
  try {
    const uid = 'Gc6R90CFKaGWT02s4OGi';
    const colRef = db.collection('users').doc(uid);
    const colDoc = await colRef.get();

    if (colDoc.exists) {
      console.log(colDoc.data());
    } else {
      console.log('とれなかったよ');
    }
  } catch (e) {
    console.log(e, '___________e');
  }
};
