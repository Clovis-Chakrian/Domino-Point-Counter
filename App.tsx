import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';

const App = () => {
  const [pointPlayer1, setPointPlayer1] = useState(0);
  const [matchPlayer1, setMatchPlayer1] = useState(0);
  const [pointPlayer2, setPointPlayer2] = useState(0);
  const [matchPlayer2, setMatchPlayer2] = useState(0);

  useEffect(() => {
    if (pointPlayer1 == 6) {
      setMatchPlayer1(matchPlayer1 + 1);
      setPointPlayer1(0);
    }
  }, [pointPlayer1]);

  useEffect(() => {
    if (pointPlayer2 == 6) {
      setMatchPlayer2(matchPlayer2 + 1);
      setPointPlayer2(0);
    }
  }, [pointPlayer2]);

  return (
    <View style={styles.container} >

      <StatusBar hidden />
      <View style={{ height: Dimensions.get('window').height / 2 }}>
        <TouchableOpacity style={styles.addPointsButtons} onPress={() => {setPointPlayer1(pointPlayer1 + 1)}}>
          <Text style={styles.textButtons}>Adicionar Ponto</Text>
        </TouchableOpacity>
        <Text style={styles.bar}>Partidas: {matchPlayer1}</Text>
        <View style={styles.player}>
          <Text style={styles.point}>Player 1: {pointPlayer1}</Text>
        </View>
      </View>

      <View >
        <TouchableOpacity style={styles.addPointsButtons} onPress={() => {setPointPlayer2(pointPlayer2 + 1)}}>
          <Text style={styles.textButtons}>Adicionar Ponto</Text>
        </TouchableOpacity>
        <Text style={styles.bar}>Partidas: {matchPlayer2}</Text>
        <View style={styles.player}>
          <Text style={styles.point}>Player 2: {pointPlayer2}</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10
  },

  player: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 240
  },

  addPointsButtons: {
    width: Dimensions.get('window').width - 10,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#00B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },

  point: {
    fontSize: 18,
  },

  bar: {
    fontSize: 14
  },

  textButtons: {
    color: '#FFF',
    fontSize: 16
  }
});


export default App;