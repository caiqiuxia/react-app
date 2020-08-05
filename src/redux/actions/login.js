// actions 就是 View 发出的通知，表示 state 应该要发生变化了。

// redux一般的actions
// export function getData (val) {
//   return (dispatch) => {
//     dispatch({
//       type: 'set_data',
//       result: val,
//     })
//   }
// }
//
// export function changeData(val) {
//   return (dispatch) => {
//     dispatch({
//       type: 'set_data',
//       result: val
//     })
//   }
// }


// redux-saga的actions一定是常量
export const getData = val =>({
  type: 'set_data',
  data: val,
})

export const changeData = val =>({
  type: 'set_data',
  data: val,
})
