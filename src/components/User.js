import { useEffect, useState } from "react";

const User = (props) => {
  const { name } = props;

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {}, []);

  return (
    <div className="user-card">
      <h1>Count= {count}</h1>
      <h1>Count2= {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: akshay@</h4>
    </div>
  );
};

export default User;
