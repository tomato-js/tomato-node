import * as fs from "../src";
import { join } from "path";
import * as mockFs from "mock-fs";
const obj = {
  firstName: "aaa",
  lastName: "bbb",
};
const sourceJson = JSON.stringify(obj);
const baseDir = join(process.cwd(), "read", "to", "isDir");
const baseDir2 = join(process.cwd(), "read", "to", "isDir2");
const baseDir3 = join(process.cwd(), "read", "to", "isDir3");
const baseDir4 = join(process.cwd(), "read", "to", "isDir4");
describe("fs util", () => {
  describe("rimraf", () => {
    beforeAll(() => {
      mockFs({
        [baseDir]: {
          "read.json": sourceJson,
          "read.js": sourceJson,
          "readSync.json": sourceJson,
        },
        [baseDir2]: {
          "read.json": sourceJson,
          "read.js": sourceJson,
          "readSync.json": sourceJson,
        },
        [baseDir3]: {
          "read.json": sourceJson,
          "read.js": sourceJson,
          "readSync.json": sourceJson,
        },
        [baseDir4]: {
          "read.json": sourceJson,
          "read.js": sourceJson,
          "readSync.json": sourceJson,
        }
      });
    });
    afterAll(() => {
      mockFs.restore();
    });
    test("promise path rimraf() true", async () => {
      await fs.rimraf("./read/to/isDir");
      const isExists = await fs.exists("./read/to");
      const isExists2 = await fs.exists("./read/to/isDir");
      expect(isExists).toBe(true);
      expect(isExists2).toBe(false);
    });
    test("promise glob complex rimraf() true", async () => {
      await fs.rimraf("./read/to/isDir2/*.json");
      const isExists = await fs.exists("./read/to/isDir2/read.js");
      const isExists2 = await fs.exists("./read/to/isDir2/read.json");
      expect(isExists).toBe(true);
      expect(isExists2).toBe(false);
    });
    test("promise path callback rimraf() true", (done) => {
      async function callback(err: Error) {
        expect(err).toBe(null);
        const isExists = await fs.exists("./read/to");
        const isExists2 = await fs.exists("./read/to/isDir3");
        expect(isExists).toBe(true);
        expect(isExists2).toBe(false);
        done();
      }
      fs.rimraf("./read/to/isDir3", callback);
    });
    test("promise path complex rimraf() true", (done) => {
      async function callback(err: Error) {
        expect(err).toBe(null);
        const isExists = await fs.exists("./read/to/isDir4/read.js");
        const isExists2 = await fs.exists("./read/to/isDir4/read.json");
        expect(isExists).toBe(true);
        expect(isExists2).toBe(false);
        done();
      }
      fs.rimraf("./read/to/isDir4/*.json", callback);
    });
  });
});
