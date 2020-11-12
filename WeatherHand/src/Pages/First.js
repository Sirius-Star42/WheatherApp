import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, FlatList, View, Text, Button} from 'react-native';
import CityList from '../components/CityList';


const First = () => {
    const [cityData, setCityData] = useState();

    const fetchData = () => {
        axios.get('http://api.openweathermap.org/data/2.5/box/city?bbox=28,40,32,42,20&appid=0a9ede5ee8517d378727b7a0dd8ae1d8')
            .then(({data}) => {
                setCityData(data.list)
            })
    };
    
    
    const renderData = ({item}) => <CityList menu={item}/>
    
    return (
        <SafeAreaView>
            <View>
                <Button title= "fetch" onPress={fetchData}/>
                <FlatList
                    data={cityData}
                    renderItem={renderData}
                    keyExtractor={(_, index) => index.toString()}
                
                />
                
            </View>


        </SafeAreaView>
        
    )
}

export {First};

