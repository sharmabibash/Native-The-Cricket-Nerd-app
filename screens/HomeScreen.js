import React from "react";
import { View, Text, Button, StyleSheet, Alert, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo at the top */}
            <Image
                // source={require('../assets/logo.png')} // Replace with the correct path to your logo
                style={styles.logo}
            />
            {/* Title */}
            <Text style={styles.title}>The Cricket Nerd</Text>

            {/* Button */}
            <Button
                title="Click Here"
                onPress={() => Alert.alert('Button clicked')}
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
        padding: 20
    },
    logo: {
        width: 100,  // Adjust based on your logo size
        height: 100, // Adjust based on your logo size
        marginBottom: 20,  // Adds spacing between logo and title
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,  // Adds spacing between title and button
    }
});
