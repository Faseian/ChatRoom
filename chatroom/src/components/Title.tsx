function Title() {
    return (
        <div className="flex flex-col flex-start justify-center text-center">
            <h1 className="text-xl px-2">Welcome to Chatroom</h1>
            <p className="py-3">This is a chatroom app made as a side project by: Nathan Bankert</p>
            <form>
                <button formAction="/sign-up-screen" className="w-40 border-2 border-gray-50 border-solid border-black ">Sign Up</button>
            </form>
        </div>
    )
}

export default Title;