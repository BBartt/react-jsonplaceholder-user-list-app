import React, {useState} from 'react';

function App() {
  const [userName, setUserName] = useState("");
  
  return (
    <div className="content">
      <h1>Users list</h1>
      <form>
        <input
          className="input"
          placeholder="Search by user name..."
          value={userName}
          onChange={({ target: {value} })=> setUserName(value)}
        />

        <ol className="ol">
          <li className="li">
            Leanne Graham {" "}
            <span className="userName">@{"bret"}</span>
          </li>

          <li className="li">
            Ervin Howell {" "}
            <span className="userName">@{'Antonette'}</span>
          </li>

          <li className="li">
            Clementine Bauch {" "}
            <span className="userName">@{'Samantha'}</span>
          </li>
        </ol>
      </form>

    </div>
  );
}

export default App;
