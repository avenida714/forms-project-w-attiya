import {useState, useEffect} from 'react';

function App() {

  const[name, setName]=useState('');
  const[email, setEmail]=useState('');
  const[phone, setPhone]=useState('');
  const[phoneType, setPhoneType]=useState('Select a phone type');
  const[staff, setStaff]=useState('');
  const[bio, setBio]=useState('');
  const[notification, setNotification]=useState(false);
  const [validationErrors, setValidationErrors] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneValidator = new RegExp('[0-9]{3}-[0-9]{3}-[0-9]{4}');

    if(phone.match(phoneValidator) && phoneType === 'Select a phone type') alert('select a phone number type');

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
    setPhoneType('Select a phone type');
    setBio('');
    setNotification(false);


  }

  useEffect(() => {
    const emailValidator = new RegExp('[A-Za-z0-9]+@[a-z]+.[a-z]{2,3}');
    const phoneValidator = new RegExp('[0-9]{3}-[0-9]{3}-[0-9]{4}');
    const errors = [];

    if(name.length === 0) errors.push('please provide a name');
    if(!email.match(emailValidator)) errors.push('please provide a valid email address');
    if(!phone.match(phoneValidator)) errors.push('please provide a valid phone number with the following format: xxx-xxx-xxxx');
    if(staff.length === 0) errors.push('select a staff role');

    setValidationErrors(errors);
  },[name,email,bio]);

  return (
    <div>
      <h1>Form</h1>
        {validationErrors.length !== 0 && (
        <div>
          <ul>
            {validationErrors.map(error => {
              return <li key={error}>{error}</li>;
            })}
          </ul>
        </div>
      )}
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
              <textarea id='bio' value={bio} onChange={e => setBio(e.target.value)} maxLength={280} placeholder={'max length 280 characters'}/>
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
