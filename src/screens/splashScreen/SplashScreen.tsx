import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { styles } from './SplashStyles'

type Props = {
    navigation: StackNavigationProp<any>
}


const SplashScreen: React.FC<Props> = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login')
        }, 2000)

        return () => clearTimeout(timer)
    }, [navigation])


    return (
        <View style={styles.container}>
        <View>
            <Image source={(require('../../../assets/Residential.png'))} />
        </View>
        </View>
    )
}

export default SplashScreen

