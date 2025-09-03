import { useLayoutEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { PRODUCTS } from '../data/products';
import ProductItem from '../components/ProductItem';

export default function CategoryScreen({ route, navigation }) {
    const { categoryId, title } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({ title: title || 'Category' });
    }, [navigation, title]);

    const data = PRODUCTS.filter(p => p.categoryId === categoryId);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                contentContainerStyle={{ padding: 16 }}
                renderItem={({ item }) => (
                    <ProductItem item={item} onPress={() => navigation.navigate('ProductDetails', { productId: item.id })} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f3f4f6' },
});
