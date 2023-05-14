import { View, Text } from 'react-native';

import Header from '../Header';
import Form from '../Form';
import TodoList from '../TodoList';

import { styles } from './styles';
import { useCallback, useState } from 'react';
import { ItemProps } from '../TodoList/ListItem';
const Home = () => {
  const [todos, setTodos] = useState<ItemProps[]>([]);

  const handleAddTodo = useCallback((todo: ItemProps) => {
    setTodos((prevState) => [...prevState, todo]);
  }, []);

  return (
    <View style={styles.wrapper}>
      <Header />
      <Form setTodos={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </View>
  );
};

export default Home;
