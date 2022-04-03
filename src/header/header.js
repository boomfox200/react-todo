import React, { Compomemt } from "react";
import "./header.include.css";

const Header = () => {
  return (
    <header>
      <div className="menuBlock">
        <div className="headerTitle">April 2022</div>
        <div className="headerMenu">
          <div className="imgMenu"></div>
        </div>
      </div>
      <div className="dayBlock">
        <div className="dayData">
          <div className="number">19</div>
          <div className="day">Su</div>
          <div className="noactiveToDo"></div>
        </div>
        <div className="dayData">
          <div className="number">20</div>
          <div className="day">Mo</div>
          <div className="activeToDo"></div>
        </div>
        <div className="dayData">
          <div className="number">21</div>
          <div className="day">Tu</div>
          <div className="noactiveToDo"></div>
        </div>
        <div className="dayData active">
          <div className="number">22</div>
          <div className="day">We</div>
          <div className="noactiveToDo"></div>
        </div>
        <div className="dayData">
          <div className="number">23</div>
          <div className="day">Su</div>
          <div className="activeToDo"></div>
        </div>
        <div className="dayData">
          <div className="number">24</div>
          <div className="day">Mo</div>
          <div className="activeToDo"></div>
        </div>
        <div className="dayData">
          <div className="number">25</div>
          <div className="day">Tu</div>
          <div className="noactiveToDo"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
