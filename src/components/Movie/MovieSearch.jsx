import React, { useRef } from "react";
const MovieSearch = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    console.log(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const onClick = () => {
    handleSearch();
  };
  return (
    <div className="Movie__search container">
      <h2 className="blind">검색하기</h2>
      <input
        ref={inputRef}
        type="search"
        onKeyPress={onKeyPress}
        placeholder="원하시는 영화를 검색하세요."
      />
      <button type="submit" onClick={onclick}>
        검색하기
      </button>
    </div>
  );
};

export default MovieSearch;
