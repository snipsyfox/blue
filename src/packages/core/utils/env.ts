import * as fs from 'fs';
import * as path from 'path';
export function env(key: keyof NodeJS.ProcessEnv, def: string) {
    return process.env[key] || def;
}

export function loadEnv() {
    const envFile = path.join(process.cwd(), '.config', '.env');
    if (fs.existsSync(envFile)) {
        const s = fs.readFileSync(envFile, 'utf8');
        const lines = s.split('\n');
        for (const line of lines) {
            const [k, v] = line.split('=');
            if (!line) continue;
            if (k && v) {
                stenv(k, v);
            } else {
                throw new Error('invalid env file');
            }
        }
    }
}

const stenv = (k: string, v: string) => {
    const e = process.env;
    if (e[k]) {
        throw new Error('yes');
    }
    process.env[k] = v;
    return process.env[k];
};
