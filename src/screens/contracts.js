import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from '../constants/theme'

const Contracts = () => {
  return (
    <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Earning available:</Text>
            <Text style={styles.moneyText}>0.00$</Text>
          </View>

          <View style={styles.blockContainer}>
            <View style={styles.headerBlockContainer}>
              <Text style={styles.blocktitleText}>Active contracts</Text>
            </View>
            <View style={styles.bodyBlockContainer}>
              <Text style={styles.blockText}>Contracts you're actively working on will appear here.</Text>
              <Text style={styles.blockGreenText}>Start searching for new projects now!</Text>
            </View>
          </View>

          <View style={styles.blockContainer}>
            <View style={[styles.headerBlockContainer, {flexDirection:'row', alignItems: 'center'}]}>
              <Text style={styles.blocktitleText}>Direct contracts</Text>
              <View style={styles.badgeContainer}>
                <Text style={{color: theme.colors.lightBlue}}>New</Text>
              </View>
            </View>
            <View style={styles.bodyBlockContainer}>
              <Text style={styles.blockText}>Create simple cotracts with your non-Upwork clients, protected in escrow leading to quick payment.</Text>
              <Text style={styles.blockGreenText}>Create and view your Direct Contracts</Text>
            </View>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.colors.white
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    titleText: {
      fontSize: 17,
      fontWeight: 'bold',
      color: theme.colors.black
    },
    moneyText: {
      fontSize: 17,
      marginLeft: 10,
      fontWeight: 'bold',
      color: theme.colors.green
    },
    blockContainer: {
      marginTop: 15,
    },
    headerBlockContainer: {
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 1,
      elevation: 5,
      backgroundColor: theme.colors.silver
    },
    bodyBlockContainer: {
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity:  0.4,
      shadowRadius: 1,
      elevation: 5,
      backgroundColor: theme.colors.white
    },
    blocktitleText: {
      fontSize: 20,
      fontWeight: '500',
      color: theme.colors.black
    },
    blockText: {
      fontSize: 15,
      color: theme.colors.black
    },
    blockGreenText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: theme.colors.green
    },
    badgeContainer: {
      padding: 2, 
      marginLeft: 6, 
      borderWidth: 1, 
      borderRadius: 2,
      borderColor: theme.colors.lightBlue, 
    }
});

export default Contracts;
