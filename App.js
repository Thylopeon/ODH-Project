import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  // State banaya counter ke liye, default value 0
  const [count, setCount] = useState(0);

  // Plus button ke liye function
  const increase = () => setCount(count + 1);
  
  // Minus button ke liye function (0 se neeche nahi jayega)
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.counterText}>{count}</Text>
      
      <View style={styles.buttonRow}>
        
        <TouchableOpacity style={[styles.button, styles.decrementBtn]} onPress={decrease}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={increase}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  counterText: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 30, 
  },
  button: {
    backgroundColor: '#007bff',
    width: 70,
    height: 70,
    borderRadius: 35, 
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, 
  },
  decrementBtn: {
    backgroundColor: '#dc3545', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  }
});