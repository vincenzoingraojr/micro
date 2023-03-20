// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import convertUnicodeIndices from './lib/convertUnicodeIndices';

export default function(text, entities) {
  convertUnicodeIndices(text, entities, true);
}
