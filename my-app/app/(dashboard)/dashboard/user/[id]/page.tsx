import React from 'react'

const UserDetails = async ({params}: {params: Promise<{ id: string}>})=>{
    const {id} = await params;
    return(
        <h2>Showing details for  user#{id} </h2>
    )
}

export default UserDetails