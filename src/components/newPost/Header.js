import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Header = ({navigation}) => {
    return (
        <View style={styles.headerContainer}>
        <TouchableOpacity
            onPress={()=>{navigation.push('HomeScreen')}}
        >
            <Image source={{uri:"https://img.icons8.com/ios-glyphs/90/ffffff/back.png"}} style={{width:30, height:30}}/>    
        </TouchableOpacity>
        <Text style={styles.headerText}>Add New Post</Text>
    </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer :{
        top:10,
        flexDirection:"row",
        width:"100%",
        alignItems:"center"
    },
    headerText :{
        color:"white",
        fontWeight:"600",
        fontSize:20,
        alignSelf:"center",
        marginLeft:120
    }
})
