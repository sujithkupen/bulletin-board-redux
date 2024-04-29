import { useState } from "react";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();
     const [title, setTitle] = useState("");
     const [content, setContent] = useState("");
     const [userId, setUserId] = useState("");
     const [addRequestStatus, setAddRequestStatus] = useState("idle");
     const users = useSelector(selectAllUsers);
     
     const onTitleChanged = (e) => setTitle(e.target.value);
     const onContentChanged = (e) => setContent(e.target.value);
     const onAuthorChanged = (e) => setUserId(e.target.value);
     const canSave = [title, content, userId].every(Boolean) && addRequestStatus === "idle";

     const onSavePostClicked = () => {
       if (canSave) {
         try {
           setAddRequestStatus("pending");
           dispatch(addNewPost({ title, body: content, userId })).unwrap();

           setTitle("");
           setContent("");
           setUserId("");
         } catch (err) {
           console.error("Failed to save the post", err);
         } finally {
           setAddRequestStatus("idle");
         }
       }
     };

     const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ));
      return (
        <section>
          <h2 className="text-align-center">Add a New Post</h2>
          <br/>
          <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
            />

            <label htmlFor="postContent">Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={onContentChanged}
            />
            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
              <option value=""></option>
              {usersOptions}
            </select>

            <button
              type="button"
              onClick={onSavePostClicked}
              disabled={!canSave}
            >
              Save Post
            </button>
          </form>
        </section>
      );
  
}

export default AddPostForm