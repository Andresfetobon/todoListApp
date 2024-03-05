import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por realizar</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textIpunt} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#6f6f6f',
    marginTop: 25,
  },
  text: {
    fontSize: 16,
    color: '#6f6f6f',
  },
  whiteText: {
    fontSize: 16,
    color: '#fff',
  },
  textIpunt: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    width: Dimensions.get('screen').width * 0.2,
    backgroundColor: '#5897fb',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
});
