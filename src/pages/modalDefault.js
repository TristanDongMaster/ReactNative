import React, { Component } from 'react';
import { Text, TouchableHighlight, View,Button,ScrollView } from 'react-native';
import Modal from '../component/Modal'
import HalfModal from '../component/halfModal'

export default class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      halfModalVisible:false
    };
    this.setModalVisible = this.setModalVisible.bind(this)
    this.setHalfModalVisible = this.setHalfModalVisible.bind(this) 
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  setHalfModalVisible(visible) {
    this.setState({halfModalVisible: visible});
  }
  render() {
    return (
      <View style={{marginTop: 22}}>
        <Button title="Show Modal" onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </Button>
        <Button title="Show Modal" onPress={() => {
          this.setHalfModalVisible(true)
        }}>
          <Text>Show  Half Modal</Text>
        </Button>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
          >
            <Text>3424234 423423423</Text>
        </Modal>
        <HalfModal
          time={300}
          visible={this.state.halfModalVisible}
          onRequestClose={() => {this.setHalfModalVisible(false)}}
          >
          <ScrollView>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
            <Text>3424234 423423423</Text>
          </ScrollView>
          
        </HalfModal>
      </View>
    );
  }
}