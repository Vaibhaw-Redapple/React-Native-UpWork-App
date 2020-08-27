import React from 'react';
import {StyleSheet, View, FlatList, TextInput} from 'react-native';

// import icons
import Icon from 'react-native-vector-icons/Feather'

// import theme
import * as theme from '../constants/theme'

// import discussions
import * as disc from '../constants/discussions'

// import message component
import Message from '../components/message'

const Messages = () => {
  return (
    <View style={styles.container}>

        <View style={styles.searchContainer}>
          <View style={styles.search}>
            <Icon name="search" color={theme.colors.gray} size={20} />
            <TextInput
              style={{marginLeft: 5}}
              placeholder="Search.." />
          </View>
        </View>

        <View style={styles.bodyContainer}>
          <FlatList 
            data={disc.discussions}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                    <Message item={item} />
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
    marginTop: 10
  },
  searchContainer: {
    padding: 10,
  },
  search: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: theme.colors.silver
  },
});

export default Messages;
