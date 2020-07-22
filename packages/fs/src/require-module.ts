/**
 * @packageDocumentation
 * @module @tomato-node/fs
 */
// 用来去重
const LOADING_MODULES = new Set();
/**
 * 安全的加载模块，并确保其只被加载一次
 *
 * 新增于v0.0.5
 *
 * 脚本举例
 * ```
 *   import { requireModule } from '@tomato-node/fs'
 *   const fs = requireModule('fs');
 * ```
 */
export function requireModule(name: string) {
  if (!isModuleExist(name)) {
    throw new Error(`Trying to load "${name}", but this module is not exist, please make sure it was installed`);
  }
  if (LOADING_MODULES.has(name)) {
    throw new Error(`Trying to load "${name}", but this module is loading or loaded`);
  }
  LOADING_MODULES.add(name);
  return require(name);
}
/**
 * 判断一个模块是否可以被加载
 *
 * 新增于v0.0.5
 *
 * 脚本举例
 * ```
 *   import { isModuleExist } from '@tomato-node/fs'
 *   isModuleExist('fs');//true
 *   isModuleExist('fs2');//false
 * ```
 */
export function isModuleExist(name: string) {
  try {
    return Boolean(require.resolve(name));
  } catch (e) {
    return false;
  }
}
