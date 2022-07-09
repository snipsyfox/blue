import { Blue } from '@blue/core';
import { enumerable, id } from '@blue/decorators/general';
import { AutomodAction, Payloads } from '@blue/types/automod';
import { Structures } from 'detritus-client';
import { AutomodConstants } from '..';

class Rule {
    constructor(
        public id: string,
        public trigger: AutomodConstants.AutomodTriggerTypes
    ) {}
}
class Match {
    constructor(
        public readonly keyword?: string | null,
        public readonly content?: string | null
    ) {}
}

export class AutomodExecution {
    @id(15)
    execution_id!: string;
    @enumerable(false)
    guild: Structures.Guild;
    action: AutomodAction;
    rule: Rule;
    user: Structures.User;
    member?: Structures.Member;
    channel?: Structures.Channel;
    alertMessage?: Structures.Message;
    @enumerable(false)
    content: string;
    matched: Match;
    constructor(
        readonly client: Blue,
        data: Payloads.AutomodActionExecutionPayload['d']
    ) {
        const guild = client.guilds.cache.get(data.guild_id);
        if (!guild) {
            throw new Error('Guild not found');
        }
        this.action = data.action;
        this.guild = guild;
        this.rule = new Rule(data.rule_id, data.rule_trigger_type);
        const user = client.users.cache.get(data.user_id);
        if (!user) {
            throw new Error('User not found');
        }
        this.user = user;
        this.member = guild.members.cache.get(data.user_id);
        this.channel = data.channel_id
            ? guild.channels.cache.get(data.channel_id)
            : undefined;
        this.alertMessage = data.alert_system_message_id
            ? guild.messages.cache.get(data.alert_system_message_id)
            : undefined;
        this.content = data.content;
        this.matched = new Match(data.matched_keyword, data.matched_content);
    }
}
