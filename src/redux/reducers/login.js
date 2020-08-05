// reducers是一个函数，reducers接受 action 和当前 state 作为参数，返回一个新的 state。

export function data(state = {payload: false}, action) {
  switch (action.type) {
    case 'set_data':
      return {
        payload: true,
        message: action.data
      }
    default:
      return state
  }
}
