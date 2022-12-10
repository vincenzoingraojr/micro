// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import astralLetterAndMarks from './astralLetterAndMarks';
import astralNumerals from './astralNumerals';
import bmpLetterAndMarks from './bmpLetterAndMarks';
import bmpNumerals from './bmpNumerals';
import hashtagSpecialChars from './hashtagSpecialChars';
import nonBmpCodePairs from './nonBmpCodePairs';
import regexSupplant from '../lib/regexSupplant';

const hashtagAlphaNumeric = regexSupplant(
  /(?:[#{bmpLetterAndMarks}#{bmpNumerals}#{hashtagSpecialChars}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}|#{astralNumerals}))/,
  {
    bmpLetterAndMarks,
    bmpNumerals,
    hashtagSpecialChars,
    nonBmpCodePairs,
    astralLetterAndMarks,
    astralNumerals
  }
);

export default hashtagAlphaNumeric;
