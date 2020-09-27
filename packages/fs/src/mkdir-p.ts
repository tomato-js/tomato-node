/**
 * @packageDocumentation
 * @module @tomato-node/fs
 */
import * as fs from "fs";
import { FunctionType, isFunction } from "@tomato-js/shared";
/**
 * 递归创建文件路径及文件
 *
 * 新增于v0.0.7
 *
 * 脚本举例
 * ```
 *   import { mkdirP } from '@tomato-node/fs';
 *   //promise style
 *   async(()=>{
 *     await mkdirP(path.join(process.cwd(),'/create/dir'));
 *     // return true when success
 *   })()
 *   //callback style
 *   const callback=(isSuccess)=>{
 *     console.log(isSuccess?true:false)
 *   };
 *   mkdirP(path.join(process.cwd(),'/create/dir'),callback);
 * ```
 * @param path - 文件路径
 * @param callback - 回调函数，如果没有则走promise风格
 * @returns 是否创建成功
 */
export function mkdirP(path: fs.PathLike, callback?: FunctionType<boolean, any>) {
  if (isFunction(callback)) {
    return fs.mkdir(path, { recursive: true }, (err) => {
      callback(!err);
    });
  }
  return new Promise<boolean>((resolve) => {
    fs.mkdir(path,{ recursive: true } ,(err) => {
      resolve(!err);
    });
  });
}
