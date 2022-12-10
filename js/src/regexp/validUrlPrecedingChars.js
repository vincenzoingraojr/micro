// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import directionalMarkersGroup from './directionalMarkersGroup';
import invalidCharsGroup from './invalidCharsGroup';
import regexSupplant from '../lib/regexSupplant';
const validUrlPrecedingChars = regexSupplant(
  /(?:[^A-Za-z0-9@＠$#＃#{invalidCharsGroup}]|[#{directionalMarkersGroup}]|^)/,
  {
    invalidCharsGroup,
    directionalMarkersGroup
  }
);
export default validUrlPrecedingChars;
