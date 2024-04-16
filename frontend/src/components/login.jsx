import '../styles/login'

const Login = (props) => {
    const [username, setUsername] = userState('');
    const [password, setPassword] = userState('');
    const [email, setEmail] = useState('');

    const onButtonClick = () => {
        
    }
}

function Login() {
    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <h1>The Chatroom</h1>    
            </div>
            <div className="loginContainer">
                <input type="text" className="inputBox" name="usernameEmail" id="usernameEmail" />
                <input type="password" className="inputBox" name="password" id="password" />
            </div>
        </div>
    )
}

export default Login