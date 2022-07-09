import { Blue } from '@blue/core/clients/ShardClient';
import { Payloads } from '@blue/types/automod';
import { EventEmitter } from 'events';
import { AutomodEventnames, AutomodEventnamesRaw } from './Constants';
import { AutomodExecution } from './structures/AutomodPayload';
export class AutomodHandler extends EventEmitter {
    readonly client: Blue;
    constructor(client: Blue) {
        super({ captureRejections: true });
        this.client = client;
    }

    async init() {
        this.client.on('raw', async (data: Payloads.AutomodEventPayload) => {
            if (
                ![
                    AutomodEventnamesRaw.AutomodRuleCreate,
                    AutomodEventnamesRaw.AutomodRuleExecution,
                    AutomodEventnamesRaw.automodRuleDelete,
                    AutomodEventnamesRaw.automodRuleUpdate,
                ].includes(data.t)
            ) {
                return;
            }
            switch (data.t) {
                case AutomodEventnamesRaw.AutomodRuleCreate:
                    await this[AutomodEventnamesRaw.AutomodRuleCreate](data.d);
                    break;
                case AutomodEventnamesRaw.AutomodRuleExecution:
                    await this[AutomodEventnamesRaw.AutomodRuleExecution](
                        data.d
                    );
                    break;
                case AutomodEventnamesRaw.automodRuleUpdate:
                    await this[AutomodEventnamesRaw.automodRuleUpdate](data.d);
                    break;
                case AutomodEventnamesRaw.automodRuleDelete:
                    await this[AutomodEventnamesRaw.automodRuleDelete](data.d);
                    break;
            }
        });
    }
    private async [AutomodEventnamesRaw.AutomodRuleCreate](
        data: Payloads.AutomodRuleCreatePayload['d']
    ) {
        data;
    }
    private async [AutomodEventnamesRaw.AutomodRuleExecution](
        data: Payloads.AutomodActionExecutionPayload['d']
    ) {
        const payload = new AutomodExecution(this.client, data);
        this.emit(AutomodEventnames.AutomodRuleExecution, payload);
    }
    private async [AutomodEventnamesRaw.automodRuleUpdate](
        data: Payloads.AutomodRuleUpdatePayload['d']
    ) {
        data;
    }
    private async [AutomodEventnamesRaw.automodRuleDelete](
        data: Payloads.AutomodRuleDeletePayload['d']
    ) {
        data;
    }
}
