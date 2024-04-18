import { SVGProps, memo } from 'react';

const Bookmark = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' {...props}>
        <path d='M0 48v439.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400l153.7 107.6c4.1 2.9 9 4.4 14 4.4 13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z' />
    </svg>
);

const MemoBookmark = memo(Bookmark);
export default MemoBookmark;
