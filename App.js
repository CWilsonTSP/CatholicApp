import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, Button, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


import { PaterNoster, AveMaria, SymbolumApostolorum, BenedictioMensae, SanctumMichael, SignumCrucis, DoxologiaMinor, SalveRegina, OratioFatima } from './Screens/LatinPrayers';
import { Readings } from './Screens/Readings';

const navigationRef = React.createRef();

function PrayerScreen ({ navigation }) {
    return(
        <ScrollView style={styles.container}>

            <ListItem 
                bottomDivider
                onPress={() => navigation.navigate('PaterNoster')}>
                <ListItem.Content>
                    <ListItem.Title>Pater Noster</ListItem.Title>
                    <ListItem.Subtitle>Our father</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            
            <ListItem 
                bottomDivider
                onPress={() => navigation.navigate('AveMaria')}>
                <ListItem.Content>
                    <ListItem.Title>Ave Maria</ListItem.Title>
                    <ListItem.Subtitle>Hail Mary</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem 
                bottomDivider
                onPress={() => navigation.navigate('SymbolumApostolorum')}>
                <ListItem.Content>
                    <ListItem.Title>Credo</ListItem.Title>
                    <ListItem.Subtitle>Apostle's Creed</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem 
                bottomDivider
                onPress={() => navigation.navigate('BenedictioMensae')}>
                <ListItem.Content>
                    <ListItem.Title>Benedictio Mensea</ListItem.Title>
                    <ListItem.Subtitle>Blessings Before and After meals</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem 
                bottomDivider
                onPress={() => navigation.navigate('SanctumMichael')}>
                <ListItem.Content>
                    <ListItem.Title>Oratio ad Sanctum Michael</ListItem.Title>
                    <ListItem.Subtitle>Prayer to Saint Michael the Archangel</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem 
                bottomDivider
                onPress={() => navigation.navigate('SignumCrucis')}>
                <ListItem.Content>
                    <ListItem.Title>Signum Crucis</ListItem.Title>
                    <ListItem.Subtitle>The Sign of The Cross</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem 
                bottomDivider
                onPress={() => navigation.navigate('DoxologiaMinor')}>
                <ListItem.Content>
                    <ListItem.Title>Doxologia Minor</ListItem.Title>
                    <ListItem.Subtitle>Glory Be</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem 
                bottomDivider
                onPress={() => navigation.navigate('SalveRegina')}>
                <ListItem.Content>
                    <ListItem.Title>Salve Regina</ListItem.Title>
                    <ListItem.Subtitle>Hail Holy Queen</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem 
                bottomDivider
                onPress={() => navigation.navigate('OratioFatima')}>
                <ListItem.Content>
                    <ListItem.Title>Oratio Fatima</ListItem.Title>
                    <ListItem.Subtitle>Fatima Prayer</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

        </ScrollView>
    );
}

function ReadingsScreen({ navigation }){
    navigation.setOptions({
        headerRight: () => (
            <Button 
                title="Date"
                onPress={() => {
                    showDatePicker();
                }}
            />
        )
    })

    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [initDate, setInitDate] = useState(new Date());
    const [myKey, setMyKey] = useState(1);
    const [lectDate, setLectDate] = useState("");

    const refreshKey = () => setMyKey(myKey + 1);
    const refreshLectDate = (newDate) => {
        setLectDate(newDate);
    }
    const refreshInitDate = (date) => {
        setInitDate(date);
    }
    const showDatePicker = () => {
        setDatePickerVisible(true);
    }
    const hideDatePicker = () => {
        setDatePickerVisible(false);
    }

    const handleConfirm = (date) => {
        let dateString = date.toISOString();
        let year = dateString.substring(2,4);
        let month = dateString.substring(5,7);
        let day = dateString.substring(8,10);
        let newDate = month.concat(day).concat(year);
        refreshInitDate(date);
        refreshLectDate(newDate);
        refreshKey();
        console.log(lectDate);
        hideDatePicker();
    }

    return(
        <ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                display="spinner"
                date={initDate}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                minimumDate={new Date(2013, 11, 31)}
                maximumDate={new Date(2021, 11, 31)}
            />
            <Readings key={myKey} date={lectDate}/>

        </ScrollView>

    );
}

function SettingsScreen({ navigation }){
    return(
        <ScrollView>
            <Text>This page will (eventually) have settings that the user can change.</Text>
        </ScrollView>
    );
}

const Stack = createStackNavigator();
function PrayerStackNavigator({ navigation }){
    return(
        <Stack.Navigator >
            <Stack.Screen 
                name="Home" 
                component={PrayerScreen}
                options={{ title: 'Prayers' }}
            />
            <Stack.Screen 
                name="Readings" 
                component={ReadingsScreen}
                options={{ title: 'Readings' }}
            />
            <Stack.Screen 
                name="PaterNoster" 
                component={PaterNoster} 
                options={{ title: 'Pater Noster' }}
            />
            <Stack.Screen 
                name="AveMaria"
                component={AveMaria} 
                options={{ title: 'Ave Maria' }}
            />
            <Stack.Screen
                name="SymbolumApostolorum"
                component={SymbolumApostolorum} 
                options={{ title: 'Credo' }}
            />
            <Stack.Screen
                name="BenedictioMensae"
                component={BenedictioMensae} 
                options={{ title: 'Benedictio Mensae' }}
            />
            <Stack.Screen
                name="SanctumMichael"
                component={SanctumMichael} 
                options={{ title: 'Sanctum Michael' }}
            />
            <Stack.Screen
                name="SignumCrucis"
                component={SignumCrucis} 
                options={{ title: 'Signum Crucis' }}
            />
            <Stack.Screen
                name="DoxologiaMinor"
                component={DoxologiaMinor} 
                options={{ title: 'Doxologia Minor' }}
            />
            <Stack.Screen
                name="SalveRegina"
                component={SalveRegina} 
                options={{ title: 'Salve Regina' }}
            />
            <Stack.Screen
                name="OratioFatima"
                component={OratioFatima} 
                options={{ title: 'Oratio Fatima' }}
            />
        </Stack.Navigator>
    );
}

const ReadingStack = createStackNavigator();
function ReadingsStackNavigator({ navigation }){
    return(
        <ReadingStack.Navigator >
            <ReadingStack.Screen 
                name="Readings" 
                component={ReadingsScreen}
                options={{ title: 'Readings' }}
            />
        </ReadingStack.Navigator>
    );
}
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer ref={navigationRef}>
        <Tab.Navigator >
            <Tab.Screen 
                name="ReadingsScreenNavigator"
                component={ReadingsStackNavigator}
                options={{
                    title: 'Readings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen 
                name="PrayersStackNavigator"
                component={PrayerStackNavigator}
                options={{
                    title: 'Prayers',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bookmark-multiple-outline" color={color} size={size}/>
                    )
                }}
            />
            <Tab.Screen 
                name="SettingsScreenNavigator"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="settings-outline" color={color} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
        <StatusBar style="dark"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize:20,
  },
  separator: {
    borderBottomColor:'black',
    borderBottomWidth:1,
    marginLeft:5,
    marginRight:5,
    marginTop:15,
    marginBottom:15,
  },
});

export default App;
