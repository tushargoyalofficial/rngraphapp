import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Screen2: React.FC = () => {
  return (
    <>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={styles.heading}>VisX Graph</Text>
        <View style={{ height: 540, paddingLeft: 12, paddingRight: 12 }}>
          <WebView
            originWhitelist={['*']}
            source={{uri: 'http://192.168.1.19:3000/area'}}
            style={{ marginTop: 20 }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  heading: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400'
  }
});

export default React.memo(Screen2);
