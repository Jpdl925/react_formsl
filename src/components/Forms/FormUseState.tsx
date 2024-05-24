import { FormEvent, useState } from "react";

const FormUseState = () => {

  // Need a useState to handle our form. useState needs to handle an object. Person object that will have the property of name and age
  const [person, setPerson] = useState({
    name:'',
    age:0
  });

  // Create a helper function to handle our on submit from our form,
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    console.log(person);
  }

  return (
    <>
      <h1 className="text-center">Form Using UseState</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form-label">Name</label>
          <input id="name" type="text" className="form-control" value={person.name} onChange={(e) => setPerson({...person,name:e.target.value})}/>
          <span>{person.name}</span>

          <label  htmlFor="" className="form-label">Age</label>
          <input id="age" type="number" className="form-control" onChange={(e) => setPerson({...person,age:Number(e.target.value)})}/>
          <span>{person.age}</span>

        <button className=" mt-3 btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormUseState;
