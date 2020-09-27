import * as fs from "../src";
import * as bfs from "fs";
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
  describe("mkdirP", () => {
    test("promise path mkdirP() true", async () => {
      await fs.mkdirP(join(process.cwd(), "read2"));
      const isExists = await fs.exists(join(process.cwd(), "read2"));
      expect(isExists).toBe(true);
    });
    test("promise path complex mkdirP() true", async () => {
      await fs.mkdirP(join(process.cwd(), "./about/me/to"));
      const isExists = await fs.exists(join(process.cwd(), "./about/me/to"));
      expect(isExists).toBe(true);
    });
    test("promise path mkdirP() not overwrite", async () => {
      await fs.mkdirP(join(process.cwd(), "read"));
      const isExists = await fs.exists(join(process.cwd(), "read", "to"));
      expect(isExists).toBe(true);
    });
    test("promise file mkdirP() true", async () => {
      await fs.mkdirP(join(process.cwd(), "read/to/otherDir/me.html"));
      const isExists = await fs.exists(join(process.cwd(), "read/to/otherDir/me.html"));
      expect(isExists).toBe(true);
    });
    test("promise file complex mkdirP() true", async () => {
      await fs.mkdirP(join(process.cwd(), "./about/me/to/me.js"));
      const isExists = await fs.exists(join(process.cwd(), "./about/me/to/me.js"));
      expect(isExists).toBe(true);
    });
    test("promise file mkdirP() not overwrite", async () => {
      await fs.mkdirP(join(process.cwd(), "read/to/isDir/read.json"));
      const fileContent = await bfs.promises.readFile(join(process.cwd(), "read/to/isDir/read.json"), { encoding: "utf-8" });
      expect(fileContent).toBe(sourceJson);
    });

    test("callback path mkdirP() true", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(true);
        done();
      }
      fs.mkdirP(join(process.cwd(), "read2"), callback);
    });
    test("callback path complex mkdirP() true", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(true);
        done();
      }
      fs.mkdirP(join(process.cwd(), "./about/me/to"), callback);
    });
    test("callback path mkdirP() not overwrite", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(true);
        done();
      }
      fs.mkdirP(join(process.cwd(), "read"), callback);
    });
    test("callback file mkdirP() true", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(true);
        done();
      }
      fs.mkdirP(join(process.cwd(), "read/to/otherDir/me.html"), callback);
    });
    test("callback file complex mkdirP() true", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(true);
        done();
      }
      fs.mkdirP(join(process.cwd(), "./about/me/to/me.js"),callback);
    });
    test("callback file mkdirP() not overwrite", (done) => {
      function callback(data: boolean) {
        expect(data).toBe(false);
        done();
      }
      fs.mkdirP(join(process.cwd(), "read/to/isDir/read.json"), callback);
    });
  });
});
