import { version } from '../package.json';

import colors from './colors';
import channels from './channels';

import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    colors,
    channels,

    prefix: `~`,

    tickets: {
        max: 1,
        limitByCategory: true
    },

    version,
    footer: `© AtlasMC | v${version}`
};

export default config;
