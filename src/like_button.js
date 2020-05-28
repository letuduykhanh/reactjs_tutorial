function formatName(user) {
    return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}

const user = {
    firstName: "Harper",
    lastName: "Perez",
};

// const element = <h1>Hello, {formatName(user)}!</h1>;

// const element = <div tabIndex='0'></div>;

// const element = <img src={user.avatarUrl}/>;

// const element = (
//     <div>
//         <h1>Hello!</h1>
//         <h2>Good to see you here.</h2>
//     </div>
// )

// const title = response.potentiallyMaliciousInput;
// const element = <h1>{title}</h1>;

// const element = <h1>Hello, world</h1>;

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     )
//     ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// const element = <div/>;
const element = <Welcome name='Sara'/>;

ReactDOM.render(element, document.getElementById("root"));


