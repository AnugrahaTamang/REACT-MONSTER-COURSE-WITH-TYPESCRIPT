
const UserStatus = ({LogIn, isAdmin}) => {
   if (LogIn && isAdmin){
    <h1>Welcome to Admin</h1>
   }
   else{
    return <h1>
        Welcome to user
    </h1>
   }
}
export default UserStatus