import React, { useEffect, useState } from "react";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button, View, Text } from "react-native";

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
    
    let response = fetch(`https://fr.openfoodfacts.org/api/v0/product/${data}`);
    if ((await response).ok) {
      const data = (await response).json();
      console.log(data);
    }
    //.then((result: { text: () => any; }) => result.text())
    //.then((textformat: any) => textformat);

    //produit = response.text();

    //.then((response: { json: () => any; }) => console.log(response.json()))
    //.then((res: any) => {prout=res});
    //.then((result: { text: () => any; }) => result.text())
    //.then((textformat: any) => console.log(textformat));

    console.log(data);

    //let obj = JSON.parse(response);
    alert(`Ça marche ${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <View>
          <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          />
          {scanned && <Button title={'Appuyer pour scanner de nouveau'} onPress={() => setScanned(false)} />}
      </View>
  );
};

export default Home;