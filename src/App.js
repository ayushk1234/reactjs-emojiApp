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

export default function App() {
  const [meaning, setMeaning] = useState("");

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
    // var emojiSelected = event;

    var emojiSelected = emojiArray[event];

    var emojiMeaning = emojiDictionary[emojiSelected];
    // console.log(emojiMeaning);

    // console.log(emojiSelected);
    // console.log(event.target.value);
    // console.log(emojiMeaning);
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>{headline}</h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
      <div>
        <input className="input" onChange={changeEventHandler}></input>
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
                onClick={() => clickEventHandler(index)}
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
