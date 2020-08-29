import React, { useState } from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'
import Header from '../components/header'
import { Button,Card,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import Constant from 'expo-constants'
import {useNavigation} from '@react-navigation/native'
import { DataTable } from 'react-native-paper';
const Welcome=()=>{
    const navigation =useNavigation()
    return(
        <View style={{flex:1}}>
          <View style={{
                padding:5,
                flexDirection:'row',
                justifyContent:'space-around',
                elevation:2,
                backgroundColor:'#3D94F1',
                marginTop:Constant.statusBarHeight,
                height:80
            }}>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:28,fontWeight:'bold'}}>Welcome To Samtript</Text>
                <Image
                style={{height:50,width:50}}
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRiusYm4lan87FnRtKM-6tnsaagLGkBzE8eg&usqp=CAU'}}
                />
                </View>
            </View>

            <Card>
                <Card.Title>Last Month Usage</Card.Title>
                <DataTable>
                <DataTable.Header>
                <DataTable.Title>Item</DataTable.Title>
                <DataTable.Title numeric>Quantity</DataTable.Title>
                <DataTable.Title numeric>Price in Rs.</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                <DataTable.Cell>Rice</DataTable.Cell>
                <DataTable.Cell numeric>20 Kg</DataTable.Cell>
                <DataTable.Cell numeric>5/Kg</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                <DataTable.Cell>Vegetables</DataTable.Cell>
                <DataTable.Cell numeric>15 Kg</DataTable.Cell>
                <DataTable.Cell numeric>8/Kg</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={page => {
                    console.log(page);
                }}
                label="1-2 of 6"
                />
                </DataTable>
                <Button
            title="Book Slot"
            onPress={()=>{navigation.navigate('bookslot')}}
            />
            </Card>
           
        </View>
    )
}

export default Welcome