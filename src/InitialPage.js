const InitialPage = (props) => {
  return (
    <div>
      <header>
        <h1 className="a">This is LogIn Page</h1>
      </header>
      <main style={{ padding: "45vh" }}>
        <form onSubmit={props.onSubmit}>
          <div style={{ display: "block" }}>
            <label>Email : </label>
            <input type="email" onChange={props.onChangeEmail} />
          </div>
          <label>Password : </label>
          <input onChange={props.onChangePassword} type="password" />
          <input
            style={{ display: "block" }}
            type="submit"
            disabled={!props.isFormValid}
          />
        </form>
      </main>
    </div>
  );
};

export default InitialPage;
