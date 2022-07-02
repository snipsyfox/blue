import { ShardClient } from 'detritus-client';
import { CLIENT_OPTIONS, TOKENS } from '../utils/constants';

export class Blue extends ShardClient {
    constructor() {
        super(TOKENS.discord, CLIENT_OPTIONS.SHARD);
    }
}
