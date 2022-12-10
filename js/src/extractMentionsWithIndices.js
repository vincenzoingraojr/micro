// Copyright 2022 Vincenzo Ingrao Jr.
// Licensed under the MIT License

import extractMentionsOrListsWithIndices from './extractMentionsOrListsWithIndices';

export default function(text) {
  const mentions = [];
  let mentionOrList;
  const mentionsOrLists = extractMentionsOrListsWithIndices(text);

  for (let i = 0; i < mentionsOrLists.length; i++) {
    mentionOrList = mentionsOrLists[i];
    if (mentionOrList.listSlug === '') {
      mentions.push({
        screenName: mentionOrList.screenName,
        indices: mentionOrList.indices
      });
    }
  }

  return mentions;
}
