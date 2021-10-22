import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import {USERS} from "../../data/users";

const Stories = () => {
    return (
        <View style={{marginBottom:13}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    USERS.map((story , index) => (
                        <View key={index} style={{alignItems: 'center'}}>
                            <Image style={styles.storyImg} source={{ uri : story.image}}/>
                            <Text style={styles.storyText}>{
                                story.user.length > 11 ? story.user.slice(0,10).toLocaleLowerCase() +"..." : story.user.toLocaleLowerCase()
                            }</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    storyImg:{
        height:70,
        width:70,
        borderRadius:50,
        marginLeft:10,
        borderWidth:3,
        borderColor:"#ff8501",
        marginTop:5
    },
    storyText:{
        color:"white",
    }
})

export default Stories
