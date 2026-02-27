import { use } from "react"
import Friend from "./friend";


export default function Friends({friendsPromise}) {

    const friends = use(friendsPromise);
    return(
        <div className="userCard">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}