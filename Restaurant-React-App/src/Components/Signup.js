import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <section class="sign-up">
            <h1>Sign up with your email to receive discounts!</h1>
            <form>
                <label for="name">Name</label>
                <input
                    placeholder="Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label for="email">Email</label>
                <input
                    placeholder="someone@example.com"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>Sign Up</button>
            </form>
        </section>
    );
};

export default Signup;
