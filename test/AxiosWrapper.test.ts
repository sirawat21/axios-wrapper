import AxiosWrapper from "../src/AxiosWrapper";

const client = new AxiosWrapper({ baseURL: "https://reqres.in" });

describe("AxiosWrapper class", () => {
    test("Http GET method", async () => {
        const result = await client.get("/api/users");
        expect(result).toBeDefined;
    });

    test("Http POST method", async () => {
        const result = await client.post("/api/users", {
            name: "morpheus",
            job: "leader",
        });
        expect(result).toBeDefined;
    });

    test("Http PUT method", async () => {
        const result = await client.put("/api/users/2", {
            name: "morpheus",
            job: "zion resident",
        });
        expect(result).toBeDefined;
    });

    test("Http PATCH method", async () => {
        const result = await client.patch("/api/users/2", {
            name: "morpheus",
            job: "resident zion",
        });
        expect(result).toBeDefined;
    });

    test("Request Interceptor", async () => {
        const result = client.setRequestInterceptor((request) => request);
        await client.get("/api/users");
        expect(result).toThrowErrorMatchingInlineSnapshot;
    });

    test("Response Interceptor", async () => {
        const result = client.setResponseInterceptor((response) => response);
        await client.get("/api/users");
        expect(result).toThrowErrorMatchingInlineSnapshot;
    });

    test("Terminate instant", async () => {
        const result = client.terminateConnection();
        expect(result).toBeNull;
    });
});
