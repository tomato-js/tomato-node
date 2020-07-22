import * as fs from "../src";

describe("fs util", () => {
  describe("isModuleExist", () => {
    test("isModuleExist()", () => {
      expect(fs.isModuleExist("fs")).toBe(true);
      expect(fs.isModuleExist("fs2")).toBe(false);
    });
  });
  describe("requireModule", () => {
    test("requireModule() a normal module", () => {
      const path = fs.requireModule("path");
      expect(typeof path.join).toBe("function");
    });
    test("requireModule() a unknown module will throw error", () => {
      const throwThis = () => {
        const path = fs.requireModule("path2");
      };
      expect(throwThis).toThrowError('Trying to load "path2", but this module is not exist, please make sure it was installed');
    });
    test("requireModule() a normal module twice, will throw error", () => {
      const throwThis = () => {
        fs.requireModule("path");
        fs.requireModule("path");
      };
      expect(throwThis).toThrowError('Trying to load "path", but this module is loading or loaded');
    });
  });
});
