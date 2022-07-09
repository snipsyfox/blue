//eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor = new (...args: unknown[]) => any;
export function createClassDecorator(clsdec: (target: Constructor) => unknown) {
    return clsdec;
}
