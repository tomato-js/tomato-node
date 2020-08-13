import * as ui from "../src";

describe("ui util", () => {
  describe("loading", () => {
    test("loading() init success", () => {
      expect(ui.loading() instanceof ui.Loading).toBe(true);
      expect(ui.loading().show() instanceof ui.Loading).toBe(true);
      expect(ui.loading().hide()).toBe(undefined);
    });
    test("loading().show() change options success", () => {
      const myLoading = ui.loading().show({
        color:'red',
        text:'me'
      })
      myLoading.hide()
      expect(myLoading.myLoading.color).toBe('red');
      expect(myLoading.myLoading.text).toBe('me');
    });
    test("loading().hide() change options success", () => {
      const myLoading = ui.loading().show({
        color:'red',
        text:'me'
      })
      myLoading.hide({
        type:'succeed',
        text:'done'
      })
      expect(myLoading.myLoading.text).toBe('done');
    });
  });
});
