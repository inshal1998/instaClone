import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import PostCaption from './PostCaption';
import PostCommentCount from './PostCommentCount';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostLikes from './PostLikes';
import PostUserComments from './PostUserComments';

const Post = ({post}) => {
    return (

        <View style={styles.container}>
            <Divider width={1} orientation="vertical" />
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <View style={{marginHorizontal:10, marginTop:10}}>
                <PostFooter/>
                <PostLikes post={post}/>
                <PostCaption post={post}/>
                <PostCommentCount post={post}/>
                <PostUserComments post={post}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom:30
    }
})
export default Post
