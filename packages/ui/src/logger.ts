/**
 * @packageDocumentation
 * @module @tomato-node/ui
 */
import * as bunyan from "bunyan";
import * as chalk from "chalk";
import { Writable } from "stream";

interface IObject {
  [key: string]: string;
}

interface IArgs {
  name: string;
}

const levelNames: IObject = {
  10: "TRACE",
  20: "DEBUG",
  30: "INFO ",
  40: "WARN ",
  50: "ERROR",
  60: "FATAL",
};

const levelColors: IObject = {
  10: "gray",
  20: "gray",
  30: "green",
  40: "orange",
  50: "red",
  60: "red",
};

class ConsoleStream extends Writable {
  name: string;
  constructor(args: IArgs) {
    super({
      objectMode: true,
    });
    const { name } = args;
    this.name = name;
  }

  _write(data: any, enc: any, callback: any) {
    const level = data.level;
    let msg = "";

    msg += chalk.keyword(levelColors[level])(this.name + " " + levelNames[level]) + " ";
    msg += data.msg + "\n";

    if (data.err) {
      const err = data.err.stack || data.err.message;
      if (err) msg += chalk.yellow(err) + "\n";
    }

    if (level >= 40) {
      process.stderr.write(msg);
    } else {
      process.stdout.write(msg);
    }

    callback();
  }
}
/**
 * logger生成器
 *
 * 新增于v0.0.3
 *
 * 脚本举例
 * ```
 *   import { createLogger } from '@tomato-node/ui'
 *   const log = createLogger({name:'mocker'});
 *   //绿色mocker INFO hello
 *   log.info('hello')
 *   //黄色mocker WARN hello
 *   log.warn('hello')
 *   //红色mocker ERROR hello
 *   log.error('hello')
 *   //红色mocker FATAL hello
 *   log.fatal('hello')
 * ```
 */
export function createLogger({ name }: { name: string }) {
  const log = bunyan.createLogger({
    name: name,
    streams: [
      {
        type: "raw",
        level: "info",
        stream: new ConsoleStream({ name }),
      },
    ],
  });
  return log;
}
/**
 * 简易Log
 *
 * 新增于v0.0.3
 *
 * 脚本举例
 * ```
 *   import { logger } from '@tomato-node/ui'
 *   //绿色LOGGER INFO hello
 *   logger.info('hello')
 *   //黄色LOGGER WARN hello
 *   logger.warn('hello')
 *   //红色LOGGER ERROR hello
 *   logger.error('hello')
 *   //红色LOGGER FATAL hello
 *   logger.fatal('hello')
 * ```
 */
export const logger = createLogger({ name: "LOGGER" });
