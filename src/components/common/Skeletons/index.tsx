import Skeleton from 'src/components/common/Skeleton';
import type { T_Skeletons } from 'src/types/general/Components';

const Skeletons = ({ total }: T_Skeletons) => {
    return (
        <>
            {Array.from(new Array(total), (_, index) => (
                <Skeleton key={'skeleton_' + index} rounded />
            ))}
        </>
    );
};

export default Skeletons;
