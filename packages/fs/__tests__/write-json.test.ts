import * as fs from "../src";
import * as mockFs from "mock-fs";
import { readFileSync } from "fs";
import { join } from "path";

const obj = {
  firstName: "aaa",
  lastName: "bbb",
};
const baseDir = join(process.cwd(), "write", "to", "dir");

describe("fs util", () => {
  describe("writeJson", () => {
    beforeAll(() => {
      mockFs({
        [baseDir]: {},
      });
    });
    afterAll(() => {
      mockFs.restore();
    });
    test("writeJson()", async () => {
      const file = join(baseDir, "write.json");
      await fs.writeJson(file, obj);
      const result = readFileSync(file, {
        encoding: "utf8",
      });
      expect(JSON.parse(result)).toStrictEqual(obj);
    });

    test("writeJsonSync()", () => {
      const file = join(baseDir, "writeSync.json");
      fs.writeJsonSync(file, obj);
      const result = readFileSync(file, {
        encoding: "utf8",
      });
      expect(JSON.parse(result)).toStrictEqual(obj);
    });
  });
});
