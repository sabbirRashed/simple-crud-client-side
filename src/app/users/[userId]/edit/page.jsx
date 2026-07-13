import { updateUser } from '@/app/lib/actions';
import { getUserById } from '@/app/lib/data';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const EditPage = async ({ params }) => {

    const { userId } = await params;
    const user = await getUserById(userId);
    // console.log('editing user', user);

    const handleUpdateUser = (formData)=>{
        return updateUser(userId, formData)
    }

    return (
        <div className='w-8/12 p-6 mx-auto'>
            <h2 className='text-2xl font-semibold'>Edit User Acount:</h2>
            <div className=' w-1/2 mx-auto mt-6'>
                <form action={handleUpdateUser}>

                    <div className="flex flex-col gap-4">
                        <TextField className="w-full" name="name" type="text" variant="secondary" defaultValue={user?.name}>
                            <Label>Name</Label>
                            <Input placeholder="Enter your name" />
                        </TextField>
                        <TextField className="w-full" name="email" type="email" variant="secondary" defaultValue={user?.email}>
                            <Label>Email</Label>
                            <Input placeholder="Enter your email" />
                        </TextField>
                        <TextField className="w-full" name="role" type="text" variant="secondary" defaultValue={user?.role}>
                            <Label>Role</Label>
                            <Input placeholder="Enter your role" />
                        </TextField>
                    </div>

                    <div className='mt-6 space-x-2'>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button type='submit' slot="close">Edit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPage;