import { useState, useEffect } from 'react';
import {Logo, FormRow, Alert} from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { DISPLAY_ALERT, CLEAR_ALERT } from '../context/actions';


const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
};
const Register = () => {
    const [values, setValues] = useState(initialState);
    const {isLoading, showAlert, displayAlert} = useAppContext();
    
    const toggleMember = ()=>{
      setValues({ ...values, isMember: !values.isMember});
      
    };

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const {name, email, password, isMember } = values;
        if(!email || !password || (!isMember && !name)){
            displayAlert('danger', 'Fill out all forms');
            return;
        }
        console.log(values);
        
    };
    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>
                   {values.isMember ? 'Login' : 'Register'}
                </h3>
                {/* Alert */}
                {showAlert && <Alert />}
                {/* name input */}
                {!setValues.isMember &&  <FormRow 
                    type='text'
                    name='name'
                    value={values.name}
                    handleChange={handleChange}
                />}
               
                {/* email input */}
                {!values.isMember && <FormRow
                    type='email'
                    name='email'
                    value={values.email}
                    handleChange={handleChange}
                     />}
                {/* password input */}
                <FormRow 
                    type='password'
                    name='password'
                    value={values.password}
                    handleChange={handleChange}
                />

                <button type='submit' className='btn btn-block'>
                    Submit
                </button>
                <p>
               {!values.isMember ? 'Already registered?' : 'Not Registered yet?'}
               <button type='button' className='member-btn' onClick={toggleMember}>
                {!values.isMember ? 'Login' : 'Register'}
               </button>
                </p>
            </form>
        </Wrapper>
    )
}

    
    export default Register