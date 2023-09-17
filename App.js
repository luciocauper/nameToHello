import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayedName, setDisplayedName] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const sayHi = () => {
    setDisplayedName(inputValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputValue}
      />
      <Button title="Diga oi" onPress={sayHi} />
      {displayedName ? (
        <Text style={styles.displayText}>Olá, {displayedName}!</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginBottom: 20,
    borderRadius: 10
  },
  displayText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:10
  },
});
