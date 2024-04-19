import { ReactElement } from 'react';
import EmojiLove from 'src/assets/svg/EmojiLove';
import EmojiSad from 'src/assets/svg/EmojiSad';
import EmojiSmile from 'src/assets/svg/EmojiSmile';
import type { T_Emoji } from 'src/types/general/Components';

export const EMOJI_MAP = new Map<T_Emoji, ReactElement>([
    ['sad', <EmojiSad />],
    ['smile', <EmojiSmile />],
    ['love', <EmojiLove />],
]);
