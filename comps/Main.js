import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Bot from "./Bot";
import Top from "./Top";
import Story from "./Story";
import Controls from "./Controls";
import ControlsStyles from "../styles/ControlsStyles";


export default function Main(){}
    return(
        // fix this
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