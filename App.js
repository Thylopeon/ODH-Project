import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MjktMTM0LmpwZw.jpg' }} 
      style={styles.homeContainer}
    >
      <Text style={styles.title}>Task Master</Text>
      <TouchableOpacity style={styles.todoButton} onPress={() => navigation.navigate('Todo')}>
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>To-Do App Kholo</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

function TodoScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [history, setHistory] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, status: 'pending' }]);
      setTask('');
    }
  };

  const updateTask = (id, newStatus) => {
    const updatedTask = tasks.find(t => t.id === id);
    if (newStatus === 'done' || newStatus === 'cancelled') {
      setHistory([...history, { ...updatedTask, status: newStatus, time: new Date().toLocaleTimeString() }]);
      setTasks(tasks.filter(t => t.id !== id));
    } else {
      setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Text style={styles.header}>Task Manager</Text>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Naya task..." value={task} onChangeText={setTask} />
        <TouchableOpacity style={styles.addButton} onPress={addTask}><Text style={{color:'#fff'}}>Add</Text></TouchableOpacity>
      </View>

      <FlatList 
        data={tasks}
        ListEmptyComponent={<Text style={styles.emptyText}>No work pending</Text>}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskText}>{item.text} <Text style={{fontSize: 10}}>({item.status})</Text></Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => updateTask(item.id, 'done')}><Text style={styles.optBtn}>✅</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => updateTask(item.id, 'later')}><Text style={styles.optBtn}>⏳</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => updateTask(item.id, 'cancelled')}><Text style={styles.optBtn}>❌</Text></TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.subHeader}>History</Text>
      <FlatList 
        data={history} 
        renderItem={({ item }) => <Text style={styles.historyItem}>{item.text} - {item.status} ({item.time})</Text>}
      />
    </KeyboardAvoidingView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todo" component={TodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: '#f9f9f9' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  subHeader: { fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  inputContainer: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, padding: 10, borderRadius: 8, borderColor: '#ccc', backgroundColor: '#fff' },
  addButton: { marginLeft: 10, padding: 12, backgroundColor: '#4a90e2', borderRadius: 8, justifyContent: 'center' },
  todoButton: { padding: 20, backgroundColor: '#000', borderRadius: 15 },
  taskCard: { flexDirection: 'row', padding: 15, backgroundColor: '#fff', borderRadius: 10, marginBottom: 10, alignItems: 'center', elevation: 2 },
  taskText: { flex: 1, fontSize: 16 },
  optBtn: { fontSize: 20, marginLeft: 10 },
  emptyText: { textAlign: 'center', marginTop: 20, color: '#999', fontSize: 16 },
  historyItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', fontSize: 14, color: '#555' }
});