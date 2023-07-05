import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from './Componentes/Card';
const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./imgs/central_perk_logo.jpeg')} style={styles.logo} />
      <Text style={styles.text}>¡Bienvenido al Café!</Text>
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    padding:'200px',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
