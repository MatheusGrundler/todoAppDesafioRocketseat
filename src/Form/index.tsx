import { useState } from 'react';
import uuid from 'react-native-uuid';

import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { ItemProps, TodoListItemProps } from '../TodoList/ListItem';

type FormDataProps = {
  todo: string;
};

type FormProps = {
  setTodos: (todo: ItemProps) => void;
};
const Form = ({ setTodos }: FormProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      todo: '',
    },
  });
  const onSubmit = (data: FormDataProps) => {
    const todo: ItemProps = {
      content: data.todo,
      id: uuid.v4() as string,
      finished: false,
    };
    setTodos(todo);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Adicione uma nova tarefa'
              onBlur={() => {
                setIsFocused(false);
                onBlur();
              }}
              onFocus={() => setIsFocused(true)}
              onChangeText={onChange}
              value={value}
              style={isFocused ? styles.focusedInput : styles.input}
              placeholderTextColor={'#808080'}
            />
          )}
          name='todo'
        />
        {errors.todo && (
          <Text style={styles.inputErrorMessage}>Campo obrigatório</Text>
        )}
      </View>

      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text>
          <AntDesign name='pluscircleo' size={24} color='#F2F2F2' />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
