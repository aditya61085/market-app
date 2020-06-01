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


export default function HomeScreen() {
  

  //Counter example basic
  const [count, setCount ] = React.useState(0); 
  const onIncrement = (e) => {
    e.preventDefault();
    console.log('onIncrement link was clicked.');
    setCount(count+1); //cannot use count++ as its a statement. not a value.
  }  
  const onDecrement = () => {
    setCount(count-1); //cannot use count-- as its a statement. not a value.
  }
  const onReset = () => {
    setCount(0);
  }




  React.useEffect(() => {
    document.title = `${count} count`;
  }, [count]); // Only re-run the effect if count changes
  
  React.useEffect(() => {

    if (__DEV__) {
      // console.log(getSummaryData);
    } else {
      // fetch('./assets/jsons/get-summary.json', {
      fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?region=US&symbol=AAPL", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
          "x-rapidapi-key": "a1fc569458msh81e623441521b74p10defejsn1c6e1cdf8384"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    }



    // fetch("https://pomber.github.io/covid19/timeseries.json")
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('data["US"]:', data["US"]);
    //     data["US"].forEach(({ date, confirmed, recovered, deaths }) =>
    //       console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    //     );
    //   })
    //   .catch((error) => console.error(error));
    
    //Get authenticated user
    // var user = firebase.auth().currentUser;
    // console.log('user:', user);

    //Insert collection entry
    // var db = firebase.firestore();
    // db.collection("delete").add({
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
    
    //Read collection
    // db.collection("users").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id , '=>', doc.data()); //console.log(`${doc.id} => ${doc.data()}`);
    //   });
    // });
  }, []); // will trigger the callback only after the first render.
  
  React.useEffect(() => {
    console.log('Called everytime after render');
  }); // useEffect runs by default after every render of the component (thus causing an effect).



  const {searchedStock} = useContext(SearchedStockContext);
  console.log('In searchedStock:', searchedStock);
  const updateSymbol = () => {
    let newSymbol = {symbol: 'TLSA'};
    searchedStock.updateSymbol(newSymbol);
  };



  return (
    
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <View>
          <MaterialIcons name="keyboard-voice" size={24} color="black" onPress={updateSymbol} style={styles.searchSymbolIcon} />

          <SearchedStock></SearchedStock>
        </View> 

        <View style={{ padding: 10 }}>
          <Text style={styles.getStartedText}>Count is: {count}</Text>
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter count"
            onChangeText={text => setCount(Number(text))}
            value={String(count)}
          />
          <Button
            title="Increment"
            onPress={onIncrement}
            // onPress={() => Alert.alert('Simple Button pressed')}
          />
          <Button
            title="Decrement"
            onPress={onDecrement}
            // onPress={() => Alert.alert('Simple Button pressed')}
          />
          <Button
            title="Reset"
            onPress={onReset}
            // onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>


        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Hello, world!:</Text>

          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change any of the text, save the file, and your app will automatically reload.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  searchSymbolIcon: {
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
