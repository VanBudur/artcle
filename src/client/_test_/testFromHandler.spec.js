import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the submit functionality", () => {
    test("handleSubmit function should be defined", () => {
        expect(handleSubmit).toBeDefined();
    });
});
