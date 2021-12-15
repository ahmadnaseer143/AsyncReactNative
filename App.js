import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function AddScreen({navigation}) {
  return (
   <View>
    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10, color:"white"}}>First Name</Text>
    <Input
      style={{fontSize:18, width:20}}
      placeholder='First Name'
      color="white"

    />
    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10, color:"white"}}>Last Name</Text>
    <Input
      placeholder='Last Name'
      style={{fontSize:14}}
      color="white"
    />
    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10, color:"white"}}>Email</Text>
    <Input
      style={{fontSize:14}}
      placeholder='Email'
      leftIcon={{type: 'font-awesome', name: 'envelope' }}
      color="white"
    />
    <Button
      iconRight
      title="Add"
      titleStyle={{fontSize:20,marginRight:15}}
      buttonStyle={{backgroundColor:'black',marginTop:20}}
    />
</View>
  )
}

function ViewScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>Users</Text>

      </View>
      <Button onPress={() => navigation.goBack()} title="Add User" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Add Users">
        <Drawer.Screen name="AddUsers" component={AddScreen} />
        <Drawer.Screen name="ViewUsers" component={ViewScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    justifyContent:"center"
  },
});
