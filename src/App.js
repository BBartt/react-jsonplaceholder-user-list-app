import React, { useState, useEffect } from "react";
import Results from "./components/Results";
import { BASE_URL } from "./constants";

const App = () => {
  const [userName, setUserName] = useState("");

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError("");

      await fetch(BASE_URL)
        .then((res) => {
          if (!res.ok)
            return setError("Server responds with error: " + res.status);

          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          !data?.length > 0 && setError("No data");
          setUsers(data?.length > 0 ? data : []);
        })
        .catch((error) => {
          console.error(`catch error`, error);

          setIsLoading(false);
          setError(error.message);
        });
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userName.length) return setError("Field can not be empty.");

    setIsLoading(true);
    setUserName("");
    setError("");

    return await fetch(`${BASE_URL}?name=${userName}`)
      .then((res) => {
        if (!res.ok)
          return setError("Server responds with error: " + res.status);

        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        !data?.length > 0 && setError("There is no user like this");
        setUsers(data?.length > 0 ? data : []);
      })
      .catch((error) => {
        console.error(`catch error`, error);

        setIsLoading(false);
        setError(error.message);
      });
  };

  return (
    <div className="content">
      <h1>Users list</h1>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          className="input"
          placeholder="Search by user name..."
          value={userName}
          onChange={({ target: { value } }) => setUserName(value)}
        />
      </form>

      <Results error={error} isLoading={isLoading} users={users} />
    </div>
  );
};

export default App;
