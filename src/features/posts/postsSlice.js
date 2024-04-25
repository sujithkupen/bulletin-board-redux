import { createSlice } from "@reduxjs/toolkit";
import {sub} from "date-fns";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "First Post!",
    content: "This is the power of Redux Toolkit!",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    //to be added
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Second Post!!",
    content: "This is the content of the second post",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {
      postsAdded: {
        reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return ({
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
          },
        },
      });
    }
  }
  }
  })

export const selectAllPosts = (state) => state.posts;
export const { postsAdded } = postsSlice.actions;
export default postsSlice.reducer;