import { SVGProps, memo } from 'react';

const Smile = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' {...props}>
        <path
            fill='#FFD43B'
            d='M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm-91.9-186.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6c-22.3 25.6-61 53.5-116.1 53.5s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z'
        />
    </svg>
);

const EmojiSmile = memo(Smile);
export default EmojiSmile;