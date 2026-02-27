export default function Friend({friend}) {
    console.log(friend);
    const {name}= friend;
    return (
        <div className="userCard">
            <h4>Name: {name}</h4>
        </div>
    )
}