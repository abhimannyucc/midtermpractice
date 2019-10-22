import React,{useState} from 'react';
import {View,Text, Picker} from 'react-native';
import styles from '../styles/botstyles';

export default function Bot(){
const [ChangePicker, SetChangePicker] = useState(0)
var author = null;

if (ChangePicker=== 0){
    author = "Author Full Name"
}

else if (ChangePicker === 1){
    author = "Shenis"
}

else if (ChangePicker === 2) {
    author = "Tim"
}

else if (ChangePicker === 3) {
    author = "Abhi"
}
return (
    <View>
<View style={styles.bot}>
    <Text style={styles.txttop}>by</Text>
    <Text style={styles.txtstyle}>{author}</Text>
<Picker
  style={{width: 100}}
  onValueChange={(value) => SetChangePicker(value)}
  selectedValue={ChangePicker}
  >
  <Picker.Item label="Pick An Author" value={0} />
  <Picker.Item label="Story 1" value={1} />
  <Picker.Item label="Story 2" value={2} />
  <Picker.Item label="Story 3" value={3} />
</Picker>
</View>
</View>
)}