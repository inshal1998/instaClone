import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NewPostScreen from "../../Screens/NewPostScreen";
const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    style={styles.logo} 
                    source={require('../../assets/logo.png')}
                />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity 
                    onPress={()=>{navigation.navigate('NewPostScreen')}}
                >
                    <Image 
                        source={{
                            uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
                        }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unredBadge}>
                        <Text style={styles.unredBadgeText}>99</Text>
                    </View>
                    <Image 
                    source={{
                        uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
                    }}
                    style={styles.icon}
                    />    
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginHorizontal:20
    },
    icon :{
        width:30,
        height:30,
        marginLeft:10,        resizeMode:"contain"
    },
    iconContainer :{
        flexDirection:"row",
    }, 
    unredBadge :{
        backgroundColor:'#FF3250',
        position: 'absolute',
        borderRadius:25,
        left:20,
        bottom:18,
        justifyContent:"center",
        zIndex:100,
        width:25,
        height:18,
        alignItems:"center",
    },
    unredBadgeText :{
        color:'white',
        fontWeight:'600'
    },
    logo:{
        resizeMode:"contain",
        height:50,
        width:100,
    }
})
