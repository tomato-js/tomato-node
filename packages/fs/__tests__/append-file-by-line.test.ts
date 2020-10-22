import * as fs from "../src";
import * as bfs from "fs";
import * as mockFs from "mock-fs";
import { join } from "path";

const sourceJson = `firstLine\nSecondLine\nThirdLines`;
const baseDir = join(process.cwd(), "read", "to", "isDir");

describe("fs util", () => {
  describe("appendFileByLine", () => {
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
    test("appendFileByLine()", async () => {
      await fs.appendFileByLines({
        fileName: "read/to/isDir/read.json",
        line: 2,
        content: "about me",
      });
      const content = await bfs.promises.readFile("read/to/isDir/read.json", "utf-8");
      expect(content).toBe(`firstLine\nSecondLine\nabout me\nThirdLines\n`);
    });
  });
});
