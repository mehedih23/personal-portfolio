import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast';


const Contact = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const form = useRef();

    const onSubmit = () => {
        emailjs.sendForm('service_y31on5e', 'template_65m301q', form.current, 'NJQOqznCRy-P8c_fy')
            .then((result) => {
                if (result.status === 200) {
                    toast.success('Email Send Successfully.', { id: 'email-success' })
                    reset();
                }
            }, (error) => {
                if (error.status === 400) {
                    toast.error('Sorry, Email Send failed.', { id: 'email-error' })
                    reset();
                }
            });
    };
    return (
        <div
            class="mockup-window bg-secondary my-4 h-[530px]"
            data-aos="fade-down"
        >
            <div class="px-4 bg-secondary h-[480px] overflow-auto">
                <div className='text-center'>
                    <p className='text-accent text-xl mb-6'>Feel Free To Contact Me Anytimes</p>
                    <h1 className='text-5xl text-white mb-8'>My <span className='text-info'>Contact</span></h1>
                    <div className="divider w-1/3 mx-auto" style={{ color: '#ff651c' }}></div>
                </div>
                <form
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    ref={form} onSubmit={handleSubmit(onSubmit)} className='text-center  mb-8'>
                    <label
                        className="label w-72 md:w-80 lg:w-96 mx-auto"
                    >
                        <span className="label-text text-white">Your Name</span>
                    </label>
                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },
                            minLength: {
                                value: 5,
                                message: 'Minimum 5 characters'
                            }
                        })}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered bg-transparent input-info w-72 md:w-80 lg:w-96 text-white"
                    />
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.name?.message}</span>}
                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors?.name?.message}</span>}
                    </label>
                    <label
                        className="label w-72 md:w-80 lg:w-96 mx-auto">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input
                        type="email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'Provide a valid email address'
                            }
                        })}
                        placeholder="Type here"
                        className="input input-bordered bg-transparent input-info w-72 md:w-80 lg:w-96 text-white" />
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-red-600">{errors.email.message}</span>}
                    </label>

                    <label
                        className="label w-72 md:w-80 lg:w-96 mx-auto"
                    >
                        <span className="label-text text-white">Subject</span>
                    </label>
                    <input
                        {...register("subject", {
                            required: {
                                value: true,
                                message: 'Subject is required'
                            },
                            minLength: {
                                value: 20,
                                message: 'Minimum 20 characters'
                            }
                        })}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered bg-transparent input-info w-72 md:w-80 lg:w-96 text-white"
                    />
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        {errors.subject?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.subject?.message}</span>}
                        {errors.subject?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors?.subject?.message}</span>}
                    </label>

                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        <span className="label-text text-white">Message</span>
                    </label>
                    <textarea
                        {...register("message", {
                            required: {
                                value: true,
                                message: 'message is required'
                            },
                            minLength: {
                                value: 100,
                                message: 'Minimum 100 characters'
                            }
                        })}
                        type="text"
                        placeholder="Type here"
                        className="textarea textarea-bordered bg-transparent textarea-info w-72 md:w-80 lg:w-96 text-white"
                    />
                    <label className="label w-72 md:w-80 lg:w-96 mx-auto">
                        {errors.message?.type === 'required' && <span className="label-text-alt text-red-600">{errors?.message?.message}</span>}
                        {errors.message?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors?.message?.message}</span>}
                    </label>

                    <input type="submit" value={'MESSAGE'} className='btn border border-[#ff651c] text-white btn-outline hover:bg-[#ff651c] hover:text-white' />
                </form>
            </div>
        </div>
    )
}

export default Contact