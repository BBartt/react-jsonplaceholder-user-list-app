import "@testing-library/jest-dom";

import { BASE_URL } from "../../constants";
import { fetchData } from "../../utils";

describe("fetchData util function", () => {
  it("Fetches data success", async () => {
    let userName;

    await fetchData(BASE_URL, (data) => {
      const [user] = data;
      const { name } = user;

      return (userName = name);
    });

    expect(userName).toEqual("Leanne Graham");
  });
});
