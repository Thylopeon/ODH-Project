import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    // ScrollView screen ko scrollable banata hai
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* View web ke <div> ki tarah kaam karta hai */}
      <View style={styles.card}>
        
        {/* Image tag URL se photo dikhane ke liye */}
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
          style={styles.profilePic} 
        />
        
        {/* Text tags web ke <p> ya <h1> ki tarah */}
        <Text style={styles.name}>Kushagra Sen</Text>
        <Text style={styles.bio}>Full-Stack Developer & QA Tester 🚀</Text>
        
        {/* TouchableOpacity mobile ka button hota hai jispe tap karne pe click feel aati hai */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

// Ye raha tera Flexbox aur Styling
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Pura screen cover karne ke liye
    backgroundColor: '#e9ecef',
    alignItems: 'center', // Horizontally center
    justifyContent: 'center', // Vertically center
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Android mein shadow dene ke liye
    width: '90%',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60, // Width ka aadha (60) karne se image ekdum round ho jati hai
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold', // Naam bold maanga tha
    marginBottom: 5,
    color: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});