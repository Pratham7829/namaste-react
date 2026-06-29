import { useEffect, useState } from "react";

const User = (props) => {
  const { name } = props;

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    console.log("use effect");
  }, [count]);

  useEffec(() => {
    console.log("use effect 2");
  }, [count2]);

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count= {count}</h1>
      <h1>Count2= {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: akshay@</h4>
    </div>
  );
};

export default User;
