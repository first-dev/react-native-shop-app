import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type CartScreenProps = {}

const CartScreen: FC<CartScreenProps> = props => {
  return (
    <View style={styles.screen}>
      <Text>CartScreen</Text>
    </View>
  )
}
export default CartScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
