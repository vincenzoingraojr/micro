// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import invalidCharsGroup from './invalidCharsGroup';
import regexSupplant from '../lib/regexSupplant';
const invalidChars = regexSupplant(/[#{invalidCharsGroup}]/, {
  invalidCharsGroup
});
export default invalidChars;
