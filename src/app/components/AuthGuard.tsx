import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const AuthGuard = ({children}: {children:React.ReactNode})=>{
const [isLoading, setIsLoading] = useState(true);
const {isSignedIn} = useUser()
const router = useRouter()

useEffect(()=>{
    if (isSignedIn === false) {
        router.replace("signin")
    }else{
        setIsLoading(false)
    }
},[isSignedIn, router]);
if (isLoading) return <p>Loadin... </p>

return
    <>
    {children}
    </>
}

export default AuthGuard