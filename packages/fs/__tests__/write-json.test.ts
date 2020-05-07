import * as fs from "../src";
import { readFileSync } from "graceful-fs";
import { resolve } from "path";

describe("fs util", () => {
  describe("writeJson", () => {

    test("writeJson()", async () => {
      const obj = {
        firstName: 'aaa',
        lastName: 'bbb'
      }
      const file = resolve(__dirname, "mock", "write.json")
      await fs.writeJson(file, obj);
      const result = readFileSync(file, {
        encoding: 'utf8'
      });
      expect(JSON.parse(result)).toStrictEqual(obj);
    });
    
    test("writeJsonSync()", () => {
      const obj = {
        firstName: 'ccc',
        lastName: 'ddd'
      }
      const file = resolve(__dirname, "mock", "write.json")
      fs.writeJsonSync(file, obj);
      const result = readFileSync(file, {
        encoding: 'utf8'
      });
      expect(JSON.parse(result)).toStrictEqual(obj);
    });
  });
});
