import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from '../constants/theme'

const MyFeedBlock = ({item}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <View style={styles.iconsContainer}>
                <View style={styles.iconContainer}>
                    <Icon name="thumbs-down" color={theme.colors.green} size={20} />
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="heart" color={theme.colors.green} size={20} />
                </View>
            </View>
        </View>

        <View style={styles.subTitleContainer}>
            <Text style={[styles.subTitleText, {fontWeight: 'bold'}]}>{item.price}</Text>
            <Text style={styles.subTitleText}> - </Text>
            <Text style={styles.subTitleText}>{item.posted} ago</Text>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.budget}$</Text>
            <Text style={styles.subText}>Budget</Text>
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.experience}$</Text>
            <Text style={styles.subText}>Experience Level</Text>
        </View>

        <View style={styles.textContainer}>
            <Text numberOfLines={2} style={[styles.text, {fontWeight: 'normal'}]}>{item.description}</Text>
        </View>

        <View style={[styles.subTitleContainer, {marginTop: 15}]}>
            <View style={styles.tagContainer}>
                <Text style={[styles.text, {fontWeight: 'normal'}]}>{item.tags[0]}</Text>
            </View>
            <View style={[styles.tagContainer, {marginLeft: 7}]}>
                <Text style={[styles.text, {fontWeight: 'normal'}]}>{item.tags[1]}</Text>
            </View>
        </View>

        <View style={[styles.subTitleContainer, {marginTop: 15}]}>
            <View style={[styles.subTitleContainer, {marginTop: 0}]}>
                <Icon name="check-circle" color={theme.colors.gray} size={20} />
                <Text style={[styles.subTitleText, {fontWeight: 'bold', marginLeft: 3}]}>{item.payment} payment</Text>
            </View>
            <Text style={[styles.subTitleText, {fontWeight: 'bold', marginLeft: 25, color: theme.colors.black}]}>${item.spent}</Text>
            <Text style={[styles.subTitleText, {marginLeft: 3}]}>spent</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: theme.colors.gray,
        backgroundColor: theme.colors.white
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleContainer: {
        flex: 3
    },
    titleText: {
        fontSize: 18,
        fontWeight: '900',
        color: theme.colors.black
    },
    iconsContainer: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    iconContainer: {
        padding: 7,
        marginLeft: 5,
        borderRadius: 20,
        backgroundColor: theme.colors.white,
        // shadow
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    subTitleContainer: {
        marginTop: 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    subTitleText: {
        fontSize: 15,
        color: theme.colors.gray
    },
    textContainer: {
        marginTop: 15,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.colors.black
    },
    subText: {
        fontSize: 15,
        fontWeight: '100',
        color: theme.colors.gray
    },
    tagContainer: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: theme.colors.silver
    }
})

export default MyFeedBlock;
