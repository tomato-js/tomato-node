/**
 * @packageDocumentation
 * @module @tomato-node/fs
 */
import * as fs from "fs";
/**
 * 判断是否是目录
 *
 * 新增于v0.0.7
 *
 * 脚本举例
 * ```
 *   import { isDir } from '@tomato-node/fs'
 *   isDir(process.cwd())//false
 * ```
 * @param filePath: 文件路径
 * @returns 是否为目录
 */
export function isDir(filePath: string) {
  try {
    var stat = fs.lstatSync(filePath);
    return stat.isDirectory();
  } catch (e) {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}
/**
 * 判断是否是文件
 *
 * 新增于v0.0.7
 *
 * 脚本举例
 * ```
 *   import { isFile } from '@tomato-node/fs'
 *   isFile(process.cwd())//true
 * ```
 * @param filePath: 文件路径
 * @returns 是否为文件
 */
export function isFile(filePath: string) {
  try {
    var stat = fs.lstatSync(filePath);
    return stat.isFile();
  } catch (e) {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}
