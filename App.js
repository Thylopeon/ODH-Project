import React, { useState, useRef } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  Keyboard, ImageBackground, Image, Animated 
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [showMeme, setShowMeme] = useState(false);
  
  const popAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    if (name.trim() !== '') {
      // Yahan text change karke 'Welcome' kar diya
      setGreeting(`Welcome, ${name}! 👑\nKya haal hain?`);
      setShowMeme(true);
      Keyboard.dismiss(); 
      
      popAnim.setValue(0);
      Animated.spring(popAnim, {
        toValue: 1,
        friction: 4, 
        tension: 40,
        useNativeDriver: true,
      }).start();

    } else {
      setGreeting('');
      setShowMeme(false);
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?q=80&w=800&auto=format&fit=crop' }} 
      style={styles.background}
      imageStyle={{ opacity: 0.25 }} 
    >
      <View style={styles.container}>
        
        <View style={styles.glassCard}>
          <Text style={styles.title}>GREET ME 🚀</Text>

          <TextInput
            style={styles.input}
            placeholder="say your name..."
            placeholderTextColor="#555"
            value={name}
            onChangeText={setName} 
          />

          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handlePress}>
            <Text style={styles.buttonText}>HIT ME!</Text>
          </TouchableOpacity>
        </View>

        {showMeme && (
          <Animated.View style={[styles.memeContainer, { transform: [{ scale: popAnim }] }]}>
            
            <View style={styles.greetingBox}>
              {/* Naya robust GIF link jo pakka play hoga */}
              <Image
                source={{ uri: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' }}
                style={styles.memeGif}
              />
              <Text style={styles.greetingText}>{greeting}</Text>
            </View>

          </Animated.View>
        )}

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#a8e6cf', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  glassCard: {
    width: '100%',
    padding: 25,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.65)', 
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 25,
    color: '#111', 
    letterSpacing: 2,
  },
  input: {
    width: '100%',
    height: 55,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    marginBottom: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000', 
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  memeContainer: {
    width: '100%',
    alignItems: 'center',
  },
  greetingBox: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center', 
    elevation: 5,
  },
  memeGif: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15, 
  },
  greetingText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#2d3436',
    textAlign: 'center',
    lineHeight: 30, 
  }
});