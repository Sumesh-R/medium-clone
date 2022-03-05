import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import MainBanner from '../components/MainBanner'
import PostComponent from '../components/PostComponent'
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
      <div>
        {posts.map((post, index) => (
          <PostComponent key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    slug,
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
  }
}
export default Home
