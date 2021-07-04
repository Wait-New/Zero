/*
* 入口函数
* */
// 1. 导入react依赖
import { React} from 'react'
import ReactDOM from 'react-dom'

// 2. 按需导入组件
import { Button } from "antd-mobile";

ReactDOM.render(<Button type="primary">Text</Button>,document.getElementById('root'))
