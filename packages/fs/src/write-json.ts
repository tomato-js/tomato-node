/**
 * @packageDocumentation
 * @module @tomato-node/fs
 */

import { writeFile, writeFileSync } from "fs";
import { promisify } from "util"
/**
 * 函数描述
 *
 * 新增于v
 *
 * 脚本举例
 * ```
 *   import { writeJson } from '@tomato-node/fs'
 *   const obj = { firstName: 'aaa', lastName: 'bbb'};
 *   await writeJson('name.json', obj);
 * ```
 */
export async function writeJson(fileName: string, jsonContent: object): Promise<void> {
  const jsonContentStr = JSON.stringify(jsonContent);
  return await promisify(writeFile)(fileName, jsonContentStr, {
    encoding: 'utf8'
  })
}

/**
 * 函数描述
 *
 * 新增于v
 *
 * 脚本举例
 * ```
 *   import { writeJsonSync } from '@tomato-node/fs'
 *   const obj = { firstName: 'aaa', lastName: 'bbb'};
 *   writeJsonSync('name.json', obj);
 * ```
 */
export function writeJsonSync(fileName: string, jsonContent: object): void {
  const jsonContentStr = JSON.stringify(jsonContent);
  writeFileSync(fileName, jsonContentStr, {
    encoding: 'utf8'
  })
}
