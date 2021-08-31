import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { NavigationStackProp } from 'react-navigation-stack'

import { Product } from '../models/product'
import ProductItem from './ProductItem'

type ProductsListProps = {
  products: Product[]
  navigation: NavigationStackProp
  action: 'add' | 'remove'
}

const ProductsList: FC<ProductsListProps> = ({
  products,
  navigation,
  action,
}) => {
  return (
    <FlatList
      key={2}
      numColumns={2} // TODO: make dynamic
      contentContainerStyle={styles.container}
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ProductItem
          {...item}
          style={styles.item}
          navigation={navigation}
          action={action}
        />
      )}
    />
  )
}
export default ProductsList
const styles = StyleSheet.create({
  container: {},
  item: {
    margin: 8,
  },
})
