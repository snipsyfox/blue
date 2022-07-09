export enum AutomodEventnamesRaw {
    AutomodRuleCreate = 'AUTO_MODERATION_RULE_CREATE',
    AutomodRuleExecution = 'AUTO_MODERATION_ACTION_EXECUTION',
    automodRuleUpdate = 'AUTO_MODERATION_RULE_UPDATE',
    automodRuleDelete = 'AUTO_MODERATION_RULE_DELETE',
}

export enum AutomodEventnames {
    AutomodRuleCreate = 'RuleCreate',
    AutomodRuleExecution = 'RuleExecution',
    automodRuleUpdate = 'RuleUpdate',
    automodRuleDelete = 'RuleDelete',
}
export enum AutomodEventTypes {
    MESSAGE_SEND = 1,
}

export enum AutomodTriggerTypes {
    KEYWORD = 1,
    HARMFUL_LINK = 2,
    SPAM = 3,
    KEYWORD_PRESET = 4,
}

export enum KeywordPresetTypes {
    PROFANITY = 1,
    SEXUAL_CONTENT = 2,
    SLURS = 4,
}

export enum AutomodActionType {
    BLOCK_MESSAGE = 1,
    SEND_ALERT_MESSAGE = 2,
    TIMEOUT = 3,
}
