// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import extractMentionsWithIndices from './extractMentionsWithIndices';

export default function(text) {
  let screenNamesOnly = [],
    screenNamesWithIndices = extractMentionsWithIndices(text);

  for (let i = 0; i < screenNamesWithIndices.length; i++) {
    const screenName = screenNamesWithIndices[i].screenName;
    screenNamesOnly.push(screenName);
  }

  return screenNamesOnly;
}
