import React, { Component } from 'react'
import './index.scss'
// redux
import { connect } from 'react-redux'
import { getData,changeData } from '../../redux/actions/login'
// redux-bindActionCreators
import { bindActionCreators } from 'redux';


class Login extends Component {

  componentDidMount() {
    // 获取原始的数据: 发送action,经过reducers派发,改变state
    // this.props.getData("我是原始信息，啦啦啦～")
    this.props.getData("我是原始信息，啦啦啦～")
    // 针对使用bindActionCreators的调用方式
    // this.props.actions.getData()
  };

  handleChange() {
    // 获取改变的数据: 发送action,经过reducers派发,改变state
    this.props.changeData('123456')
    // 针对使用bindActionCreators的调用方式
    // this.props.actions.changeData('123456')
  };

  gotoHome() {
      this.props.history.push('/home')
  };

  render() {
    return (
        <div className="P-login">
          <h1>Login page</h1>
          <p>login: myData = {this.props.data.message}</p>
          <button onClick={() => this.handleChange()}>更改login的myData</button>
          <button onClick={this.gotoHome.bind(this)}>跳转Home页</button>
        </div>
    )
  };

}

// 把store中的数据映射到组件的props
const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = {
  getData : getData,
  changeData: changeData,
}

// 把store的Dispatch映射到组件的props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getData: val => dispatch(getData(val)),
//     changeData: val => dispatch(changeData(val)),
//   }
// };

// 把store的Dispatch映射到组件的props
// bindActionCreators：将dispatch直接和action creator结合好，然后发出去的这一部分操作给封装成一个函数
// function mapDispatchToProps (dispatch) {
//   return {
//     actions: bindActionCreators({
//       getData,
//       changeData
//     }, dispatch),
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Login)

