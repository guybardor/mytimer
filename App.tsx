/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import {
  Button, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput,Image,
  TouchableOpacity,
} from "react-native";

const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;


const BodyText = 'להתחברות לאפליקציה ' +
  'הטיימר שלכם בבקשה הזינו את המייל והנידד שלכם';

const Help_Text = 'צריך עזרה ';

const Link_Text = 'יצררת קשר עם תמיכה'


const App = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Image style={Styles.tinyLogo}
               source={require('./images/timerlog.png')} />
        <Text style={Styles.text}>My-Timer</Text>
      </View>
      <View style={Styles.button_container}>
        <Text style={Styles.button_container_text}>{BodyText}</Text>
      </View>

      <View style={Styles.body}>
        <TextInput style={Styles.input} placeholder={"הקלד איימיל"} value={email}
                   onChangeText={(text) => setEmail(text)}/>
        <TextInput style={Styles.input} placeholder={"הקלד טלפון"}
                   value={phone} onChangeText={(text) => setPhone(text)}/>
      </View>


      <View style={Styles.footer}>
            <TouchableOpacity title={"<-"} style={Styles.start}/>
            <View style={Styles.text_input}>
              <Text style={Styles.help}>{Help_Text}</Text>
              <Text style={Styles.link_help}>{Link_Text}</Text>
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
    marginTop: 100,
    width: '100%',
    height: window_height * 0.2,
    borderWidth: 2,
    borderColor: '#FFFF00',
  },

  start: {
    display: 'flex',
    backgroundColor: '#800080',
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
  },

  text_input: {
    display: 'flex',
    height: 70,
    width: 100,
    flexDirection: 'column',
    marginLeft: 100,
  },

  help: {
    display: 'flex',
    fontSize: 15,
    textAlign: 'right',
    alignSelf: 'flex-end',
  },

  link_help: {
      display: 'flex',
      color: '#0000FF',
      alignSelf: 'flex-end',
  }

});

export default App;
