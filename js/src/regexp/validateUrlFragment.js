// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import regexSupplant from '../lib/regexSupplant';
import validateUrlPchar from './validateUrlPchar';

const validateUrlFragment = regexSupplant(/(#{validateUrlPchar}|\/|\?)*/i, {
  validateUrlPchar
});

export default validateUrlFragment;
