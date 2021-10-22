import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { BottomTabIcons } from "../../data/BottomTabIcons";
const BottomTabs = () => {
    const [activeTab, setactiveTab] = useState('Home')
    return (
        <View >
            <Divider width={1} orientation="vertical"/>
                <View style={styles.imgContainer}>
                    {
                        BottomTabIcons.map((icon , index)=>(
                            <TouchableOpacity key={index} activeOpacity={1} onPress={()=>{setactiveTab(icon.name)}}>
                                <Image source={{uri : activeTab === icon.name ? icon.active : icon.inactive}} 
                                    style={[
                                        styles.img , 
                                        icon.name === 'Profile' ? styles.profileRound() : null, 
                                        activeTab === 'Profile' && icon.name ===activeTab ? styles.profileRound(activeTab) : null]}/>
                            </TouchableOpacity>
                        ))
                    }
                </View>
        </View>
    )
}

export default BottomTabs

const styles = StyleSheet.create({
    imgContainer :{
        flexDirection:"row",
        paddingTop:10,
        height:50,
        justifyContent:"space-around"
    },
    img:{
        height:33 ,
        width:30
    },
    profileRound: (activeTab ='')=>({
        borderRadius:50,
        borderWidth: activeTab === 'Profile' ? 2 :0,
        borderColor:"#CAD5E2",
    })
})
