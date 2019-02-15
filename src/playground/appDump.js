const user = {
    name: 'Sjon de Gast',
    age: 18,
    location: 'Den Haag'
};

function getLocation(location) {
    if (location) {
        return <p>My location: {location}</p>;
    }
};

//(conditional)ternary operator: user.name ? = is there one yes/no if yes show user.name : -> if not show anonymous 
//undefined, booleans (true/false) and null are ignored by JSX
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'anonymous'}</h1>
        <p>{user.age >= 18 ? user.age : null}</p>
        {(user.age && user.age >= 18) && <p>Age2: {user.age}</p>}
        <p>My Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);