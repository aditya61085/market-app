import React, { useState, useContext } from "react";
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { SearchedStockContext } from '../contexts/SearchedStockContext';
import styles from '../globals/Global.component.style';

const SearchedStock = () => {
  const {searchedStock, dispatch} = useContext(SearchedStockContext);
  console.log('In searchedStock:',searchedStock);

  const updateViewOfSearchedStock = () => {
    console.log('In updateViewOfSearchedStock:');

  };
  
  const updateSymbol = () => {
    let newSymbol = {symbol: 'TLSA'};
    searchedStock.updateSymbol(newSymbol);
  };
  

  return (
    <View>
      <Text style={styles.basicContent}>Symbol: {searchedStock.symbol}</Text>
    </View>
  );
}


export default SearchedStock;