import { FlatList, View, StyleSheet, Text, Dimensions } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import { CATEGORIES } from '../data/categories';

const { width } = Dimensions.get('window');
const ITEM_MARGIN = 12;
const ITEM_WIDTH = (width - ITEM_MARGIN * 3) / 2; // two items per row

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Browse Categories</Text>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <CategoryItem
                        item={item}
                        width={ITEM_WIDTH}
                        onPress={() =>
                            navigation.navigate('Category', {
                                categoryId: item.id,
                                title: item.name,
                            })
                        }
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#F9FAFB',
    },
    heading: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 16,
        color: '#111827',
    },
    row: {
        justifyContent: 'space-between',
    },
    listContent: {
        paddingBottom: 24,
    },
});
