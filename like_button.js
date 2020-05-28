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

var title = response.potentiallyMaliciousInput;
var element = React.createElement(
    "h1",
    null,
    title
);

ReactDOM.render(element, document.getElementById("root"));