import { createRandomString } from '@blue/core/utils/functions';

export function enumerable(v: boolean) {
    return (target: any, propertyKey: string) => {
        Object.defineProperty(target, propertyKey, {
            enumerable: v,
            writable: true,
            configurable: true,
            set: (value: any) => {
                Object.defineProperty(target, propertyKey, {
                    enumerable: v,
                    writable: true,
                    configurable: true,
                    value,
                });
            },
        });
    };
}
export function readonly(value: any) {
    return (...args: any[]) => {
        const [target, propertyKey] = args;
        // console.log(...arguments);
        console.log(args);

        Object.defineProperty(target, propertyKey, {
            enumerable: true,
            writable: false,
            value,
            configurable: true,
        });
    };
}
export function id(len: int = 10) {
    const id = createRandomString(len);
    return (target: any, propertyKey: string) => {
        Object.defineProperty(target, propertyKey, {
            enumerable: true,
            writable: false,
            configurable: true,
            value: id,
        });
    };
}
