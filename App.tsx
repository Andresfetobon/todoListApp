import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './Styles';
import RenderItem from './src/components/RenderItem';

export interface Task {
  title: string;
  done: boolean;
  date: Date;
}

export default function App() {
  const [text, setText] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    const tmp = [...tasks];
    const newTask = {
      title: text,
      done: false,
      date: new Date(),
    };
    tmp.push(newTask);
    setTasks(tmp);
    setText('');
  };

  const markDone = (task: Task) => {
    const tmp = [...tasks];
    const index = tmp.findIndex(el => el.title === task.title)
    const todo = tasks[index];
    todo.done = !todo.done;
    setTasks(tmp);
  };

  const deleteFunction = () => {};
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas por realizar</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Agrega una nueva tarea'
          onChangeText={(t: string) => setText(t)}
          value={text}
          style={styles.textIpunt}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              deleteFunction={deleteFunction}
              markDone={markDone}
            />
          )}
        />
      </View>
    </View>
  );
}
