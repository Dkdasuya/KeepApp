import react from "react";
import Note from "./Images/Notebook.jpg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="inner_header">
          <img src={Note} width="50" height="50"></img>
          <h1>Keep Notes/Remainders</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
