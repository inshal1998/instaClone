import React from 'react'
import { SafeAreaView, StyleSheet,ScrollView, Text, View } from 'react-native'
import BottomTabs from '../components/Home/BottomTabs'
import Header from '../components/Home/Header'
import Post from '../components/Home/Post'
import Stories from '../components/Home/Stories'
import { POST } from '../data/post'

const HomeScreen = ({navigation}) => {
    return (    
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation}/>
            <Stories/>
            <ScrollView>
                {
                    POST.map((post, index) =>(
                        <Post post={post} key={index}/>
                    ))
                }
            </ScrollView>
            <BottomTabs/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex:1,
    }
})
export default HomeScreen

