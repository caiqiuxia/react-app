// store 就是保存数据的地方，可以看成一个容器。

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import * as reducers from './reducers/login'

// redux-thunk：中间件-异步处理
import thunkMiddleware from 'redux-thunk'

// redux-saga：中间件-异步处理
import createSagaMiddleware from 'redux-saga'
import Saga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default function redux() {

  // 整合所有reducers
  // combineReducers 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
  const reducer = combineReducers({
    ...reducers,
  })

  // 创建数据存储仓库
  const store = createStore(
      reducer,
      applyMiddleware(sagaMiddleware),  // 中间件-支持分派异步

      // compose(                   // 整合
      //     // applyMiddleware(         // 中间件
      //     //     thunkMiddleware,       // 支持分派异步
      //     // ),
      //     applyMiddleware(            // 中间件
      //         sagaMiddleware            // 支持分派异步
      //     ),
      // ),
  );

  // 把saga绑定到store
  sagaMiddleware.run(Saga)

  // 将仓库暴露出去
  return store

}



