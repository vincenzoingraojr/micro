// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import codePoint from './codePoint';
import hashtagAlphaNumeric from './hashtagAlphaNumeric';
import regexSupplant from '../lib/regexSupplant';

const hashtagBoundary = regexSupplant(/(?:^|\uFE0E|\uFE0F|$|(?!#{hashtagAlphaNumeric}|&)#{codePoint})/, {
  codePoint,
  hashtagAlphaNumeric
});

export default hashtagBoundary;
