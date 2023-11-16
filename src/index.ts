import AxiosWrapper from "./AxiosWrapper";
const client = new AxiosWrapper();
// client.setBaseURL("");

// const client = new AxiosWrapper();

(async function main() {
    const response = await client.get("/api/users");
    console.log("-");
    console.log(response);
})();
