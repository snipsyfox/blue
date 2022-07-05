import { Interaction } from 'detritus-client';
import { Context } from './BaseContext';
export abstract class BaseCommand<
    T extends Interaction.ParsedArgs
> extends Interaction.InteractionCommand {
    abstract exec(ctx: Context<T>): Promise<void>;

    async run(context: Interaction.InteractionContext, args: T) {
        try {
            const ctx = new Context(context, args);

            await this.exec(ctx);
        } catch (error) {
            console.error(error);
        }
    }
}
