import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ScrollView, View, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function PaterNoster() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>Our Father, who art in heaven hallowed be Thy name. Thy kingdom come, thy will be done, on earth as it is in heaven.</Text>
                <Text></Text>
                <Text style={styles.text}>Give us this day our daily bread, and forgive us our trespasses as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra. </Text>
                <Text></Text>
                <Text style={styles.text}>Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>
        </ScrollView>
    );
}

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

function SymbolumApostolorum() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>
                    I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, His only Son, our Lord, Who was conceived by the power of the Holy Spirit and born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; He descended into hell; on the third day He rose again from the dead; He ascended into heaven and is seated at the right hand of God, the Father Almighty; from there He will come to judge the living and the dead
                </Text>
                <Text></Text>
                <Text style={styles.text}>I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae. Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus, descendit ad inferos, tertia die resurrexit a mortuis, ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos.</Text>
                <Text></Text>
                <Text style={styles.text}>Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>
        </ScrollView>
    );
}

function BenedictioMensae() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.heading}>Blessing Before Meals</Text>
                <Text></Text>
                <Text style={styles.text}>Bless us, O Lord, and these Thy gifts which we are about to receive from Thy bounty. Through Christ our Lord.</Text>
                <Text></Text>
                <Text style={styles.sub}>Add for midday:</Text>
                <Text style={styles.text}>May the King of everlasting glory make us partakers of the heavenly table.</Text>
                <Text></Text>
                <Text style={styles.sub}>Add for evening:</Text>
                <Text style={styles.text}>May the King of ever-lasting glory lead us to the banquet of life eternal.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>Benedic, Domine, nos et haec tua dona quae de tua largitate sumus sumpturi. Per Christum Dominum nostrum.</Text>
                <Text></Text>
                <Text style={styles.sub}>Ante prandium:</Text>
                <Text style={styles.text}>Mensae caelestis participes faciat nos, Rex aeternae gloriae.</Text>
                <Text></Text>
                <Text style={styles.sub}>Ante cenam:</Text>
                <Text style={styles.text}>Ad cenam vitae aeternae perducat nos, Rex aeternae gloriae.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <View>
                <Text style={styles.heading}>Blessing After Meals</Text>
                <Text></Text>
                <Text style={styles.text}>We thank thee Lord, for all Thy benefits. Who livest and reignest forever and ever.</Text>
                <Text></Text>
                <Text style={styles.text}>V. May the Lord grant us His peace.</Text>
                <Text></Text>
                <Text style={styles.text}>R. And life everlasting.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>Agimus tibi gratias, omnipotens Deus, pro universis beneficiis tuis, qui vivis et regnas in saecula saeculorum.</Text>
                <Text></Text>
                <Text style={styles.text}>V. Deus det nobis suam pacem.</Text>
                <Text></Text>
                <Text style={styles.text}>R. Et vitam aeternam.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>
        </ScrollView>
    );
}

function SanctumMichael() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>Saint Michael the Archangel, defend us in battle; be our defense against the wickedness and snares of the devil. May God rebuke him, we humbly pray. And do thou, O prince of the heavenly host, by the power of God thrust into hell Satan and all the evil spirits who prowl about the world for the ruin of souls.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>
            <View style={styles.separator}></View>
            <View>
                <Text style={styles.text}>Sancte Michael Archangele, defende nos in proelio, contra nequitiam et insidias diaboli esto praesidium. Imperet illi Deus, supplices deprecamur: tuque, Princeps militiae caelestis, Satanam aliosque spiritus malignos, qui ad perditionem animarum pervagantur in mundo, divina virtute, in infernum detrude.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>
        </ScrollView>
    );
}

function SignumCrucis() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>In the name of the Father, and of the Son, and of the Holy Spirit.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>In nomine Patris, et Filii, et Spiritus Sancti.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>
        </ScrollView>
    );
}

function DoxologiaMinor() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.text}>Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and will be forever.</Text>
                <Text></Text>
                <Text style={styles.text}>Amen.</Text>
            </View>

            <View style={styles.separator} />

            <View>
                <Text style={styles.text}>Gloria Patri, et Filio, et Spiritui Sancto. Sicut erat in principio, et nunc, et semper, et in saecula saeculorum.</Text>
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

function Example() {
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
    sub: {
        fontSize: 14,
        color: "#AF0000",
    },
    heading: {
        fontSize: 16,
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

export { PaterNoster, AveMaria, SymbolumApostolorum, BenedictioMensae, SanctumMichael, SignumCrucis, DoxologiaMinor, SalveRegina, OratioFatima, Example };
