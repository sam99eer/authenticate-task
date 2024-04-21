import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Button from 'src/components/common/Button';
import Input from 'src/components/common/Input';
import Modal from 'src/components/common/Modal';
import useWatchlist from 'src/hooks/useWatchlist';
import typography from 'src/styles/Typography.module.css';
import styles from 'src/styles/Watchlist.module.css';
import type { T_EditModal } from 'src/types/general/Components';
import type { T_EditData } from 'src/types/general/Data';

const EditModal = ({
    title,
    description,
    watchlistId,
    editToggle,
}: T_EditModal) => {
    const [data, setData] = useState<T_EditData>({
        title,
        description,
    });

    const { updateWatchlistData } = useWatchlist();

    const changeHandler = (uid: keyof T_EditData, val: string) => {
        setData((prevState) => ({
            ...prevState,
            [uid]: val,
        }));
    };

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        if (watchlistId) {
            updateWatchlistData(watchlistId, data);
            toast.success('Updated successfully!');
            editToggle();
        }
    };

    return (
        <Modal onClose={editToggle}>
            <form className={styles.editForm} onSubmit={submitHandler}>
                <div>
                    <h4 className={typography.subheading}>Title</h4>
                    <Input
                        type='text'
                        value={data.title}
                        onChangeText={changeHandler.bind(this, 'title')}
                        variant='dark'
                        placeholder='Enter Title'
                    />
                </div>
                <div>
                    <h4 className={typography.subheading}>Description</h4>
                    <Input
                        type='text'
                        value={data.description}
                        onChangeText={changeHandler.bind(this, 'description')}
                        variant='dark'
                        placeholder='Enter Description'
                    />
                </div>
                <div>
                    <Button type='submit' text='Save' />
                </div>
            </form>
        </Modal>
    );
};

export default EditModal;
