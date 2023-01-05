import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ProductElement = props => {

  const colorStyle = {
    backgroundColor: props.hexCode,
  };
  
  const textStyle = {
    color:
      parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  render  = () => JSX.Element; {
    return(
      <View style={[styles.box, colorStyle]}>
        <Text style={[styles.text, textStyle]}>
          {props.colorName} {props.hexCode}
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