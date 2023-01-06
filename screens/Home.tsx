import React, { useEffect, useState } from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import productsList from "../global_var";

const Home = () => {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }: {type:any, data:any}) => {

    setScanned(true);

    productsList.push( {id: String(productsList.length+1), productName: data} );

    console.log(data);

    alert(`Ça marche ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <SafeAreaView>
          <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
          />
          {scanned && <Button title={'Appuyer pour scanner de nouveau'} onPress={() => setScanned(false)} />}
      </SafeAreaView>
  );

 
}

const styles = StyleSheet.create({
  scanner: {
    height: '95%',
    width: '100%',
    margin: 0
  }
});

export default Home;