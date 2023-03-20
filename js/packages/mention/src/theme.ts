import { css } from 'linaria';

const entryShared = `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 12px 6px 12px;
  height: 44px;
  transition: background-color 0.4s cubic-bezier(.27,1.27,.48,.56);
  &:active {
    background: rgba(56, 53, 53, 0.6);
  }
`;

export interface MentionPluginTheme {
  mention?: string;
  mentionSuggestions?: string;
  mentionSuggestionsPopup?: string;
  mentionSuggestionsPopupVisible?: string;
  mentionSuggestionsEntry?: string;
  mentionSuggestionsEntryFocused?: string;
  mentionSuggestionsEntryText?: string;
  mentionSuggestionsEntryAvatar?: string;
  [x: string]: string | undefined;
}

export const defaultTheme: MentionPluginTheme = {
  mention: css`
    &,
    &:visited {
      color: #039BE5;
      cursor: pointer;
      display: inline-block;
      text-decoration: none;
    }
    &:hover,
    &:focus {
      color: #039BE5;
      outline: 0; /* reset for :focus */
    }
    &:active {
      color: #039BE5;
    }
  `,

  // CSS class for suggestions component
  mentionSuggestions: css`
    position: absolute;
    min-width: 220px;
    max-width: 440px;
    background: #151414;
    border-radius: 6px;
    box-shadow: 0px 0px 2px #383535;
    cursor: pointer;
    padding-top: 12px;
    padding-bottom: 12px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transform: scale(0);
  `,

  mentionSuggestionsPopup: css`
    opacity: 0;
    transition: opacity 0.25s cubic-bezier(0.3, 1.2, 0.2, 1);
  `,
  mentionSuggestionsPopupVisible: css`
    opacity: 1;
  `,

  // CSS classes for an entry in the suggestions component
  mentionSuggestionsEntry: css`
    ${entryShared}
  `,

  mentionSuggestionsEntryFocused: css`
    ${entryShared}
    background-color: rgba(56, 53, 53, 0.6);
  `,

  mentionSuggestionsEntryText: css`
    display: inline-block;
    margin-left: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 368px;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
  `,

  mentionSuggestionsEntryAvatar: css`
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 16px;
  `,
};