export function createClass(name?: string, ctor?: string) {
    name = name || createRandomString(10);
    return eval(`() => class ${name} {
        ${ctor ?? ''}
    }`)();
}

export function createExtendedClass(
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    cls: any,
    name?: string
) {
    name = name || createRandomString(10);
    return eval(`(cls) => class ${name} extends cls {}`)(cls);
}

export function createRandomString(len: int) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let r = '';
    for (let i = 0; i < len; i++) {
        r +=
            i === 0
                ? chars[Math.floor(Math.random() * chars.length)].toUpperCase()
                : chars[Math.floor(Math.random() * chars.length)][
                      Math.floor(Math.random()) ? 'toLowerCase' : 'toUpperCase'
                  ]();
    }
    return r;
}
