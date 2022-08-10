import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LargeButton } from '../components/core/InterfaceButton';

export const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmark screen!</Text>
      <LargeButton></LargeButton>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
