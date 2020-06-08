import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Divider, Header } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import StockChart from "../StockChart/StockChartComponent";

import styles from '../../globals/Global.component.style';

export default function MarketOverview() {
  const [dowData, setDowData] = useState([]);
  const [nasdqaData, setNasdqaData] = useState([]);
  const [sp500Data, setSp500Data] = useState([]);

  const initialLoading = async () => {
    try {
      const dowRes = await axios.get(
        `https://sandbox.iexapis.com/stable/stock/DIA/chart?token=Tsk_9b260400520a4d23abfe1ef6cb0d3feb`
      );
      const nasdqaRes = await axios.get(
        `https://sandbox.iexapis.com/stable/stock/qqq/chart?token=Tsk_9b260400520a4d23abfe1ef6cb0d3feb`
      );

      const sp500Res = await axios.get(
        `https://sandbox.iexapis.com/stable/stock/spy/chart?token=Tsk_9b260400520a4d23abfe1ef6cb0d3feb`
      );
      console.log('dowRes:', dowRes);
      console.log('nasdqaRes:', nasdqaRes);
      console.log('sp500Res:', sp500Res);

      setDowData(dowRes.data);
      setNasdqaData(nasdqaRes.data);
      setSp500Data(sp500Res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initialLoading();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>

        <Card>
        <View style={styles.user}>
          <Text>DOW JONES INDEX (DIA)</Text>
          {dowData.length > 0 && (
            <StockChart name="DOW JONES INDEX" data={dowData} />
          )}
          <Divider style={{ backgroundColor: "gray", height: 0.5 }} />

          <Text>NASDAQ INDEX (QQQ)</Text>
          {nasdqaData.length > 0 && (
            <StockChart name="NASDAQ INDEX" data={nasdqaData} />
          )}
          <Divider style={{ backgroundColor: "gray", height: 0.5 }} />
          
          <Text>S&P 500 INDEX (SPY)</Text>
          {sp500Data.length > 0 && (
            <StockChart name="S&P 500 INDEX" data={sp500Data} />
          )}
        </View>
        </Card>
        <View style={styles.separator} />
      </View>
    </ScrollView>
  );
}