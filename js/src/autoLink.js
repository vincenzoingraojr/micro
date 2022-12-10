// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import extractEntitiesWithIndices from './extractEntitiesWithIndices';
import autoLinkEntities from './autoLinkEntities';

export default function(text, options) {
  const entities = extractEntitiesWithIndices(text, {
    extractUrlsWithoutProtocol: false
  });
  return autoLinkEntities(text, entities, options);
}
