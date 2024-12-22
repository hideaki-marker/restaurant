import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import BlueButton from '@/Components/BlueButton';

export default function Dashboard({auth, menus}) {

    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };
    
    return (
        <AuthenticatedLayout
        user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <BlueButton onClick={confirmUserDeletion}>
                                    購入
                                </BlueButton>
                    
                                <Modal show={confirmingUserDeletion} onClose={closeModal}>
                                    <form onSubmit={deleteUser} className="p-6">
                                        <h2 className="text-lg font-medium text-gray-900">
                                            Are you sure you want to delete your account?
                                        </h2>
                    
                                        <p className="mt-1 text-sm text-gray-600">
                                            Once your account is deleted, all of its resources and
                                            data will be permanently deleted. Please enter your
                                            password to confirm you would like to permanently delete
                                            your account.
                                        </p>
                    
                                        <div className="mt-6">
                                            <InputLabel
                                                htmlFor="password"
                                                value="Password"
                                                className="sr-only"
                                            />
                    
                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                ref={passwordInput}
                                                value={data.password}
                                                onChange={(e) =>
                                                    setData('password', e.target.value)
                                                }
                                                className="mt-1 block w-3/4"
                                                isFocused
                                                placeholder="Password"
                                            />
                    
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                    
                                        <div className="mt-6 flex justify-end">
                                            <SecondaryButton onClick={closeModal}>
                                                Cancel
                                            </SecondaryButton>
                    
                                            <DangerButton className="ms-3" disabled={processing}>
                                                Delete Account
                                            </DangerButton>
                                        </div>
                                    </form>
                                </Modal>
                    
                    <div>
                        <table className="w-full bg-gray-100 mt-2">
                            <thead className="bg-blue-100">
                                <tr className='text-green-600'>
                                    <th className='px-2 py-2 border border-gray-400'>商品番号</th>
                                    <th className='px-2 py-2 border border-gray-400'>商品名</th>
                                    <th className='px-2 py-2 border border-gray-400'>価格</th>
                                    <th className='px-2 py-2 border border-gray-400'>説明</th>
                                    <th className='px-2 py-2 border border-gray-400'></th>
                                    <th className='px-2 py-2 border border-gray-400'></th>
                                </tr>
                            </thead>
                            <tbody className='bg-white'>
                                {menus.map((menu) => (
                                    <tr key={menu.id}>
                                        <td className='border border-gray-400 px-2 py-2 text-center'>{menu.id}</td>
                                        <td className='border border-gray-400 px-2 py-2'>{menu.name}</td>
                                        <td className='border border-gray-400 px-2 py-2'>￥{menu.price}</td>
                                        <td className='border border-gray-400 px-2 py-2'>{menu.explain}</td>
                                        <td className='border border-gray-400 px-2 py-2'>
                                        </td>
                                        <td className='border border-gray-400 px-2 py-2'>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
