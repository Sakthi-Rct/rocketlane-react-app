import { useContext, useEffect, useState } from "react";
import Emojis from "../components/Emojis";
import { AppContext } from "../AppContext";

const Dashboard = () => {
  const { emojisListProvider, userProvider, userListProvider } = useContext(
    AppContext
  );
  const [emojisList, setEmojisList] = emojisListProvider;
  const [user, setCurrentUser] = userProvider;

  const [usersPosts, setUsersPosts] = userListProvider;

  useEffect(() => {
    setUsersPosts([
      {
        postId: 1,
        usersReaction: {
          [user.id]: {
            reactions: [],
            comments: [],
          },
        },
      },
    ]);
  }, [user.id]);

  return (
    <div>
      <div className="reaction-container flex-css">
        <div className="reaction-summary">
          <div className="summary-wrap">
            <h3>Reactions</h3>
            <div className="summary-tabs"></div>
          </div>
        </div>
        <div className="add-reaction-section">
          <Emojis emojisList={emojisList} />
        </div>
      </div>

      {usersPosts.map((userPost, index) => {
        return (
          <div key={index}>
            {/* <Emojis
              emojisList={emojisList}
              usersReaction={userPost[user.id]}
              isReadOnly={false}
              setUsersPosts={setUsersPosts}
              captureUserReaction={(selectedReaction) => {
                const usersReaction = userPost.usersReaction[user.id];
                if (usersReaction && usersReaction.reactions) {
                  const reactions = usersReaction.reactions;
                  const existingIndex = reactions.findIndex((userReaction) => {
                    return userReaction.id === selectedReaction.id;
                  });
                  if (existingIndex > -1) {
                    reactions.splice(existingIndex, 1);
                  } else {
                    reactions.push(selectedReaction);
                  }
                  usersPosts[index] = {
                    ...usersPosts[index],
                    usersReaction: {
                      ...usersReaction,
                      reactions,
                    },
                  };
                  setUsersPosts(usersPosts);
                }
              }}
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
