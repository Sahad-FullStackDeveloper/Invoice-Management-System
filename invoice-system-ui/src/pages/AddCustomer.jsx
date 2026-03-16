import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../services/api"
import "../styles/addCustomers.css";

function AddCustomer(){
    const navigate = useNavigate()

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [phone,setPhone] = useState("")

const handleSubmit = async (e) => {
e.preventDefault()

try{

await API.post("/customers",{
name,
email,
phone
})

alert("Customer Added")
const navigate = useNavigate()

}catch(error){
console.log(error)

}

}

return(

<div className="form-container">

<h2>Add Customer</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="text"
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<button type="submit">
Save Customer
</button>

</form>

</div>

)

}

export default AddCustomer