import React from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'
import Header from '../components/header'
import { Button } from 'react-native-elements';
import { exp } from 'react-native-reanimated';

const Profile=()=>{
    return (
        <View style={{flex:1}}>
            <Header/>
            <Text style={{alignSelf:'center',fontSize:25,marginTop:100}}>
                Coming Soon....
            </Text>
        </View>
    )
}
export default Profile