import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Mine = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Mine</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#333'
  },
});

export default Mine;
