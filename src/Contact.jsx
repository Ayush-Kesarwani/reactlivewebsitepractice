import React, { useState } from "react";

const Contact=()=>{
    const [data,setData]=useState({
        name:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent=(event)=>{
        const {name, value}=event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            };
        });
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.name}. My mobile number is ${data.phone}. My email ID is ${data.email}. My message is ${data.msg}`);
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div class="form-group mb-3">
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                name="name" 
                                value={data.name} 
                                onChange={InputEvent} 
                                placeholder="Enter your name"/>
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleInputEmail1">Phone</label>
                            <input 
                                type="number" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                name="phone" 
                                value={data.phone} 
                                onChange={InputEvent} 
                                placeholder="Enter mobile number"/>
                        </div>
                        <div class="form-group mb-3">
                            <label for="exampleInputEmail1">Email address</label>
                            <input 
                                type="email" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                name="email" 
                                value={data.email} 
                                onChange={InputEvent} 
                                placeholder="Enter email"/>
                        </div>
                        <div className="form-group mb-3">
                            <label for="exampleInputEmail1">Message</label>
                            <textarea 
                                class="form-control"
                                id="exampleInputEmail1"
                                rows="3"
                                name="msg" 
                                value={data.msg} 
                                onChange={InputEvent} 
                                placeholder="Enter any message.."
                            ></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-outline-primary" type="submit">
                                Submit Form
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;