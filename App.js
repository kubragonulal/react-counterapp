import React, {useState} from "react";
import {
  Text, 
  SafeAreaView, 
  StyleSheet, 
  Image, 
  View, 
  Button,
  TouchableOpacity
} from "react-native";

function MyCustomButton(props){
  //props.title
  return(
  <TouchableOpacity style = {[styles.button, props.style]} 
      onPress={props.onPress}>
    <Text style = {styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
  );
}

function App(){

const [count, setCount] = useState(0);

const handleIncrement = () => {
  setCount(count + 1);
};
const handleDecrement = () => {
  setCount(count - 1);

};

  return (
   
  <SafeAreaView>
     <View style={styles.container}>
    <Image 
    source={{uri: "https://i.pinimg.com/originals/1b/ab/ba/1babba304aeae6d32624208602745fd2.jpg"}}
    style={styles.image}/>
  <Text style={styles.text}>Conter: {count}</Text>
  <Text style={styles.subtitle}>
    Click buttons to change the counter.
    </Text>
    <View style = {styles.buttonContainer}>
    <MyCustomButton title = "Increment +" onPress={handleIncrement}/>
    <MyCustomButton 
    title = "Decrement -" 
    style = {{backgroundColor:"pink", marginStart:16}} 
    onPress={handleDecrement}
    />
    </View>
  </View>
  </SafeAreaView>
  
  ); 
}

const styles = StyleSheet.create({
  container:{
    margin:16,
  },
  text:{
    fontSize:30,
    marginTop:16,
  },
  subtitle:{
    fontSize:20,
    color:"gray",
    marginTop:4,
  },
  image:{
    height:180,
    borderRadius:12,
  },
  buttonContainer:{
    marginTop:16,
    flexDirection:"row"
  },
  button:{
    flex: 1,
    backgroundColor:"lightblue",
    padding:12,
    borderRadius:12,
    alignItems:"center",
  },
  buttonText:{
    color:"black",
    fontSize:20,
    textAlign:"center",
  }
});
export default App;