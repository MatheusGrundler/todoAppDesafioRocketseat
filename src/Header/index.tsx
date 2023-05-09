import { Image, View } from 'react-native';

import { styles } from './styles';
const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
    </View>
  );
};

export default Header;
