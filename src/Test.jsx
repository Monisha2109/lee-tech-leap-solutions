import { askAI } from "./services/aiService";

function Test() {

    const testAI = async () => {

        const reply = await askAI("Tell me about internships");

        console.log(reply);

        alert(reply);

    };

    return (
        <button
            onClick={testAI}
            className="bg-green-500 p-5 text-white"
        >
            Test AI
        </button>
    );
}

export default Test;