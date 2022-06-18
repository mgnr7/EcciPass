import Header from "../../Component/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import userSlice, { login, register } from "../../Slices/userSlice";
import Register from "../Register";

export default function Profile() {

    const user = useSelector(
        (state) => state.user
    )

    const dispatch = useDispatch();

    return (
        <div>
            <Header />
            <div className="text-center  pt-1 mb-12 pb-1 mt-6 px-80 items-center">
                {user.map((u) => {
                    return (
                        <div className="p-4 text-center">
                            <p>{u.name}</p>
                            <p >{u.email}</p>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}