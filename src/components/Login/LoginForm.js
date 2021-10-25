import React from 'react'
import { TouchableOpacity,TextInput,StyleSheet, Text, View, Button, Pressable } from 'react-native'
import { Formik } from "formik";
import Validator from "email-validator";
import * as Yup from "yup";
const LoginForm = () => {
    const LoginSchema = Yup.object().shape({
        email:Yup.string().email().required("Email Is Required"),
        password:Yup.string().required().min(8, "Password Length Must Be atleast 8 Char")
    })
    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={(values)=>{
                    console.log(values);
                }}
                validationSchema={LoginSchema}
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
                    <View style={styles.fgPasswd}>
                        <Text style={{color:"#6BB0F5"}}>Forgot Password</Text>
                    </View>
                    <TouchableOpacity disabled={!isValid} style={styles.btn} onPress={handleSubmit}>
                        <Text style={styles.btnTxt}>Log In</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpContainer}>
                        <Text>Dont Have an Account?  </Text>
                        <TouchableOpacity>
                            <Text style={{color:"#6BB0F5"}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </>
                )}
            </Formik>
        </View>
    )
}

export default LoginForm

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
