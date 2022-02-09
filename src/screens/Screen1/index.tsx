import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Screen1: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to screen 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Screen1);
