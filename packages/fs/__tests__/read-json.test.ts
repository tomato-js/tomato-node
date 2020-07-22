import * as fs from "../src";
import { join } from "path";
import * as mockFs from "mock-fs";

const obj = {
  firstName: "aaa",
  lastName: "bbb",
};
const sourceJson = JSON.stringify(obj);
const baseDir = join(process.cwd(), "read", "to", "dir");

describe("fs util", () => {
  describe("readJson", () => {
    beforeAll(() => {
      mockFs({
        [baseDir]: {
          "read.json": sourceJson,
          "readSync.json": sourceJson,
        },
      });
    });

    afterAll(() => {
      mockFs.restore();
    });

    test("readJson()", async () => {
      const file = join(baseDir, "read.json");
      const result = await fs.readJson(file);
      expect(result).toStrictEqual(obj);
    });

    test("readJsonSync()", () => {
      const file = join(baseDir, "readSync.json");
      const result = fs.readJsonSync(file);
      expect(result).toStrictEqual(obj);
    });
  });
});
