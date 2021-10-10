import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import firebase from 'src/firebase';
import LoadingOverlay from 'react-loading-overlay';
import { BaseButton } from 'src/components/uiParts';
import Login from './login';

const Auth = () => {
  const [isSignInCheck, setIsSignInCheck] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (isMounted) {
        setIsSignInCheck(true);
        setIsSignedIn(true);
      }
    } else {
      if (isMounted) {
        setIsSignInCheck(true);
        setIsSignedIn(false);
      }
    }
  });

  const _handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      {!isSignInCheck ? (
        <LoadingOverlay active={true} spinner text="Loading...">
          <div style={{ height: '100vh', width: '100vw' }}></div>
        </LoadingOverlay>
      ) : (
        <div>
          {isSignedIn ? (
            <div>
              <p>Home</p>
              <Link href="/">
                <a>トップページへ</a>
              </Link>
              <br />
              <br />
              <BaseButton onClick={_handleLogout}>ログアウト</BaseButton>
            </div>
          ) : (
            <Login />
          )}
        </div>
      )}
    </div>
  );
};

export default Auth;
