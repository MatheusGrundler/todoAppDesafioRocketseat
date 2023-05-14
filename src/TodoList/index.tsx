import {
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { View, FlatList, Text } from 'react-native';
import TodoListHeader from './Header';

import { styles } from './styles';
import TodoListItem, { ItemProps } from './ListItem';
import EmptyTodo from '../EmptyTodo';

export type TodoListProps = {
  todos: ItemProps[];
  setTodos: Dispatch<SetStateAction<ItemProps[]>>;
};

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const [finishedTodosCount, setFinishedTodosCount] = useState(0);

  useEffect(() => {
    const finishedCount = todos.filter((todo) => todo.finished);
    setFinishedTodosCount(finishedCount.length);
  }, [todos]);

  const handleFinishTodo = useCallback(
    (id: string) => {
      const resp = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, finished: todo.finished ? false : true };
        }
        return todo;
      });
      setTodos(resp);
    },
    [todos]
  );

  const handleDeleteTodo = useCallback((id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  }, []);
  return (
    <View style={styles.wrapper}>
      <TodoListHeader
        createdCount={todos.length}
        finishedCount={finishedTodosCount}
      />

      <FlatList
        scrollEnabled
        data={todos}
        renderItem={({ item }) => (
          <TodoListItem
            content={item.content}
            finished={item.finished}
            onDelete={handleDeleteTodo}
            onCheck={handleFinishTodo}
            id={item.id}
          />
        )}
        ListEmptyComponent={<EmptyTodo />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

export default TodoList;
