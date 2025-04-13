import { useEffect, useState } from "react";

const usePageDashboard = () => {

    const [user, setUser] = useState<string>('');

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            console.log(authToken);
            setUser(authToken);
        }
    }, []);

    return {
        user
    }
}

export default usePageDashboard;
