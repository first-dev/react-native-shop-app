import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constants/Colors'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'

const defaultStackConfig: Parameters<typeof createStackNavigator>[1] = {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTitleStyle: {
      fontFamily: 'OpenSansBold',
    },
    headerLeftContainerStyle: {
      marginHorizontal: 11,
      marginVertical: 3,
      padding: 3,
    },
    headerRightContainerStyle: {
      marginHorizontal: 11,
      marginVertical: 3,
      padding: 3,
    },
  },
}

const ProductsStackNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetails: ProductDetailsScreen as any,
    Cart: CartScreen as any,
  },
  defaultStackConfig
)

export default createAppContainer(ProductsStackNavigator)
