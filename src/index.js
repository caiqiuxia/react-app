import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import './common/style/frame.scss'
// mock数据
import './mock/mock'
// bable的补充
// import "babel-polyfill"

const Apps = (
    <App />
)

ReactDOM.render(<App />,document.getElementById('root'))
