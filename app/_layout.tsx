import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { View, Text, StyleSheet,Dimensions, Image } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <MaterialIcons name="menu" size={35} color="green" />
      <Text style={styles.headerText}>BYKEA</Text>
      <MaterialIcons name="add-call" size={33} color="green" />
    </View>
{/* banner image View */}
<View style={styles.bannerImgView}>
<Image
 style={styles.bannerImg} 
source= {{uri: "https://images.news9live.com/wp-content/uploads/2023/06/Untitled-3.jpg"}}/>
</View>
{/* banner info view */}

<View style={styles.bannerInfoView}>
<MaterialIcons name="message" size={24} color="green" />
<MaterialIcons name="attach-money" size={24} color="green" />
</View>

<View style={styles.bottomContainer}>
 
  <View style={styles.row}>
  <Card title={"Ride"} icon={"electric-car"} bgColor={"#c1e1c5"} />
  <Card title={"Delivery"} icon={"bike-scooter"} bgColor={"#bedadc"} /> 
  </View>
  
   <View style={styles.row}>
   <Card title={"Mart"} icon={"add-shopping-cart"} bgColor={"#fef3bd"} />
   <Card title={"Cash"} icon={"payments"} bgColor={"#d8e7f4"} />
  </View>
  
  <View style={styles.row}>
  <Card title={"Classified"} icon={"paid"} bgColor={"#e3eff0"} />
  <Card title={"Goods"} icon={"business"} bgColor={"#fed2d1"} />
  </View>

</View>

</View>
}


const Card = ({
  bgColor,
  icon,
  title,
}: {
  bgColor: string;
  icon: any;
  title: string;
}) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Text style={{ textAlign: "right" }}>{title}</Text>
      {/* <Text>Pohunchai <br/>har jagah!!</Text> */}
      <MaterialIcons name={icon} size={70} color="black" />
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  text:{
    fontSize:40,
    flex:1,
   justifyContent:'center',
   textAlign:'center'
  },
  header:{
    height:55,
    borderBottomColor:'gray',
    borderBottomWidth:1,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 12,
    alignItems:'center',
  marginHorizontal:7
  },
  headerText:{
    fontWeight:'bold',
    color:'green',
    fontSize:30
  },
  bannerImgView:{
    height: SCREEN_HEIGHT/4,
    backgroundColor: '#e7e7e7',
    paddingHorizontal:20,
    paddingTop:10
    },
    bannerImg:{
      height: "80%",
      borderRadius: 10
    },
    bannerInfoView:{
      height:40,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      backgroundColor:'#fff',
      borderRadius:10,
      marginTop: -25,
      marginHorizontal:20,
      elevation:1,
      borderBottomWidth:1
    },
    bottomContainer:{
      flex:1,
      margin:20,
      gap:10,
    },
    row:{
      flex:1,
      gap:10,
      flexDirection:'row'
    },
    card:{
      flex:1,
      borderWidth:1,
      borderRadius:10,
      justifyContent:'space-around',
      paddingHorizontal:6
    }
});