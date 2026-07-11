import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '@/Components/UsersTable';

const UsersPage = async() => {
    
    const users = await getUsers();

    return (
        <div className='w-11/12 mx-auto p-6'>
            <h2>User Management: {users.length}</h2>
            <UsersTable users={users}></UsersTable>
        </div>
    );
};

export default UsersPage;