import { View } from 'react-native';

import Header from '../Header';
import Form from '../Form';

import { styles } from './styles';
const Home = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <Form />
    </View>
  );
};

export default Home;
