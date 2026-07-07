import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

const Stack = createNativeStackNavigator();

const movies = [
  { id: '1', title: 'Inception', year: '2010', desc: 'A mind-bending heist thriller.', image: 'https://wallpapercat.com/w/full/9/6/1/304867-1536x2732-iphone-hd-inception-background-image.jpg' },
  { id: '2', title: 'Interstellar', year: '2014', desc: 'A journey through a wormhole.', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800' },
  { id: '3', title: 'The Dark Knight', year: '2008', desc: 'Batman faces the Joker.', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800' },
];

function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>________</Text>
      </View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.movieCard} 
            onPress={() => navigation.navigate('Details', { movie: item })}
            activeOpacity={0.8}
          >
            <Text style={styles.movieTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

function DetailsScreen({ route }) {
  const { movie } = route.params;
  return (
    <ImageBackground 
      source={{ uri: movie.image }} 
      style={styles.detailBackground}
      resizeMode="cover"
    >
      <View style={styles.descBox}>
        <Text style={styles.detailTitle}>{movie.title}</Text>
        <Text style={styles.description}>{movie.desc}</Text>
      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, paddingHorizontal: 20, paddingTop: 60 },
  headerContainer: { marginBottom: 20, alignItems: 'center' },
  headerText: { fontSize: 30, fontWeight: '900', color: '#fff', letterSpacing: 2 },
  movieCard: { 
    padding: 25, 
    backgroundColor: 'rgba(255,255,255,0.95)', 
    marginVertical: 10, 
    borderRadius: 20, 
    alignItems: 'center',
    elevation: 5
  },
  movieTitle: { fontSize: 20, fontWeight: 'bold' },
  detailBackground: { flex: 1, justifyContent: 'center', padding: 20 },
  descBox: { padding: 30, backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 30, alignItems: 'center' },
  detailTitle: { fontSize: 32, fontWeight: '900', color: '#fff' },
  description: { fontSize: 16, color: '#fff', textAlign: 'center', marginTop: 10 }
});