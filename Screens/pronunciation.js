import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, Row, Rows } from 'react-native-table-component';
import { Component } from 'react';


export default class Pronunciation extends Component {
    constructor(props){
        super(props);
        this.state = {
            tableHead:['','Long','Short',''],
            tableData:[
                ['a','father','facility',''],
                ['','peccata','peccata','(sins)'],
                ['au','cow','-',''],
                ['','gaudete','-','(rejoice)'],
                ['e','they','let',''],
                ['','sedet','sedet','he sits'],
                ['ae','they','',''],
                ['','caelum','','(heaven)'],
                ['oe','they','-',''],
                ['','proelium','-','(battle)'],
                ['i','machine','hit',''],
                ['','vidit','vidit','(he sees)'],
                ['o','for','confess',''],
                ['','confiteor','confiteor','(I confess)'],
                ['u','moon','put',''],
                ['','crucifixus','crucifixus','(crucifix)'],
                ['y','machine','-',''],
                ['','martyr','-','(martyr)'],
            ]
        }
    }

    render(){
        const state = this.state;
        return(
           <ScrollView style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={state.tableData} textStyle={styles.text}/>
                </Table>
            </ScrollView>
        )

    }
}

function AveMaria(){
    return(
        <ScrollView style={styles.container}>
            
            <View>
                <Text style={styles.text}>Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus.</Text>
                <Text></Text>
                <Text style={styles.text}>Holy Mary, Mother of God, pray for us sinners, now, and at the hour of our death.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator}/>


            <View>
                <Text style={styles.text}>Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus.</Text>
                <Text></Text>
                <Text style={styles.text}>Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc, et in hora mortis nostrae.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:10,
    paddingTop:20,
  },
  text: {
    fontSize:14,
    color:'#555555',
  },
  separator: {
    borderBottomColor:'black',
    borderBottomWidth:1,
    marginLeft:5,
    marginRight:5,
    marginTop:15,
    marginBottom:15,
  }

});

