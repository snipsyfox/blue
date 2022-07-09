import { ActivityTypes, PresenceStatuses } from 'detritus-client/lib/constants';
/**
 * api tokens
 */
export const TOKENS = {
    discord: process.env.DISCORD_TOKEN || '',
};
/**
 * default configurations options
 *
 */
export const DEFAULTS = {
    /**
     * the message prefix
     */
    PREFIX: '.',
};
/**
 * presences the bot is using after certain actions
 */
export const PRESENCES = {
    STARTUP: {
        status: PresenceStatuses.DND,
        activities: [
            {
                name: 'Starting up...',
                type: ActivityTypes.PLAYING,
            },
        ],
    },
    STARTUP_FINISHED: {
        status: PresenceStatuses.ONLINE,
        activities: [
            {
                //eslint-disable-next-line quotes
                name: "i'm blue daba dee daba die",
            },
        ],
    },
};
/**
 * options for all clients
 */
export const CLIENT_OPTIONS = {
    SHARD: {
        cache: true,
        gateway: {
            identifyProperties: {
                browser: 'Discord iOS',
            },
            intents:
                (1 << 1) |
                (1 << 2) |
                (1 << 3) |
                (1 << 4) |
                (1 << 5) |
                (1 << 6) |
                (1 << 7) |
                (1 << 8) |
                (1 << 9) |
                (1 << 10) |
                (1 << 11) |
                (1 << 12) |
                (1 << 13) |
                (1 << 14) |
                (1 << 15) |
                (1 << 16) |
                (1 << 20) |
                (1 << 21),
            presence: PRESENCES.STARTUP,
        },
    },
};
