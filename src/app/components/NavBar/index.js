import React, { Fragment, useState } from 'react';
import { CSSTransition } from 'react-transition-group'

import Item from './Item';
import XBurger from './XBurger';

const NavBar = (props) => {
  const {
    history,
    currentCode,
  } = props;
  const [isShow, setShow] = useState(false);

  const handleShowChange = (e) => {
    setShow(!isShow);
  }

  return (
    <Fragment>
      <CSSTransition
          in={isShow}   // 用於判斷是否出現的狀態
          timeout={1000}           // 動畫持續時間
          classNames="navBarShow"   // 防止重複，可以理解成 namespace
      >
        <div className={`navBar${isShow ? " show" : ""}`}>
          <ul className="form">
            <Item
              code ={"art20200616001"}
              text={"建立 Express server"}
              currentCode={currentCode}
              history={history}
            />
            <Item
              code ={"art20200616002"}
              text={"改裝成 React SPA server"}
              currentCode={currentCode}
              history={history}
            />
            <Item
              code ={"art20200616003"}
              text={"加上 React router"}
              currentCode={currentCode}
              history={history}
            />
            <Item
              code ={"art20200616004"}
              text={"改裝成 React SSR server"}
              currentCode={currentCode}
              history={history}
            />
            <Item
              code ={"art20200616005"}
              text={"心得"}
              currentCode={currentCode}
              history={history}
            />
          </ul>
        </div>
      </CSSTransition>
      <div className="navCtrl" onClick={handleShowChange}>
        <XBurger isActive={isShow} />
      </div>
    </Fragment>
  );
}

export default NavBar;
