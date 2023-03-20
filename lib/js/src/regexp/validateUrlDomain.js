// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import regexSupplant from '../lib/regexSupplant';
import validateUrlDomainSegment from './validateUrlDomainSegment';
import validateUrlDomainTld from './validateUrlDomainTld';
import validateUrlSubDomainSegment from './validateUrlSubDomainSegment';

const validateUrlDomain = regexSupplant(
  /(?:(?:#{validateUrlSubDomainSegment}\.)*(?:#{validateUrlDomainSegment}\.)#{validateUrlDomainTld})/i,
  {
    validateUrlSubDomainSegment,
    validateUrlDomainSegment,
    validateUrlDomainTld
  }
);

export default validateUrlDomain;
