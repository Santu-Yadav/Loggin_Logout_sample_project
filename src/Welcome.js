import "./welcome.css";

const Welcome = (props) => {
  const logoutHandler = () => {
    console.log("Clicked logout button");
  };

  return (
    <div>
      <header>
        <h1 className="a">Welcome Page</h1>
        <div>
          <button>Amin</button>
          <button>About US</button>
          <button onClick={props.onLogoutClicked}>Logout</button>
        </div>
      </header>
      <h2>Welcome to next page, Click here to go back to the LogIn Page</h2>
    </div>
  );
};

export default Welcome;
