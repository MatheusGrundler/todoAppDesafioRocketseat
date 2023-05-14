import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type ItemProps = {
  finished: boolean;
  content: string;
  id: string;
};

export type TodoListItemProps = {
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
} & ItemProps;

const TodoListItem = ({
  finished,
  content,
  id,
  onCheck,
  onDelete,
}: TodoListItemProps) => {
  return (
    <View style={styles.ItemWrapper}>
      {finished ? (
        <TouchableOpacity onPress={() => onCheck(id)}>
          <MaterialCommunityIcons
            name='checkbox-marked-circle'
            size={30}
            color='#5E60CE'
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => onCheck(id)}>
          <MaterialCommunityIcons
            name='checkbox-blank-circle-outline'
            size={30}
            color='#4EA8DE'
          />
        </TouchableOpacity>
      )}

      <Text
        style={
          finished ? styles.ItemContentTextFinished : styles.ItemContentText
        }
      >
        {content}
      </Text>
      <TouchableOpacity onPress={() => onDelete(id)}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          size={30}
          color='#808080'
        />
      </TouchableOpacity>
    </View>
  );
};

export default TodoListItem;
