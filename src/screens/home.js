import React from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'
import Header from '../components/header'
import { Button } from 'react-native-elements';

const Home=()=>{
    return(
        <View style={{flex:1}}>
            <Header/>
            <View style={{alignItems:'center'}}>
            <Image
            style={{height:250,width:250,marginTop:70}}
            source={{uri:'https://i.ibb.co/Hx0j8Vx/logo.png'}}
            />
            <View style={{flexDirection:'column',padding:5}}>
            <Button
            containerStyle={{marginTop:25,width:125}}
            title="Sign Up"
            type='solid'
            raised='true'
            />
            <Button
            containerStyle={{marginTop:25}}
            title="Log In"
            type='solid'
            raised='true'
            />
            </View>
            
            </View>
        </View>
    )
}
export default Home