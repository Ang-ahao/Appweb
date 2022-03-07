import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import TabBar from "./components/TabBar";


function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
      {/* 通过三元表达式的形式显示和隐藏底部导航 */}
      {/* {["/detail"].indexOf(pathname) > -1 ? null : <TabBar />} */}
      {/* 组件传参 */}
      <TabBar isHide={["/detail"].indexOf(pathname) > -1} />
    </div>
  );
}

export default App;
