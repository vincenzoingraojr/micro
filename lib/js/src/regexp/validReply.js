// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import atSigns from './atSigns';
import regexSupplant from '../lib/regexSupplant';
import spaces from './spaces';

const validReply = regexSupplant(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/, { atSigns, spaces });

export default validReply;
