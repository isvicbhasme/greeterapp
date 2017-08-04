export class CommonUtil {
  constructor() {

  }

  public static parseOptions(options: any): Object {
    if (options.limit == undefined || options.limit == null) {
      options.limit = 1000;
    }
    return options;
  }
}