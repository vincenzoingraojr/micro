// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import regexSupplant from '../lib/regexSupplant';
import validUrlQueryChars from './validUrlQueryChars';
import validUrlQueryEndingChars from './validUrlQueryEndingChars';

const validSQcoUrl = regexSupplant(
  /^https?:\/\/sq\.co\/([a-z0-9]+)(?:\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?/,
  { validUrlQueryChars, validUrlQueryEndingChars },
  'i'
);

export default validSQcoUrl;
