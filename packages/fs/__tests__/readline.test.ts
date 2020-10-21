import * as fs from "../src";
import * as mockFs from "mock-fs";
import { join } from "path";


const sourceJson = `firstLine\nSecondLine\nThirdLines`;
const baseDir = join(process.cwd(), "read", "to", "isDir");

describe("fs util", () => {
  describe("readline", () => {
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
    test("readline()", async () => {
      const lines = await fs.readFileByLines('read/to/isDir/read.json')
      expect(lines).toEqual(['firstLine','SecondLine','ThirdLines']);
    });
    test("readline() callback", async () => {
      const myLines:string[] = [];
      const lines = await fs.readFileByLines('read/to/isDir/read.json',(line,lineCount)=>{
        if(lineCount == 2){
          line = 'xixi'
        }
        myLines.push(line)
      })
      expect(myLines).toEqual(['firstLine','xixi','ThirdLines']);
    });
  });
});
