import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import {
    updateProfileName,
    changePassword,
} from "../services/authService";


function Profile() {
    const { user, userData } = useAuth();
    const navigate = useNavigate();

    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(userData?.name || "");

    const handleLogout = async () => {
        await logoutUser();
        navigate("/");
    };
    const handleUpdateProfile = async () => {

        if (!editing) {

            setEditing(true);
            return;

        }

        try {

            await updateProfileName(user.uid, newName);

            alert("Profile updated successfully.");

            window.location.reload();

        } catch (error) {

            alert(error.message);

        }

    };

    const handlePasswordChange = async () => {

        try {

            await changePassword(user.email);

            alert(
                "Password reset link has been sent to your email."
            );

        } catch (error) {

            alert(error.message);

        }

    };

    return (
        <div className="min-h-screen bg-slate-950 text-white py-20">

            <div className="max-w-4xl mx-auto">

                <div className="bg-slate-900 rounded-3xl p-10 shadow-xl">

                    <div className="flex items-center gap-8">

                        <div className="w-32 h-32 rounded-full bg-emerald-500 flex items-center justify-center text-5xl">

                            👤

                        </div>

                        <div>

                            <h1 className="text-4xl font-bold">

                                {userData?.name}

                            </h1>

                            <p className="text-slate-400 mt-2">

                                {user?.email}

                            </p>

                        </div>

                    </div>

                    <div className="mt-12 grid md:grid-cols-2 gap-8">

                        <div className="bg-slate-800 rounded-xl p-6">

                            <h3 className="text-slate-400">

                                Full Name

                            </h3>

                            {editing ? (

                                <input
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="bg-slate-700 rounded-lg px-4 py-2 w-full"
                                />

                            ) : (

                                <h2 className="text-2xl font-bold">
                                    {userData?.name}
                                </h2>

                            )}
                        </div>

                        <div className="bg-slate-800 rounded-xl p-6">

                            <h3 className="text-slate-400">

                                Email

                            </h3>

                            <h2 className="text-xl">

                                {user?.email}

                            </h2>

                        </div>

                        <div className="bg-slate-800 rounded-xl p-6">

                            <h3 className="text-slate-400">

                                Role

                            </h3>

                            <h2 className="text-2xl">

                                {userData?.role}

                            </h2>

                        </div>

                        <div className="bg-slate-800 rounded-xl p-6">

                            <h3 className="text-slate-400">

                                Status

                            </h3>

                            <h2 className="text-2xl text-emerald-400">

                                Active

                            </h2>

                        </div>

                    </div>

                    <div className="flex gap-5 mt-12">

                        <button
                            onClick={handleUpdateProfile}
                            className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl"
                        >

                            {editing ? "Save Changes" : "Edit Profile"}

                        </button>

                        <button
                            onClick={handlePasswordChange}
                            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
                        >

                            Change Password

                        </button>

                        <button
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl"
                        >

                            Logout

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;