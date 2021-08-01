import React from "react";
import { TouchableOpacity, StyleSheet, Text, ScrollView, View } from "react-native";
import "react-native-gesture-handler";
// import { CheckBox } from "@react-native-community/checkbox";

const first = require("../assets/examen/first.json");

class Examen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: first,
        };
    }

    onchecked(id) {
        const data = this.state.data1;
        const index = data.findIndex((x) => x.id === id);
        data[index].checked = !data[index].checked;
        this.setState(data);
    }

    renderExamen() {
        return this.state.data1.map((item, key) => {
            return (
                <TouchableOpacity
                    style={{ flexDirection: "row", alignItems: "center" }}
                    key={key}
                    onPress={() => {
                        onchecked(item.id);
                    }}
                >
                    <CheckBox value={item.checked} onValueChange={() => this.onchecked(item.id)} />
                </TouchableOpacity>
            );
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.title}>First Commandment</Text>
                    <Text style={styles.italic}>I am the LORD your God. You shall worship the Lord your God and him only shall you serve.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <CheckBox title="- Disobeyed the commandments of God or the Church?" iconType="material" checkedIcon="clear" uncheckedIcon="add" checkedColor="red" />
                </View>

                <View>
                    <Text style={styles.title}>Second Commandment</Text>
                    <Text style={styles.italic}>You shall not take the name of the Lord your God in vain.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Third Commandment</Text>
                    <Text style={styles.italic}>Remember to keep holy the Sabbath day</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Forth Commandment</Text>
                    <Text style={styles.italic}>Honor your father and your mother.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Fifth Commandment</Text>
                    <Text style={styles.italic}>You shall not kill.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Sixth and Ninth Commandments</Text>
                    <Text style={styles.italic}>You shall not commit adultery.</Text>
                    <Text style={styles.italic}>You shall not covet your neighbor's wife.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Seventh and Tenth Commandments</Text>
                    <Text style={styles.italic}>You shall not steal.</Text>
                    <Text style={styles.italic}>You shall not covet your neighbor's goods.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Eight Commandment</Text>
                    <Text style={styles.italic}>You shall not bear false witness against your neighbor.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>First Precept of the Church</Text>
                    <Text style={styles.italic}>You shall attend Mass on Sundays and Holy Days of Obligation</Text>
                    <Text></Text>
                    <Text style={styles.text}>(See examination under the Third Commandment)</Text>
                </View>

                <View>
                    <Text style={styles.title}>Second Precept of the Church</Text>
                    <Text style={styles.italic}>You shall confess your sins at least once a year.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Third Precept of the Church</Text>
                    <Text style={styles.italic}>You shall humbly recieve your Creator in Holy Commiunion at least once during the Easter season.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Fourth Precept of the Church</Text>
                    <Text style={styles.italic}>You shall keep holy the Holy Days of Obligation</Text>
                    <Text></Text>
                    <Text style={styles.text}>(See examination under the Third Commandment)</Text>
                </View>

                <View>
                    <Text style={styles.title}>Fifth Precept of the Church</Text>
                    <Text style={styles.italic}>You shall observe the prescibed days of fasting and abstinence.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Sixth Precept of the Church</Text>
                    <Text style={styles.italic}>You shall contribute to the support of the Church.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>

                <View>
                    <Text style={styles.title}>Seventh Precept of the Church</Text>
                    <Text style={styles.italic}>You shall observe the laws of the Church concerning marriage.</Text>
                    <Text></Text>
                    <Text style={styles.text}>Have I</Text>
                    <Text style={styles.text}></Text>
                </View>
            </ScrollView>
        );
    }
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
    title: {
        fontSize: 18,
        color: "#333333",
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

export { Examen };
