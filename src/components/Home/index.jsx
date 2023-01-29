import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";

import routes from "../../routes";

import "./index.css"

export default class Home extends Component {
  render() {
    return (

        <div className="home">
          <h1 className="names">进销存管理系统</h1>
          <div className="navigation">
            {/* 遍历路由
            NavLink只会改变https 
            要配合Routes和Route*/}
            {routes.map((route,index) => {
             
              return (
                <NavLink key={route.path} to={route.path} className="aname">
                  {route.title}
                </NavLink>
              );
            })}
          </div>

          <div>
          {/* Switch是5.几版本现在版本更新6.几改成Routes */}
            {/* <Routes>
              {
                routes.map((route) => {
                  return(
                    // Route之前componet="/home"不能用了因为之前React-router-dom版本是5.几
                    // 现在版本更新6.几 改成了element={<home />} 
                    <Route path={route.path} element={<route.component/>} key={route.path}></Route>
                  )
                })
              }

            </Routes> */}
          </div>
        </div>

    );
  }
}
