import { Text, View } from 'react-native';
import { styles } from './styles';

export type TodoListHeaderProps = {
  createdCount?: number;
  finishedCount?: number;
};

const TodoListHeader = ({
  createdCount = 0,
  finishedCount = 0,
}: TodoListHeaderProps) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.countersWrapper}>
        <Text style={styles.createdCountText}>Criadas</Text>
        <Text style={styles.counterNumber}>{createdCount}</Text>
      </View>
      <View style={styles.countersWrapper}>
        <Text style={styles.finishedCountText}>Concluídas</Text>
        <Text style={styles.counterNumber}>{finishedCount}</Text>
      </View>
    </View>
  );
};

export default TodoListHeader;
