import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

interface LikeProps {
  onClick: () => void;
  isLiked: boolean; // Add this property to the Like component
}

const Like = ({ onClick, isLiked }: LikeProps) => {
  return (
    <>
      <span onClick={onClick}>
        {!isLiked && <FcLikePlaceholder size={40} />}
        {isLiked && <FcLike size={40} />}
      </span>
    </>
  );
};

export default Like;
