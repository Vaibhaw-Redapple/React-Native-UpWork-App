import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Modal, Image, FlatList} from 'react-native';

// import jobs
import * as jobs from '../../constants/jobs'

// import MyFeedBlock Component
import MyFeedBlock from '../../components/myFeedBlock'

// import theme
import * as theme from '../../constants/theme'

const MyFeed = () => {
  const [splashVisible, setSplashVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false)
    }, 2000);
  });

  const ToggleSplashVisible = () => {
          setSplashVisible(false)
  }
  return (
    <View style={styles.container}>
      {/* Splash Modal */}
      <Modal 
          animationType="slide" 
          visible={splashVisible}
          onRequestClose={() => ToggleSplashVisible()}>
              <View style={styles.modalContainer}>
                <Image
                    style={{width: 200, height: 50}}
                    source={require('../../images/logo.png')} />
              </View>
      </Modal>

      {/* Jobs list */}
      <View>
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
    },
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.blueGreen
  }
})

export default MyFeed;
