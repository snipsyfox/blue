import { createExtendedClass } from '@blue/core/utils/functions';
import { Interaction } from 'detritus-client';
import { createClassDecorator } from './default';

export function applyOptions(options: Interaction.InteractionCommandOptions) {
    return createClassDecorator((cls) => {
        abstract class Extended extends cls {
            constructor() {
                super(options);
            }
        }
        return createExtendedClass(Extended);
    });
}

export function ownerOnly() {
    return createClassDecorator((cls) => {
        class T extends cls {
            ownerOnly = true;
        }
        return createExtendedClass(T);
    });
}
