import * as ui from "../src";

describe("ui util", () => {
  describe("logger", () => {
    test("logger()", () => {
      const log = ui.logger;
      const myLog = ui.createLogger({name:'MYLOGGER'});
      log.info('test');
      log.warn('test');
      log.error('test');
      log.fatal('test');
      myLog.info('test');
      myLog.warn('test');
      myLog.error('test');
      myLog.fatal('test');
      expect(true).toBe(true);
    });
  });
});
