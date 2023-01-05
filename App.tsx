import React, { useEffect, useState } from "react";
import { Text, StyleSheet, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductElement from "./components/ProductElement";
import { BarCodeScanner } from 'expo-barcode-scanner';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const App = () => {

  const fetch = require('node-fetch');

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: {type:any; data:any}) => {
    
    let produit;
    
    setScanned(true);
    
    
    let response = fetch(`https://fr.openfoodfacts.org/api/v0/product/${data}`)
    .then((result: { text: () => any; }) => result.text())
    .then((textformat: any) => {return JSON.parse(textformat)});

    //produit = response.text();

    //.then((response: { json: () => any; }) => console.log(response.json()))
    //.then((res: any) => {prout=res});
    //.then((result: { text: () => any; }) => result.text())
    //.then((textformat: any) => console.log(textformat));

    console.log(response);

    //let obj = JSON.parse(response);
    alert(`Ça marche ${response}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView>
        <FlatList
        style={styles.container}
        data={COLORS}
        keyExtractor={item => item.hexCode}
        renderItem={({ item }) => (
          <ProductElement hexCode={item.hexCode} colorName={item.colorName} />
        )}
        ListHeaderComponent={<Text>Les produits</Text>}
      />

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Appuyer pour scanner de nouveaux'} onPress={() => setScanned(false)} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    addingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  safeArea: {
    flex: 2
  }
});

export default App; 