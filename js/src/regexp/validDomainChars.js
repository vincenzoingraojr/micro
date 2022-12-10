// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import invalidDomainChars from './invalidDomainChars';
import regexSupplant from '../lib/regexSupplant';

const validDomainChars = regexSupplant(/[^#{invalidDomainChars}]/, {
  invalidDomainChars
});

export default validDomainChars;
