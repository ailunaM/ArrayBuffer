export class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }
  load(buffer) {
    if (!(buffer instanceof ArrayBuffer)) {
      throw new Error("Provided argument is not an ArrayBuffer");
    }
    this.buffer = buffer;
  }
  toString() {
    if (!this.buffer) {
      throw new Error("No buffer loaded");
    }
    const bufferView = new Uint16Array(this.buffer);
    let stringData = "";
    for (let i = 0; i < bufferView.length; i++) {
      stringData += String.fromCharCode(bufferView[i]);
    }

    return stringData;
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
const converter = new ArrayBufferConverter();
const buffer = getBuffer();
converter.load(buffer);
const jsonString = converter.toString();
console.log(jsonString);
