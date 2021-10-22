import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const PostImage = ({post}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imgUrl} source={{ uri: post.imageUrl}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imgUrl :{
        height:"100%",
        resizeMode:"cover"
    },
    container :{
        width:"100%",
        height:450
    }
})
export default PostImage
