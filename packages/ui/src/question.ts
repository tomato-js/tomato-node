/**
 * @packageDocumentation
 * @module @tomato-node/ui
 */
import * as inquirer from "inquirer";

type CommonInputParams = {
  name: string;
  message: string;
  type: "input" | "number" | "password" | "checkbox" | "list" | "confirm";
  choices?: string[];
  source?: any;
};

const commonInput = async ({ name, message, type, choices, source }: CommonInputParams): Promise<any> => {
  const questions = [
    {
      type,
      name,
      message,
      choices,
      source,
    },
  ];
  const prompt = inquirer.createPromptModule();
  return await prompt(questions);
};

/**
 * 字符串输入框
 *
 * 新增于v0.0.5
 *
 * 脚本举例
 * ```
 *   import { input } from '@tomato-node/ui'
 *   input("name")("What is your name?").then(data=>console.log(data));
 *   //? What is your name?   brizer
 *   // { name: 'brizer'}
 * ```
 */
export const input = (name: string) => async (message: string) =>
  await commonInput({
    name,
    message,
    type: "input",
  });

/**
 * 数字输入框
 *
 * 新增于v0.0.5
 *
 * 脚本举例
 * ```
 *   import { numberInput } from '@tomato-node/ui'
 *   numberInput("age")("How old are you?").then(data=>console.log(data));
 *   //? How old are you?   28
 *   // { age: 28}
 * ```
 */
export const numberInput = (name: string) => async (message: string) =>
  await commonInput({
    name,
    message,
    type: "number",
  });

/**
 * 密码输入框
 *
 * 新增于v0.0.5
 *
 * 脚本举例
 * ```
 *   import { passwordInput } from '@tomato-node/ui'
 *   passwordInput("password")("What is your password?").then(data=>console.log(data));
 *   //? What is your password? [input is hidden]  123456
 *   // { password: '123456'}
 * ```
 */
export const passwordInput = (name: string) => async (message: string) =>
  await commonInput({
    name,
    message,
    type: "password",
  });

/**
 * 多选框
 *
 * 新增于v0.0.5
 *
 * 脚本举例
 * ```
 *   import { checkbox } from '@tomato-node/ui'
 *   checkbox("checkList")("Who are your friend?")(['brizer','seven']).then(data=>console.log(data));
 *   //? Who are your friend?  ['brizer','seven']
 *   // { checkList: ['brizer','seven']}
 * ```
 */
export const checkbox = (name: string) => (message: string) => async (choices: string[]) =>
  await commonInput({
    name,
    message,
    choices,
    type: "checkbox",
  });

/**
 * 单选框
 *
 * 新增于v0.0.5
 *
 * 脚本举例
 * ```
 *   import { radio } from '@tomato-node/ui'
 *   radio("radio")("Who is your friend?")(['brizer','seven']).then(data=>console.log(data));
 *   //? Who are your friend?  brizer
 *   // { radio: 'brizer}
 * ```
 */
export const radio = (name: string) => (message: string) => async (choices: string[]) =>
  await commonInput({
    name,
    message,
    choices,
    type: "list",
  });

/**
 * 确认
 *
 * 新增于v0.0.5
 *
 * 脚本举例
 * ```
 *   import { confirm } from '@tomato-node/ui'
 *   confirm("confirm")("Are you sure?").then(data=>console.log(data));
 *   //? Are you sure?  Y
 *   // { confirm: true}
 * ```
 */
export const confirm = (name: string) => async (message: string) =>
  await commonInput({
    name,
    message,
    type: "confirm",
  });
