// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import atSigns from './atSigns';
import latinAccentChars from './latinAccentChars';
import regexSupplant from '../lib/regexSupplant';
const endMentionMatch = regexSupplant(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/, { atSigns, latinAccentChars });
export default endMentionMatch;
