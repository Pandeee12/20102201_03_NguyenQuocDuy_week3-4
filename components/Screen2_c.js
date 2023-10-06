import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Screen2_c() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Password Generator</Text>
        <TextInput style={styles.input}></TextInput>
        <View style={styles.container1}>
          <Text style={styles.content1}>Password length</Text>
            <TextInput style={styles.input1}>
            </TextInput>
        </View>

        <View style={styles.container1}>
          <Text style={styles.content1}>Password length</Text>
            <TextInput style={styles.input1}>
            </TextInput>
        </View>
        <View style={styles.container1}>
          <Text style={styles.content1}>Password length</Text>
            <TextInput style={styles.input1}>
            </TextInput>
        </View>
        <View style={styles.container1}>
          <Text style={styles.content1}>Password length</Text>
            <TextInput style={styles.input1}>
            </TextInput>
        </View>
        <View style={styles.container1}>
          <Text style={styles.content1}>Password length</Text>
            <TextInput style={styles.input1}>
            </TextInput>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 19,
        backgroundImage: 'radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0.00) 87.36%)'
    },
    header:{
      alignItems:'center',
      color:'white',
       width: 181,
    height: 64,
    fontSize: 25,
    fontWeight: 80,
    lineHeight: 29.3,
    marginLeft: 90,
    marginBottom: 20,
    },
    
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#23235B',
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        paddingLeft: '12px',
        paddingRight: '12px',
    },
    container1:{
      height: 54,
      width: 280,
     flexDirection: 'row',
     alignItems: 'center',
      borderRadius: 5,
       margin: 10,
    },
    content1:{
      color:'#FFFFFF',
      width:223,
      height:24,
      top:264,left:38,
      fontSize:20
    }
    ,
    input: {
        width: '100%',
        height: 55,
        backgroundColor: '#151537',
        marginBottom: 47
    },
    input1: {
        width: 100,
        height: 33,
        top: 258,
        left: 0,
        backgroundColor:'#FFFFFF'

    }
})
