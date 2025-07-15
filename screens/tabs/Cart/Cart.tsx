import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabLayout from '../../../layout/TabLayout'

const Cart = () => {
  return (
    <TabLayout screen_name="Cart">
        <View>
            <Text style={{color: "white", fontFamily: "poppins-regular"}}>
                Cart
            </Text>
        </View>
    </TabLayout>
  )
}

export default Cart

const styles = StyleSheet.create({})