import * as mda from 'module-alias';
import { join } from 'path';
import { Constants } from 'detritus-client-rest';
import { Constants as C } from 'detritus-client-socket';
declare global {
    type int = number;
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            DISCORD_TOKEN: string;
        }
    }
}

Reflect.set(Constants, 'ApiVersion', 10);
Reflect.set(C.ApiVersions, 'GATEWAY', 10);
mda.addAliases({
    '@blue': join(process.cwd(), 'dist', 'packages'),
});
import { loadEnv } from '@blue/core/utils/env';
loadEnv();
