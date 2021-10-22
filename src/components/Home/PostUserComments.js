import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PostUserComments = ({post}) => {
    return (
        <>
        {
                post.comments.map((comment , index)=>(
                    <View key={index} style={{flexDirection:"row", marginTop:5}}>
                        <Text style={{color:"white"}}>
                            <Text style={{fontWeight:"800"}}>{comment.users}</Text>
                            <Text>  {comment.comments}</Text>
                        </Text>
                    </View>
                ))
        }
        </>
    )
}

export default PostUserComments

const styles = StyleSheet.create({})
