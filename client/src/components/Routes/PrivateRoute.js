import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Spinner from "../../pages/Spinner";
import toast from "react-hot-toast";

export default function PrivateRoute() {
    const loginState = useSelector((state) => state.loginUserReducer);
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        setAuth(loginState.currentUser);

        const authCheck = async () => {
            if (auth?.token) {
                try {
                    const res = await axios.get('/api/users/user-auth');
                    if (res.data.ok) {
                        setOk(true);
                    } else {
                        setOk(false);
                    }
                } catch (error) {
                    console.error("Error checking auth", error.response.data.message);
                    setOk(false);
                    setTimeout(() => {
                        toast.error(error.response.data.message)
                    }, 4000);
                }
            }
        };

        authCheck();
    }, [loginState.currentUser, auth?.token]);

    return ok ? <Outlet /> : <Spinner/>;
}
