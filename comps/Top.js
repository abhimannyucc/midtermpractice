import React from 'react';
import {View, TextInput, Text, Button, useState} from 'react-native';
import styles from '../styles/TopStyles';

function Top() {
  
  // Put const variables here - permanent variable, can't ever change

  // INPUT
  const [titleText, setTitleText] = React.useState("");

  var titleText2 = null;

  // If titleText is nothing...
  if (titleText == "") {

    // titleText2 will be the default title
    titleText2 = "The Story of My Life";

  }
  // Else titleText2 will be whatever value is in the input
  else {
    titleText2 = titleText;
  }


  // BUTTON - The default state must be false. 
  const [showInput, setShowInput] = React.useState(false);

  var showInput2 = null;

  if (showInput == true) {
    showInput2 = (
      <View>
      <TextInput 
      placeholder = "New Title" 
      onChangeText = { text => setTitleText(text)}
      />
      </View>
    )
  }

  else {
    showInput2 = null;
  }


  return (
    <View style={styles.top}>

      {/* Start of first row */}
      <View style={styles.firstLine}>
      <Text style={styles.title}>{titleText2}</Text>

      <Button 
      style = {styles.button}
      title = "Edit"
      onPress = {() => setShowInput(!showInput)}
      />
      </View>

      {/* End of first row */}

      {showInput2}
    </View>
  )
}

export default Top;