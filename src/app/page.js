
import Image from "next/image";
import Login from "./Components/SingIn";
import { UserInfo } from "./Components/UserInfo";
import { authOption } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession(authOption)



  return (
    <div>

    <div className="text-center place-items-center place-content-center bg-amber-400 mt-10 p-10 w-8/12 mx-auto rounded-full text-4xl text-white">
      <Login />
      </div>
      
      <UserInfo />
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
