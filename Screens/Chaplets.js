import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import "react-native-gesture-handler";

function DivineMercy() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.italic}>Open with Signum Cruxis (The Sign of the Cross)</Text>
            </View>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}>You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> (Repeat three times) </Text>
            <Text style={styles.text}>O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You!</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> </Text>
            <View>
                <Text style={styles.italic}>Proceed with the Pater Noster (Our Father), Ave Maria (Hail Mary), Credo (The Apostle's Creed)</Text>
            </View>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> </Text>
            <View>
                <Text style={styles.italic}>On the "Pater Noster" beads, recite "Eternal Father:"</Text>
            </View>
            <Text style={styles.text}>Eternal Father, I offer you the Body, Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord Jesus Christ, in atonement for our sins and for those of the whole world.</Text>
            <Text style={styles.text}> </Text>
            <View>
                <Text style={styles.italic}>On the "Ave Maria" beads, recite the following:</Text>
            </View>
            <Text style={styles.text}>For the sake of His sorrowful Passion, have mercy on us and on the whole world.</Text>
            <Text style={styles.text}> </Text>
            <View>
                <Text style={styles.italic}>Repeat this for the remaining decades.</Text>
            </View>
            <Text style={styles.text}> </Text>
            <View>
                <Text style={styles.italic}>Conclude with the following, three times:</Text>
            </View>
            <Text style={styles.text}>Holy God, Holy Mighty One, Holy Imortal One, have mercy on us and on the whole world.</Text>
            <Text style={styles.text}> </Text>
            <View>
                <Text style={styles.italic}>Conclude with the following:</Text>
            </View>
            <Text style={styles.text}>Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair or become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.</Text>
            <Text style={styles.text}>Amen.</Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> </Text>
            <Text style={styles.text}> </Text>
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

export { DivineMercy };
