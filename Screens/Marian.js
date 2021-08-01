import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, View, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function AveMaria() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus.</Text>
                <Text></Text>
                <Text style={styles.text}>Holy Mary, Mother of God, pray for us sinners, now, and at the hour of our death.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator} />

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

function Memorare() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thy intercession was left unaided. Inspired with this confidence, I fly to thee, O Virgin of virgins, my Mother; to thee do I come; before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>Memorare, O piissima Virgo Maria, non esse auditum a saeculo, quemquam ad tua currentem praesidia, tua implorantem auxilia, tua petentem suffragia, esse derelictum. Ego tali animatus confidentia, ad te, Virgo Virginum, Mater, curro, ad te venio, coram te gemens peccator assisto. Noli, Mater Verbi, verba mea despicere; sed audi propitia et exaudi.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>
        </ScrollView>
    );
}

function SalveRegina() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>Hail holy Queen, Mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears.</Text>
                <Text></Text>
                <Text style={styles.text}>Turn then, most gracious Advocate, thine eyes of mercy toward us. And after this our exile show unto us the blessed fruit of thy womb, Jesus.</Text>
                <Text></Text>
                <Text style={styles.text}>O clement, O loving, O sweet Virgin Mary.</Text>
                <Text></Text>
                <Text style={styles.text}>V. Pray for us, O Holy Mother of God.</Text>
                <Text></Text>
                <Text style={styles.text}>R. That we may be made worthy of the promises of Christ.</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>Salve, Regina, mater misericordiae, vita, dulcedo, et spes nostra, salve. Ad te clamamus exsules filii Hevae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. </Text>
                <Text></Text>
                <Text style={styles.text}>Eia, ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende.</Text>
                <Text></Text>
                <Text style={styles.text}>O clemens, O pia, O dulcis Virgo Maria.</Text>
                <Text></Text>
                <Text style={styles.text}>V. Ora pro nobis, sancta Dei Genetrix.</Text>
                <Text style={styles.text}>R. Ut digni efficiamur promissionibus Christi. </Text>
            </View>
        </ScrollView>
    );
}

function OratioFatima() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>O my Jesus, forgive us our sins, save us from the fires of Hell. Lead all souls to Heaven, especially those in most need of Thy mercy.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>Domine Iesu, dimitte nobis debita nostra, salva nos ab igne inferiori. Perduc in caelum omnes animas, praesertim eas, quae misericordie tue maxime indigent.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
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
    separator: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 15,
        marginBottom: 15,
    },
});

export { AveMaria, SalveRegina, OratioFatima, Memorare };
