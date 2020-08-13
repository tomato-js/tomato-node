/**
 * @packageDocumentation
 * @module @tomato-node/ui
 */
import * as ora from "ora";
import { forEach, isString, isObject, Eachable, isNil } from "@tomato-js/shared";

type LoadingOptions = ora.Options;
type HideOptions = {
  type: "succeed" | "fail" | "warn" | "info";
} & LoadingOptions;
/**
 * Loading状态类
 *
 * 新增于v0.0.6
 *
 * 脚本举例
 * ```
 *   import { loading } from '@tomato-js/ui'
 *   //快捷用法
 *   (()=>{
 *     const myloading = loading('waiting');
 *     myloading.show();
 *     //⠼ waiting
 *     myloading.show('waiting more time');
 *     //⠼ waiting more time
 *     myloading.hide();
 *   })()
 *   //定制用法
 *   (()=>{
 *     const myloading = loading({color:'red','text':'fetching'}).show();
 *     //⠼(red) fetching
 *     myloading.show({color:'blue','text':'composing'});
 *     //⠼(blue) composing
 *     myloading.hide({type:'succeed',text:'done'});
 *     //✔ done
 *   })()
 * ```
 *
 * @param loadingOptions - 配置
 * @param loadingOptions.color - 加载图标颜色，支持black/red/green/yellow/blue/magenta/cyan/white/gray
 * @param loadingOptions.text - 描述文字
 * @returns Loading Instance
 */
class Loading {
  private options: LoadingOptions | string | undefined;
  public myLoading: ora.Ora;
  constructor(loadingOptions?: LoadingOptions | string) {
    this.options = loadingOptions;
    this.myLoading = ora(this.options || "Loading...");
  }
  /**
   * 展示加载方法
   *
   * 新增于v0.0.6
   *
   * 脚本举例
   * ```
   *   import { loading } from '@tomato-js/ui'
   *   //快捷用法
   *   (()=>{
   *     const myloading = loading('waiting');
   *     myloading.show();
   *     //⠼ waiting
   *     myloading.show('waiting more time');
   *     //⠼ waiting more time
   *     myloading.hide();
   *   })()
   *   //定制用法
   *   (()=>{
   *     const myloading = loading({color:'red','text':'fetching'}).show();
   *     //⠼(red) fetching
   *     myloading.show({color:'blue','text':'composing'});
   *     //⠼(blue) composing
   *     myloading.hide({type:'succeed',text:'done'});
   *     //✔ done
   *   })()
   * ```
   *
   * @param options - 配置
   * @param options.color - 加载图标颜色，支持black/red/green/yellow/blue/magenta/cyan/white/gray
   * @param options.text - 描述文字
   * @returns Loading Instance
   */
  public show(options?: LoadingOptions | string) {
    this.setOptions(options);
    this.myLoading.start();
    return this;
  }
  /**
   * 结束加载方法
   *
   * 新增于v0.0.6
   *
   * 脚本举例
   * ```
   *   import { loading } from '@tomato-js/ui'
   *   //快捷用法
   *   (()=>{
   *     const myloading = loading('waiting');
   *     myloading.show();
   *     //⠼ waiting
   *     myloading.show('waiting more time');
   *     //⠼ waiting more time
   *     myloading.hide();
   *   })()
   *   //定制用法
   *   (()=>{
   *     const myloading = loading({color:'red','text':'fetching'}).show();
   *     //⠼(red) fetching
   *     myloading.show({color:'blue','text':'composing'});
   *     //⠼(blue) composing
   *     myloading.hide({type:'succeed',text:'done'});
   *     //✔ done
   *   })()
   * ```
   *
   * @param options - 配置
   * @param options.type - 结束类型，支持succeed/fail/warn/info，分别对应✔/✖/⚠/ℹ
   * @param options.color - 加载图标颜色，支持black/red/green/yellow/blue/magenta/cyan/white/gray
   * @param options.text - 描述文字
   * @returns
   */
  public hide(options?: HideOptions) {
    if (isNil(options)) {
      this.myLoading.stop();
      return;
    }
    const { type } = options;
    this.setOptions(options);
    this.myLoading[type]();
  }
  private setOptions(options?: LoadingOptions | string) {
    if (isString(options)) {
      this.myLoading.start(options);
    } else if (isObject(options)) {
      forEach(options as Eachable<any>, (k: "text" | "color" | "prefixText" | "spinner" | "indent", v: string) => {
        (this.myLoading[k] as any) = v;
      });
    }
  }
}
/**
 * Loading工厂方法
 *
 * 新增于v0.0.6
 *
 * 脚本举例
 * ```
 *   import { loading } from '@tomato-js/ui'
 *   //快捷用法
 *   (()=>{
 *     const myloading = loading('waiting');
 *     myloading.show();
 *     //⠼ waiting
 *     myloading.show('waiting more time');
 *     //⠼ waiting more time
 *     myloading.hide();
 *   })()
 *   //定制用法
 *   (()=>{
 *     const myloading = loading({color:'red','text':'fetching'}).show();
 *     //⠼(red) fetching
 *     myloading.show({color:'blue','text':'composing'});
 *     //⠼(blue) composing
 *     myloading.hide({type:'succeed',text:'done'});
 *     //✔ done
 *   })()
 * ```
 *
 * @param loadingOptions - 配置
 * @param loadingOptions.color - 加载图标颜色，支持black/red/green/yellow/blue/magenta/cyan/white/gray
 * @param loadingOptions.text - 描述文字
 * @returns Loading Instance
 */
const loadingFactory = (options?: LoadingOptions | string) => {
  return new Loading(options);
};

export { loadingFactory, Loading };
