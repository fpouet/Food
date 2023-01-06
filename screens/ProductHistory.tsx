import React, { useState } from "react";
import { Text, StyleSheet, FlatList, View, Button, ListRenderItemInfo } from "react-native";
import ProductElement from "../components/ProductElement";
import productsList from "../global_var";

interface Props {
  data: string[];
}

const ProductHistory = ({ navigation }: {navigation:any}) => {

  const [stateData, setStateData] = useState(productsList);

  React.useEffect(() => {
    setStateData(productsList);
  }, [productsList]);

  return (
    <View>
      <Button title="Scanner un produit" onPress={() => navigation.navigate('Home')}></Button>
      <FlatList
        style={styles.container}
        data={stateData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: ListRenderItemInfo<any>) => (
          <ProductElement productName={item.productName} />
        )}
        ListHeaderComponent={<Text>Les produits</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProductHistory;
