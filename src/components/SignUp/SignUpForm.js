import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Formik } from "formik";
import Validator from "email-validator";
import * as Yup from "yup";
const SignUpForm = () => {
    
    const SignUpSchema = Yup.object().shape({
        email:Yup.string().email().required("Email Is Required"),
        username:Yup.string().required().min(3, "Username Length Must Be atleast 3 Char"),
        password:Yup.string().required().min(8, "Password Length Must Be atleast 8 Char")
    })
    
    return (
        <View style={styles.wrapper}>
        <Formik
            initialValues={{email:'',password:'',username:''}}
            onSubmit={(values)=>{
                console.log(values);
            }}
            validationSchema={SignUpSchema}
            validateOnMount={true}
        >
            {({handleChange , handleBlur , handleSubmit , values , isValid})=>(
            <>
                <View style={[styles.txtInput , {
                    borderColor : values.email.length < 1 || Validator.validate(values.email) ? "#ccc" : "red"
                }]}>
                    <TextInput
                        placeholder = "Phone number , UserName or Email"
                        placeholderTextColor="#444"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={true}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                </View>
                <View style={[styles.txtInput , {
                    borderColor :values.username.length > 2 || values.username.length < 1 ? "#ccc" : "red"
                }]}>
                    <TextInput
                        placeholder = "Enter UserName"
                        placeholderTextColor="#444"
                        autoCapitalize="none"
                        keyboardType="emailAddress"
                        textContentType="emailAddress"
                        autoFocus={true}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                    />
                </View>
                <View style={[styles.txtInput , {
                    borderColor :1 > values.password.length || values.password.length >= 8 ? "#ccc" : "red" 
                }]}>
                    <TextInput
                        placeholder = "Enter Password"
                        placeholderTextColor="#444"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType="password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                </View>
                <TouchableOpacity disabled={!isValid} style={styles.btn} onPress={handleSubmit}>
                    <Text style={styles.btnTxt}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.signUpContainer}>
                    <Text>Already Have an Account?  </Text>
                    <TouchableOpacity>
                        <Text style={{color:"#6BB0F5"}}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </>
            )}
        </Formik>
    </View>
    )
}

export default SignUpForm

const styles = StyleSheet.create({
    signUpContainer:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:10,
        width:"100%"
    },
    btn:{
        backgroundColor: "#6BB0F5",
        alignItems:"center",
        minHeight:42,
        borderRadius:4,
        marginVertical:10,
        justifyContent:"center"
    },
    btnTxt :{
        fontWeight:"600",
        color:"#FFF",
        fontSize:20
    },
    wrapper :{
        marginTop:80,
        backgroundColor:"white"
    },
    txtInput:{
        borderRadius:4,
        padding:1,
        backgroundColor:"#FAFAFA",
        marginBottom:10,
        borderWidth:1
    },
    fgPasswd :{
        marginBottom:30,
        alignSelf:"flex-end", 
        paddingRight:7
    }
})