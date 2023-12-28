export default function UserProfile({params}:any){
    return(
        <div>
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile page <span className="p-2 bg-orange-600 text-black rounded-md ml-2">{params.id}</span></p>
        </div>
    )
}