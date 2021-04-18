import axios from 'axios';
import React, { useEffect, useState } from 'react'


const ClientServer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/users/').then((responseFromServer) => {
            console.log(responseFromServer);
            setData(responseFromServer.data.users)
        })
    }, [])

    return (
        <div>
            {console.log(data)}
            {data.map((obj) => {
                return (
                    <div >
                        <br />

                           Passport ID: {obj.passportId} <br />
                           Cash: {obj.cash} <br />
                           Credit: {obj.credit} <br />
                           Is Active: {obj.isActive} <br />
                        <br />
                    </div>
                );
            })}
        </div>
    );

}

export default ClientServer;