import React, { Component } from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Platform, Text, Dimensions } from "react-native";
// import Echarts from "native-echarts";

import {
  LineChart
} from "react-native-chart-kit";

const StockChart = ({ data, name }) => {
  const [chartValue, setChartValue] = useState([]);

  let stockData = data.slice(-30);
  let dates = [];
  let values = [];
  let labels = [];
  
  if (data) {
    stockData.map((data) => dates.push(data["label"]));
    stockData.map((item) =>
      // values.push([item["open"], item["close"], item["low"], item["high"]])
      values.push(item["close"])
      // labels.push(item.labels);
    );
  }
  const onDataPointClick = (value, dataset, getColor) => {
    console.log('value, dataset, getColor:', value, dataset, getColor);
    setChartValue(stockData[value.index].close + ' as of '+ stockData[value.index].label);
  };
  // console.log('stockData:', stockData);

  let count = -1;
  const formatXLabel = (val, data) => {
    return (count++ % 5 === 0)? val : ''; 
  };

  return (
    <View style={styles.container}>
      <Text>{chartValue}</Text>
      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: values
            }
          ]
        }}
        width={Dimensions.get("window").width - 110} // from react-native
        height={200}
        yAxisLabel="$"
        yAxisSuffix=""
        onDataPointClick={onDataPointClick}
        formatXLabel={formatXLabel}
        yAxisInterval={10} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "green",
          backgroundGradientFrom: "#21CE99",
          backgroundGradientTo: "yellow",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: {
    height: Platform.OS == "ios" ? 20 : 44,
    paddingTop: Platform.OS == "ios" ? 0 : 0,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default StockChart;