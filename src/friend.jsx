export default function Friend({friend}) {
    console.log(friend);
    const { name, phone, email }= friend;
    return (
        <div className="userCard">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}