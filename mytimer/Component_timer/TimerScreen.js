
import React, { useState } from "react";
import {
  Button, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput,Image,
  TouchableOpacity,Modal
} from "react-native";

const [isOn, setIsOn] = useState(true);
const [counter, setCounter] = useState(0);

const [isOn2, setIsOn2] = useState(true);
const [counter2, setCounter2] = useState(0);


useEffect(()=>{
      const timer = setTimeout(() =>
      {
        if (isOnn) setCounter(prestate => prestate + 1);
      }, 100);
      return () => clearTimeout(timer);
},[counter,isOnn]);

useEffect(()=> {
    const timer = setTimeout(() => {
      if (isOnn2) setCounter2(prestate => prestate + 1);
    }, 1000);
    return () => clearTimeout(timer);
  },[counter2,isOnn2]);

    return (
            <view style={styles.timerDispaly}>
              <Text style={styles.timertext}>{counter}</Text>
            </view>
    </>);


export  default  TimerSCreen;

const styles = ({
  timerDispaly:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
  },
  timertext:{
      fontsize:30,
      color:'#ffa500',
  },
});
