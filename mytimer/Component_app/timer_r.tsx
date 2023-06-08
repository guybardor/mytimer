/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useState } from "react";

import {
  Button, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput,Image,
  TouchableOpacity,
} from "react-native";

const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;
const reset = 'reset';
const pause = 'pause';



export const timer_r = () => {
  const initial_time = 60 ;
  const [ time , setTime] = useState({initial_time});

  return (
    <View style={Styles.container}>

      <View style={Styles.header}>
        <Image style={Styles.tinyLogo}
            source={require('../images/timerlog.png')}  />
        <Text style={Styles.text}>My-Timer </Text>
      </View>



      <View style={Styles.body}>

       </View>


  <View style={Styles.footer}>
    <View style={Styles.text_input}>
      <Text style={Styles.help}>{reset}</Text>
      <Text style={Styles.link_help}>{pause}</Text>
    </View>
  </View>

    </View>
);


};

const Styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    height: window_height * 0.1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },

  tinyLogo: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: 30,
    height: 30,


  },
  text: {
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontSize: 40,
    fontStyle: 'italic',
  },

  button_container: {
    marginTop: 30,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    fontStyle: 'italic',
    height: window_height * 0.23,

  },

  button_container_text: {
    fontSize: 25,
  },

  body: {
    width: '50%',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    padding: 15,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 100,
    width: '100%',
    height: window_height * 0.2,
    borderWidth: 3,
    borderColor: '#FFFF00',
  },

  start: {
    display: 'flex',
    position: 'relative',
    top: 20,
    left: 5,
    backgroundColor: '#800080',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
  },

  text_input: {
    display: 'flex',
    position: 'relative',
    top: 20,
    right: 5,
    height: 80,
    width: '50%',
    gap: 3,
    flexDirection: 'column',
    marginLeft: 100,
    borderColor: '#00FF00',
    borderWidth: 3,
  },

  help: {
    display: 'flex',
    fontSize: 25,
    textAlign: 'right',
    alignSelf: 'flex-end',
  },

  link_help: {
    display: 'flex',
    fontSize : 15,
    color: '#0000FF',
  }

});

export default App;
