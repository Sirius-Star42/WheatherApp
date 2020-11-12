import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Dimensions, Image, ImageBackground} from 'react-native';
import { block } from 'react-native-reanimated';


const CityList = ({menu}) => {
    return (
        <TouchableOpacity style={styles.listItem} >
            <ImageBackground style={styles.image} source={require("../Images/25501.jpg")}> 

                <Text style={styles.text}>{menu.name}</Text>
                <View style={{ flex: 1, alignItems: "flex-end"}}>
                    <Text style={styles.text}>{Math.round(menu.main.temp)} °</Text>
                    <Text style={{flexDirection: "column", alignItems: "flex-end", fontSize:20}}>{menu.weather[0].description} </Text>
                </View>
               
                
                

            </ImageBackground>
        </TouchableOpacity>

       
        
    )
}

export default CityList;

const styles=StyleSheet.create({
    listItem : {
        height: Dimensions.get('window').height / 8,
        marginTop: 2,
    },
    image : {
        width:Dimensions.get('window').width * 1,
        height: Dimensions.get('window').height / 8,
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        
    },
    text :{
        fontSize: 35, 
        fontWeight:"200",
        margin: 2, 
        padding:2,
        
    }

})