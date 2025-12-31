import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

type userid = {
    id: number,
    Name: string
}
const Home = () => {
    const { id } = useParams();
    const [user, setUser] = useState<userid>();


    useEffect(() => {
        if (id) {
           const fetchUser= async () => {
                try {
                    const res = await axios.get(`http://localhost:3000/users/${id}`)
                    setUser(res.data);
                } catch (error) {
                    console.log("Couldn't get the user id", error)
                }
            };
            fetchUser();

        }

    }, [id])

    return (
        <div>
            {
                user?(
                    <p className="text-center">--Welcome back <span className="font-bold">{user.Name}</span>--</p>
                ):(
                    <p>Loading User Data</p>
                )
            }

        </div>
    )
}

export default Home
