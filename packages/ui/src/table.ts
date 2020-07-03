/**
 * @packageDocumentation
 * @module @tomato-node/ui
 */
import * as tableImport from "table";
const { table } = tableImport;

/**
 * 获取表格数据字符串
 *
 * 新增于v0.0.1
 *
 * 脚本举例
 * ```
 *   import { tableContent } from '@tomato-node/ui';
 *   // 二维数组
 *   const data = [
 *      ['0A', '0B', '0C'],
 *      ['1A', '1B', '1C'],
 *      ['2A', '2B', '2C']
 *   ];
 *   const result = tableContent(data);
 *   console.log(result);
 *   ╔════╤════╤════╗
 *   ║ 0A │ 0B │ 0C ║
 *   ╟────┼────┼────╢
 *   ║ 1A │ 1B │ 1C ║
 *   ╟────┼────┼────╢
 *   ║ 2A │ 2B │ 2C ║
 *   ╚════╧════╧════╝
 * ```
 *
 * @param data - 二维数组
 * @returns 控制台输出
 */
const tableContent = table;

export { tableContent };
