import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item category">
        <div className="title">category</div>
        <ul className="items">
          <li className="item active">
            <div className="circle"></div>
            all
          </li>
          <li className="item">
            <div className="circle"></div>
            burger
          </li>
          <li className="item">
            <div className="circle"></div>
            pizza
          </li>
          <li className="item">
            <div className="circle"></div>
            bagel
          </li>
          <li className="item">
            <div className="circle"></div>
            drinks
          </li>
          <li className="item">
            <div className="circle"></div>
            healthy food
          </li>
        </ul>
      </div>
      <div className="sidebar-item price">
        <div className="title">price</div>
        <ul className="items">
          <li className="item">
            <div className="circle"></div>
            up to 10 $
          </li>
          <li className="item">
            <div className="circle"></div>
            up to 30 $
          </li>
          <li className="item">
            <div className="circle"></div>
            up to 50 $
          </li>
          <li className="item">
            <div className="circle"></div>
            up to 70 $
          </li>
          <li className="item">
            <div className="circle"></div>
            up to 90 $
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
