import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from '../../constants/theme'

const Active = () => {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Offers (0)</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Invitations to interview (0)</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Activer proposals (0)</Text>
        </View>

        <View style={[styles.textContainer, {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
          <Text style={styles.titleText}>Submitted proposals (0)</Text>
          <Icon name="chevron-down" color={theme.colors.green} size={30} />
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

export default Active;
