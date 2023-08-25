import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import React from 'react'

export interface PostDetailPageProps {}

export default function PostDetailPage(Props: PostDetailPageProps) {
  return <div>PostDetailPage</div>
}

export async function getStaticPaths() {
  const req = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1')
  const data = await req.json()

  data.data.map((post: any) => {
    params: {
      postId: '1'
    }
  })
  return {
    paths: [
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
      { params: { postId: '4' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps<PostListPageProps>(context: GetStaticPropsContext) {
  const postId = context.params?.postId

  if (!postId) return { notFound: true }

  const req = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`)
  const data = await req.json()

  return {
    props: {
      posts: {},
    },
  }
}
