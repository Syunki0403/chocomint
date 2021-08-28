import firebase, { db } from './index';

export const getUser = async () => {
  try {
    const uid = 'Gc6R90CFKaGWT02s4OGi';
    const colRef = db.connection("users").doc(uid);
    const col = await colRef.get();

    if (col.exists) {
      console.log(col, '_________col');
    } else {
      console.log('とれなかったよ');
    }
  } catch (e) {
    console.log(e, '___________e');
  }

};
