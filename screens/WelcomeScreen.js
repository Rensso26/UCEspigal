import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing } from 'react-native';
import { themeColors } from '../theme';
import logoImage from '../assets/images/profile/Logo.png'; // Asegúrate de importar tu logo correctamente

const WelcomeScreen = ({ navigation }) => {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    // Animación de rotación del logo
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Navegar automáticamente a HomeScreen después de cierto tiempo
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer); // Limpiar temporizador al desmontar el componente
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image source={logoImage} style={[styles.logo, { transform: [{ rotate: spin }] }]} />
      <Text style={styles.companyName}>UCEspigal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.bgLight, // Usar el color de fondo de tu tema
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.text, // Usar el color de texto de tu tema
  },
});

export default WelcomeScreen;
