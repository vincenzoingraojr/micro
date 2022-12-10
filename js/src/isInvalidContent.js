// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import configs from './configs';
import getTextLength from './getTextLength';
import hasInvalidCharacters from './hasInvalidCharacters';

export default function(text, options = configs.defaults) {
  if (!text) {
    return 'empty';
  }

  const mergedOptions = { ...configs.defaults, ...options };
  const maxLength = mergedOptions.maxWeightedTextLength;

  // Determine max length independent of URL length
  if (getTextLength(text, mergedOptions) > maxLength) {
    return 'too_long';
  }

  if (hasInvalidCharacters(text)) {
    return 'invalid_characters';
  }

  return false;
}
