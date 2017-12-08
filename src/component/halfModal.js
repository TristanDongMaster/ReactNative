/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  ScrollView
} from 'react-native';
import Modal from './Modal'

const {height} = Dimensions.get('window'); 
export default class HalfModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      bottom:new Animated.Value(0),
      timeoutFlag:this.props.time || 500,
      transform: new Animated.ValueXY({ x: 0,y: height/2}),
    };
    this.cache = {
      visible: this.props.visible,
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.visible != this.cache.visible ){
      this.cache.visible = nextProps.visible
      if(nextProps.visible){
        Animated.timing(this.state.transform, {
            toValue: {
                x : 0,
                y : 0
            },
            duration: this.state.timeoutFlag
        }).start();  
      } else{
        Animated.timing(this.state.transform, {
            toValue: {
                x : 0,
                y : height/2
            },
            duration: this.state.timeoutFlag
        }).start();
      }
    }
  }
  render(){
      return (
      <Modal
        visible={this.props.visible}
        onRequestClose={this.props.onRequestClose}
        time={this.props.time}
        >
        <Animated.View                            // 可动画化的视图组件
          style={{
            maxHeight: height/2,
            width:'100%',
            position:'relative',
            transform:this.state.transform.getTranslateTransform(),
            backgroundColor:'red',
          }}>
            {this.props.children}
        </Animated.View>
      </Modal>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height:50,
    borderBottomWidth: 1,
    borderColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#222',
    fontSize: 20,
  },
});