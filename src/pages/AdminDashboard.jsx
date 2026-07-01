import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [applications, setApplications] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            // Users
            const usersSnap = await getDocs(collection(db, "users"));

            // Internship Applications
            const applicationsSnap = await getDocs(
                collection(db, "internshipApplications")
            );

            // Contact Messages
            const messagesSnap = await getDocs(collection(db, "messages"));

            setUsers(
                usersSnap.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );

            setApplications(
                applicationsSnap.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );

            setMessages(
                messagesSnap.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
            );
        } catch (error) {
            console.error("Error loading dashboard:", error);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white px-8 py-10">

            {/* Title */}

            <h1 className="text-5xl font-bold mb-10 text-emerald-400">
                Admin Dashboard
            </h1>

            {/* Statistics */}

            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-slate-400 text-lg">
                        Total Users
                    </h3>

                    <p className="text-5xl font-bold text-emerald-400 mt-3">
                        {users.length}
                    </p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-slate-400 text-lg">
                        Internship Applications
                    </h3>

                    <p className="text-5xl font-bold text-emerald-400 mt-3">
                        {applications.length}
                    </p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-slate-400 text-lg">
                        Contact Messages
                    </h3>

                    <p className="text-5xl font-bold text-emerald-400 mt-3">
                        {messages.length}
                    </p>
                </div>

            </div>

            {/* Registered Users */}

            <div className="mt-16">

                <h2 className="text-3xl font-bold mb-6">
                    Registered Users
                </h2>

                <div className="overflow-x-auto rounded-xl">

                    <table className="w-full">

                        <thead className="bg-slate-800">

                            <tr>

                                <th className="p-4 text-left">Name</th>

                                <th className="text-left">Email</th>

                                <th className="text-left">Role</th>

                            </tr>

                        </thead>

                        <tbody>

                            {users.map((user) => (

                                <tr
                                    key={user.id}
                                    className="border-b border-slate-800 hover:bg-slate-900 transition"
                                >

                                    <td className="p-4">
                                        {user.name}
                                    </td>

                                    <td>
                                        {user.email}
                                    </td>

                                    <td>

                                        <span className="bg-purple-500 rounded-full px-5 py-2">

                                            {user.role}

                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Internship Applications */}

            <div className="mt-20">

                <h2 className="text-3xl font-bold mb-6">
                    Internship Applications
                </h2>

                <div className="overflow-x-auto rounded-xl">

                    <table className="w-full">

                        <thead className="bg-slate-800">

                            <tr>

                                <th className="p-4 text-left">Name</th>

                                <th className="text-left">Email</th>

                                <th className="text-left">Internship</th>

                                <th className="text-left">Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {applications
                                .filter(
                                    (app) =>
                                        app.name &&
                                        app.email &&
                                        app.internship
                                )
                                .map((app) => (

                                    <tr key={app.id}
                                        className="border-b border-slate-800 hover:bg-slate-900"
                                    >

                                        <td className="p-4">
                                            {app.name}
                                        </td>

                                        <td>
                                            {app.email}
                                        </td>

                                        <td>
                                            {app.internship}
                                        </td>

                                        <td>

                                            {app.status && (

                                                <span className="bg-purple-500 rounded-full px-5 py-2">

                                                    {app.status}

                                                </span>

                                            )}

                                        </td>

                                    </tr>

                                ))}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* Contact Messages */}

            <div className="mt-20">

                <h2 className="text-3xl font-bold mb-6">
                    Contact Messages
                </h2>

                <div className="grid gap-6">

                    {messages.length === 0 ? (

                        <div className="bg-slate-900 p-6 rounded-xl">

                            No messages available.

                        </div>

                    ) : (

                        messages.map((msg) => (

                            <div
                                key={msg.id}
                                className="bg-slate-900 rounded-2xl p-6 shadow-lg"
                            >

                                <h3 className="text-2xl font-bold text-emerald-400">

                                    {msg.name}

                                </h3>

                                <p className="text-slate-400 mt-2">

                                    {msg.email}

                                </p>

                                <p className="mt-3 font-semibold">

                                    Subject: {msg.subject}

                                </p>

                                <p className="mt-4 leading-7 text-slate-300">

                                    {msg.message}

                                </p>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;