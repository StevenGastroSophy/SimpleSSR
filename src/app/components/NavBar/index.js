import React, { Fragment, useState } from 'react';
import { CSSTransition } from 'react-transition-group'

import Item from './Item';
import XBurger from './XBurger';
import getTitleByCode from './getTitleByCode';

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
              code ={""}
              text={getTitleByCode("")}
              currentCode={currentCode}
              history={history}
            />
            <Item
              code ={"art20200616001"}
              text={getTitleByCode("art20200616001")}
              currentCode={currentCode}
              history={history}
            />
            <Item
              code ={"art20200616002"}
              text={getTitleByCode("art20200616002")}
              currentCode={currentCode}
              history={history}
            />
            <Item
              code ={"art20200616003"}
              text={getTitleByCode("art20200616003")}
              currentCode={currentCode}
              history={history}
            />
            <Item
              code ={"art20200616004"}
              text={getTitleByCode("art20200616004")}
              currentCode={currentCode}
              history={history}
            />
            <Item
              code ={"art20200616005"}
              text={getTitleByCode("art20200616005")}
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
