import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            {/* Profile Picture */}
            <Image
                source={{ uri: "https://i.pravatar.cc/150?img=12" }} // Dummy profile image
                style={styles.avatar}
            />

            {/* User Info */}
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@example.com</Text>
            <Text style={styles.phone}>+1 234 567 890</Text>

            {/* Divider */}
            <View style={styles.divider} />

            {/* About Section */}
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.about}>
                Passionate software developer with a love for mobile apps and
                problem-solving. Loves React Native, backend APIs, and building
                impactful products.
            </Text>

            {/* Edit Button */}
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", padding: 100, backgroundColor: "#fff" },
    avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
    name: { fontSize: 22, fontWeight: "bold", marginBottom: 4 },
    email: { fontSize: 14, color: "#555" },
    phone: { fontSize: 14, color: "#555", marginBottom: 15 },
    divider: { height: 1, backgroundColor: "#ddd", width: "90%", marginVertical: 15 },
    sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 6 },
    about: { fontSize: 14, color: "#444", textAlign: "center", marginBottom: 20 },
    button: {
        backgroundColor: "#0d8a6a",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
