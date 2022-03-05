import Link from 'next/link'
import {Post} from '../typings'

interface Props {
    post: Post
  }

function PostsComponent({post}: Props) {
  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
        <div>
            <h1>
                {post.title}
            </h1>
        </div>
    </Link>
  )
}

export default PostsComponent
