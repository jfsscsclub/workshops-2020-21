import { useState } from "react";

const Signup = () => {
    return (
        <section class="sign-up">
            <h1>Sign up with your email to receive discounts!</h1>
            <form>
                <label for="name">Name</label>
                <input placeholder="Name" id="name" />
                <label for="email">Email</label>
                <input placeholder="someone@example.com" id="email" />
            </form>
        </section>
    );
};

export default Signup;
