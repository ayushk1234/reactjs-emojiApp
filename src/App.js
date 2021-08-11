import "./styles.css";
import React, { useState } from "react";

var headline = " Emoji Translate";

var emojiDictionary = {
  "😀": "simling",
  "😥": "sad",
  "😠": "angry"
};

var emojiArray = Object.keys(emojiDictionary);

var noEmoji = "this emoji is not in our database, Sorry!";
var inputMsg = "insert emoji here";
export default function App() {
  const [meaning, setMeaning] = useState("The Emoji meaning will appear  here");

  function changeEventHandler(event) {
    //setCliclCounter(clickCounter + 1);
    var emojiSelected = event.target.value;

    var emojiMeaning = emojiDictionary[emojiSelected];
    // console.log(emojiMeaning);
    if (emojiSelected in emojiDictionary) {
      // console.log(emojiMeaning);
      setMeaning(emojiMeaning);
    } else {
      setMeaning(noEmoji);
    }
    // console.log("clicked counter " + emojiDictionary[emojiSelected]);
    // return counter;
  }

  function clickEventHandler(event) {
    // var emojiSelected = emojiArray[event];
    var emojiMeaning = emojiDictionary[event];
    // console.log(emojiMeaning);
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>{headline}</h1>

      <div>
        <input
          className="input"
          onChange={changeEventHandler}
          placeholder={inputMsg}
        ></input>
      </div>
      <div>
        <h2 className="output">{meaning}</h2>
      </div>
      <div>
        <ul className="emojiSpread">
          {emojiArray.map((item, index) => {
            return (
              <li
                key={item}
                className="list"
                onClick={() => clickEventHandler(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
