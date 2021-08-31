export default (
  id: string,
  ownerId: string,
  title: string,
  imageUrl: string,
  description: string,
  price: number
) => ({
  id,
  ownerId,
  title,
  imageUrl,
  description,
  price,
})

export type Product = {
  id: string
  ownerId: string
  title: string
  imageUrl: string
  description: string
  price: number
}
