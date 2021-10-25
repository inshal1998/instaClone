import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import * as Yup from "yup";
import { Formik } from 'formik';
import { Divider } from 'react-native-elements';
import Dialog, {
    DialogTitle,
    DialogContent,
    SlideAnimation,
  } from 'react-native-popup-dialog';
  import ImagePicker from 'react-native-image-crop-picker';

const FormikPostUploader = ({navigation}) => {

    const PlacHolderImg = 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg'
    const uploadPostSchema = Yup.object().shape({
        imageUrl : Yup.string().url("Image Url is Required"),
        caption : Yup.string().max(100 , "Caption has reached Max Character")
    }) 
    const [thumbnail, setthumbnail] = useState(PlacHolderImg)
    const [slideAnimationDialog, setSlideAnimationDialog] = useState(false)
    
    const takePhotoFromLibrary = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            setthumbnail(image.path);
          });
    }
    const takePhotoFromCamera = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
            setthumbnail(image.path);
          });
          
    }

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
                <View style={{height:"100%"}}>
                    <View style={{flexDirection:"row"}}>
                   
                        <TouchableOpacity onPress={() => setSlideAnimationDialog(true)}>
                            <Image source={{uri :thumbnail ? thumbnail : PlacHolderImg}} style={styles.image}/> 
                            <Dialog
                                onDismiss={() => {
                                    setSlideAnimationDialog(false);
                                }}
                                onTouchOutside={() => {
                                    setSlideAnimationDialog(false);
                                }}
                                visible={slideAnimationDialog}
                                dialogTitle={
                                    <DialogTitle
                                    title="Choose To Update Profile"
                                    />
                                }
                                
                                dialogAnimation={
                                    new SlideAnimation({slideFrom: 'bottom'})
                                }>
                                <DialogContent>
                                    <View style={{left:25,padding:10,flexDirection:"row" ,width:"80%" , justifyContent:"space-evenly" , alignContent:"space-between"}}>
                                        <View style={{width:"50%",height:60}}> 
                                                <TouchableOpacity onPress={takePhotoFromLibrary}>
                                                <Image
                                                // https://cdn.pixabay.com/photo/2015/12/22/04/00/photo-1103594_1280.png
                                                    style={{height:70,width:70,alignSelf:"center"}}
                                                    source={{uri:"https://cdn-icons-png.flaticon.com/512/833/833539.png"}}
                                                />
                                                </TouchableOpacity>
                                        </View>
                                        <View style={{width:"50%",height:40}}>
                                            <TouchableOpacity onPress={takePhotoFromCamera}>
                                                <Image
                                                    style={{height:70,width:70,alignSelf:"center"}}
                                                    // https://cdn-icons.flaticon.com/png/512/238/premium/238438.png?token=exp=1635077856~hmac=f9b40f1053d5989867c1347ecee3a1e9
                                                    source={{uri:"https://freeiconshop.com/wp-content/uploads/edd/camera-outline-filled.png"}}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        </View>
                                </DialogContent>
                            </Dialog>
                        </TouchableOpacity>
                        
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
                </View>

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
    },
    BottomSheetheader :{
        backgroundColor:"#FFFFFF",
        shadowColor:"#3333333",
        shadowOffset:{width: -1 , height:-1},
        shadowRadius:2,
        shadowOpacity:0.4,
        paddingTop:4,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    }
    
})
