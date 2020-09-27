/**
 * @packageDocumentation
 * @module @tomato-node/fs
 */
import * as fs from "fs";
import { FunctionType, isFunction } from "@tomato-js/shared";
/**
 * 判断文件或者目录是否存在
 *
 * 新增于v0.0.7
 *
 * 脚本举例
 * ```
 *   import { exists } from '@tomato-node/fs';
 *   //callback style
 *   const callback=(isExist)=>{
 *     console.log(isExist?true:false)
 *   };
 *   exists('file',callback);
 *   //promise style
 *   async(()=>{
 *     const isExist = await exists('file');
 *   })()
 * ```
 */
export function exists(filename: fs.PathLike, callback?: FunctionType<boolean,any>) {
  // callback
  if (isFunction(callback)) {
    return fs.stat(filename, (err) => {
      callback(!err);
    });
  }
  // or promise
  return new Promise((resolve) => {
    fs.stat(filename, (err) => {
      resolve(!err);
    });
  });
}
