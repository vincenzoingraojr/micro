/** Declaration file generated by dts-gen */

export const configs: {
    defaults: {
        defaultWeight: number;
        emojiParsingEnabled: boolean;
        maxWeightedTextLength: number;
        ranges: {
            end: number;
            start: number;
            weight: number;
        }[];
        scale: number;
        transformedURLLength: number;
        version: number;
    };
    version1: {
        defaultWeight: number;
        maxWeightedTextLength: number;
        ranges: any[];
        scale: number;
        transformedURLLength: number;
        version: number;
    };
    version2: {
        defaultWeight: number;
        maxWeightedTextLength: number;
        ranges: {
            end: number;
            start: number;
            weight: number;
        }[];
        scale: number;
        transformedURLLength: number;
        version: number;
    };
    version3: {
        defaultWeight: number;
        emojiParsingEnabled: boolean;
        maxWeightedTextLength: number;
        ranges: {
            end: number;
            start: number;
            weight: number;
        }[];
        scale: number;
        transformedURLLength: number;
        version: number;
    };
};

export const regexen: {
    astralLetterAndMarks: RegExp;
    astralNumerals: RegExp;
    atSigns: RegExp;
    bmpLetterAndMarks: RegExp;
    bmpNumerals: RegExp;
    cashtag: RegExp;
    codePoint: RegExp;
    cyrillicLettersAndMarks: RegExp;
    endHashtagMatch: RegExp;
    endMentionMatch: RegExp;
    extractUrl: RegExp;
    hashSigns: RegExp;
    hashtagAlpha: RegExp;
    hashtagAlphaNumeric: RegExp;
    hashtagBoundary: RegExp;
    hashtagSpecialChars: RegExp;
    invalidChars: RegExp;
    invalidCharsGroup: RegExp;
    invalidDomainChars: string;
    invalidUrlWithoutProtocolPrecedingChars: RegExp;
    latinAccentChars: RegExp;
    nonBmpCodePairs: RegExp;
    punct: RegExp;
    rtlChars: RegExp;
    spaces: RegExp;
    spacesGroup: RegExp;
    urlHasHttps: RegExp;
    urlHasProtocol: RegExp;
    validAsciiDomain: RegExp;
    validCCTLD: RegExp;
    validCashtag: RegExp;
    validDomain: RegExp;
    validDomainChars: RegExp;
    validDomainName: RegExp;
    validGTLD: RegExp;
    validGeneralUrlPathChars: RegExp;
    validHashtag: RegExp;
    validMentionOrList: RegExp;
    validMentionPrecedingChars: RegExp;
    validPortNumber: RegExp;
    validPunycode: RegExp;
    validReply: RegExp;
    validSQcoUrl: RegExp;
    validSubdomain: RegExp;
    validUrlBalancedParens: RegExp;
    validUrlPath: RegExp;
    validUrlPathEndingChars: RegExp;
    validUrlPrecedingChars: RegExp;
    validUrlQueryChars: RegExp;
    validUrlQueryEndingChars: RegExp;
    validateUrlAuthority: RegExp;
    validateUrlDecOctet: RegExp;
    validateUrlDomain: RegExp;
    validateUrlDomainSegment: RegExp;
    validateUrlDomainTld: RegExp;
    validateUrlFragment: RegExp;
    validateUrlHost: RegExp;
    validateUrlIp: RegExp;
    validateUrlIpv4: RegExp;
    validateUrlIpv6: RegExp;
    validateUrlPath: RegExp;
    validateUrlPchar: RegExp;
    validateUrlPctEncoded: RegExp;
    validateUrlPort: RegExp;
    validateUrlQuery: RegExp;
    validateUrlScheme: RegExp;
    validateUrlSubDelims: RegExp;
    validateUrlSubDomainSegment: RegExp;
    validateUrlUnencoded: RegExp;
    validateUrlUnicodeAuthority: RegExp;
    validateUrlUnicodeDomain: RegExp;
    validateUrlUnicodeDomainSegment: RegExp;
    validateUrlUnicodeDomainTld: RegExp;
    validateUrlUnicodeHost: RegExp;
    validateUrlUnicodeSubDomainSegment: RegExp;
    validateUrlUnreserved: RegExp;
    validateUrlUserinfo: RegExp;
};

export function autoLink(text: any, options: any): any;

export function autoLinkCashtags(text: any, options: any): any;

export function autoLinkEntities(text: any, entities: any, options: any): any;

export function autoLinkHashtags(text: any, options: any): any;

export function autoLinkUrlsCustom(text: any, options: any): any;

export function autoLinkUsernamesOrLists(text: any, options: any): any;

export function autoLinkWithJSON(text: any, json: any, options: any): any;

export function convertUnicodeIndices(text: any, entities: any, indicesInUTF16: any): any;

export function extractCashtags(text: any): any;

export function extractCashtagsWithIndices(text: any): any;

export function extractEntitiesWithIndices(text: any, options: any): any;

export function extractHashtags(text: any): any;

export function extractHashtagsWithIndices(text: any, options: any): any;

export function extractHtmlAttrsFromOptions(options: any): any;

export function extractMentions(text: any): any;

export function extractMentionsOrListsWithIndices(text: any): any;

export function extractMentionsWithIndices(text: any): any;

export function extractReplies(text: any): any;

export function extractUrls(text: any, options: any): any;

export function extractUrlsWithIndices(text: any, ...args: any[]): any;

export function getTextLength(text: any, ...args: any[]): any;

export function getUnicodeTextLength(text: any): any;

export function hasInvalidCharacters(text: any): any;

export function hitHighlight(text: any, hits: any, options: any): any;

export function htmlEscape(text: any): any;

export function isInvalidContent(text: any, ...args: any[]): any;

export function isValidContentText(text: any, options: any): any;

export function isValidHashtag(hashtag: any): any;

export function isValidList(usernameList: any): any;

export function isValidUrl(url: any, unicodeDomains: any, requireProtocol: any): any;

export function isValidUsername(username: any): any;

export function linkTextWithEntity(entity: any, options: any): any;

export function linkToCashtag(entity: any, text: any, options: any): any;

export function linkToHashtag(entity: any, text: any, options: any): any;

export function linkToMentionAndList(entity: any, text: any, options: any): any;

export function linkToText(entity: any, text: any, attributes: any, options: any): any;

export function linkToTextWithSymbol(entity: any, symbol: any, text: any, attributes: any, options: any): any;

export function linkToUrl(entity: any, text: any, options: any): any;

export function modifyIndicesFromUTF16ToUnicode(text: any, entities: any): void;

export function modifyIndicesFromUnicodeToUTF16(text: any, entities: any): void;

export function parseText(...args: any[]): any;

export function removeOverlappingEntities(entities: any): any;

export function splitTags(text: any): any;

export function standardizeIndices(text: any, startIndex: any, endIndex: any): any;

export function tagAttrs(attributes: any): any;

