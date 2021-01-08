import React from "react";
import { View, Text ,StyleSheet ,StatusBar ,} from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const weatherOptions = {
    Thunderstorm : {
        iconeName:"weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"        
    },
    Drizzle: {
        iconeName:"weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconeName:"weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconeName:"weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Dusty: {
        iconeName:"weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Clear: {
        iconeName:"weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconeName:"weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
}
export default function Weather({temp,condition,locationName}) {
    return (
        <LinearGradientg
        colors={weatherOptions[condition].gradient}
        style = {styles.container}
        >
        <StatusBar barStyle = "default" />
        <View style = {styles.container1}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconeName} size={120} color = "#FFF"/>
            <Text style = {styles.temp}>{ temp + "°C"}</Text>
            <Text style = {styles.description}>{condition}</Text>
            <Text style = {styles.description}>{locationName}</Text>
        </View>
        <View style = {{...styles.container2, ...styles.textContainer}}>
            <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
            <Text style = {styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
    );
}   

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dusty", "Clear", "Clouds"]).isRequired,
    locationName: PropTypes.string.isRequired
    };

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    container1: {
        flex:2,
        justifyContent: "center",
        alignItems: "center"
    },
    container2: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        marginTop: 20,
        fontSize: 42,
        color: "#FFF"
    },
    description: {
        fontSize: 30,
        color: "#FFF",
        margin: 10
    },
    title : {
        fontSize: 40,
        fontWeight: "300",
        color: "#FFF",
        marginBottom: 10,
    },
    subtitle : {
        fontSize: 30,
        fontWeight: "600",
        color: "#FFF",
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});