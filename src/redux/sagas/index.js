import { all,fork,takeEvery } from 'redux-saga/effects';
import login from './login'

export default function* rootSaga() {
  // 处理单个异步方法时
  // while(true){
  //   yield take('set_data');
  //   yield fork(login);
  // }
  // 下面的写法与上面的写法上等效
  // yield takeEvery("set_data", login)

  // 处理多个异步方法时
  yield all([
      login()
  ]);
}



