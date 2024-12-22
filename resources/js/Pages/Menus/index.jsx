import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({auth, menus}) {
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
                    
                    <div>
                        <table className="w-full bg-gray-100 mt-2">
                            <thead className="bg-blue-100">
                                <tr className='text-green-600'>
                                    <th className='px-2 py-2 border border-gray-400'>#</th>
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
                                        <td className='border border-gray-400 px-2 py-2'>{menu.price}</td>
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
