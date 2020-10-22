/**
 * @packageDocumentation
 * @module @tomato-node/fs
 */
import * as fs from "fs";
import { readFileByLines } from "./readline";
const fsPromises = fs.promises;
export type AppendFileByLineOptions = {
  fileName: string;
  content: string;
  line: number;
};
/**
 * 于文件某一行后插入内容
 *
 * 新增于v0.0.8
 *
 * 脚本举例
 * ```
 *   import { appendFileByLines } from '@tomato-node/fs';
 *   (async()=>{
 *     await fs.appendFileByLines({
 *       fileName: "read/to/isDir/read.json",
 *       line: 2,
 *       content: "about me",
 *     });
 *   })()
 * ```
 */
export async function appendFileByLines(options: AppendFileByLineOptions) {
  const { fileName, content, line: injectedLine } = options;
  let realContent = "";
  await readFileByLines(fileName, (line, lineCount) => {
    realContent = realContent.concat(line, "\n");
    if (lineCount == injectedLine) {
      realContent = realContent.concat(content,'\n');
    }
  });
  await fsPromises.writeFile(fileName,realContent);
}
