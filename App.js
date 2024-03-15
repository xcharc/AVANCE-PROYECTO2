import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const productsData = [
  { id: 1, name: 'VESTIDO ROJO DETALLE DE FLORES', price: 1000 },
  { id: 2, name: 'VESTIDO AZUL MARINO CUELLO ALTO', price: 2000 },
  { id: 3, name: 'VESTIDO ROJO VINO CORTE V ', price: 3000 },
  { id: 1, name: 'VESTIDO BLANCO APERLADO LARGO', price: 1000 },
  { id: 2, name: 'VESTIDO AZUL MARINO CON ESCOTE', price: 2100 },
  { id: 3, name: 'VESTIDO VERDE ESCOTE ESPALDA ', price: 1500 },
];

//en esta parte se implementará la API del proyecto. NOTA: EL PRODUCTO TENDRÁ EL APARTADO DE IMAGEN Y DETALLES


//CARRITO DE COMPRAS
const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setTotalPrice(totalPrice + product.price);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vestidos disponibles:</Text>
      <FlatList
        data={productsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name} - ${item.price}</Text>
            <Button title="Agregar al carrito" onPress={() => addToCart(item)} color="#00FF3A" />

          </View>
        )}
      />
      <Text style={styles.title}>Carrito de compras:</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name} - ${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${totalPrice}</Text>
      <Button title="Vaciar carrito" onPress={clearCart} color="#FF0000" />
      <Button title="Pagar" onPress={() => alert('Implementaremos el pago')} color="#00FF3A" />
    </View>
  );
};
//PARTE VISUAL DE LA PANTALLA EN GENERAL
const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
    backgroundColor: '#FFF6F6',
  },
  //TITULO
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cartItem: {
    marginBottom: 10,
  },
  total: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShoppingCart;
