import React from 'react';
import { Alert } from 'react-native';

const createTwoButtonAlert = (playerName: string, outcome: string) =>
    Alert.alert(
      `${playerName} ${outcome}!`,
      outcome === 'Busted' ? "Press OK to keep playing" : 'Alexa, play "We Are The Champions"',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: outcome === 'Busted' ? "OK" : "End Game", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );


export { createTwoButtonAlert };