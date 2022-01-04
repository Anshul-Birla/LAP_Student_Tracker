import { apiResolver, __ApiPreviewProps } from "next/dist/server/api-utils";
import http from "http";
import supertest from "supertest";
import { userHandler } from "../../pages/api/users";
import { client } from "../../lib/db";

/**
 * We will be using Jest to test our app.
 * Here are the docs: https://jestjs.io/
 */

// this is just to make TypeScript happy.
// Keep it for now, but I will find a way to get rid of it
const preview: __ApiPreviewProps = {
  previewModeId: "",
  previewModeEncryptionKey: "",
  previewModeSigningKey: "",
};

// this just cleans up the database.
// Make sure to run the migrations script before running the tests
beforeAll(() => {
  client.query("DELETE from users");
});

afterAll(() => {
  client.end();
});
describe("[POST] /api/users", () => {
  let server: http.Server;

  // this mocks an http server for our app so we can test our API
  beforeEach(async () => {
    const requestHandler = (request: http.IncomingMessage, response: http.ServerResponse) =>
      apiResolver(request, response, undefined, userHandler, preview, true);
    server = http.createServer(requestHandler);
  });

  afterEach(() => {
    server.close();
  });

  // tests actually creating a new user into our database
  it("creates a new user", async () => {
    const body = {
      email: "myemail@gmail.com",
      phone: "1234567890",
      role: "Admin",
    };
    // send the request, and test the results
    // we use supertest to make sure that the response code and the response
    // type is what we expect
    await supertest(server)
      .post("/api/users")
      .send(body)
      .expect("Content-Type", /json/)
      .expect(201);
  });
});
