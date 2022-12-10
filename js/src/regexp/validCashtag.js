// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import cashtag from './cashtag';
import punct from './punct';
import regexSupplant from '../lib/regexSupplant';
import spaces from './spaces';

const validCashtag = regexSupplant(
  '(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])',
  { cashtag, spaces, punct },
  'gi'
);

export default validCashtag;
