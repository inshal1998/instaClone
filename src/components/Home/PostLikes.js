import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PostLikes = ({post}) => {
    return (
        <View style={{flexDirection:"row", marginTop:4}}>
            <Text style={{fontWeight:"600" , color:"white"}}>{post.likes} likes</Text>
        </View>
    )
}

export default PostLikes

const styles = StyleSheet.create({})
