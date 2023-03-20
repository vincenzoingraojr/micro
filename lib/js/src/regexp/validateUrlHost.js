// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import regexSupplant from '../lib/regexSupplant';
import validateUrlDomain from './validateUrlDomain';
import validateUrlIp from './validateUrlIp';

const validateUrlHost = regexSupplant(
  '(?:' + '#{validateUrlIp}|' + '#{validateUrlDomain}' + ')',
  { validateUrlIp, validateUrlDomain },
  'i'
);

export default validateUrlHost;
