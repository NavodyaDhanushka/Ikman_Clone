import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

export default function CategoryItem({ item, onPress, width }) {
    return (
        <TouchableOpacity
            style={[styles.card, { width }]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textWrapper}>
                <Text style={styles.label}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 120,
    },
    textWrapper: {
        padding: 10,
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
    },
});
