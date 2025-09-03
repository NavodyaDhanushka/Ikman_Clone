import { useLayoutEffect, useMemo } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { PRODUCTS } from '../data/products';

export default function ProductDetailsScreen({ route, navigation }) {
    const { productId } = route.params;
    const product = useMemo(() => PRODUCTS.find(p => p.id === productId), [productId]);

    useLayoutEffect(() => {
        navigation.setOptions({ title: product?.title ?? 'Details' });
    }, [navigation, product]);

    if (!product) return null;

    const priceText = product.price > 0 ? `Rs ${product.price.toLocaleString('en-LK')}` : 'Negotiable';

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{priceText}</Text>
            <Text style={styles.desc}>{product.description}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    image: { width: '100%', height: 260, borderRadius: 12, marginBottom: 12 },
    title: { fontSize: 20, fontWeight: '800', marginBottom: 6 },
    price: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
    desc: { fontSize: 15, lineHeight: 22, color: '#444' },
});
