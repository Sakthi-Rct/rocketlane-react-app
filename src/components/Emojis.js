import React, { useState } from "react";
import addReactionImage from "../images/add-reaction.png";

const Emojis = (props) => {
  const { emojisList } = props;
  const [emojiShow, setEmojiShow] = useState(false);
  const [listEmoji, setListEmoji] = useState([]);
  const [selectedEmoji, setSelectedEmoji] = useState("");

  const addEmojiList = (e) => {
    setEmojiShow(!emojiShow);
    setSelectedEmoji(e.target.innerHTML);
    const addEmoji = listEmoji.concat(selectedEmoji);
    setListEmoji(addEmoji);
  };

  return (
    <div>
      <div className="trigger-button-wrap flex-css">
        <div className="selected-emoji-lists">
          <ul>
            {listEmoji.map((setEmoji) => (
              <li>{setEmoji.emoji}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => {
            setEmojiShow(!emojiShow);
          }}
          className="trigger-button flex-css"
        >
          <img src={addReactionImage} alt="Add Reaction" />
        </button>

        {emojiShow && (
          <div className="reaction-lists flex-css">
            <ul className="flex-css">
              {emojisList.map((emoji, index) => (
                <li key={index} className="flex-css">
                  <i className="emoji-symbol" onClick={addEmojiList}>
                    {emoji.emoji}
                  </i>
                  <div className="reaction-tooltip">{emoji.name}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Emojis;
