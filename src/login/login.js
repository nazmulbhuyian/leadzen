import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();




    const handleSignIn = (data) => {
        const user = {
            userName: data.name,
            password: data.password
        }
        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <form onSubmit={handleSubmit(handleSignIn)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 caracter or longer' },
                                // pattern:{value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[$@])/, message: 'Passwor should be strong'}
                            })
                        }
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-5 bg-emerald-500' value='Log In' type="submit" />
                    {
                        // signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default Login;