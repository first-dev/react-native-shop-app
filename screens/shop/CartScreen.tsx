import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import ProductsList from '../../components/ProductsList'
import { PRODUCTS } from '../../data/dummy-data'
import { useAppSelector } from '../../hooks/redux'

type CartScreenParams = {}

const CartScreen: NavigationStackScreenComponent<CartScreenParams> = ({
  navigation,
}) => {
  const cart = useAppSelector(state => state.cart)
  const products = PRODUCTS.filter(p => cart.ids.includes(p.id))
  return (
    <ProductsList products={products} navigation={navigation} action="remove" />
  )
}
export default CartScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
