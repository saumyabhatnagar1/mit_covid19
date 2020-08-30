import React, { useState } from 'react'
import {View,StyleSheet,Text,Image,FlatList,ScrollView} from 'react-native'
import Header from '../components/header'
import { Button,Card,Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import Constant from 'expo-constants'
import {useNavigation} from '@react-navigation/native'
import { DataTable,FAB } from 'react-native-paper';
const Welcome=()=>{

    const [data,setData]=React.useState([])
    const [loading,setLoading]=React.useState(true)

    const fetchData=()=>{

        fetch('http://44ecc760d88b.ngrok.io/fetchAll').then(res=>res.json()).then((items)=>{
            setData(items)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    }

    React.useEffect(()=>{
        fetchData()
    },[])
    const navigation =useNavigation()
    return(


        <View style={{flex:1}}>
          <View style={{
                padding:5,
                flexDirection:'row',
                justifyContent:'space-between',
                elevation:2,
                alignItems:'center',
                marginTop:Constant.statusBarHeight,
                height:80,
                padding:10
            }}>
                
                <Text style={{fontSize:24,fontWeight:'bold'}}>Welcome To Samtript</Text>
                <Image
                style={{height:50,width:50,borderRadius:50}}
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRiusYm4lan87FnRtKM-6tnsaagLGkBzE8eg&usqp=CAU'}}
                />
                
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
            </Card>
            <Text style={{alignSelf:'center',marginTop:5,fontSize:25,fontWeight:'bold'}}>Reservations</Text>

            
                <FlatList
                
                data={data}
                onRefresh={()=>fetchData()}
                contentContainerStyle={{padding:5}}
                refreshing={loading}
                renderItem={({item})=>{
                    return(
                        <Card>
                            <Card.Title>Slot Details</Card.Title>
                            <Text>Date: {item.recDate}</Text>
                            <Text>Time: {item.recTime}</Text>
                        </Card>
                    )
                }}
                keyExtractor={(item)=>{item._id}}
                />
            
            <Button
                onPress={()=>navigation.navigate('bookslot')}
                buttonStyle={{backgroundColor:'#6ECF62'}}
                title="Book A New Slot"
                />
            
                
        </View>

    )
}

export default Welcome