// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import extractMentions from './extractMentions';

export default function(username) {
  if (!username) {
    return false;
  }

  const extracted = extractMentions(username);

  // Should extract the username minus the @ sign, hence the .slice(1)
  return extracted.length === 1 && extracted[0] === username.slice(1);
}
