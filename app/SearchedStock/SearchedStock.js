import React, { useState, useContext } from "react";
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import { SearchedStockContext } from '../contexts/SearchedStockContext';

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
      <Text>Symbol: {searchedStock.symbol}
      </Text>
      <Button onPress={updateSymbol} title="Update Stock" />
      </View>
  );
}


export default SearchedStock;