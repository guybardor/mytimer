import React, { useState } from "react";
import {
  Button, StyleSheet, Text, useColorScheme, View, Dimensions, TextInput,Image,
  TouchableOpacity,Modal
}from "react-native";

const T = 'Error';

const error = () => {
    <View style={styles.container}>
      <View>
        <Text>
          <T/>
        </Text>
      </View>
    </View>

}

export  default  Error;
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
});
