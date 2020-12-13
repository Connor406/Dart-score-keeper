import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GlobalState from './components/GlobalComponents/GlobalState';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [state, setState] = useState({
    player1: 'Penguin',
    player2: 'Walrus',
    player3: 'Zebra',
    player4: 'T-Rex',
    player1Score: 1,
    player2Score: 2,
    player3Score: 3,
    player4Score: 4,
    playerCount: 1,
    gameType: 101,
  });

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <GlobalState.Provider value={[ state, setState ]} >
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </GlobalState.Provider>
      </SafeAreaProvider>
    );
  }
}
