import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    useEffect(() => {
        if(postStatus === 'idle'){
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);
    let content;
    if (postStatus === 'loading'){
        content = <div className="loader">Loading...</div>
    } else if (postStatus === 'succeeded'){
        const orderedPost= posts.slice().sort((a,b) => b.date.localeCompare(a.date));
        content = orderedPost.map((post) => (
            <PostsExcerpt key={post.id} post={post}/>
        ));
    }
    else if (postStatus === 'failed'){
        content = <div>{error}</div>
    }
      
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}

    </section>
  )
}

export default PostsList