import React from 'react';

export interface PostListPageProps {
    posts: any[];
}

const PostListPage = ({ posts }: PostListPageProps) => {
    return (
        <div>
            <h1>Post List Page</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostListPage;

export async function getStaticProps(context: any) {
    const req = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
    const data = await req.json();

    return {
        props: {
            posts: data.data.map((dataItem: any) => ({ id: dataItem.id, title: dataItem.title })),
        },
    };
}
