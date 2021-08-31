import React, { FC } from 'react'
import { FlatList, Text } from 'react-native'
import { useAppSelector } from '../../hooks/redux'
import { NavigationStackScreenComponent } from 'react-navigation-stack'

type ProductDetailScreenParams = {}

const ProductsOverviewScreen: NavigationStackScreenComponent<ProductDetailScreenParams> =
  () => {
    const products = useAppSelector(state => state.products.availableProducts)
    return (
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => <Text>{itemData.item.title}</Text>}
      />
    )
  }

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
}

export default ProductsOverviewScreen
