import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Main from "./Main";

function Footer() {
  return <footer>© 2022 SpaceCowsDevelopment</footer>;
}

function Page() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
