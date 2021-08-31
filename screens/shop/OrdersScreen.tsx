import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type OrdersScreenProps = {}

const OrdersScreen: FC<OrdersScreenProps> = props => {
  return (
    <View style={styles.screen}>
      <Text>OrdersScreen</Text>
    </View>
  )
}
export default OrdersScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
