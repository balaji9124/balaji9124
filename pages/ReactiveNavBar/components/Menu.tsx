import { useState } from "react";
import classNames from 'classnames';

interface IMenuProps {
    menuLabel: string;
    isLeaf?: boolean;
    isTopLevel?: boolean;
    children?: any[];
    updateNavDOM(value: string): void; 
};

export const Menu = ({ isTopLevel, menuLabel, isLeaf = false, children, updateNavDOM }: IMenuProps) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div
        className={classNames({
            "main-menu": isTopLevel,
            "sub-menu": !isLeaf,
            "leaf-menu": isLeaf,
            "active": isActive
        })}
        onClick={(e) => {
          e.stopPropagation();
          if(!isLeaf) {
            setIsActive(!isActive);
            updateNavDOM("");
          }
        }}
      >
        {menuLabel}
        {isActive && !isLeaf ? children : null}
      </div>
    );
  };