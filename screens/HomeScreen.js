import * as WebBrowser from 'expo-web-browser';
import React, { useState, useContext } from "react";
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { MonoText } from '../components/StyledText';
// import getSummaryData from '../assets/jsons/get-summary.json';

import { MaterialIcons } from '@expo/vector-icons'; 

import { SearchedStockContext } from '../app/contexts/SearchedStockContext';
import SearchedStock from '../app/SearchedStock/SearchedStock';

import styles from '../app/Global/Global.component.style';

export default function HomeScreen() {
  const {searchedStock} = useContext(SearchedStockContext);
  console.log('In HomeScreen: searchedStock:', searchedStock);

  const updateSymbol = () => {
    let newSymbol = {symbol: 'TLSA'};
    searchedStock.updateSymbol(newSymbol);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        <View>
          <Text style={styles.basicContent}>Click an Icon to search a symbol</Text>
          <MaterialIcons name="keyboard-voice" size={24} color="black" onPress={updateSymbol} style={styles.basicContent} />
          <SearchedStock></SearchedStock>
        </View> 

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

