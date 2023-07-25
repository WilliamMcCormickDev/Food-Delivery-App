import { View, Text, Image, SafeAreaView, Platform, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
//import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // useEffect(() => {
    //     sanityClient.fetch(`
    //     *[_type == "featured"] {
    //         ...,
    //         restaurants[]->{
    //             ...,
    //             dishes[]->
    //         }
    //     }`).then(data => {
    //         setFeaturedCategories(data);
    //     });
    // }, []);
    console.log(featuredCategories);
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 50 : 0 }} className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-2">
                <View className="basis-1/7 p-1 pl-2 pr-2 px-3">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru",
                        }}
                        className="h-10 w-10 bg-gray-300 pb-4 rounded-full"
                    />
                </View>
                <View className="basis-3/4 flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                        Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl">
                        Current Location!
                        <View className="pl-1 pt-2">
                            <ChevronDownIcon size={20} color="#00CCBB" />
                        </View>
                    </Text>
                </View>
                <View className="basis-1/7 p-3">
                    <UserIcon size={35} color="#00CCBB" />
                </View>
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-3">
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20}/>
                    <TextInput
                        placeholder="Restaurants and Cuisines"
                        keyboardType='defualt'
                    />
                </View>

                <AdjustmentsVerticalIcon color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom: 100}}>
                {/* Categories */}
                <Categories />

                {/* Featured Row */}
                <FeaturedRow
                id="123"
                title="Featured"
                description="Paid placements from our partners"
                />
                <FeaturedRow
                id="1234"
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!"
                />
                <FeaturedRow
                id="12345"
                title="Offers near you!"
                description="Why not support your local restaurant tonight!"
                />
                 <FeaturedRow
                id="123"
                title="Featured"
                description="Paid placements from our partners"
                />
                <FeaturedRow
                id="1234"
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!"
                />
                <FeaturedRow
                id="12345"
                title="Offers near you!"
                description="Why not support your local restaurant tonight!"
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen