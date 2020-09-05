import React from "react";

export default function Home(props) {
  return (
    <div>
      <div>
        <h1>Get your Vehicle License</h1>
      </div>
      <div>
        <h4>
          To get started please login or create account with the following links
        </h4>
        <div>
          <a href="/login">Login</a>
        </div>
        <div>
          <a href="/signup">Signup</a>
        </div>
      </div>
    </div>
  );
}
