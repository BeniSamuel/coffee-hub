import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.container_text_content}>+</Text>
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D17842",
        paddingVertical: screenheight * 0.003,
        paddingHorizontal: screenwidth * 0.03,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 9
    },
    container_text_content: {
        color: "white",
        fontFamily: "poppins-medium"
    }
})