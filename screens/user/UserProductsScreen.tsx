import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

type UserProductsScreenProps = {}

const UserProductsScreen: FC<UserProductsScreenProps> = props => {
  return (
    <View style={styles.screen}>
      <Text>UserProductsScreen</Text>
    </View>
  )
}
export default UserProductsScreen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
