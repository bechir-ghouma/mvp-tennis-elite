import React from "react";

var Search = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          action="search"
          placeholder="Search..."
          onChange={(e) => this.props.searching(e.target.value)}
        />
      </form>
    </div>
  );
};
