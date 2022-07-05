/**
 * since that module doesn't provide typings we have to do it manually
 * to not have to install @types/module-alias
 */
declare module 'module-alias' {
    export function addAliases(aliases: Record<string, string>): void;
}
