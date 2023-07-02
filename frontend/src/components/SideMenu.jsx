import React from 'react';
import {SideMenuContainer} from '../styles/SideMenuContainer';

const SideMenu = () => {
  return (
    <SideMenuContainer>
      {/* サイドメニューのコンテンツ */}
      <ul>
        <li>メニュー項目1</li>
        <li>メニュー項目2</li>
        {/* 他のメニュー項目 */}
      </ul>
    </SideMenuContainer>
  );
};

export default SideMenu;