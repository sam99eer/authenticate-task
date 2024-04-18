import { SVGProps, memo } from 'react';

const UserAvatar = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' {...props}>
        <path
            fill='#a9a9a9'
            d='M399 384.2c-22.1-38.4-63.6-64.2-111-64.2h-64c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z'
        />
    </svg>
);

const MemoUserAvatar = memo(UserAvatar);
export default MemoUserAvatar;
