/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { Buffer } from "buffer";

export class FileConverter {
  public static fileToBase64(file?: File) {
    if (!file) return;
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  /***
   * Converts a dataUrl base64 image string into a File byte array
   * dataUrl example:
   * data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAYAAABRGWr/AAAAAXNSR0IA...etc
   */
  public static dataUrlToFile(
    filename: string,
    dataUrl: string,
  ): File | undefined {
    const arr = dataUrl.split(",");
    if (arr.length < 2) {
      return undefined;
    }
    const mimeArr = arr[0].match(/:(.*?);/);
    if (!mimeArr || mimeArr.length < 2) {
      return undefined;
    }

    const [_, mime] = mimeArr;
    const buff = Buffer.from(arr[1], "base64");
    return new File([buff], filename, { type: mime });
  }

  public static issueBase64FromTypeAndData(type?: string, data?: string) {
    return !type || !data ? "" : `data:${type};base64,${data}`;
  }

  public static base64MimeType(encoded?: string | null) {
    let result = null;

    if (typeof encoded !== "string") {
      return result;
    }

    const mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

    if (mime && mime.length) {
      const [_, mimeType] = mime;

      result = mimeType;
    }

    return result;
  }
}
