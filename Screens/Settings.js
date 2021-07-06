import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import "react-native-gesture-handler";
import { ListItem } from "react-native-elements";

function Settings() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Colorscheme</ListItem.Title>
                        <ListItem.Subtitle>Change the colors of the app</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Language</ListItem.Title>
                        <ListItem.Subtitle>The default language</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Font Size</ListItem.Title>
                        <ListItem.Subtitle>The size of the text</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <Text></Text>
                <Text style={styles.text}>Readings</Text>
                <ListItem bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Remove Extra Spacing</ListItem.Title>
                        <ListItem.Subtitle>Adjusts the whitespace in the daily reading</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <Text></Text>
                <Text style={styles.text}>Catholic App v1.0.0</Text>
                <Text style={styles.text}>Changelog ></Text>
                <Text style={styles.text}>Development Page ></Text>
                <Text style={styles.text}>Copyright Chad Wilson 2021</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        paddingTop: 20,
    },
    text: {
        fontSize: 14,
        color: "#555555",
    },
    italic: {
        fontSize: 14,
        color: "#555555",
        fontStyle: "italic",
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

export { Settings };
