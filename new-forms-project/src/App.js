function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log()
  }

  return (
    <div>
    <h1>Form</h1>
      <form handleSubmit = {handleSubmit}>
        <div>
            <label>Name</label>
            <input type='text' id='name'/>
        </div>
        <div>
            <label>Email</label>
            <input type='text' id='email'/>
        </div>
        <div>
            <label>Phone Number</label>
            <input type='text' id='phone'/>
        </div>
        <div>
            <label>Phone Type</label>
            <select id='phoneType'>
              <option disabled>Select a phone type</option>
              <option>Home</option>
              <option>Work</option>
              <option>Mobile</option>
            </select>
        </div>
        <div>
            <label>Staff</label>
            <input type='radio' id='instructor'/>Instructor
            <input type='radio' id='student'/>Student
        </div>
        <div>
            <label>Bio</label>
            <textarea id='bio'/>
        </div>
        <div>
            <label>Signup for email notifications</label>
            <input type="checkbox"/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
