import Link from 'next/link'
import { urlFor } from '../sanity'
import {Post} from '../typings'

interface Props {
    posts: [Post]
  }

function PostsComponent({posts}: Props) {
  return (
    <div>
      {posts.map((post, index) => (
      <Link key={index} href={`/post/${post.slug.current}`}>
        <div>
            {post.mainImage && (
              <img src={
                urlFor(post.mainImage).url()
              } /> 
            )}
        </div>
    </Link>
    ))}
    </div>
  )
}


export default PostsComponent
