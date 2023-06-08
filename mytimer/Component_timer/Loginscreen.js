import React, { useState } from "react";
import {
  Button, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput,Image,
  TouchableOpacity,Modal
} from "react-native";


  const Loginscreen = ({setIsAutoraized}) =>  {
  const [isloding,setIsLoading] = usestate(false);
  const [text,onchangeText] = React.useState('');
  const [number,onchangenumber] = React.useState('');

const onPressLogin = () => {
    setIsLoading(true); /* hint Bonus point 2  */
  setTimeout(() => {
    setIsAuthorized(true);
    setIsLoading(false); /* hint Bonus point 2  */
  }, 3000);


return (
    <Modal animationType="slide" transparent={false} visible={isLoading}>
        <ActivityIndicator size="large" color="#00ff00"/>
      <View style={styles.centerdview}></View>
    </Modal>

)};


const styles = ({
  centerdview:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default Loginscreen;
