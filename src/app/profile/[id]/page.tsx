export default function UserProfile({params}:any){
    return(
        <div className="flex flex-col justify-center align-middle h-screen items-center">
            <h1 className="m-4">Profile</h1>
          
            <p className="text-4xl">Profile page <span className="p-2 bg-orange-600 text-black rounded-md ml-2">{params.id}</span></p>
        </div>
    )
}