// FadeInView.js
import React, { Component } from 'react';
import { Modal as ModalDefault, Animated, Text, TouchableHighlight, View,StyleSheet } from 'react-native';
//const {width, height} = Dimensions.get('window');  

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationType: 'fade',
      transparent: true,
      bgColor: new Animated.Value(0), 
      visible: this.props.visible,
      timeoutFlag:this.props.time||500
    };
  }
  // shouldComponentUpdate(nextProps, nextState){
   
  //   return true
  // }
  componentWillReceiveProps(nextProps, current) {
    if(nextProps.visible != this.state.visible ){
      if(nextProps.visible){
        this.setState({visible:true})
        Animated.timing(                            // 随时间变化而执行的动画类型
          this.state.bgColor,                      // 动画中的变量值
          {
            toValue: 1,                             // 透明度最终变为1，即完全不透明
            duration: this.state.timeoutFlag,
          }
        ).start();    
      } else{
        Animated.timing(                            // 随时间变化而执行的动画类型
          this.state.bgColor,                      // 动画中的变量值
          {
            toValue: 0,                             // 透明度最终变为1，即完全不透明
            duration: this.state.timeoutFlag,
          }
        ).start();  
        setTimeout(()=>{
          this.setState({visible:false})
        }, this.state.timeoutFlag)  
      }
    }
  }
  componentDidMount() {
    if(this.props.visible){
      Animated.timing(                            // 随时间变化而执行的动画类型
          this.state.bgColor,                      // 动画中的变量值
          {
            toValue: 1,                             // 透明度最终变为1，即完全不透明
            duration: this.state.timeoutFlag,
          }
        ).start();    
    }
  }
  render() {
    return (
      <ModalDefault
        animationType={this.state.animationType}
        transparent={this.state.transparent}
        visible={this.state.visible}
        onRequestClose={this.props.onRequestClose}>
          <Animated.View                            // 可动画化的视图组件
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              flexDirection:'row',
              backgroundColor: this.state.bgColor.interpolate({
                                  inputRange: [0,1],
                                  outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.4)']
                                }),
            }}
          >
            {this.props.children}
          </Animated.View>
      </ModalDefault>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection:'row'
    //padding: 20,
  },
  modalBackgroundStyle:{
    backgroundColor:  'rgba(0, 0, 0, 0.2)' ,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});