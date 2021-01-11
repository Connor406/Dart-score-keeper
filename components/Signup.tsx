import React, { useRef } from 'react'
import { TextInput, View, Text, Button, StyleSheet, } from 'react-native'
import { Card } from 'react-native-elements'
import { Formik } from 'formik';
import { useAuth } from '../contexts/AuthContext'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()

    signup(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <View style={styles.container}>
      <Card>
        <Text>Sign Up</Text>
        <TextInput 
          style={styles.text}
          placeholder='Email' 
          autoCompleteType='email' 
          keyboardType='email-address'
          textContentType='emailAddress'
          ref={emailRef} ></TextInput>
        <TextInput 
          style={styles.text}
          placeholder='Password' 
          autoCompleteType='password'
          textContentType='password'
          ref={passwordRef} ></TextInput>
        <TextInput
          style={styles.text} 
          placeholder='Confirm Password' 
          autoCompleteType='password'
          textContentType='password'
          ref={passwordConfirmRef} ></TextInput>
        <Button title='Submit' onPress={() => console.log('submitted')} >Submit</Button>
      </Card>
      <TextInput></TextInput>   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250
  },
  text: {
    fontSize: 20,
    borderWidth: 1
  },
})