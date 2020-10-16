/**
 * @packageDocumentation
 * @module @tomato-node/process
 */
import * as execa from 'execa';
/**
 * 子进程管理，套传调用execa
 *
 * 新增于v0.0.7
 *
 * 脚本举例
 * ```
 *   import { cp } from '@tomato-node/process'
 *   (async()=>{
 *     const { stdout } = await process.cp('ls',['-la']);
 *     console.log(stdout)//total 1928 drwxr-xr-x...
 *   })()
 * ```
 */
export { execa as cp };
