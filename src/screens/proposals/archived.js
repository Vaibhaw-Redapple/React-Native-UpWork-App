import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from '../../constants/theme'

const Archived = () => {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Archived proposals (0)</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Archived interviews (0)</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
      padding: 15,
      marginBottom: 5,
      backgroundColor: theme.colors.white
    },
    titleText: {
      fontSize: 20,
    }
})

export default Archived;
