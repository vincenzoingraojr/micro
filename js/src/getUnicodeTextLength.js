// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import nonBmpCodePairs from './regexp/nonBmpCodePairs';

export default function(text) {
  return text.replace(nonBmpCodePairs, ' ').length;
}
