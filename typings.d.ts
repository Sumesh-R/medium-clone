export interface Post {
  _id: string
  author: Author
  description: string
  mainImage: Image
  slug: Slug
  title: string
  body: [object]
}

export interface Author {
  image: Image
  name: string
}

export interface Image {
  _type: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export interface Slug {
  _type: string
  current: string
}
