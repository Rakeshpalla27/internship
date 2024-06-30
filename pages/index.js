import { useContext, useState } from 'react';
import UsernameForm from '../components/UsernameForm';
import { UserContext } from '../contexts/UserContext';
import Tree from '../components/Tree';

export default function Home() {
    const { user, login } = useContext(UserContext);
    const [treeData, setTreeData] = useState({ id: 1, value: 1, children: [] });

    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome, {user.username}</h1>
                    <Tree data={treeData} setData={setTreeData} />
                </div>
            ) : (
                <UsernameForm onSubmit={login} />
            )}
        </div>
    );
}
