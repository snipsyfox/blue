import './__init__';
import { Blue } from '@blue/core/clients/ShardClient';

async function main() {
    const client = new Blue();

    await client.run({ wait: true });
}
main().catch(console.error);
