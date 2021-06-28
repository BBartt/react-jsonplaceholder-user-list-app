export const fetchData = async (url, onS, onF) => {
  await fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Server responds with error: " + res.status);

      return res.json();
    })
    .then((data) => onS(data))
    .catch((err) => onF(err));
};
