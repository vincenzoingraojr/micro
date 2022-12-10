// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import autoLinkEntities from './autoLinkEntities';
import extractUrlsWithIndices from './extractUrlsWithIndices';

export default function(text, options) {
  const entities = extractUrlsWithIndices(text, {
    extractUrlsWithoutProtocol: false
  });
  return autoLinkEntities(text, entities, options);
}
