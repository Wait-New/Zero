/*
* 入口函数
* */
// 1. 导入react依赖
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 按需导入组件
// import { Button } from "antd-mobile";

// 3.导入路由依赖
import { HashRouter , Route, Switch } from 'react-router-dom'

// 4.路由导入
import Register from './containers/register/register'
import Main from './containers/main/main'
import Login from './containers/login/login'

ReactDOM.render(<HashRouter>
    <Switch>
        <Route path='/register' componet={ Register }>注册</Route>
        <Route path='/login' componet={ Login }>登录</Route>
        <Route path='/' componet={ Main }>主界面</Route>
    </Switch>
</HashRouter>,document.getElementById('root'))
