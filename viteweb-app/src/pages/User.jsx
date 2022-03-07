import React from "react";
import { Route, Link } from "react-router-dom";
import UserOrders from "./UserOrders";
import UserScore from "./UserScore";

function User() {
  return (
    <div className="container">
      <h1>用户中心</h1>
      <hr />
      <Link to="/user/orders">【我的订单】</Link>
      <Link to="/user/scores">【我的积分】</Link>
      <hr />
      <div className="content">
        <Route path="/user/orders">
          <UserOrders />
        </Route>
        <Route path="/user/scores">
          <UserScore />
        </Route>
      </div>
    </div>
  );
}

export default User;
