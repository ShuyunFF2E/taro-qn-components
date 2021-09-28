function uuid(len = 8, radix = 16): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
    ""
  );
  const value: string[] = [];
  let i: number = 0;
  radix = radix || chars.length;

  if (len) {
    for (i = 0; i < len; i++) value[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r: string | number;
    value[8] = value[13] = value[18] = value[23] = "-";
    value[14] = "4";
    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | (Math.random() * 16);
        value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return value.join("");
}

export { uuid };
