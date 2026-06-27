import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child constructor is called");
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "dummy photo",
      },
    };
  }

  async componentDidMount() {
    console.log("Child componenet did mount is called");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  componentDidUpdate() {
    console.log("Child Component did update");
  }

  componentWillUnmount() {
    console.log("Child component will unmount");
  }

  render() {
    console.log("Child render is called");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: akshay@</h4>
      </div>
    );
  }
}

export default UserClass;
