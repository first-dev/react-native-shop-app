import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import { Text, Paragraph, Button } from 'react-native-paper'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { Product } from '../../models/product'
import Section from '../../components/UI/Section'
import HeaderButton from '../../components/UI/HeaderButton'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { CartAction } from '../../reducers/cart'

type ProductDetailsScreenParams = Product

const ProductDetailsScreen: NavigationStackScreenComponent<ProductDetailsScreenParams> =
  ({ navigation }) => {
    const id = navigation.getParam('id')
    const description = navigation.getParam('description')
    const imageUrl = navigation.getParam('imageUrl')
    const price = navigation.getParam('price')
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart)
    const isInCart = cart.ids.includes(id)
    const buttonPressHandler = () => {
      if (isInCart) dispatch(CartAction.removeItem(id))
      else dispatch(CartAction.addItem(id))
    }
    return (
      <View style={styles.screen}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Section title="Description">
          <Paragraph>{description}</Paragraph>
        </Section>
        <Section title="Price">
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{price} USD</Text>
          </View>
        </Section>
        <Button
          onPress={buttonPressHandler}
          style={styles.button}
          contentStyle={styles.buttonContent}>
          {!isInCart ? 'Add to cart' : 'Remove from cart'}
        </Button>
      </View>
    )
  }
export default ProductDetailsScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  card: {
    padding: 8,
    margin: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  priceText: {
    fontSize: 32,
  },
  button: {
    margin: 8,
  },
  buttonContent: {
    padding: 8,
  },
})
ProductDetailsScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title'),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Add to cart"
        iconName="shopping-cart"
        onPress={() => navigation.navigate('Cart')}
      />
    </HeaderButtons>
  ),
})
