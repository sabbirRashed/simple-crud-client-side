import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserId = async({params}) => {
const {userId} = await params;

    const user = await getUserById(userId);
    return (
        <div className='w-11/12 mx-auto p-6'>
            <h2 className='text-2xl'>User Details</h2>
           <div className='p-6 rounded-2xl border border-pink-600 mt-6'>
            <h2 className='text-xl font-semibold'>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.role}</p>
           </div>
        </div>
    );
};

export default UserId;