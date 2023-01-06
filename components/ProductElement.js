import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ProductElement = props => {

  const colorStyle = {
    backgroundColor: '#2aa198',
  };
  
  const textStyle = {
    color: '#2aa198'
  };

  render  = () => JSX.Element; {
    return(
      <View style={[styles.box, colorStyle]}>
        <Text style={[styles.text, textStyle]}>
          {props.productName}
        </Text>
      </View>
    );
  };
};
const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default ProductElement;