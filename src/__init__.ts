import { join } from 'path';
import { readFileSync } from 'fs';
import * as mda from 'module-alias';

declare global {
    type int = number;
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            DISCORD_TOKEN: string;
        }
    }
}

mda.addAliases({
    '@blue': join(process.cwd(), 'dist', 'packages'),
});

function readConfig() {
    const file = readFileSync(join(process.cwd(), '.config', '.env'), {
        encoding: 'utf-8',
    });
    const lines = file.split('\n');

    for (const line of lines) {
        const [key, value] = line.split('=');
        if (process.env[key]) continue;
        if (!value) continue;
        process.env[key] = value;
    }
}

readConfig();
