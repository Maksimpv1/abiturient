'use client'

import { Formik, getIn } from "formik";
import * as yup from 'yup';
import { ILoginData } from "../login/page";
import InputField from "@/app/components/ui/InputField/InputField";
import Button from '@/app/components/ui/Button/Button';


const Registration = () => {

  const registration:ILoginData[] = [
    {        
      label: 'Номер студенческого',
      type: 'text',
      name: 'idNumber',
    },
    {
      label: 'Имя',
      type: 'text',
      name: 'firstName',
    },
    {
      label: 'Фамилия',
      type: 'text',
      name: 'lastName',
    },
    {
      label: 'Почта',
      type: 'email',
      name: 'email',
    },
    {
      label: 'Пароль',
      type: 'password',
      name: 'password',
    },
    {
      label: 'Повторите пароль',
      type: 'password',
      name: 'confirmPassword',
    },
  ]

  const ValidityState = yup.object().shape({
    idNumber: yup.string().typeError('Введите верный Id').required('Обязательное поле'),
    firstName: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    lastName: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    email: yup.string().email('Введите верный Email').required('Обязательное поле'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(8,'Min 8 symbols'),
    confirmPassword: yup.string().oneOf([yup.ref('password')],'Пароли не совпадают').required('Обязательное поле'),
  })

  return (
  
    <div>
      <h2>Регистрация</h2>
      <Formik
      initialValues={{
        idNumber:'',
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
      }}
      validateOnBlur
      onSubmit={()=>{console.log("зареган")}}
      validationSchema={ValidityState}
      >
      {({ values,errors,touched,handleChange, handleBlur,isValid,handleSubmit, dirty }) => (
      <form onSubmit={handleSubmit}>
        {registration.map((item,index)=>(
          <InputField
          key={index}
          label={item.label}
          type={item.type}
          onChange={handleChange}
          onBlur={handleBlur}
          value={getIn(values, item.name)}            
          errors={(getIn(errors, item.name))}
          name={item.name}
          />
        ))}
        <Button text={'Войти'} fontSize={'24'} type={'submite'} />
      </form>
      )}

      </Formik>
    </div>
  );
};
export default Registration;
