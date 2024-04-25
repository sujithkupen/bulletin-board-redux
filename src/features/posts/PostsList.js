import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import React from 'react'
import TimeAgo from "./TimeAgo";
const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    const orderedPost= posts.slice().sort((a,b) => b.date.localeCompare(a.date));
    const renderedPosts = orderedPost.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
            <ReactionButtons post={post} />
            </p>
        </article>
        ));
      
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}

    </section>
  )
}

export default PostsList