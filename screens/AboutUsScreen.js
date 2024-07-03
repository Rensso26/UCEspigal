import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { themeColors } from '../theme';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/profile/Logo.png')} style={styles.logo} />
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido a UCEspigal</Text>
        <Text style={styles.description}>
          Somos una panadería comprometida con la calidad y la frescura de nuestros productos.
          Disfruta de una experiencia única con nuestros deliciosos panes y café.
        </Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nuestra Misión</Text>
          <Text style={styles.sectionContent}>
            Proveer a nuestros clientes productos de panadería frescos y deliciosos, manteniendo
            altos estándares de calidad y servicio.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nuestros Servicios</Text>
          <Text style={styles.sectionContent}>
            Ofrecemos una variedad de panes artesanales y café recién hecho, perfectos para
            cualquier ocasión.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nuestra Visión</Text>
          <Text style={styles.sectionContent}>
            Ser reconocidos como la panadería de referencia en calidad y frescura en nuestra comunidad.
          </Text>
        </View>
      </View>
      <View style={styles.profileImagesContainer}>
        <View style={styles.profile}>
          <Image source={require('../assets/images/profile/bob.jpg')} style={styles.profileImage} />
          <Text style={styles.profileName}>Freddy Tappia</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('../assets/images/profile/profile_HD.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>B4LB3R1TH</Text>
        </View>
        <View style={styles.profile}>
          <Image source={require('../assets/images/profile/avatar.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Rensso Parra</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bgLight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: themeColors.textDark,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: themeColors.textDark,
    lineHeight: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: themeColors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionContent: {
    fontSize: 14,
    color: themeColors.textDark,
    textAlign: 'center',
  },
  profileImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  profile: {
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    marginTop: 8,
    fontSize: 14,
    color: themeColors.textDark,
  },
});

export default AboutUsScreen;
