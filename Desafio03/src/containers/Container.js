import fs from "fs";

class Container {
  constructor(fileName) {
    this.filePath = `./src/db/${fileName}.json`;
  }

  async getAll() {
    try {
      const file = await fs.promises.readFile(this.filePath, "utf8");
      const elements = JSON.parse(file);

      return elements;
    } catch (error) {
      console.log(error);
    }
  }

  async getRandom() {
    try {
      const elements = await this.getAll();

      const foundElement = elements[Math.floor(Math.random() * elements.length)]

      return foundElement;
    } catch (error) {
      console.log(error);
    }
  }
}

export { Container };
