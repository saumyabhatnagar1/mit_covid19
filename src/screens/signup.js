import React, { useState } from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'
import Header from '../components/header'
import { Button,Card,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';



const Signup=()=>{
    const [gid,setgid]=useState('')
    const [pass,setpass]=useState('')

    return(
        <View style={{flex:1}}>
        <Header/>
        <Text style={{fontSize:38,fontWeight:'bold',marginLeft:135,marginTop:50}}>Sign Up</Text>
         <Card containerStyle={{marginTop:50}}>
        <Card.Title>Welcome to Samtript</Card.Title>
        
            <Input
            placeholder="Govt Id."
            leftIcon={{type:'font-awesome',name:'id-card'}}
            value={gid}
            onChangeText={(text)=>setgid(text)}
            />
            
            
            <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='SIGN UP'/>
        </Card>
        </View>
    )
}

export default Signup