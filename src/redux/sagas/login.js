import { all,fork,put,takeEvery,call } from 'redux-saga/effects'

// saga处理的一定是异步操作
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// 处理单一操作
// export default  function* changeDataAsync() {
//   // 延迟 1s 在执行 + 1操作
//   yield call(delay, 1000);
//   yield put({ type: 'set_data',data: '我是异步数据'});
// }

// 处理多个操作
function* getDataAsync (val) {
  yield call(delay, 2000);
  yield put({ type: 'set_data',data: '我是异步数据'})
}

function* changeDataAsync (val) {
  yield call(delay, 2000);
  yield put({ type: 'set_data',data: '我是异步数据'})
}

export function* setData () {
  yield takeEvery('set_data',getDataAsync);
  yield takeEvery('set_data',changeDataAsync)
}

export default function* loginSaga(){
  yield all([
    fork(setData),
  ])
}

