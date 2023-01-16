import * as React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export default function IncDecCounter({setNum, setNumMinus, num}) {
    const plus = () => {
        setNum()
    }
    const minus = () => {
        setNumMinus()
    }
    let handleChange = (e) => {
      setNum(e.target.value);
    }
    return (
      <View style={{ flex: 1 / 2, justifyContent: 'flex-end', flexDirection: 'row', paddingTop: 10, paddingBottom: 20, alignItems: 'center' }}>
        <TouchableOpacity style={{ color: '#FF7D73', paddingHorizontal: 5 }} onPress={minus}>
          <AntDesign name='minuscircle' size={20} />
        </TouchableOpacity>
        <Text style={{ paddingHorizontal: 10 }}>{num}</Text>
        <TouchableOpacity style={{ color: '#FF7D73', paddingHorizontal: 5 }} onPress={plus}>
          <AntDesign name='pluscircle' size={20} />
        </TouchableOpacity>
      </View>
    )
} 

