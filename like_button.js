function formatName(user) {
    return user.firstName + " " + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return React.createElement(
            "h1",
            null,
            "Hello, ",
            formatName(user),
            "!"
        );
    }
    return React.createElement(
        "h1",
        null,
        "Hello, Stranger."
    );
}

var user = {
    firstName: "Harper",
    lastName: "Perez"
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
    return React.createElement(
        "h1",
        null,
        "Hello, ",
        props.name
    );
}

// const element = <div/>;
var element = React.createElement(Welcome, { name: "Sara" });

ReactDOM.render(element, document.getElementById("root"));