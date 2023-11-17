import AxiosWrapper from "./AxiosWrapper";
const client = new AxiosWrapper({ baseURL: "https://reqres.in" });

const errorHandler = (error) => {
    console.log('INTERCEPTED ERROR')
}

client.setResponseInterceptor((response) => {console.log(response.data)});

// client.setRequestInterceptor((request) => {console.log(request)});

(async function main() {
    await client.get("/api/users");
})();
