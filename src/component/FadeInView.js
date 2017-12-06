// FadeInView.js
import React, { Component } from 'react';
import {
  Animated,
  Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');  

export default class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
      width: new Animated.Value(0),      
    };
  }
  componentDidMount() {
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.fadeAnim,                      // 动画中的变量值
      {
        toValue: 1,                             // 透明度最终变为1，即完全不透明
        duration: 3000,
      }
    ).start();                                  // 开始执行动画
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.width,                      // 动画中的变量值
      {
        toValue: 250,                             // 透明度最终变为1，即完全不透明
        duration: 3000,
      }
    ).start();      
  }
  render() {
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{
          width:'100%',
          height:50,
          zIndex:999,
          //display:'flex',
          backgroundColor: 'powderblue',
          opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
          //width:  this.state.width
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}