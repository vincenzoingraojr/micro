// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import regexSupplant from '../lib/regexSupplant';
import validateUrlUserinfo from './validateUrlUserinfo';
import validateUrlUnicodeHost from './validateUrlUnicodeHost';
import validateUrlPort from './validateUrlPort';

const validateUrlUnicodeAuthority = regexSupplant(
  // $1 userinfo
  '(?:(#{validateUrlUserinfo})@)?' +
    // $2 host
    '(#{validateUrlUnicodeHost})' +
    // $3 port
    '(?::(#{validateUrlPort}))?',
  { validateUrlUserinfo, validateUrlUnicodeHost, validateUrlPort },
  'i'
);

export default validateUrlUnicodeAuthority;
