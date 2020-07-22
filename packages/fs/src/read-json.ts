/**
 * @packageDocumentation
 * @module @tomato-node/fs
 */

import { readFile, readFileSync } from "fs";
import { promisify } from "util";
/**
 * 函数描述
 *
 * 新增于v
 *
 * 脚本举例
 * ```
 *   import { readJson } from '@tomato-node/fs'
 *   const result = await readJson('a.json');
 * ```
 */
export async function readJson(fileName: string): Promise<object> {
  // const content =  await promisify(readFile)(fileName, {
  //   encoding: 'utf8',
  //   flag: 'r+'
  // })
  // return new Promise((resolve, reject)=> {
  //   // JSON.parse(content)
  //   resolve(JSON.parse(content))
  // })
  return await promisify(readFile)(fileName, {
    encoding: "utf8",
    flag: "r+",
  })
    .then((data) => {
      return JSON.parse(data);
    })
    .catch((err) => {
      err.message = `${fileName}: ${err.message}`;
      throw err;
    });
}

/**
 * 函数描述
 *
 * 新增于v
 *
 * 脚本举例
 * ```
 *   import { readJsonSync } from '@tomato-node/fs'
 *   const resultSync = readJsonSync('b.json');
 * ```
 */
export function readJsonSync(fileName: string): object {
  try {
    const content = readFileSync(fileName, {
      encoding: "utf8",
      flag: "r+",
    });
    return JSON.parse(content);
  } catch (err) {
    err.message = `${fileName}: ${err.message}`;
    throw err;
  }
}
