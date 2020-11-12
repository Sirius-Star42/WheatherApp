import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, FlatList, View, Text, Button} from 'react-native';
import {CityList} from '../components'


const First = (props) => {
    const [cityData, setCityData] = useState();

    const fetchData = () => {
        axios.get('http://api.openweathermap.org/data/2.5/box/city?bbox=28,40,30,42,40&appid=0a9ede5ee8517d378727b7a0dd8ae1d8')
            .then(({data}) => {
                setCityData(data.list)
            })
    };
    
    useEffect(()=> fetchData, [])
    const renderData = ({item}) => <CityList />
    

    return (
        <SafeAreaView>
            <View>
                
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

