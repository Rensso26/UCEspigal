import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { themeColors } from '../theme'; // Importa los colores de tu tema

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shopping Cart</Text>
      </View>

      {/* Item 1 */}
      <View style={styles.itemContainer}>
        <Image source={require('../assets/images/background/beansBackground1.png')} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Gucci Midi Dress</Text>
          <Text style={styles.itemPrice}>$2,500</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <TextInput style={styles.quantityInput} value="1" />
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Item 2 */}
      <View style={styles.itemContainer}>
        <Image source={require('../assets/images/background/beansBackground1.png')} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Gucci Silk Dress</Text>
          <Text style={styles.itemPrice}>$3,000</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <TextInput style={styles.quantityInput} value="1" />
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Item 3 */}
      <View style={styles.itemContainer}>
        <Image source={require('../assets/images/background/beansBackground2.png')} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Givenchy Silk Dress</Text>
          <Text style={styles.itemPrice}>$2,800</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <TextInput style={styles.quantityInput} value="1" />
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Subtotal */}
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Subtotal</Text>
        <Text style={styles.subtotalAmount}>$8,300</Text>
      </View>

      {/* Proceed to Checkout */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: themeColors.background,
    paddingTop: 20,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 10,
    justifyContent: 'center',
    height: 60,
  },
  headerText: {
    color: themeColors.text,
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
    backgroundColor: themeColors.surface,
    borderRadius: 10,
    marginBottom: 12,
  },
  itemImage: {
    width: 70,
    height: 93,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    paddingLeft: 12,
  },
  itemName: {
    color: themeColors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  itemPrice: {
    color: themeColors.text,
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors.primary,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: themeColors.onPrimary,
  },
  quantityInput: {
    width: 40,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: themeColors.surface,
    borderWidth: 0,
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5,
  },
  subtotalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 12,
  },
  subtotalText: {
    flex: 1,
    color: themeColors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  subtotalAmount: {
    color: themeColors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  checkoutButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: themeColors.primary,
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  checkoutButtonText: {
    color: themeColors.onPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default CartScreen;
