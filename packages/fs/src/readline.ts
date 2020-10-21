/**
 * @packageDocumentation
 * @module @tomato-node/fs
 */
import * as readline from "readline";
import * as fs from "fs";
import * as path from "path";
/**
 * 逐行读取文件
 *
 * 新增于v0.0.8
 *
 * 脚本举例
 * ```
 *   import { readFileByLines } from '@tomato-node/fs'
 *   const lines = await readFileByLines('read/to/isDir/read.json')
 *   //['firstLine','SecondLine','ThirdLines']
 * ```
 * @param fileName 文件名
 * @param callback 读取到每一行时的回调函数
 */
export function readFileByLines(fileName: string, callback?: (line: string, lineCount: number) => void) {
  const lineReader = readline.createInterface({
    input: fs.createReadStream(path.resolve(fileName)),
  });
  return new Promise((resolve) => {
    lineReader.once("error", () => resolve(null));
    const lines: string[] = [];
    let lineCount = 0;
    lineReader.on("line", (line) => {
      lineCount++;
      if (callback) {
        callback(line, lineCount);
      }
      lines.push(line);
    });
    lineReader.on("close", () => resolve(lines));
  });
}
