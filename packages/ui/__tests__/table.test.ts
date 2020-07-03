import * as ui from "../src";

describe("ui util", () => {
  describe("table", () => {
    test("tableContent()", () => {
      const data = [
        ["0A", "0B", "0C"],
        ["1A", "1B", "1C"],
        ["2A", "2B", "2C"],
      ];
      const output = ui.tableContent(data);
      expect(output).toBe(
        `╔════╤════╤════╗
║ 0A │ 0B │ 0C ║
╟────┼────┼────╢
║ 1A │ 1B │ 1C ║
╟────┼────┼────╢
║ 2A │ 2B │ 2C ║
╚════╧════╧════╝
      `.trim() + "\n"
      );
    });
  });
});
