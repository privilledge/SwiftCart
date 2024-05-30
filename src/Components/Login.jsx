import Header from "./Header";

function Login() {
  return (
    <>
      <Header />
      <br />
      <div className="container ">
        <form className="login">
          <br />
          <h2>Login</h2>
          <span>Enter your Login details</span>
          <br />
          <br />
          <input type="text" name="" id="" placeholder="Email" required />
          <br />
          <br />
          <input type="password" placeholder="password" required />
          <br />
          <br />
          <button className="btn">Login</button>
          <br />
          <br />
          <span>
            Dont have an account? <a href="/signup">Sign up</a>
          </span>
          <br />
        </form>
      </div>
    </>
  );
}
export default Login;
