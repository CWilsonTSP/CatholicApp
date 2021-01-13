import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Button, ActivityIndicator } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

class Readings extends Component{
    _isMounted = false;
    _date = "";
    _isGood = true;

    constructor(props){
        super();
        this.state = { data: [] };
        this._date = props.date;
        console.log("recieved props: ", props.date);
    }

    getReadings(){
        let fetchString = "https://lectionary-readings-api.herokuapp.com/";
        console.log("Readings mounting");
        console.log("had props: ", this.props.date);
        if (this.props.date) {
            fetchString = fetchString.concat("?date=");
            fetchString = fetchString.concat(this.props.date);
            console.log(fetchString);
        }
        fetch(fetchString
        ).then(
            res => res.json()
        ).catch((error) => {
            console.log(error); 
            this._isGood = false;
        }).then( json => this.setState({ data: json }), this._isGood = true);
    }

    componentDidMount(){
        this._isMounted = true;
        this.getReadings();
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
    // componentDidUpdate(){
    //     console.log("Readings.js -- Component did update");
    //     this.getReadings();
    // }

    render(){
        if (this._isMounted == false){
            return(
                <View style={styles.splash}>
                    <ActivityIndicator size="large"/>
                </View>
            )
        } else if (this._isGood == false) {
            return(
                <Text>Something went wrong :(</Text>
            )
        }else{
            // console.log(typeof(this.state.data.readings));
            return(
            <ScrollView style={styles.container}>
                <Text style={{...styles.heading,textAlign:'center'}}>{this.state.data.title}</Text>
                <Text style={{...styles.heading,textAlign:'center'}}>{this.state.data.lectionary}</Text>
                    <Text style={styles.separator}></Text>
    
                {
                    this.state.data.readings.map((data, key) => {
                    // console.log(key);
                    // console.log(this.state.data.readings.length);
                    // XXX handle key being 0-4

                    // Check number of keys
                    // if 4 readings
                    if (this.state.data.readings.length == 4){
                        if (key == 0){
                            return (
                                <View>
                                    <Text style={styles.heading}>Reading I</Text>
                                    <Text style={styles.verse}>{data.verse}</Text>
                    <Text style={styles.separator}></Text>
                                <Text style={styles.text} key={key}>{data.text}</Text>
                    <Text style={styles.separator}></Text>
                                </View>
                            )
                        }else if (key == 1){
                            return (
                                <View>
                                    <Text style={styles.heading}>Psalm</Text>
                                    <Text style={styles.verse}>{data.verse}</Text>
                    <Text style={styles.separator}></Text>
                                <Text style={styles.text} key={key}>{data.text}</Text>
                    <Text style={styles.separator}></Text>
                                </View>
                            )
                        }else if (key == 2){
                            return (
                                <View>
                                    <Text style={styles.heading}>Gospel Acclamation</Text>
                                    <Text style={styles.verse}>{data.verse}</Text>
                    <Text style={styles.separator}></Text>
                                <Text style={styles.text} key={key}>{data.text}</Text>
                    <Text style={styles.separator}></Text>
                                </View>
                            )
                        }else if (key == 3){
                            return (
                                <View>
                                    <Text style={styles.heading}>Gospel</Text>
                                    <Text style={styles.verse}>{data.verse}</Text>
                    <Text style={styles.separator}></Text>
                                <Text style={styles.text} key={key}>{data.text}</Text>
                    <Text style={styles.separator}></Text>
                                </View>
                            )
                        }

                    }else { // equals 5
                        if (key == 0){
                            return (
                                <View>
                                    <Text style={styles.heading}>Reading I</Text>
                                    <Text style={styles.verse}>{data.verse}</Text>
                    <Text style={styles.separator}></Text>
                                <Text style={styles.text} key={key}>{data.text}</Text>
                    <Text style={styles.separator}></Text>
                                </View>
                            )
                        }else if (key == 1){
                            return (
                                <View>
                                    <Text style={styles.heading}>Psalm</Text>
                                    <Text style={styles.verse}>{data.verse}</Text>
                    <Text style={styles.separator}></Text>
                                <Text style={styles.text} key={key}>{data.text}</Text>
                    <Text style={styles.separator}></Text>
                                </View>
                            )
                        }else if (key == 2){
                            return (
                                <View>
                                    <Text style={styles.heading}>Reading II</Text>
                                    <Text style={styles.verse}>{data.verse}</Text>
                    <Text style={styles.separator}></Text>
                                <Text style={styles.text} key={key}>{data.text}</Text>
                    <Text style={styles.separator}></Text>
                                </View>
                            )
                        }else if (key == 3){
                            return (
                                <View>
                                    <Text style={styles.heading}>Gospel Acclamation</Text>
                                    <Text style={styles.verse}>{data.verse}</Text>
                    <Text style={styles.separator}></Text>
                                <Text style={styles.text} key={key}>{data.text}</Text>
                    <Text style={styles.separator}></Text>
                                </View>
                            )
                        }else if (key == 4){
                            return (
                                <View>
                                    <Text style={styles.heading}>Gospel</Text>
                                    <Text style={styles.verse}>{data.verse}</Text>
                    <Text style={styles.separator}></Text>
                                <Text style={styles.text} key={key}>{data.text}</Text>
                    <Text style={styles.separator}></Text>
                                </View>
                            )
                        }

                    }


                    })
                    }
            </ScrollView>
        );
        }
    }

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
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    paddingTop:20,
  },
  text: {
    fontSize:20,
  },
  verse: {
    fontSize:20,
    fontStyle:'italic',
  },
  heading: {
    fontSize:24,
    fontWeight: 'bold',
  },
  separator: {
    marginTop:15,
  }

});

export {
    Readings,
}
