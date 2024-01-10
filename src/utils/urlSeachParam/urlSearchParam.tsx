export class URLSearchParam {
  public static objToUrlParams(obj: Record<string, any>): string {
    const toUrlParams = (obj: Record<string, any>, prefix = ""): string => {
      let urlParams = "";

      for (const [key, val] of Object.entries(obj)) {
        if (!val) continue;

        const newPrefix = prefix + key;

        if (val instanceof Array) {
          const valToObj: Record<string, any> = val.reduce((acc, v, i) => {
            acc[i as any] = v;
            return acc;
          }, {});
          urlParams += toUrlParams(valToObj, newPrefix + "-");
        } else if (val instanceof Object) {
          urlParams += toUrlParams(val, newPrefix + "-");
        } else {
          urlParams += newPrefix + "=" + val;
        }

        urlParams += "&";
      }

      return urlParams.slice(0, -1);
    };

    return encodeURI(toUrlParams(obj));
  }

  public static urlParamsToObj(urlParams: string): Record<string, any> {
    urlParams = decodeURI(urlParams);

    const toObj = (urlParams: string): Record<string, any> => {
      const obj: Record<string, any> = {};

      const urlParamsArr = urlParams.split("&");

      const subUrlParamsObj: Record<string, any> = {};

      for (const item of urlParamsArr) {
        const [key, val] = item.split("=");

        if (val == "null") {
          obj[key] = null;
        } else if (val == "undefined") {
          obj[key] = undefined;
        } else if (val == "true") {
          obj[key] = true;
        } else if (val == "false") {
          obj[key] = false;
        } else if (val == "NaN") {
          obj[key] = NaN;
        } else if (val == "Infinity") {
          obj[key] = Infinity;
        } else {
          obj[key] = val;
        }

        const keys = key.split("-");
        if (keys.length > 1) {
          const key0 = keys[0];

          if (!subUrlParamsObj[key0]) {
            subUrlParamsObj[key0] = [];
          }

          keys.shift();

          const param = keys.join("-") + "=" + val;
          subUrlParamsObj[key0].push(param);
        }
      }

      for (const [key, value] of Object.entries(subUrlParamsObj)) {
        obj[key] = toObj(value.join("&"));
      }

      return obj;
    };

    return URLSearchParam.checkIfObjShouldBeArrayAndConvert(toObj(urlParams));
  }

  public static checkIfObjShouldBeArrayAndConvert(
    obj: Record<string, any>,
  ): Record<string, any> | any[] {
    if (obj instanceof Array) {
      return obj.map((item) =>
        item instanceof Object
          ? URLSearchParam.checkIfObjShouldBeArrayAndConvert(item)
          : item,
      );
    }

    let canConvertToArray = true;
    for (const key in obj) {
      const val = obj[key];

      if (val instanceof Object || val instanceof Array) {
        obj[key] = URLSearchParam.checkIfObjShouldBeArrayAndConvert(val);
      }

      if (isNaN(+key)) {
        canConvertToArray = false;
      }
    }

    const orderedObj: Record<string, any> = {};
    Object.keys(obj)
      .sort()
      .forEach(function (key) {
        orderedObj[key] = obj[key];
      });

    const firstVal = +Object.keys(orderedObj)[0] as number;

    if (firstVal != 0) {
      canConvertToArray = false;
    }

    const keys = Object.keys(orderedObj);
    for (let i = 0; i < keys.length - 1; i++) {
      const key: number = +keys[i];
      const nextKey: number = +keys[i + 1];

      const keyStep = nextKey - key;

      if (keyStep != 1) {
        canConvertToArray = false;
        break;
      }
    }

    if (canConvertToArray) {
      return Object.values(orderedObj);
    }

    return obj;
  }

  public static addParamsToUrl(
    params: string,
    url: string = window.location.href,
  ): string {
    url += url.indexOf("?") === -1 ? "?" : "&";
    return url + params;
  }

  public static addObjToUrl(
    obj: Record<string, any>,
    url: string = window.location.href,
  ): string {
    return URLSearchParam.addParamsToUrl(
      URLSearchParam.objToUrlParams(obj),
      url,
    );
  }

  public static extractParamsFromUrl(
    url: string = window.location.href,
  ): Record<string, any> {
    return URLSearchParam.urlParamsToObj(url.split("?")[1]);
  }
}
