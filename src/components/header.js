import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import Constant from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Header=()=>{


    return (
        // <View style={{height:55,backgroundColor:'#3D94F1',marginTop:Constant.statusBarHeight,flexDirection:'row',justifyContent:'space-between',elevation:4}}>
        //     <View style={{flexDirection:'row',marginTop:10}}>
        //         <Text style={{fontSize:22,fontWeight:'bold',alignContent:'center',marginLeft:150,color:'white'}}>SamTript</Text>
        //     </View>
        // </View>
        <View style={{marginTop:Constant.statusBarHeight,elevation:4}}>
            <Image
            source={{uri:'https://i.ibb.co/ydn4Vyt/ST-copy.png'}}
            style={{height:70,width:200,alignSelf:'center'}}
            />
        </View>
    )
}
export default Header