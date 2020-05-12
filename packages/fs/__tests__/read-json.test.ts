import * as fs from "../src";
import { writeFileSync } from "graceful-fs";
import { resolve } from "path";

describe("fs util", () => {
  describe("readJson", () => {

    test("readJson()", async () => {
      const obj = {
        firstName: 'aaa',
        lastName: 'bbb'
      }
      const file = resolve(__dirname, "mock", "read.json")
      writeFileSync(file, JSON.stringify(obj));
      const result = await fs.readJson(file);
      expect(result).toStrictEqual(obj);
    });

    test("readJsonSync()", () => {
      const obj = {
        firstName: 'ccc',
        lastName: 'ddd'
      }
      const file = resolve(__dirname, "mock", "read.json")
      writeFileSync(file, JSON.stringify(obj));
      const result= fs.readJsonSync(file);
      expect(result).toStrictEqual(obj);
    });
  });
});
