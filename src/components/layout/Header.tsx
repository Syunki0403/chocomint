import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from 'next/image';
import logo from '/public/images/logo_transparent.png';
import { BaseButton } from 'src/components/uiParts';
import MediaQuery from 'react-responsive';
import { onAuthStateChanged, signOut } from 'src/firebase/auth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMounted, setMounted] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const classes = useStyles();
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const _handleLogout = () => {
    signOut();
  };

  useEffect(() => {
    setMounted(true);
    onAuthStateChanged(isMounted, setIsSignedIn);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className="relative" style={{ background: '#68e8d8' }}>
        <Toolbar className="flex justify-between h-14">
          <div className="flex items-center sm:w-2/5 md:w-full">
            {isMounted && (
              <MediaQuery query="(min-width: 768px)">
                <Link href="/">
                  <a>
                    <Image
                      src={logo}
                      alt="ロゴ"
                      width={50}
                      height={50}
                      className="img-noBlurred mx-2 cursor-pointer"
                    />
                  </a>
                </Link>

                <div className="mx-2 cursor-pointer">チョコミントウとは</div>
                <div className="mx-2">
                  <Link href="/items">
                    <a>商品検索</a>
                  </Link>
                </div>
                <div className="mx-2">
                  <Link href="/items/post">
                    <a>商品登録</a>
                  </Link>
                </div>
              </MediaQuery>
            )}
            {isMounted && (
              <MediaQuery query="(max-width: 767px)">
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </MediaQuery>
            )}
          </div>
          <div className="flex items-center justify-end sm:w-3/5 md:w-full">
            {isSignedIn ? (
              <div>
                <Link href="/">
                  <a>ユーザー名</a>
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-end sm:w-3/5 md:w-full">
                <Link href="/login">
                  <a>
                    <div className="mx-4 cursor-pointer">ログイン</div>
                  </a>
                </Link>
                <Link href="/signup">
                  <a>
                    <BaseButton className="px-4 h-10" color="white">
                      新規登録
                    </BaseButton>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="temporary" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem>
            <Image
              src={logo}
              alt="ロゴ"
              width={50}
              height={50}
              className="img-noBlurred mx-2 cursor-pointer"
            />
          </ListItem>
          <ListItem>
            <div className="mx-2 cursor-pointer">チョコミントウとは</div>
          </ListItem>
          <ListItem>
            <div className="mx-2">
              <Link href="/items">
                <a>商品検索</a>
              </Link>
            </div>
          </ListItem>
          <ListItem>
            <div className="mx-2">
              <Link href="/items/post">
                <a>商品登録</a>
              </Link>
            </div>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Header;
