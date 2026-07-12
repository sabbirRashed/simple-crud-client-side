import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/Components/UsersTable';
import { deleteUser } from '../lib/actions';
import CreateUser from '@/Components/CreateUser';

const UsersPage = async() => {
    
    const users = await getUsers();

    return (
        <div className='w-11/12 mx-auto p-6'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>User Management: ({users.length})</h2>
                <CreateUser></CreateUser>
            </div>
            <UsersTable users={users} deleteUserAction={deleteUser}></UsersTable>
        </div>
    );
};

export default UsersPage;