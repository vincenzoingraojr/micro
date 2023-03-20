// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import regexSupplant from '../lib/regexSupplant';
import validateUrlUnreserved from './validateUrlUnreserved';
import validateUrlPctEncoded from './validateUrlPctEncoded';
import validateUrlSubDelims from './validateUrlSubDelims';

const validateUrlUserinfo = regexSupplant(
  '(?:' + '#{validateUrlUnreserved}|' + '#{validateUrlPctEncoded}|' + '#{validateUrlSubDelims}|' + ':' + ')*',
  { validateUrlUnreserved, validateUrlPctEncoded, validateUrlSubDelims },
  'i'
);

export default validateUrlUserinfo;
