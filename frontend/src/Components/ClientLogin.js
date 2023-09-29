import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClientLogin = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        email:'',
        clientPhoneNumber: '',
        mpin:''
    });
    const handleInput = (event) => { 
        setData({...data,[event.target.name]:event.target.value})
    }
    const handleSubmit = async (e) => { 
        e.preventDefault();
        const { email, clientPhoneNumber, mpin } = data;
        const response = await fetch("https://finalcrawford.onrender.com/client/clientlogin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                clientPhoneNumber: clientPhoneNumber,
                mpin:mpin
            })
        });
        const result = await response.json();
        if (result.status === 422 || !data) {
            window.alert("Inavalid Login");
            console.log("Inavalid Login");
        }
        else { 
             window.alert("Login Successfully");
          console.log("Successfully Login");
           navigate('/clientLogout');
          
            
        }
    }
    
  return (
    <div>
<div className="container mt-3 shadow-lg p-3">
        <h2 className="text-center">Client Login Form</h2>
              <form onSubmit={handleSubmit}>
             <div className="mb-1 data">
                <label for="emailId" className="form-label">
                    Email: </label>
                      <input type="text" name="email" className="form-control" id="emailId" //autocomplete="off" 
                      onChange={handleInput}/>
            </div>
            <div class="mb-1 data">
                <label for="clientPhoneNumberId" className="form-label">
                    PhoneNumbe: </label>
                      <input type="text" name="clientPhoneNumber" className="form-control" id="clientPhoneNumberId" //autocomplete="off" 
                      onChange={handleInput}/>
            </div>
            <div className="mb-1 data">
                <label for="MpinId" className="form-label">
                    Password:</label>
                      <input type="text" name="mpin" className="form-control" id="mpinId" //autocomplete="off"
                onChange={handleInput}      />
            </div>
           
                <button type="submit" name="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    </div>
    </div>
  )
}

export default ClientLogin
