import './__init__';
import { Blue } from '@blue/core';

async function main() {
    const client = new Blue();

    client.on('guildMemberAdd', async ({ isDuplicate, member }) => {
        if (isDuplicate) return;
        if (/b(e|3)(l|I)uga/.test(member.name)) {
            await member.ban({
                reason: 'beluga fake ',
            });
        }
    });

    await client.run({ wait: true });
}
main().catch(console.error);
