import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const HomeDetail = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>HomeDetail</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#333'
  },
});

export default HomeDetail;
