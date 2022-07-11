import React, { useContext } from "react";
import {View, Text, FlatList, Button, Alert} from 'react-native'
import users from '../data/users'

export default props => {

    const {state, dispatch} = useContext(UsersContext)

    function confirmUserDeletion(user){
        Alert.alert('Exluir usuário', 'Deseja excluir o usuário?' [
            {
                text: "sim",
                onPress(){
                    dispatch({
                        type: "deleteUser",
                        payload: user,
                    })
                }
            },
            {
                text: "não"
            }
        ])
    }

    function getActions(user){
        return(
            <>
                <Button 
                    onPress={() => props.navigation.navigate('UserFrom', user)}
                    type='clear'
                    icon={<Icon name="edit" size="25" color="orange"/>}
                />
                <Button 
                    onPress={() => confirmUserDeletion(user)}
                    type='clear'
                    icon={<Icon name="delete" size="25" color="red"/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                leftAvatar={{source: {uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm', user)}
            />
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data = {state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}