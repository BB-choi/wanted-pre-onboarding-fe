import theme from 'styles/theme';

import { FeedWrapper, FeedImageArea } from './Feed.styled';
import FeedButtonsArea from './FeedItem/ButtonsArea';
import CommentsList from './FeedItem/CommentsList';
import FeedHeader from './FeedItem/Header';
import LikedArea from './FeedItem/LikedArea';

const Feed = ({ userId }) => {
  return (
    <FeedWrapper>
      <FeedHeader userId={userId} />
      <FeedImageArea>
        <img
          src="https://source.unsplash.com/random/700x1080"
          width={theme.feed.width}
        />
      </FeedImageArea>
      <FeedButtonsArea />
      <LikedArea likeCount={50000} />
      <CommentsList />
    </FeedWrapper>
  );
};

export default Feed;
