import { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    country:'India',
    streetAddress:'',
    city:'',
    state:'',
    zip:'',
    comments:false,
    candidates:false,
    offers:false,
    notifications:''
  })

  function changeHandler(event){
    const {type,checked,value,name}=event.target;
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]:type==='checkbox'?checked:value
      }
    })
  }
  
  function submitHandler(event){
    event.preventDefault();
    alert(`
      ${formData.firstName}
      ${formData.lastName}
      ${formData.email}
      ${formData.country}
      ${formData.streetAddress}
      ${formData.city}
      ${formData.state}
      ${formData.zip}
      ${formData.comments}
      ${formData.candidates}
      ${formData.offers}
      ${formData.notifications}
    `);
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <form className="space-y-2" onSubmit={submitHandler}>
        
        <div className="flex flex-col ">
          <label htmlFor="firstName" className="text-sm font-medium leading-6 text-gray-900">First name</label>
          <input
            type='text'
            placeholder='Rahul'
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="lastName"  className="text-sm font-medium leading-6 text-gray-900">Last name</label>
          <input
            type='text'
            placeholder='Bhutaiya'
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="email"  className="text-sm font-medium leading-6 text-gray-900">Email address</label>
          <input
            type='email'
            placeholder='rp@gmail.com'
            name="email"
            id="email"
            value={formData.email}
            onChange={changeHandler}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="country"  className="text-sm font-medium leading-6 text-gray-900">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1"
          >
            <option value='India'>India</option>
            <option value='United States'>United States</option>
            <option value='Russia'>Russia</option>
            <option value='Nepal'>Nepal</option>
            <option value='France'>France</option>
          </select>
        </div>
        
        <div className="flex flex-col ">
          <label htmlFor="streetAddress" className="text-sm font-medium leading-6 text-gray-900">Street address</label>
          <input
            type='text'
            placeholder='333,yogeshwar'
            name="streetAddress"
            id="streetAddress"
            value={formData.streetAddress}
            onChange={changeHandler}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="city" className="text-sm font-medium leading-6 text-gray-900">City</label>
          <input
            type='text'
            placeholder='Surat'
            name="city"
            id="city"
            value={formData.city}
            onChange={changeHandler}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="state" className="text-sm font-medium leading-6 text-gray-900">State / Province</label>
          <input
            type='text'
            placeholder='Gujarat'
            name="state"
            id="state"
            value={formData.state}
            onChange={changeHandler}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="zip" className="text-sm font-medium leading-6 text-gray-900">ZIP / Postal Code</label>
          <input
            type="text"
            placeholder="345623"
            name="zip"
            value={formData.zip}
            onChange={changeHandler}
            className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          />
        </div>

        <div>
          <label className="text-sm font-semibold leading-6 text-gray-900">By Email</label>
          <div className="mt-4 space-y-2">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div  className="inline-flex flex-col ml-2 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900 cursor-pointer">Comments</label>
              <span className="text-gray-500">Get notified when someones posts a comment on a posting.</span>
            </div>
          </div>
        </div>        

        <div >
          <input
            type="checkbox"
            id="candidates"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <div className="inline-flex flex-col ml-2 text-sm leading-6">
            <label htmlFor="candidates" className="font-medium text-gray-900 cursor-pointer">Candidates</label>
            <span className="text-gray-500">Get notified when a candidate applies for a job.</span>
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            id="offers"
            name="offers"
            checked={formData.offers}
            onChange={changeHandler}
          />
          <div className="inline-flex flex-col ml-2 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900 cursor-pointer">Offers</label>
            <span className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</h3>
          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                name='notifications'
                value='everything'
                id="everything"
                onChange={changeHandler}
                checked={formData.notifications==='everything'}
              />
              <label htmlFor="everything" className="ml-3 text-sm font-medium leading-6 text-gray-900 cursor-pointer">Everything</label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="notifications"
                id="same-as-email"
                value='same as email'
                onChange={changeHandler}
                checked={formData.notifications==='same as email'}
              />
              <label htmlFor="same-as-email" className="ml-3 text-sm font-medium leading-6 text-gray-900 cursor-pointer">Same as email</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="radio"
                name="notifications"
                id="no-push"
                value='no push notifications'
                onChange={changeHandler}
                checked={formData.notifications==='no push notifications'}
              />
              <label htmlFor="no-push" className="ml-3 text-sm font-medium leading-6 text-gray-900 cursor-pointer">No push notifications</label>
            </div>
          </div>
        </div>

        <button className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
      </form>
    </div>
  );
}

export default App;
