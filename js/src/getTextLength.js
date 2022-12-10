// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import configs from './configs';
import extractUrlsWithIndices from './extractUrlsWithIndices';
import getCharacterWeight from './lib/getCharacterWeight';
import modifyIndicesFromUTF16ToUnicode from './modifyIndicesFromUTF16ToUnicode';
import nonBmpCodePairs from './regexp/nonBmpCodePairs';
import parseText from './parseText';
import urlHasHttps from './regexp/urlHasHttps';

const getTextLength = function(text, options = configs.defaults) {
  return parseText(text, options).weightedLength;
};

export default getTextLength;
