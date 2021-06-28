import React, { useState, useEffect } from "react";
import Results from "./components/Results";
import { BASE_URL } from "./constants";
import { fetchData } from "./utils";

const App = () => {
  const [userName, setUserName] = useState("");

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const onFetchSuccess = (errorMessage) => (data) => {
    setError("");
    setIsLoading(false);
    !data?.length > 0 && setError(errorMessage);
    setUsers(data?.length > 0 ? data : []);
  };

  const onFetchError = (error) => {
    console.error(`catch error`, error);

    setIsLoading(false);
    setError(error.message);
  };

  useEffect(() => {
    const fetchUsers = () => {
      setIsLoading(true);
      
      fetchData(BASE_URL, onFetchSuccess("No data"), onFetchError);
    };

    fetchUsers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userName.length) return setError("Field can not be empty.");

    setIsLoading(true);
    setUserName("");

    fetchData(
      `${BASE_URL}?name=${userName}`,
      onFetchSuccess("There is no user like this"),
      onFetchError
    );
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
