import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

function Intro() {
  return (
    <div className="main-content">
      <h1>Cows are aliens</h1>
      <h3>In this essay I will:</h3>
      <ol>
        <li>explain why cows are aliens</li>
        <li>explain why cows are from outer space</li>
        <li>explain why cows aren't from earth.</li>
      </ol>
    </div>
  );
}

function Footer() {
  return <footer>© 2022 SpaceCowsDevelopment</footer>;
}

function Page() {
  return (
    <div>
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
