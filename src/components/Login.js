import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// useHistory is a hook for programmatic navigation, allowing you to navigate based on user actions or other events.
//<Redirect> is a component for declarative redirection, allowing you to conditionally redirect based on specific conditions within the rendering of components.

function Login({ setIsLoggedIn }) {
  //Access the history object to manipulate the navigation history
  const history = useHistory();

    //State to manage form data (username and password)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

    // Function to handle changes in the iput fields
  function handleChange(e) {
    //Update the formData state with the new value from the input
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  //Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); //Prevent the default- form submission behaviour

    //Set isLoogedIn to true (simulating a suceessful login)
    setIsLoggedIn(true);

    // after logging the user in, redirect to the home page ("/")
    history.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      {/* Input for the userName with corresponding event handler */}
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      {/* Input for the password with corresponding event handler */}
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {/* Submit button to trigger the handle submit function */}
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
