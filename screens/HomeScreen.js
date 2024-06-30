import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems } from '../constants/data';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/coffeeCard';
import { QuestionMarkCircleIcon , MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const handleBellPress = () => {
    navigation.navigate('AboutUs'); // Navega a la pantalla AboutUsScreen
  };

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require('../assets/images/background/beansBackground1.png')}
        style={{ height: height * 0.2 }}
        className="w-full absolute -top-5 opacity-10" />
      <SafeAreaView className={ios ? '-mb-8' : ''}>
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center" >
          <Image source={require('../assets/images/profile/Logo.png')}
            className="h-9 w-9 rounded-full" />

          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} style={{ marginTop: 50 }} />
            <Text className="font-semibold text-base" style={{ marginTop: 50 }}>
              UCEspigal, Quito-Ecuador
            </Text>
          </View>
          <TouchableOpacity onPress={handleBellPress}>
            <QuestionMarkCircleIcon  size="27" color="black" />
          </TouchableOpacity>
        </View>

        {/* categories */}
        <View className="px-5 mt-6" style={{ paddingHorizontal: 10, marginTop: 45 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              isActive = item.id == activeCategory;
              let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{ backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)' }}
                  className="p-4 px-5 mr-2 rounded-full shadow">
                  <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>

      </SafeAreaView>

      {/* coffee cards */}
      <View className={`overflow-visible flex justify-center flex-1 ${ios ? 'mt-10' : ''}`}>
        <View>
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width * 0.63}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
        </View>

      </View>


    </View>
  )
}
