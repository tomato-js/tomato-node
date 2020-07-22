import * as ui from "../src";

describe("ui util", () => {
  describe("question", () => {
    test("type is ok", async () => {
      expect(typeof ui.input).toBe("function");
      expect(typeof ui.numberInput).toBe("function");
      expect(typeof ui.passwordInput).toBe("function");
      expect(typeof ui.checkbox).toBe("function");
      expect(typeof ui.radio).toBe("function");
      expect(typeof ui.confirm).toBe("function");
      expect(typeof ui.autocomplete).toBe("function");
    });
  });
});
