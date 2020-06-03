import * as WebBrowser from 'expo-web-browser';
import React, { useState, useContext } from "react";
import { Image, Platform, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { MonoText } from '../components/StyledText';
// import getSummaryData from '../assets/jsons/get-summary.json';
import { MaterialIcons } from '@expo/vector-icons'; 
import { SearchedStockContext } from '../app/contexts/SearchedStockContext';
import SearchedStock from '../app/SearchedStock/SearchedStock';
import styles from '../app/Global/Global.component.style';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit';





export default function HomeScreen() {
  const {searchedStock} = useContext(SearchedStockContext);
  console.log('In HomeScreen: searchedStock:', searchedStock);
 
  const [symbol, onChangeText] = React.useState('');

  async function updateSymbol () {
    console.log('In updateSymbol:');

    //Record audio
    // const recording = new Audio.Recording();
    // try {
    //   await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
    //   await recording.startAsync();
    //   // You are now recording!
    // } catch (error) {
    //   // An error occurred!
    // }

    let newSymbol = {symbol: 'TLSA'};
    searchedStock.updateSymbol(newSymbol);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        <View>
          <Text style={styles.basicContent}>Click an Icon to search a symbol</Text>
          <MaterialIcons name="keyboard-voice" size={24} color="black" onPress={updateSymbol} style={styles.basicContent} />

          <TextInput onChangeText={text => onChangeText(text)} value={symbol} placeholder="Enter symbol to search" />
          <SearchedStock></SearchedStock>
        </View> 

        <View>
        <Text>
          Bezier Line Chart
        </Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
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

