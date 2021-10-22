import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PostCaption = ({post}) => {
    return (
        <View>
            <Text style={{color:"white" }}>
                <Text style={{fontWeight:"700"}}>{post.users}</Text>
                <Text>  {post.captions}</Text>
            </Text>
        </View>
    )
}

export default PostCaption

const styles = StyleSheet.create({})
