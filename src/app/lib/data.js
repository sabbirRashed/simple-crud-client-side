
export const getUsers = async () => {
    const res = await fetch('http://localhost:5000/users');
    const users = await res.json();
    return users;
}