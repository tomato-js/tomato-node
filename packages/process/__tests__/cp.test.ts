import * as process from "../src";

describe("process util", () => {
  describe("cp", () => {
    test("cp()", async () => {
      const {stdout} = await process.cp('pwd')
      expect(stdout.includes('tomato-node')).toBe(true);
    });
  });
});
