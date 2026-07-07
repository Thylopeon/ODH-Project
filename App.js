import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  // 10 movies ka array
  const movies = [
    { id: '1', title: 'Inception', year: '2010' },
    { id: '2', title: 'Interstellar', year: '2014' },
    { id: '3', title: 'The Dark Knight', year: '2008' },
    { id: '4', title: 'Matrix', year: '1999' },
    { id: '5', title: 'Avatar', year: '2009' },
    { id: '6', title: 'Avengers: Endgame', year: '2019' },
    { id: '7', title: 'Gladiator', year: '2000' },
    { id: '8', title: 'Titanic', year: '1997' },
    { id: '9', title: 'Joker', year: '2019' },
    { id: '10', title: 'Parasite', year: '2019' },
  ];

  // Har ek row ko kaise dikhana hai uska design
  const renderMovie = ({ item }) => (
    <View style={styles.movieCard}>
      <Text style={styles.movieTitle}>{item.title}</Text>
      <Text style={styles.movieYear}>{item.year}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Favorite Movies</Text>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  movieCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3, // Shadow for Android
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  movieYear: {
    fontSize: 16,
    color: '#666',
  },
});