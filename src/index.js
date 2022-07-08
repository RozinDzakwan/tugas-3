import ReactDOM from "react-dom/client";

function Welcome(props) {
    return <h1> selamat datang {props.name}</h1> ;
}

let user = "Rozin Dzakwan";

function App(){
    if (user) {
        return <Welcome name = {user} />
    }else{
        return <button>Login</button>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);