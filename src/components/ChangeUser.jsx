import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function ChangeUser() {
  const { setUser } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setUser(inputValue);
      setInputValue("");
    }
  };
  return (
    <>
      <input
        value={inputValue}
        type="text"
        placeholder="Add a Name"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleClick}>Change User</button>
    </>
  );
}

export default ChangeUser;
