import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import React from 'react';

const CreateUser = async({ createUserAction}) => {


    return (
        <div>
            <Modal>
                <Button variant="secondary" className={'text-lg'}>+ Create New</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Create new user</Modal.Heading>
                            </Modal.Header>
                            <form action={createUserAction}>
                                <Modal.Body className="p-6">
                                    <Surface variant="default">
                                        <div className="flex flex-col gap-4">
                                            <TextField className="w-full" name="name" type="text" variant="secondary">
                                                <Label>Name</Label>
                                                <Input placeholder="Enter your name" />
                                            </TextField>
                                            <TextField className="w-full" name="email" type="email" variant="secondary">
                                                <Label>Email</Label>
                                                <Input placeholder="Enter your email" />
                                            </TextField>
                                            <TextField className="w-full" name="role" type="text" variant="secondary">
                                                <Label>Role</Label>
                                                <Input placeholder="Enter your role" />
                                            </TextField>
                                        </div>
                                    </Surface>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button slot="close" variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button type='submit' slot="close">+ add user</Button>
                                </Modal.Footer>
                            </form>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default CreateUser;