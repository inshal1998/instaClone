import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text ,Image } from 'react-native'

const PostHeader = ({post}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.img} source={{uri : post.profilePicture}}/>
                <Text style={styles.txt}>{post.users}</Text>
            </View>
            <Text style={styles.dots}>...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flexDirection:"row",
        justifyContent: "space-between",
        margin :5,
        alignItems:"center"
    },
    innerContainer:{
        flexDirection:"row",
        alignItems:"center",
    },
    img :{
        height:30,
        width:30,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1,
        borderColor:"#ff8501"
    },
    txt :{
        color:"white",
        marginLeft:10,
        fontWeight:"600"
    },
    dots:{
        fontWeight:"bold" ,
        fontSize:22,
    }
})

export default PostHeader
