import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as Yup from "yup";
import { Formik } from 'formik';
import { Divider } from 'react-native-elements';

const FormikPostUploader = ({navigation}) => {

    const PlacHolderImg = 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg'
    const uploadPostSchema = Yup.object().shape({
        imageUrl : Yup.string().url().required("Image Url is Required"),
        caption : Yup.string().max(100 , "Caption has reached Max Character")
    }) 
    const [thumbnail, setthumbnail] = useState(PlacHolderImg)
    return (
        <Formik 
            initialValues={{caption:'' , imageUrl:""}}
            onSubmit={values=>{console.log(values);}}
            validateOnMount={true}
            validationSchema={uploadPostSchema}
            onSubmit={(values)=>{ 
                console.log(values);
                console.log("successsfully Uploaded");
                navigation.goBack()}}
        >
            {({
               handleChange, handleBlur, handleSubmit, values, isValid, errors
            })=>(
                <>
                    <View style={{flexDirection:"row" }}>
                        <Image source={{uri :thumbnail ? thumbnail : PlacHolderImg}} style={styles.image}/>
                        <View style={styles.txtContainer}>
                            <TextInput
                                style={styles.captionTxt}
                                numberOfLines={5}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                                placeholderTextColor="grey"
                                placeholder="Please Enter Caption"
                            />
                             {errors.caption &&(
                            <Text style={styles.errStyle}>{errors.caption}</Text>
                        )}
                        </View>
                    </View>
                    <Divider width={1} orientation="vertical" style={{top:10}}/>
                    <View style={{height:35}}>
                        <TextInput
                            placeholderTextColor="grey"
                            style={styles.urlTxt}
                            onChange={e=>setthumbnail(e.nativeEvent.text)}
                            onChangeText={handleChange('imageUrl')}
                            onBlur={handleBlur('imageUrl')}
                            value={values.imageUrl}
                            placeholder="Enter Image Uri"
                        />  
                        {errors.imageUrl &&(
                            <Text style={styles.errStyle}>{errors.imageUrl}</Text>
                        )}
                    </View>
                    <View style={{marginBottom:20}}></View>
                    <Button  color="#CAD5E2" onPress={handleSubmit} title="Submit" disabled={!isValid}/>
                </>
                )}
                </Formik>
    )
}

export default FormikPostUploader

const styles = StyleSheet.create({
    errStyle:{
        fontSize:10.5 , 
        left:10 ,
        color:"red" , 
        bottom:2,
        top:2
    },
    image:{
        left:15,
        height:100,
        borderRadius:5,
        width:100,
        marginTop:30,
    },
    txtContainer:{
        // borderColor:"red",
        // borderWidth:2,
        left:30,
        top:30,
        width:"65%",
        height:"75%"
    },
    captionTxt:{
        fontSize:15,
        textAlignVertical:'top',
        color:"white",
        fontWeight:"900"
    },
    urlTxt :{
        // borderWidth:2,
        // borderColor:"red",
        top:10,
        width:"97%",
        fontSize:15,
        color:"white",
        left:10,
        fontWeight:"900"
    }
    
})
