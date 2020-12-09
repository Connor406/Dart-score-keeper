import React from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import window from '../../constants/Layout';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

const PlayGame: React.FC<Props> = ({ 
  isOpen,
  setIsOpen,
 }) => {

  return (
    <Modal visible={isOpen} onRequestClose={() => setIsOpen(false)}>
      <View style={{height: 18}} />
      <TouchableOpacity style={styles.close} onPress={() => setIsOpen(false)} >
        <FontAwesomeIcon icon={faWindowClose} size={36} />
      </TouchableOpacity>
      <View style={styles.test}>
        <Text style={{color: 'green'}} >Modal is open!</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  test: {
    width: window.window.width,
    height: window.window.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    alignSelf: 'flex-end',
  }
})

export default PlayGame;