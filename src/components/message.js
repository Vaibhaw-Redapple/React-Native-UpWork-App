import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

// import theme
import * as theme from '../constants/theme'

const Message = ({item}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Text style={styles.imgText}>{item.nickname}</Text>
        </View>

        <View style={styles.textContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
            </View>
            <Text style={styles.subTitleText}>{item.subject}</Text>
            <Text numberOfLines={1} style={styles.timeText}>{item.message}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgContainer: {
        padding: 20,
        borderRadius: 35,
        backgroundColor: theme.colors.lightGray
    },
    imgText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textContainer: {
        flex: 1,
        marginLeft: 5
    },
    headerContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameText: {
        fontSize: 15,
        fontWeight: '700'
    },
    timeText: {
        fontSize: 13,
        color: theme.colors.gray
    },
    subTitleText: {
        fontSize: 15,
    }
})

export default Message;
