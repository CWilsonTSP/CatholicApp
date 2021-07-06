import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, Button, Platform, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem, CheckBox } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { PaterNoster, AveMaria, SymbolumApostolorum, BenedictioMensae, SanctumMichael, SignumCrucis, DoxologiaMinor, SalveRegina, OratioFatima } from "./Screens/LatinPrayers";
import { Humility, SacredHeart } from "./Screens/Litanies";
import { Examen, Introduction } from "./Screens/Examen";
import { Readings } from "./Screens/Readings";
import { Settings } from "./Screens/Settings";
// import { Pronunciation } from "./Screens/pronunciation";

const navigationRef = React.createRef();

function PrayerScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <ListItem bottomDivider onPress={() => navigation.navigate("Basics")}>
                <ListItem.Content>
                    <ListItem.Title>Basics</ListItem.Title>
                    <ListItem.Subtitle>Shorter Prayers</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("LitanyScreen")}>
                <ListItem.Content>
                    <ListItem.Title>Litanies</ListItem.Title>
                    <ListItem.Subtitle>Litanies</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("Examen")}>
                <ListItem.Content>
                    <ListItem.Title>Examen</ListItem.Title>
                    <ListItem.Subtitle>Examination of Conscience</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            {/* <ListItem bottomDivider onPress={() => navigation.navigate("Pronunciation")}> */}
            {/*     <ListItem.Content> */}
            {/*         <ListItem.Title>Latin Pronunciation</ListItem.Title> */}
            {/*         <ListItem.Subtitle></ListItem.Subtitle> */}
            {/*     </ListItem.Content> */}
            {/*     <ListItem.Chevron /> */}
            {/* </ListItem> */}
        </ScrollView>
    );
}

function Basics({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <ListItem bottomDivider onPress={() => navigation.navigate("PaterNoster")}>
                <ListItem.Content>
                    <ListItem.Title>Pater Noster</ListItem.Title>
                    <ListItem.Subtitle>Our father</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("AveMaria")}>
                <ListItem.Content>
                    <ListItem.Title>Ave Maria</ListItem.Title>
                    <ListItem.Subtitle>Hail Mary</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("SymbolumApostolorum")}>
                <ListItem.Content>
                    <ListItem.Title>Credo</ListItem.Title>
                    <ListItem.Subtitle>Apostle's Creed</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("BenedictioMensae")}>
                <ListItem.Content>
                    <ListItem.Title>Benedictio Mensea</ListItem.Title>
                    <ListItem.Subtitle>Blessings Before and After meals</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("SanctumMichael")}>
                <ListItem.Content>
                    <ListItem.Title>Oratio ad Sanctum Michael</ListItem.Title>
                    <ListItem.Subtitle>Prayer to Saint Michael the Archangel</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("SignumCrucis")}>
                <ListItem.Content>
                    <ListItem.Title>Signum Crucis</ListItem.Title>
                    <ListItem.Subtitle>The Sign of The Cross</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("DoxologiaMinor")}>
                <ListItem.Content>
                    <ListItem.Title>Doxologia Minor</ListItem.Title>
                    <ListItem.Subtitle>Glory Be</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("SalveRegina")}>
                <ListItem.Content>
                    <ListItem.Title>Salve Regina</ListItem.Title>
                    <ListItem.Subtitle>Hail Holy Queen</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("OratioFatima")}>
                <ListItem.Content>
                    <ListItem.Title>Oratio Fatima</ListItem.Title>
                    <ListItem.Subtitle>Fatima Prayer</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ScrollView>
    );
}

function LitanyScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <ListItem bottomDivider onPress={() => navigation.navigate("LitanyOfHumility")}>
                <ListItem.Content>
                    <ListItem.Title>Litany of Humilty</ListItem.Title>
                    <ListItem.Subtitle>Litany of Humility</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>

            <ListItem bottomDivider onPress={() => navigation.navigate("SacredHeart")}>
                <ListItem.Content>
                    <ListItem.Title>Litany to the Sacred Heart of Jesus</ListItem.Title>
                    <ListItem.Subtitle>Litany to the Sacred Heart of Jesus</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ScrollView>
    );
}

function ReadingsScreen({ navigation }) {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    showDatePicker();
                }}
            >
                <Text style={{ fontSize: 14, color: "white", margin: 12 }}>DATE</Text>
            </TouchableOpacity>
        ),
    });

    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [initDate, setInitDate] = useState(new Date());
    const [myKey, setMyKey] = useState(1);
    const [lectDate, setLectDate] = useState("");

    const refreshKey = () => setMyKey(myKey + 1);
    const refreshLectDate = (newDate) => {
        setLectDate(newDate);
    };
    const refreshInitDate = (date) => {
        setInitDate(date);
    };
    const showDatePicker = () => {
        setDatePickerVisible(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date) => {
        let dateString = date.toISOString();
        let year = dateString.substring(2, 4);
        let month = dateString.substring(5, 7);
        let day = dateString.substring(8, 10);
        let newDate = month.concat(day).concat(year);
        refreshInitDate(date);
        refreshLectDate(newDate);
        refreshKey();
        console.log(lectDate);
        hideDatePicker();
    };

    return (
        <ScrollView style={styles.container}>
            <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" display="spinner" date={initDate} onConfirm={handleConfirm} onCancel={hideDatePicker} minimumDate={new Date(2013, 11, 31)} maximumDate={new Date(2021, 11, 31)} />
            <Readings key={myKey} date={lectDate} />
        </ScrollView>
    );
}

function SettingsScreen({ navigation }) {
    return (
        <ScrollView>
            <Settings />
        </ScrollView>
    );
}

const Stack = createStackNavigator();
function PrayerStackNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "#6519ba",
                },
            }}
        >
            <Stack.Screen name="Home" component={PrayerScreen} options={{ title: "PRAYERS" }} />
            <Stack.Screen name="LitanyScreen" component={LitanyScreen} options={{ title: "LITANIES" }} />
            <Stack.Screen name="Basics" component={Basics} options={{ title: "BASICS" }} />
            <Stack.Screen name="Readings" component={ReadingsScreen} options={{ title: "READINGS" }} />
            <Stack.Screen name="PaterNoster" component={PaterNoster} options={{ title: "PATER NOSTER" }} />
            <Stack.Screen name="AveMaria" component={AveMaria} options={{ title: "AVE MARIA" }} />
            <Stack.Screen name="SymbolumApostolorum" component={SymbolumApostolorum} options={{ title: "CREDO" }} />
            <Stack.Screen name="BenedictioMensae" component={BenedictioMensae} options={{ title: "BENEDICTIO MENSAE" }} />
            <Stack.Screen name="SanctumMichael" component={SanctumMichael} options={{ title: "SANCTUM MICHAEL" }} />
            <Stack.Screen name="SignumCrucis" component={SignumCrucis} options={{ title: "SIGNUM CRUCIS" }} />
            <Stack.Screen name="DoxologiaMinor" component={DoxologiaMinor} options={{ title: "DOXOLOGIA MINOR" }} />
            <Stack.Screen name="SalveRegina" component={SalveRegina} options={{ title: "SALVE REGINA" }} />
            <Stack.Screen name="OratioFatima" component={OratioFatima} options={{ title: "ORATIO FATIMA" }} />
            <Stack.Screen name="LitanyOfHumility" component={Humility} options={{ title: "LITANY OF HUMILITY" }} />
            <Stack.Screen name="SacredHeart" component={SacredHeart} options={{ title: "LITANY TO THE SACRED HEART OF JESUS" }} />
            <Stack.Screen name="Examen" component={Examen} options={{ title: "Examen" }} />
            {/* <Stack.Screen name="Pronunciation" component={Pronunciation} options={{ title: "LATIN PRONUNCIATION" }} /> */}
        </Stack.Navigator>
    );
}

const ReadingStack = createStackNavigator();
function ReadingsStackNavigator({ navigation }) {
    return (
        <ReadingStack.Navigator
            screenOptions={{
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "#6519ba",
                },
            }}
        >
            <ReadingStack.Screen name="Readings" component={ReadingsScreen} options={{ title: "READINGS" }} />
        </ReadingStack.Navigator>
    );
}
const Tab = createBottomTabNavigator();
function App() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Tab.Navigator
                tabBarOptions={{
                    activeBackgroundColor: "#111111",
                    inactiveBackgroundColor: "#333333",
                    activeTintColor: "white",
                    inactiveTintColor: "white",
                }}
            >
                <Tab.Screen
                    name="ReadingsScreenNavigator"
                    component={ReadingsStackNavigator}
                    options={{
                        title: "READINGS",
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="book-open-page-variant" color={color} size={size} />,
                    }}
                />
                <Tab.Screen
                    name="PrayersStackNavigator"
                    component={PrayerStackNavigator}
                    options={{
                        title: "PRAYERS",
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="bookmark-multiple-outline" color={color} size={size} />,
                    }}
                />
                <Tab.Screen
                    name="SettingsScreenNavigator"
                    component={SettingsScreen}
                    options={{
                        title: "SETTINGS",
                        tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="settings-outline" color={color} size={size} />,
                    }}
                />
            </Tab.Navigator>
            <StatusBar style="light" />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        fontSize: 20,
    },
    separator: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        marginBottom: 15,
    },
});

export default App;
