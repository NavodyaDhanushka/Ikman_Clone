import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
            <Text style={styles.sub}>This is a basic profile placeholder (no backend).</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
    text: { fontSize: 22, fontWeight: '800', marginBottom: 8 },
    sub: { textAlign: 'center', color: '#555' },
});
