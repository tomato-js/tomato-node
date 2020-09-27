/**
 * @packageDocumentation
 * @module @tomato-node/fs
 */
import { isFunction } from "@tomato-js/shared";
import * as rm from "rimraf";
/**
 * 删除文件，基于通配符
 *
 * 新增于v0.0.7
 *
 * 脚本举例
 * ```
 *   import { rimraf } from '@tomato-node/fs'
 *   //promise style
 *   async(()=>{
 *     await rimraf('./create/dir'));
 *     await rimraf('./*.json'));
 *     // return true when success
 *   })()
 *   //callback style
 *   const callback=(error)=>{
 *     console.log(!error?true:false)
 *   };  
 *   rimraf(path.join(process.cwd(),'/create/dir'),callback);
 * ```
 * 
 * @param path - 文件路径
 * @param callback - 回调函数，如果没有则走promise风格
 * @returns 是否删除成功
 */
export function rimraf(path: string, callback?: (error: Error|null) => void) {
  // callback
  if (isFunction(callback)) {
    return rm(path, (err) => {
      callback(err);
    });
  }
  // or promise
  return new Promise((resolve) => {
    rm(path, (err) => {
      resolve(!err);
    });
  });
}
