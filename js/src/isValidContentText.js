// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import isInvalidContent from './isInvalidContent';

export default function(text, options) {
  return !isInvalidContent(text, options);
}
