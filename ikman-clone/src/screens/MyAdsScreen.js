import React from "react";
import { View, Text, StyleSheet, FlatList, Pressable, Image } from "react-native";

const categories = [
    { id: "1", name: "Cars", icon: "https://img.icons8.com/color/96/car.png" },
    { id: "2", name: "Motorbikes", icon: "https://img.icons8.com/color/96/motorbike.png" },
    { id: "3", name: "Mobile Phones", icon: "https://img.icons8.com/color/96/smartphone.png" },
    { id: "4", name: "Property", icon: "https://img.icons8.com/color/96/home.png" },
    { id: "5", name: "Home & Garden", icon: "https://img.icons8.com/color/96/lawn-mower.png" },
    { id: "6", name: "Jobs", icon: "https://img.icons8.com/color/96/briefcase.png" },
];

export default function MyAdsScreen() {
    const renderCategory = ({ item }) => (
        <Pressable style={styles.card}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <Text style={styles.cardText}>{item.name}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> </Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.welcome}>Welcome Navodya Dhanushka!</Text>
                <Text style={styles.sub}>Choose an option below to post an ad</Text>

                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={renderCategory}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    contentContainerStyle={{ marginTop: 20 }}
                />

                <View style={styles.dropdown}>
                    <Text style={styles.dropdownText}>Sell in other categories </Text>
                </View>

                <View style={styles.dropdown}>
                    <Text style={styles.dropdownText}>Look for something </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerLink}>Posting allowance</Text>
                    <Text style={styles.footerDivider}>|</Text>
                    <Text style={styles.footerLink}>Posting rules</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    header: { backgroundColor: "#ffffff", padding: 15 },
    headerText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
    body: { padding: 16 },
    welcome: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
    sub: { color: "#555" },
    card: {
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        marginBottom: 16,
        flex: 1,
        marginHorizontal: 5,
        elevation: 2,
    },
    icon: { width: 50, height: 50, marginBottom: 10 },
    cardText: { fontSize: 14, fontWeight: "600" },
    dropdown: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 6,
        padding: 12,
        marginTop: 10,
    },
    dropdownText: { color: "#333" },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
    },
    footerLink: { color: "#0d8a6a", marginHorizontal: 5 },
    footerDivider: { color: "#aaa" },
});
