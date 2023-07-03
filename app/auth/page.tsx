"use client"; // This is a client component 👈🏽

import Input from "@/components/input";
import { useCallback, useState } from "react";


const Auth = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('Login')

    const toggleVariant = useCallback(() => {
        
    })

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />

                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign In
                        </h2>
                        <div className="flex flex-col gap-4">
                            <Input
                                label='Username'
                                onChange={(e: Event) => {
                                    const inputElement = e.target as HTMLInputElement;
                                    const value = inputElement.value;
                                    // console.log(value);
                                    setUsername(value)
                                }}
                                id='Username'
                                type="name"
                                value={username}
                            />
                            <Input
                                label='Email'
                                onChange={(e: Event) => {
                                    const inputElement = e.target as HTMLInputElement;
                                    const value = inputElement.value;
                                    // console.log(value);
                                    setEmail(value)
                                }}
                                id='Email'
                                type="email"
                                value={email}
                            />
                            <Input
                                label='Password'
                                onChange={(e: Event) => {
                                    const inputElement = e.target as HTMLInputElement;
                                    const value = inputElement.value;
                                    // console.log(value);
                                    setPassword(value)
                                }}
                                id='Password'
                                type="Password"
                                value={password}
                            />
                        </div>
                        <button className="
                            bg-red
                            py-3 text-white
                            rounded-md
                            w-full
                            mt-10
                            hover:bg-red-700
                            transition
                        ">
                            Login
                        </button>
                        <p className="text-neutral-500 mt-12">
                            First time using Netflix?
                            <span className="text-white ml-2 mt-1 hover:underline cursor-pointer">
                                Crete An Account
                            </span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth