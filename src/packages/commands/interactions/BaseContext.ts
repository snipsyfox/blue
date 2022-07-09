import { Interaction } from 'detritus-client';

export class Context<
    T extends Interaction.ParsedArgs | undefined
> extends Interaction.InteractionContext {
    readonly args: T;
    constructor(ctx: Interaction.InteractionContext, args: T) {
        super(
            ctx.interactionCommandClient,
            ctx.interaction,
            ctx.command,
            ctx.invoker
        );
        this.args = args;
    }
}
