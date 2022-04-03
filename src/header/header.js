import React, { Compomemt } from "react";
import header from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={header.menuBlock}>
        <div className={header.headerTitle}>April 2022</div>
        <div className={header.headerMenu}>
          <div className={header.imgMenu}></div>
        </div>
      </div>
      <div className={header.dayBlock}>
        <div className={header.dayData}>
          <div className={header.number}>19</div>
          <div className={header.day}>Su</div>
          <div className={header.noactiveToDo}></div>
        </div>
        <div className={header.dayData}>
          <div className={header.number}>20</div>
          <div className={header.day}>Mo</div>
          <div className={header.activeToDo}></div>
        </div>
        <div className={header.dayData}>
          <div className={header.number}>21</div>
          <div className={header.day}>Tu</div>
          <div className={header.noactiveToDo}></div>
        </div>
        <div className={header.dayDataActive}>
          <div className={header.number}>22</div>
          <div className={header.day}>We</div>
          <div className={header.noactiveToDo}></div>
        </div>
        <div className={header.dayData}>
          <div className={header.number}>23</div>
          <div className={header.day}>Su</div>
          <div className={header.activeToDo}></div>
        </div>
        <div className={header.dayData}>
          <div className={header.number}>24</div>
          <div className={header.day}>Mo</div>
          <div className={header.activeToDo}></div>
        </div>
        <div className={header.dayData}>
          <div className={header.number}>25</div>
          <div className={header.day}>Tu</div>
          <div className={header.noactiveToDo}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
