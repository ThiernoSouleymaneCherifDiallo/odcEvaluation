import { useState, useEffect } from "react"

function FormComposant() {

    const [email, setemail] =  useState("");
    const [motdepass, setmotdepass] =  useState("");
    const [submitemail, setSubmitemail] = useState("")
    const [submitmodepass, setSubmitmodepass] = useState("")

    useEffect(()=>{
        
    })

    
    const handlesubmit = (e) =>{
        e.preventDefault()
        setSubmitemail(email)
        setSubmitmodepass(motdepass)
    }

    const handleEmail = (e)=>{
        console.log(e.target.value)
        setemail(e.target.value)
    };

    const handlemotdepass = (e) =>{
        console.log(e.target.value)
        setmotdepass(e.target.value)
    };



   return (
    <>
        <form action="" onSubmit={handlesubmit}>
            <div classename="form-floating mb-3">
                {""} {submitemail && <h3>{submitemail}</h3> }
                <input type="email" classename="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmail}/>
                <label for="floatingInput">Email address</label>
            </div>
            <div classename="form-floating">
                <input type="password" classename="form-control" id="floatingPassword" placeholder="Password" onChange={handlemotdepass}/>
                <label for="floatingPassword">Password</label>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    </>
   )
}

export default FormComposant
