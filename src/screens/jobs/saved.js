import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from '../../constants/theme'

const Saved = () => {
  return (
    <View style={styles.container}>
        <Icon name="heart" color={theme.colors.green} size={80} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Keep track of jobs you're</Text>
          <Text style={styles.titleText}>interested in. Select the heart icon</Text>
          <Text style={styles.titleText}>on a job post to save it for later.</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Once a job is closed, it will automatically be</Text>
          <Text style={styles.text}>removed from this saved list.</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
      fontSize: 20,
      fontWeight: '900'
    },
    textContainer: {
      marginTop: 10,
      alignItems: 'center',
    },
    titleContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    text: {
      fontSize: 15,
      fontWeight: '400'
    }
})

export default Saved;
