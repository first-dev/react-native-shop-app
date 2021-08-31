import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type ProductDetailScreenProps = {}

const ProductDetailScreen: FC<ProductDetailScreenProps> = props => {
  return (
    <View style={styles.screen}>
      <Text>ProductDetailScreen</Text>
    </View>
  )
}
export default ProductDetailScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
