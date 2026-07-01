import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
    applyInternship,
    checkAlreadyApplied,
} from "../services/internshipService";


function InternshipForm({
    internship,
    onClose,
    onSuccess,
}) {
    const { userData, user } = useAuth();

    const [phone, setPhone] = useState("");
    const [college, setCollege] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");
    const [skills, setSkills] = useState("");
    const [resume, setResume] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        const alreadyApplied =
            await checkAlreadyApplied(
                user.uid,
                internship
            );

        if (alreadyApplied) {

            alert("You have already applied for this internship.");

            setLoading(false);

            return;

        }

        try {
            await applyInternship({
                userId: user.uid,
                internship,
                name: userData.name,
                email: user.email,
                phone,
                college,
                department,
                year,
                skills,
                resume,
            });
            console.log("Application Saved");

            alert("Application Submitted Successfully!");

            onSuccess();

            onClose();

        } catch (error) {
            alert(error.message);
        }

        setLoading(false);
    };

    const handleApply = (title) => {
        console.log("Opening form for:", title);

        if (!user) {
            navigate("/login");
            return;
        }

        setSelectedInternship(title);
        setOpenForm(true);
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

            <div className="bg-slate-900 rounded-2xl p-8 w-full max-w-xl">

                <h2 className="text-3xl font-bold mb-6 text-emerald-400">
                    Apply for {internship}
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        value={userData.name}
                        disabled
                        className="w-full bg-slate-800 p-3 rounded-xl"
                    />

                    <input
                        value={user.email}
                        disabled
                        className="w-full bg-slate-800 p-3 rounded-xl"
                    />

                    <input
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-800 p-3 rounded-xl"
                    />

                    <input
                        placeholder="College"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                        className="w-full bg-slate-800 p-3 rounded-xl"
                    />

                    <input
                        placeholder="Department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full bg-slate-800 p-3 rounded-xl"
                    />

                    <input
                        placeholder="Current Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full bg-slate-800 p-3 rounded-xl"
                    />

                    <input
                        placeholder="Skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        className="w-full bg-slate-800 p-3 rounded-xl"
                    />

                    <input
                        placeholder="Resume Google Drive Link"
                        value={resume}
                        onChange={(e) => setResume(e.target.value)}
                        className="w-full bg-slate-800 p-3 rounded-xl"
                    />

                    <div className="flex gap-4">

                        <button
                            className="bg-emerald-500 px-6 py-3 rounded-xl"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-red-500 px-6 py-3 rounded-xl"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default InternshipForm;