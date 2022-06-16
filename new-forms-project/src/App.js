import {useState, useEffect} from 'react';

function App() {

  const[name, setName]=useState('');
  const[email, setEmail]=useState('');
  const[phone, setPhone]=useState('');
  const[phoneType, setPhoneType]=useState('');
  const[staff, setStaff]=useState('');
  const[bio, setBio]=useState('');
  const[notification, setNotification]=useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(validationErrors.length !== 0) alert('Cannot submit with errors!');

    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Phone: ', phone);
    console.log('Phone Type: ', phoneType);
    console.log('Staff: ', staff);
    console.log('Bio: ', bio);
    console.log('Notifications: ', notification);

    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setBio('');
    setNotification('');


  }

  useEffect(() => {
    const errors = [];
    if(name.length === 0) errors.push('please provide a name');
    if(!email.includes('@')) errors.push('please provide a valid email address');
    setValidationErrors(errors);

  },[name,email]);


  return (
    <div>
    <h1>Form</h1>
      <form onSubmit = {handleSubmit}>
        <div>
            <label>Name</label>
            <input type='text' id='name' value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
            <label>Email</label>
            <input type='text' id='email' value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Phone Number</label>
            <input type='text' id='phone' value={phone} onChange={e => setPhone(e.target.value)}/>
        </div>
        <div>
            <label>Phone Type</label>
            <select id='phoneType' value={phoneType} onChange={e => setPhoneType(e.target.value)}>
              <option disabled>Select a phone type</option>
              <option>Home</option>
              <option>Work</option>
              <option>Mobile</option>
            </select>
        </div>
        <div>
            <label>Staff</label>
            <input type='radio' id='instructor' value={'Instructor'} onChange={(e) => setStaff(e.target.value)} checked={staff === 'Instructor' ? 'checked':''}/>Instructor
            <input type='radio' id='student' value={'Student'} onChange={e => setStaff(e.target.value)} checked={staff === 'Student' ? 'checked':''}/>Student
        </div>
        <div>
            <label>Bio</label>
            <textarea id='bio' value={bio} onChange={e => setBio(e.target.value)}/>
        </div>
        <div>
            <label>Signup for email notifications</label>
            <input type="checkbox" value={notification} onChange={() => setNotification(!notification)}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
