import React from 'react'
import { View,StyleSheet, Text } from 'react-native'

const PostComment = ({post}) => {
    return (       
        <View style={{marginTop:4}}>
            {
                !!post.comments.length &&(
                    <Text style={{color:"grey"}}>
                        View {post.comments.length > 1 ? 'all ' : ''}
                        {post.comments.length} 
                        {post.comments.length > 1 ? " comments" : " comment"}
                    )
                </Text>
                )}
        </View>
    )
}

export default PostComment

const styles = StyleSheet.create({})
