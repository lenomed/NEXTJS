
// creating a custom layout for a particular route
const nav =({children}: {children: React.ReactNode})=>{
    return(
        <div> Dashbord NavBar 
            {children}
        </div>
    )
}

export default nav