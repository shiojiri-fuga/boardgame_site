import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, NavList, NavItem, NavLink, Button } from '../styles/HeaderContainer';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="site-title">
        <h1>The Game Frontiers</h1>
      </div>
      <NavList>
        <NavItem>
          <NavLink as={Link} to="/">ボードゲーム</NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/blog">ブログ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/">お問い合わせ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} to="/">ボードゲームイベント</NavLink>
        </NavItem>
      </NavList>
      <div className="header-buttons">
        <Button as={Link} to="/signin">サインイン</Button>
        <Button as={Link} to="/login">ログイン</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;