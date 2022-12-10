// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import regexSupplant from '../lib/regexSupplant';

// Modified version of RFC 3986 Appendix B
const validateUrlUnencoded = regexSupplant(
  '^' + // Full URL
  '(?:' +
  '([^:/?#]+):\\/\\/' + // $1 Scheme
  ')?' +
  '([^/?#]*)' + // $2 Authority
  '([^?#]*)' + // $3 Path
  '(?:' +
  '\\?([^#]*)' + // $4 Query
  ')?' +
  '(?:' +
  '#(.*)' + // $5 Fragment
    ')?$',
  'i'
);

export default validateUrlUnencoded;
