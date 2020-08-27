import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from '../constants/theme'

const Header = (props) => {
    const title = props.title;
  return (
    <View style={styles.headerContainer}>
        <Image 
            style={{width: 45, height: 45}}
            source={require('../images/Blaiti.jpg')} />
        <Text style={styles.headerText}>{title}</Text>
        <Icon name="align-right" color={theme.colors.gray} size={25} />
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: theme.colors.white
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.gray
      }
})

export default Header;
