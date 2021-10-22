import React from 'react'
import { View, StyleSheet } from 'react-native'
import FormikPostUploader from './FormikPostUploader'
import Header from './Header'

const AddNewPost = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <FormikPostUploader navigation={navigation}/>
        </View>
    )
}

export default AddNewPost

const styles = StyleSheet.create({
    container :{
        marginHorizontal:10
    },
})
