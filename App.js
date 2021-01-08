import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "b3a94a380f9ef455ca083093cdab574d";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude, longitude) => {
     const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
     );
     this.setState({ isLoading:false, condition: data.weather[0].main, temp: data.main.temp, locationName: data.name });
  };
  getLoation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather( latitude, longitude );
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLoation();
  }
  render() {
    const { isLoading, temp, condition, locationName } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} locationName={locationName}/>;
  }
}