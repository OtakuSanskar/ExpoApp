import React from "react";
import { View, Text, Button} from "react-native";

const Profile = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    );
};
export default Profile;