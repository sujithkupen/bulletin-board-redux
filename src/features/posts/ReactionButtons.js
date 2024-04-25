import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  thumbsDown: "👎",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};
const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtonsRow = Object.entries(reactionEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          className="reactionButton"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );
  return <div>{reactionButtonsRow}</div>;
};

export default ReactionButtons;
