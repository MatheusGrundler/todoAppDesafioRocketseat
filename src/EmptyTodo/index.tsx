import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';

const EmptyTodo = () => {
  return (
    <View style={styles.wrapper}>
      <MaterialCommunityIcons name='clipboard-text' size={56} color='#808080' />
      <Text style={styles.textPrimary}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textSecondary}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

export default EmptyTodo;
