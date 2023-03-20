// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import extractMentionsOrListsWithIndices from './extractMentionsOrListsWithIndices';
import autoLinkEntities from './autoLinkEntities';

export default function(text, options) {
  const entities = extractMentionsOrListsWithIndices(text);
  return autoLinkEntities(text, entities, options);
}
