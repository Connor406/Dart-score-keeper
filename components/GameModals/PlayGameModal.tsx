import React, { useContext } from "react";
import { Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import window from '../../constants/Layout';
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import GlobalState from '../GlobalComponents/GlobalState';
import OhOneGame from './OhOneGame';
import { MainBrown } from "../../ColorVars";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

const PlayGame: React.FC<Props> = ({ 
  isOpen,
  setIsOpen,
 }) => {
  const [ state, setState ] = useContext(GlobalState);

  return (
    <Modal visible={isOpen} onRequestClose={() => setIsOpen(false)}>
      <View style={styles.page} >
        <TouchableOpacity style={styles.close} onPress={() => setIsOpen(false)} >
          <FontAwesomeIcon icon={faWindowClose} size={30} />
        </TouchableOpacity>
        <OhOneGame />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: MainBrown,
    width: window.window.width,
    height: window.window.height,
  },
  close: {
    alignSelf: 'flex-end',
    top: 25,
    padding: 10,
  }
})

export default PlayGame;