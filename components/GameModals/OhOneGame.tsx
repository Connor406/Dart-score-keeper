import React, { useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import GlobalState from '../GlobalComponents/GlobalState';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OhOneGame = () => {
  const [ state, setState ] = useContext(GlobalState);

  console.log(state)

  const selected = (index: number) => {
    if (index === 0) {
      return true;
    } else {
      return false;
    }
  };

  const initialScore = state.gameType;

  const deductScore = (score: number) => {

  }

  return (
    <View>
      <View >
        {[...Array(state.playerCount)].map((value: string, index: number) => ( 
          <View style={styles.mainContainer}>
            <View  key={index} style={styles.container} >
              <Text style={selected(index) ? styles.selectedPlayer : styles.players} >{state[Object.keys(state)[index]]}</Text>
          </View>
          <View style={styles.scoreContainer} >
            <Text style={selected(index) ? styles.scoreToDisplay : styles.hideScore} >{state[Object.keys(state)[index + 4]]}</Text>
          </View>
        </View>
        ))}
      </View>
      <TextInput style={styles.scoreInput} placeholder="Score" ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flexDirection: 'row',
    overflow: 'hidden'
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
    width: windowWidth * .6,
    height: windowHeight / 12,

  },
  players: {
     fontSize: windowHeight / 25,
  },
  selectedPlayer: {
    fontSize: windowHeight / 15,
    fontWeight: '700',
  },
  scoreToDisplay: {
    color: 'blue',
    fontSize: 50,
    height: windowHeight / 2,
    width: windowWidth * .4,
    overflow: 'visible',
  },
  scoreContainer: {
    //height: windowHeight / 12,
    width: windowWidth * .4,
    position: 'absolute',
    right: 0,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  hideScore: {
    opacity: 0,
    flexBasis: 0,
    backgroundColor: 'red',
    zIndex: 0,
  },
  scoreInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    fontSize: 30,
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 24,
  }
})

export default OhOneGame;