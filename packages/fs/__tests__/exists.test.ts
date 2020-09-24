import * as fs from "../src";
import { join } from "path";
import * as mockFs from "mock-fs";

const obj = {
  firstName: "aaa",
  lastName: "bbb",
};
const sourceJson = JSON.stringify(obj);
const baseDir = join(process.cwd(), "read", "to", "isDir");
describe("fs util", () => {
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
  describe("exists", () => {
    test("promise path exists() true", async () => {
      const isExists = await fs.exists(join(process.cwd(), "read"));
      expect(isExists).toBe(true);
    });
    test("promise path exists() false", async () => {
      const isExists = await fs.exists(join(process.cwd(), "notExist"));
      expect(isExists).toBe(false);
    });
    test("promise file exists() true", async () => {
      const isExists = await fs.exists(join(process.cwd(), "read", "to", "isDir", "read.json"));
      expect(isExists).toBe(true);
    });
    test("promise file exists() false", async () => {
      const isExists = await fs.exists(join(process.cwd(), "read", "to", "isDir", "readNotExist.json"));
      expect(isExists).toBe(false);
    });
    test("callback path exists() true", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(true);
        done();
      }
      fs.exists(join(process.cwd(), "read"), callback);
    });
    test("callback path exists() false", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(false);
        done();
      }
      fs.exists(join(process.cwd(), "notExist"), callback);
    });
    test("callback file exists() true", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(true);
        done();
      }
      fs.exists(join(process.cwd(), "read", "to", "isDir", "read.json"), callback);
    });
    test("callback file exists() false", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(false);
        done();
      }
      fs.exists(join(process.cwd(), "read", "to", "isDir", "readNotExist.json"), callback);
    });
  });
});
