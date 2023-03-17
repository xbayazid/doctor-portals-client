import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () =>{
            const res =  await fetch('http://localhost:5000/appointmentSpecialty')
            const data = await res.json();
            return data;
        }
    });

    const handleAddDoctor = data => {
        console.log(data);
    }

    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h2 className="text-3xl font-semibold">Add A Doctor</h2>
            <div className="w-96 p-7">
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="text" {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Please select a Specialty</option>
                            {
                                specialties.map(specialty =><option
                                key={specialty._id}
                                value={specialty.name}
                                >{specialty.name}</option>)
                            }
                            
                        </select>
                    </div>
                    <input className="btn btn-accent w-full mt-4" value='add doctor' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;