import { useState } from 'react';

import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

type FormDataProps = {
  todo: string;
};
const Form = () => {
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
  const onSubmit = (data: FormDataProps) => console.log(data);

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
          <Text style={styles.inputErrorMessage}>Campo obrigatóriorr</Text>
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
