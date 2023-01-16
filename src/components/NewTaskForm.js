import React,{useState} from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {
  
  const [submittedForm, setSubmittedForm]=useState({
    text:'',
    category:''
  })
 
  function handleFormData(event){
    const{name,value}=event.target
    setSubmittedForm({...submittedForm,[name]:value})
    
  }

  const categoryOption = categories.map((category,index)=>(
    <option key={index}>{category}</option>
  ))
 
  
  return (
    <form onSubmit={(event)=>{
      event.preventDefault()
      onTaskFormSubmit(submittedForm)}}
    className="new-task-form"
    >
      <label>
        Details
        <input value={submittedForm.text} onChange={handleFormData}  type="text" name="text" />
      </label>

      <label>
        Category
        <select value={submittedForm.category} onChange={handleFormData} name="category">
          {categoryOption}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;