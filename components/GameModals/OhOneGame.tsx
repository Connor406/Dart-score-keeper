import React, { useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet, Dimensions, Alert } from 'react-native';
import { MainRed } from '../../ColorVars';
import GlobalState from '../GlobalComponents/GlobalState';
import { createTwoButtonAlert } from '../GlobalComponents';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const OhOneGame = () => {
  const [ state, setState ] = useContext(GlobalState);
  const playerIndex = state.index;

  const playerList = [
    state.player1,
    state.player2,
    state.player3,
    state.player4
  ];

  const playerScoreList = [
    state.player1Score,
    state.player2Score,
    state.player3Score,
    state.player4Score
  ];

  const incrementPlayer = () => {
    if (playerIndex < state.playerCount -1){
      setState({...state, index: state.index + 1})
    } else {
      setState({...state, index: 0})
    }
  }

  const deductScore = (score: number) => {
    // Calls Alert if won/busted
    if (playerScoreList[playerIndex] - score === 0) {
      return createTwoButtonAlert(playerList[playerIndex], 'Won');
    } else if (playerScoreList[playerIndex] - score < 0) {
      return createTwoButtonAlert(playerList[playerIndex], 'Busted');
    };
    // Handles updating score in state / display
    if (playerIndex === 0 ) {
      setState({...state, player1Score: state.player1Score - score });
    } else if (playerIndex === 1) {
      setState({...state, player2Score: state.player2Score - score });
    } else if (playerIndex === 2) {
      setState({...state, player3Score: state.player3Score - score });
    } else if (playerIndex === 3) {
      setState({...state, player4Score: state.player4Score - score });
    } else {
      console.log('Error on deductScore')
    }
  };

  const undoScore = (score: number) => {
    if (playerIndex === 0 ) {
      setState({...state, player1Score: state.player1Score + score });
    } else if (playerIndex === 1) {
      setState({...state, player2Score: state.player2Score + score });
    } else if (playerIndex === 2) {
      setState({...state, player3Score: state.player3Score + score });
    } else if (playerIndex === 3) {
      setState({...state, player4Score: state.player4Score + score });
    } else {
      console.log('Error on undoScore')
    }
  }

  const selected = (player: any) => {
    if (playerIndex === playerList.indexOf(player)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={styles.page}>
      <View >
          <View style={styles.mainContainer} >
            <View  style={styles.container} >
              <Text style={selected(playerList[0]) ? styles.selectedPlayer : styles.players} >{state.player1}</Text>
              <Text style={selected(playerList[0]) ? styles.hideScore : styles.secondaryScores} >{state.player1Score}</Text>
            </View>
          </View>
          <View style={[styles.mainContainer, {display: state.playerCount < 2 ? 'none' : 'flex'}]} >
            <View  style={styles.container} >
                <Text style={selected(playerList[1]) ? styles.selectedPlayer : styles.players} >{state.player2}</Text>
                <Text style={selected(playerList[1]) ? styles.hideScore : styles.secondaryScores} >{state.player2Score}</Text>
            </View>
          </View>
          <View style={[styles.mainContainer, {display: state.playerCount < 3 ? 'none' : 'flex'}]} >
            <View  style={styles.container} >
                <Text style={selected(playerList[2]) ? styles.selectedPlayer : styles.players} >{state.player3}</Text>
                <Text style={selected(playerList[2]) ? styles.hideScore : styles.secondaryScores} >{state.player3Score}</Text>
            </View>
          </View>
          <View style={[styles.mainContainer, {display: state.playerCount < 4 ? 'none' : 'flex'}]} >
            <View  style={styles.container} >
                <Text style={selected(playerList[3]) ? styles.selectedPlayer : styles.players} >{state.player4}</Text>
                <Text style={selected(playerList[3]) ? styles.hideScore : styles.secondaryScores} >{state.player4Score}</Text>
            </View>
          </View>
          

        <View style={styles.scoreContainer} >
          <Text style={styles.mainScoreDisplay} >{playerScoreList[playerIndex]}</Text>
        </View>
      </View>
      <View style={styles.inputContainer} >
        <TextInput style={styles.scoreInput} onSubmitEditing={() => deductScore(state.score)} keyboardType='number-pad' returnKeyType='done' clearButtonMode='always' onChangeText={value => setState({...state, score: Number(value)})} placeholder="Score" ></TextInput>
        <View style={styles.buttons} >
          <TouchableOpacity onPress={() => undoScore(state.score)} >
            <Text style={styles.button} >Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => incrementPlayer() }  >
            <Text style={styles.button} >Next Player</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flexDirection: 'row',
    overflow: 'hidden'
  },
  button: {
    backgroundColor: MainRed,
    color: 'white',
    textAlign: 'center',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 18,
    margin: 5,
    width: windowWidth * .3,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: 10,
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
  scoreContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 30,
    top: 30,
  },
  mainScoreDisplay: {
    fontSize: 80,
  },
  secondaryScores: {
    color: 'blue',
    fontSize: 20,
    marginHorizontal: 10,
  },
  hideScore: {
    display: 'none',
  },
  scoreInput: {
    fontSize: 30,
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 24,
    width: windowWidth * .5,
  }
})

export default OhOneGame;