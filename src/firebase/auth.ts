import firebase from 'src/firebase';
import { useRouter } from 'next/dist/client/router';
import { TLoginUser, TSignupUser } from 'src/types/User';

export const onAuthStateChanged = (isMounted: boolean, setIsSignedIn: any) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (isMounted) {
        setIsSignedIn(true);
      }
    } else {
      if (isMounted) {
        setIsSignedIn(false);
      }
    }
  })
};

export const createUserWithEmailAndPassword = (values: TSignupUser) => {
  return firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

export const signInWithEmailAndPassword = (values: TLoginUser, root: string) => {
  const router = useRouter();
  try {
    firebase.auth().signInWithEmailAndPassword(values.email, values.password);
    return router.push(root);
  } catch (error) {
    alert(error);
  }
};

export const signOut = () => {
  return firebase.auth().signOut();
};
