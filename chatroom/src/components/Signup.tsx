function Signup() {
    return (
        <div className="flex h-screen justify-center">
            <form action="/sign-up" className="flex flex-col py-36 gap-10">
                <input type="text" placeholder="Username" id="username" className="rounded-xl h-9 text-black px-2"/>
                <input type="email" placeholder="Email" id="email" className="rounded-xl h-9 text-black px-2"/>
                <input type="password" placeholder="Password" id="password" className="rounded-xl h-9 text-black px-2"/>
                <input type="password" placeholder="Confirm Password" id="confirm-password" className="rounded-xl h-9 text-black px-2  "/>
                <input type="button" value="Sign-Up!" className="rounded-xl h-9"/>
            </form>
        </div>
    )
}

export default Signup;