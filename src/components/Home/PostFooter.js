import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import {postFooterIcon} from "../../data/postFooterIcon"
const PostFooter = () => {
    return (
        <View style={{flexDirection:"row" }}>
            <View style={styles.leftFooter}>
                <TouchableOpacity>
                    <Image style={styles.postFooterIconLike} source={{uri:postFooterIcon[0].imageUrl}}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.postFooterIconComment} source={{uri:postFooterIcon[1].imageUrl}}/>
                </TouchableOpacity>       
                <TouchableOpacity>
                    <Image style={styles.postFooterIconSend} source={{uri:postFooterIcon[2].imageUrl}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.BookMarkContainer}>
                <TouchableOpacity>
                    <Image style={styles.postFooterIconBookMark} source={{uri:postFooterIcon[3].imageUrl}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PostFooter

const styles = StyleSheet.create({
    leftFooter:{
        flexDirection:"row",
        width:"25%",
        justifyContent:"space-between"
    },
    BookMarkContainer:{
        flex:1,
        alignItems:"flex-end"
    },
    postFooterIconLike:{
        width:25,
        height:25,
    },
    postFooterIconComment:{
        width:22,
        height:22,
        top:2,
    },
    postFooterIconSend:{
        width:22,
        height:22,
        top:2
    },
    postFooterIconBookMark:{
        width:25,
        height:22,
        top:2
    }
    
    
    
})
