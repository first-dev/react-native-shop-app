import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useAppSelector } from '../../hooks/redux'
import { NavigationStackScreenComponent } from 'react-navigation-stack'
import ProductsList from '../../components/ProductsList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../../components/UI/HeaderButton'

type ProductDetailScreenParams = {}

const ProductsOverviewScreen: NavigationStackScreenComponent<ProductDetailScreenParams> =
  ({ navigation }) => {
    const products = useAppSelector(state => state.products.availableProducts)
    return (
      <View style={styles.screen}>
        <ProductsList
          products={products}
          navigation={navigation}
          action="add"
        />
      </View>
    )
  }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
ProductsOverviewScreen.navigationOptions = ({ navigation }) => ({
  title: 'All Products',
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

export default ProductsOverviewScreen
