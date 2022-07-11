import React from "react";
import Text, { Button } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import UserList from "./views/UserList";
import { Icon, Button } from "react-native-elements";
import { UserProvider } from "./context/userContext";

const Stack = createStackNavigator()

export default props => {
    return(
        <UserProvider>        
        <NavigationContainer>
            <Stack.Navigator
            initialRoutName="UserList"
            screenOptions={screenOptions}>
                <Stack.Screen
                    Name="UserList"
                    componeent={UserList}
                    options={({navigation}) => {
                        return{
                            title: "Lista de usuários",
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate("UserForm")}
                                    type="clear"
                                    icon={<Icon name="add" size={25} color="white"/>}
                                />
                            )
                        }
                    }}
                />
                  <Stack.Screen
                    Name="UserForm"
                    componeent={UserForm}
                    options={{
                        title: "Formulario de usuários"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </UserProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: 'red'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}