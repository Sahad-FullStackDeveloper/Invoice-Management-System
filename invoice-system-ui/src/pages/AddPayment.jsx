import { useState } from "react"
import API from "../services/api"
import { useParams } from "react-router-dom"

function AddPayment(){

    const { id } = useParams()

const [invoiceId,setInvoiceId] = useState(id)
const [amount,setAmount] = useState("")
const [paymentDate,setPaymentDate] = useState("")
const [paymentMethod,setPaymentMethod] = useState("")
const handleSubmit = async (e) => {
    

e.preventDefault()

try{

await API.post("/payments",{
invoiceId,
amount,
paymentDate,
paymentMethod
})

alert("Payment Saved")

}catch(err){

console.log(err)

}

}

return(

<div>

<h2>Add Payment</h2>

<form onSubmit={handleSubmit}>

<input
value={invoiceId}
readOnly
/>

<br/><br/>

<input
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<br/><br/>

<input
type="date"
value={paymentDate}
onChange={(e)=>setPaymentDate(e.target.value)}
/>

<br/><br/>

<input
placeholder="Payment Method"
value={paymentMethod}
onChange={(e)=>setPaymentMethod(e.target.value)}
/>

<br/><br/>

<button type="submit">
Save Payment
</button>

</form>

</div>

)

}

export default AddPayment