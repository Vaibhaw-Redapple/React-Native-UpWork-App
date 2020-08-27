import React from 'react';
import {StyleSheet, View, Text, TextInput, FlatList} from 'react-native';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from '../../constants/theme'

// import jobs
import * as jobs from '../../constants/jobs'

// import MyFeedBlock Component
import MyFeedBlock from '../../components/myFeedBlock'

const Search = () => {
  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.search}>
            <TextInput
              style={{flex: 1, paddingLeft: 10, backgroundColor: theme.colors.white}}
              placeholder="Search for job.."
              placeholderTextColor={theme.colors.gray} />
            <View style={styles.searchIconContainer}>
             <Icon name="search" color={theme.colors.white} size={28} />
            </View>
          </View>
          <View style={styles.filterIconContainer}>
             <Icon name="filter" color={theme.colors.green} size={25} />
            </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, {fontWeight: 'bold', marginRight: 5}]}>10</Text>
          <Text style={styles.titleText}>jobs found</Text>
        </View>

        <View style={styles.bodyContainer}>
          <FlatList 
            data={jobs.feed}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <MyFeedBlock item={item} />
                )
            }} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    bodyContainer: {
      flex: 1,
    },
    searchContainer: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.silver
    },
    search: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchIconContainer: {
      padding: 10,
      backgroundColor: theme.colors.green
    },
    filterIconContainer: {
      padding: 11,
      marginLeft: 10,
      borderRadius: 30,
      backgroundColor: theme.colors.white,
      // shadow
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity:  0.1,
      shadowRadius: 1,
      elevation: 7,
    },
    titleContainer: {
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 16
    }
})

export default Search;
