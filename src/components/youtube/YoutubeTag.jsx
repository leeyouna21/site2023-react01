import React from "react";

const youtubeTag = [
  { name: "book" },
  { name: "asmr" },
  { name: "bookrecommend" },
  { name: "booksite" },
  { name: "popularbook" },
];

const YoutubeTag = ({ onSearch }) => {
  function btnClick(e) {
    onSearch(e.target.innerText);
  }
  return (
    <div className="youtube__tag SBAggro">
      <div>
        {youtubeTag.map((tag, index) => (
          <button onClick={btnClick} key={index}>
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YoutubeTag;
