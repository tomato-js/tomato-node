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
  describe("isDir", () => {
    test("isDir()", () => {
      expect(fs.isDir(join(process.cwd(),"read"))).toBe(true);
      expect(fs.isDir(join(process.cwd(),"read/to"))).toBe(true);
      expect(fs.isDir(join(process.cwd(),"read","to","isDir"))).toBe(true);
      expect(fs.isDir(join(process.cwd(),"read/isDir/read.json"))).toBe(false);
      expect(fs.isDir(join(process.cwd(),"read/isDir/readSync.json"))).toBe(false);
    });
  });
  describe("isFile", () => {
    test("isFile()", () => {
      expect(fs.isFile(join(process.cwd(),"read"))).toBe(false);
      expect(fs.isFile(join(process.cwd(),"read/to"))).toBe(false);
      expect(fs.isFile(join(process.cwd(),"read","to","isDir"))).toBe(false);
      expect(fs.isFile(join(baseDir,"read.json"))).toBe(true);
      expect(fs.isFile(join(baseDir,"readSync.json"))).toBe(true);
    });
  });
});
