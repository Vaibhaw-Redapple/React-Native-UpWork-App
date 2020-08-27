import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from '../constants/theme'

const Alerts = () => {
  return (
    <View style={styles.container}>
        <Icon name="bell" color={theme.colors.green} size={80} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>You have no alerts</Text>
          <Text style={styles.text}>at thistime</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white
    },
    textContainer: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 22,
      fontWeight: 'bold',
      color: theme.colors.gray
    }
});

export default Alerts;
