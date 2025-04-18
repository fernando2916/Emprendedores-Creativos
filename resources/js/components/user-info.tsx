import { type User } from '@/types';
import { FaUserCircle } from 'react-icons/fa';

export function UserInfo({ user, showEmail = false }: { user: User; showEmail?: boolean }) {

    return (
        <>
            <li className="flex items-center gap-2 rounded-md p-2">
                <div className="">
                    <FaUserCircle className="text-3xl" />
                </div>
                <div className="">
                    <p className="text-sm capitalize">{user.name}</p>
                    {showEmail && 
                    <span className="text-link-400 dark:textlink-100 text-xs font-semibold">{user.email}</span>
                    }
                </div>
            </li>
        </>
    );
}
