import { GetStaticProps } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import MainBanner from '../components/MainBanner'
import PostsComponent from '../components/PostsComponent'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

// https://app.quicktype.io/

interface Props {
  posts: [Post]
}

function Home({ posts }: Props) {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainBanner />

      {/* Posts */}
      <PostsComponent posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
    name, 
    image
  }, description,
  mainImage,
  slug
  }`
  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
    revalidate: 6000,
  }
}
export default Home
