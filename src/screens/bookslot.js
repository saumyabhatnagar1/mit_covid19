import React,{useState} from 'react'
import {View,StyleSheet,Text,Image,Alert} from 'react-native'
import Header from '../components/header'
import { Button, Input,Card } from 'react-native-elements';
import { exp } from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker';


const BookSlot=()=>{



    const [edate,setedate]=useState('')
    const [etime,setetime]=useState('')
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);



    const SubmitData=()=>{

        fetch('http://44ecc760d88b.ngrok.io/send-data',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:'Ramu Bai',
                recDate:edate,
                recTime:etime
            })
        }).then(res=>res.json()).then((data)=>{
            Alert.alert(`${data.name}, Slot Booked`)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    const navigation=useNavigation()
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        const mdate= date.toString().split(" ");
        setedate(mdate[1] + " " + mdate[2] + ", " + mdate[3])
        setetime(mdate[4])
        
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
    
      return (
        <View style={{flex:1}}>
            <Header/>

            <Card containerStyle={{marginTop:30}}>
            <Card.Title>Enter Slot Details</Card.Title>

          <View style={{flexDirection:'column'}}>
            <Input
            leftIcon={{type:'font-awesome',name:'calendar'}}
            placeholder="Date"
            value={edate}
            />
            <Button onPress={showDatepicker} title="Choose Date" />
            <Input
            containerStyle={{marginTop:20}}
            placeholder="Time"
            leftIcon={{type:'font-awesome',name:'clock-o'}}
            value={etime}
            />
            <Button  onPress={showTimepicker} title="Choose Time" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Button
          title="Book Slot"
          onPress={()=>SubmitData()}
          buttonStyle={{marginTop:15,backgroundColor:'#6ECF62'}}
          />
            </Card>
            


          
        </View>
      );
    };
export default BookSlot