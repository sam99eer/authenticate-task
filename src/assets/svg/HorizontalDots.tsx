import { SVGProps, memo } from 'react';

const HorizontalDots = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' {...props}>
        <path d='M8 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0zm160 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z' />
    </svg>
);

const MemoHorizontalDots = memo(HorizontalDots);
export default MemoHorizontalDots;
