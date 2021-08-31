import React, { FC } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {
  ImageBackground,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  // TouchableNativeFeedback,
} from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'
import { Card, Text } from 'react-native-paper'
import { NavigationStackProp } from 'react-navigation-stack'

import { Product } from '../models/product'
import Colors from '../constants/Colors'
import { useAppDispatch } from '../hooks/redux'
import { CartAction } from '../reducers/cart'

type ProductItemProps = Product & {
  style?: StyleProp<ViewStyle>
  navigation: NavigationStackProp
  action: 'add' | 'remove'
}

const ProductItem: FC<ProductItemProps> = ({
  id,
  imageUrl,
  price,
  title,
  style,
  navigation,
  description,
  ownerId,
  action,
}) => {
  const dispatch = useAppDispatch()
  const buttonPressHandler = () => {
    if (action === 'add') {
      dispatch(CartAction.addItem(id))
    } else {
      dispatch(CartAction.removeItem(id))
    }
  }
  const itemPressHandler = () => {
    navigation.navigate('ProductDetails', {
      id,
      imageUrl,
      price,
      title,
      description,
      ownerId,
    })
  }
  return (
    <Card style={[styles.card, style]}>
      <TouchableNativeFeedback
        onPress={itemPressHandler}
        background={TouchableNativeFeedback.Ripple('#0002', false)}>
        <ImageBackground style={styles.image} source={{ uri: imageUrl }}>
          <View style={styles.price}>
            <Text style={styles.priceText}>{`$ ${price.toString()}`}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        style={styles.cartButton}
        background={TouchableNativeFeedback.Ripple('#fffc', false)}
        onPress={buttonPressHandler}>
        <MaterialIcons
          name={action === 'add' ? 'add-shopping-cart' : 'remove-shopping-cart'}
          size={22}
          color="white"
        />
        <Text style={styles.cartLabel} numberOfLines={2}>
          {action === 'add' ? 'Add to cart' : 'Remove from cart'}
        </Text>
      </TouchableNativeFeedback>
    </Card>
  )
}
export default ProductItem
const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    overflow: 'hidden',
    flex: 1,
  },
  image: {
    height: 240, // TODO: make dynamic
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  price: {
    backgroundColor: 'white',
    borderRadius: 100,
    paddingVertical: 3,
    paddingHorizontal: 8,
    margin: 4,
    elevation: 4,
    overflow: 'hidden',
  },
  priceText: {
    textAlign: 'center',
    color: '#666',
  },
  footer: {
    width: '100%',
    backgroundColor: '#0004',
  },
  title: {
    fontFamily: 'OpenSansBold',
    fontSize: 18,
    color: 'white',
    padding: 8,
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    width: '100%',
  },
  cartLabel: {
    marginLeft: 8,
    fontFamily: 'OpenSansRegular',
    fontSize: 16,
    color: 'white',
  },
})
