import Head from "next/head";
import React, { useCallback, useEffect, useState } from "react";
import { Menu } from "./components";
import { navData } from "./fixture";
import styles from "./ReactiveNavBar.module.scss";

const ReactiveNavBar = () => {
  const [navDOM, updateNavDOM] = useState("");

  const renderItems = useCallback((obj, isTopLevel=false) => {
    let resArr = [];
    for (let key in obj) {
      if (typeof obj[key] !== "object") {
        if (obj[key]) {
          resArr.push(
            <Menu menuLabel={key} isLeaf={true} {...{key, isTopLevel, updateNavDOM}}/>
          );
        }
      } else {
        resArr.push(
          <Menu menuLabel={key} {...{key, isTopLevel, updateNavDOM}}>
            {renderItems(obj[key])}
          </Menu>
        );
      }
    }
    return resArr;
  }, []);

  useEffect(()=>{
    updateNavDOM(document.querySelector("#menu-container").outerHTML);
  },[navDOM]);

  return (
    <div className={styles.react_nav_menu}>
      <Head>
        <title>Reactive render</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>
        Cascaded Menu - Expand the menu to view how the Real DOM changes!
      </h2>
      <h2>
        Cascaded Menu Real-DOM Structure
      </h2>
      <div id="menu-container">
        {renderItems(navData, true)}
      </div>
      <code>
        {navDOM}
      </code>
    </div>
  );
}

export default ReactiveNavBar;