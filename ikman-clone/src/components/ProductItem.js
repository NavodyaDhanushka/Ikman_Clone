import { Pressable, Image, Text, View, StyleSheet } from 'react-native';

const priceText = (n) => (n && n > 0 ? `Rs ${n.toLocaleString('en-LK')}` : 'Negotiable');

export default function ProductItem({ item, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.row}>
            <Image source={{ uri: item.image }} style={styles.thumb} />
            <View style={{ flex: 1 }}>
                <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{priceText(item.price)}</Text>
                <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: 'row', gap: 12, padding: 12, backgroundColor: '#fff', borderRadius: 12, elevation: 1 },
    thumb: { width: 90, height: 90, borderRadius: 10 },
    title: { fontWeight: '700', fontSize: 15, marginBottom: 4 },
    price: { fontWeight: '600', marginBottom: 4 },
    desc: { color: '#555' },
});
