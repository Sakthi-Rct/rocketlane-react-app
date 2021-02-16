import React, { createContext, useEffect, useState } from "react";
import get from "./util/api";
import API_END_POINT from "./constant";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [emojisList, setEmojisList] = useState([]);
  const [userList, setUserList] = useState([{ id: 1, name: "Ram" }]);
  const [user, setCurrentUser] = useState({});

  useEffect(() => {
    console.log("api call");
    get(API_END_POINT.EMOJIS)
      .then((resp) => {
        if (resp) {
          console.log("emojisList: ", resp);
          setEmojisList(resp);
        }
      })
      .catch((error) => {
        console.log("Error fetching emoji list :: ", error);
      });
  }, []);
  useEffect(() => {
    get(API_END_POINT.USERS)
      .then((resp) => {
        if (resp) {
          console.log("userList: ", resp);
          setUserList(resp);
          //assuming the first user to be the current user
          const user = resp[0];
          setCurrentUser(user);
        }
      })
      .catch((error) => {
        console.log("Error fetching user list :: ", error);
      });
  }, []);
  return (
    <AppContext.Provider
      value={{
        emojisListProvider: [emojisList, setEmojisList],
        userProvider: [user, setCurrentUser],
        userListProvider: [userList, setUserList],
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
