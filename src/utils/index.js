export const fetchData = (url, onS, onF) => {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Server responds with error: " + res.status);

      return res.json();
    })
    .then((res) => onS(res))
    .catch((err) => onF(err));
};
