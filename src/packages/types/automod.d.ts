import { AutomodConstants } from '@blue/automod';

export namespace Payloads {
    export interface AutomodActionExecutionPayload {
        t: AutomodConstants.AutomodEventnamesRaw.AutomodRuleExecution;
        d: {
            guild_id: string;
            action: AutomodAction;
            rule_id: string;
            rule_trigger_type: AutomodConstants.AutomodTriggerTypes;
            user_id: string;
            channel_id?: string;
            message_id?: string;
            alert_system_message_id?: string;
            content: string;
            matched_keyword: string | null;
            matched_content: string | null;
        };
    }
    export interface AutomodRuleCreatePayload {
        t: AutomodConstants.AutomodEventnamesRaw.AutomodRuleCreate;
        d: AutomodRuleRaw;
    }
    export interface AutomodRuleUpdatePayload {
        t: AutomodConstants.AutomodEventnamesRaw.automodRuleUpdate;
        d: AutomodRuleRaw;
    }

    export interface AutomodRuleDeletePayload {
        t: AutomodConstants.AutomodEventnamesRaw.automodRuleDelete;
        d: AutomodRuleRaw;
    }
    export type AutomodEventPayload =
        | AutomodActionExecutionPayload
        | AutomodRuleCreatePayload
        | AutomodRuleUpdatePayload
        | AutomodRuleDeletePayload;
}

export interface AutomodRuleRaw {
    id: string;
    guild_id: string;
    name: string;
    creator_id: string;
    event_type: AutomodConstants.AutomodEventTypes;
    triggger_type: AutomodConstants.AutomodTriggerTypes;
    trigger_metadata: TriggerMeta;
    actions: AutomodAction[];
    enabled: boolean;
    exempt_roles: string[];
    exempt_channels: string[];
}

export interface TriggerMeta {
    keyword_filter: string[];
    presets: AutomodConstants.KeywordPresetTypes[];
}

export interface AutomodAction {
    type: AutomodConstants.AutomodActionType;
    metaData: Partial<AutomodActionMetadata>;
}

export interface AutomodActionMetadata {
    channel_id?: string;
    duration_seconds?: number;
}

export interface AutomodPayload {
    t: AutomodConstants.AutomodEventnamesRaw;
    d: AutomodRuleRaw;
}
