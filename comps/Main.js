import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Bot from "./Bot";
import Top from "./Top";
import Story from "./Story";
import Controls from "./Controls";
import


export default function Main(){}
    return(
        <View>
            {Top}
            {Story}
            {Bot}
            <TouchableOpacity>
                <Image
                    source={require("../menu.png")}
                />
            </TouchableOpacity>
        </View>
    )
;