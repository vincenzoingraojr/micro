// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import regexSupplant from '../lib/regexSupplant';
import spacesGroup from './spacesGroup';
export default regexSupplant(/[#{spacesGroup}]/, { spacesGroup });
