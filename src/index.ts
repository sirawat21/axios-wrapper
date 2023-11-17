import AxiosWrapper from "./AxiosWrapper";
const client = new AxiosWrapper({ baseURL: "https://reqres.in" });

const errorHandler = (error) => {
    console.log("INTERCEPTED ERROR");
};

client.setResponseInterceptor((response) => {
    console.log(response.data);
});

// client.setRequestInterceptor((request) => {console.log(request)});

(async function main() {
    await client.get("/api/users");
    client.terminateConnection();
    await client.get("/api/users/2", null, errorHandler);

    // await client.post("/api/users", {name: "morpheus",job: "leader"});

    // await client.put("/api/users/2", {name: "morpheus", "job": "zion resident put"});
    
    // await client.patch("/api/users/2", {name: "morpheus",job: "zion resident patch"});

})();
