import { _saveQuestion, _saveQuestionAnswer } from "../_DATA";

describe("_DATA", () => {
    test("_saveQuestion returns formatted question when correct data is passed", async () => {
        const question = {
            optionOneText: "Option One",
            optionTwoText: "Option Two",
            author: "user1",
        };

        const result = await _saveQuestion(question);
        expect(result).toHaveProperty("id");
        expect(result).toHaveProperty("timestamp");
        expect(result.author).toBe("user1");
    });

    test("_saveQuestion returns error with incorrect data", async () => {
        const invalidQuestion = {
            optionOneText: "Option One",
        };

        await expect(_saveQuestion(invalidQuestion)).rejects.toEqual(
            "Please provide optionOneText, optionTwoText, and author"
        );
    });
});
