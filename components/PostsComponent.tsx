import Link from 'next/link'
import { urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

function PostsComponent({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3 p-2  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:p-6">
      {posts.map((post, index) => (
        <Link key={index} href={`/post/${post.slug.current}`}>
          <div className="group cursor-pointer border rounded-lg overflow-hidden">
            {post.mainImage && (
              <img
                className="h-60 w-full object-cover
                 transition-transform duration-200 ease-in-out group-hover:scale-105"
                src={urlFor(post.mainImage).url()}
                alt=""
              />
            )}
            <div className="flex justify-between bg-white p-5">
              <div>
                <p className="text-lg font-bold">{post.title}</p>
                <p className="text-xs">{post.description}</p>
              </div>
              <div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostsComponent
