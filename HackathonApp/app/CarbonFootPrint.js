import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { Notifications } from 'expo';

const CarbonFootprintApp = () => {
  //userinputs
    const [driveTime, setDriveTime] = useState('');
  const [appliancesRunningTime, setAppliancesRunningTime] = useState('');
  const [lightsOnTime, setLightsOnTime] = useState('');
  const [showerTime, setShowerTime] = useState('');
  const [waterRunningTime, setWaterRunningTime] = useState('');
  const [driveElectricCar, setDriveElectricCar] = useState(false);
  const [useEnergyEfficientAppliances, setUseEnergyEfficientAppliances] = useState(false);
  const [turnOffLightsWhenNotInUse, setTurnOffLightsWhenNotInUse] = useState(false);
  const [takeShortShowers, setTakeShortShowers] = useState(false);
  const [turnOffWaterWhenNotInUse, setTurnOffWaterWhenNotInUse] = useState(false);

  const calculateCarbonFootprint = () => {
    // Compare user's input to population data and calculate carbon footprint
    // Code to perform calculations goes here
    let carbonFootprint = 0;
    
    // Assume that each mile driven in a gas-powered car results in 0.8 pounds of CO2 emissions
    let driveEmissions = 0.8 * driveTime;

    // Assume that each hour of appliances running results in 0.1 pounds of CO2 emissions
    let appliancesEmissions = 0.1 * appliancesRunningTime;

    // Assume that each hour of lights on results in 0.05 pounds of CO2 emissions
    let lightsEmissions = 0.05 * lightsOnTime;

    // Assume that each minute of showering results in 0.02 pounds of CO2 emissions
    let showerEmissions = 0.02 * showerTime;

    // Assume that each minute of water running results in 0.01 pounds of CO2 emissions
    let waterEmissions = 0.01 * waterRunningTime;

    // Add up all the emissions to get the total carbon footprint
    carbonFootprint = driveEmissions + appliancesEmissions + lightsEmissions + showerEmissions + waterEmissions;
    
    return carbonFootprint;
  };

  const giveAdvice = (carbonFootprint) => {
    if (carbonFootprint > averagePopulationFootprint) {
      Alert.alert(
        'High Carbon Footprint',
        'Based on your responses, your carbon footprint is higher than average. Here are some suggestions to reduce your footprint: ' +
        'drive electric car, use energy efficient appliances, turn off lights when not in use, take short showers, turn off water when not in use.'
      );
    } else {
      Alert.alert(
        'Low Carbon Footprint',
        'Based on your responses, your carbon footprint is lower than average. Keep up the good work!'
      );
    }
  };

  const scheduleNotification = () => {
    // Schedule a notification to remind the user to complete the survey again tomorrow
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9);
    tomorrow.setMinutes(0);

    Notifications.scheduleLocalNotificationAsync({
      title: 'Complete Carbon Footprint Survey',
      body: 'Don\'t forget to complete the carbon footprint survey again today!',
      android: {
        sound: true,
      },
      ios: {
        sound: true,
      },
      repeat: 'day',
      schedule: {
        at: tomorrow,
      },
    });
  };

      
}

export default CarbonFootprintApp
