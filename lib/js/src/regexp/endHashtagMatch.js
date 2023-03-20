// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import hashSigns from './hashSigns';
import regexSupplant from '../lib/regexSupplant';

const endHashtagMatch = regexSupplant(/^(?:#{hashSigns}|:\/\/)/, { hashSigns });

export default endHashtagMatch;
