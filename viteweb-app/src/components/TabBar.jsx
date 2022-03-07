import React from "react";
import { useHistory, useLocation } from "react-router-dom";

function TabBar({ isHide }) {
  const { push } = useHistory(); // useHistory获取历史记录信息，里面有push replace等方法实现跳转
  const { pathname } = useLocation(); // useLocation获取当前的路径信息
  // 跳转
  const toPage = (path) => {
    push({ pathname: path });
  };
  return (
    <div className="tabbar" style={{ display: isHide ? "none" : "" }}>
      <div
        className={pathname === "/" ? "tab-item active" : "tab-item"}
        onClick={() => toPage("/")}
      >
        
        <p className="bd">主页</p>
        
      </div>
      <div
        className={pathname === "/user" ? "tab-item active" : "tab-item"}
        onClick={() => toPage("/user")}
      >
        
        <p className="bd">我的</p>
        
      </div>
    </div>
  );
}

export default TabBar;
