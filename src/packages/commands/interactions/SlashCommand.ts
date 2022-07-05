import { Interaction, Constants } from 'detritus-client';
import { BaseCommand } from './BaseCommand';

export abstract class InteractionCommand<
    T extends Interaction.ParsedArgs
> extends BaseCommand<T> {
    constructor(options: Interaction.InteractionCommandOptions) {
        options.type = Constants.ApplicationCommandTypes.CHAT_INPUT;
        super(options);
    }
}
