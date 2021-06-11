import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import "react-native-gesture-handler";

function Introduction() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>English Translation</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>Latin Translatin</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>
        </ScrollView>
    );
}

function Examen() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.title}>First Commandment</Text>
                <Text style={styles.italic}>I am the LORD your God. You shall worship the Lord your God and him only shall you serve.</Text>
                <Text></Text>
                <Text style={styles.text}>Have I</Text>
                <Text style={styles.text}>- Disobeyed the commandments of God or the Church?</Text>
                <Text style={styles.text}>- Refused to accept what God has revealed as true, or what the Catholic Church professes for belief?</Text>
                <Text style={styles.text}>- Denied the existence of God?</Text>
                <Text style={styles.text}>- Nourished and protected my faith?</Text>
                <Text style={styles.text}>- Rejected everything opposed to a sound faith?</Text>
                <Text style={styles.text}>- Deliberately misled others about doctrine or the faith?</Text>
                <Text style={styles.text}>- Rejected the Catholic faith, joined another Christian denomination, or joined or practiced another religion?</Text>
                <Text style={styles.text}>- Joined a group forbidden to Catholics (Masons, communists, etc.)?</Text>
                <Text style={styles.text}>- Despaired about my salvation or the forgiveness of my sins?</Text>
                <Text style={styles.text}>- Presumed on God's mercy? (Committing a sin in expectation of forgiveness, or asking for forgiveness without conversion and practicing virtue.)</Text>
                <Text style={styles.text}>- Loved someone or something more than God (money, power, sex, ambition, etc.)?</Text>
                <Text style={styles.text}>- Let someone or something influence my choices more than God?</Text>
                <Text style={styles.text}>- Engaged in superstitious practices (horoscopes, fortune tellers, etc.)?</Text>
                <Text style={styles.text}>- Been involved in the occult (Seances, ouija board, worship of Satan, etc.)?</Text>
                <Text style={styles.text}>- Formally left the Catholic Church?</Text>
                <Text style={styles.text}>- Hidden a serious sin or told a lie in confession?</Text>
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

export { Introduction, Examen };
