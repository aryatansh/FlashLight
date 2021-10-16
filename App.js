import Torch from 'react-native-torch';
import React, {useState, useEffect} from 'react';
import {Button, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
const App: () => Node = () => {
  const [isOn, setIsOn] = useState(false);
  const [torchButtonText, setTorchButtonText] = useState('ON');
  useEffect(() => {
    Torch.switchState(isOn);
    if (isOn) {
      setTorchButtonText('OFF');
    } else {
      setTorchButtonText('ON');
    }
  });
  const switchState = () => {
    setIsOn(!isOn);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={switchState} style={styles.button}>
        <Text style={isOn ? styles.headerTextTrue : styles.headerTextFalse}>
          {torchButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextFalse: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green',
  },
  headerTextTrue: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
  button: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    borderRadius: 100,
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 10,
  },
});

export default App;
