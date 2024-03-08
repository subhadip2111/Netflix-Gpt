export  const validData=(email,password)=>{

const isValidEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
const isValidPassord=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)

   if(!isValidEmail){
    return " Invalid Email Address !"
   }
   if(!isValidPassord){
    return " Invalid Password !"
   }

   return null;
}