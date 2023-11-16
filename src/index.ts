import AxiosWrapper from "./AxiosWrapper";
const client = new AxiosWrapper({ baseURL: "https://reqres.in" });

(async function main() {
    const response = await client.get("/api/users", );
    console.log("--");
    console.log(response);
})();
