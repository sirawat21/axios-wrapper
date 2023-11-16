import { AxiosWrapper } from "./AxiosWrapper";
const client = new AxiosWrapper({
  baseURL: "localhost",
  headers: { "Content-Type": "application/json" },
});
// client.setBaseURL("");

// const client = new AxiosWrapper();

(async function main() {
  const response = await client.get("/api/users");
  console.log("-");
  console.log(response);
})();
