'use client'

import Button from "@/app/components/ui/Button/Button";
import InputField from "@/app/components/ui/InputField/InputField";
import { Formik, getIn } from "formik";
import * as yup from 'yup';
export interface ILoginData {
  label:string,
  type: string,
  name: string,
}

const Login = () => {

  const ValidityState = yup.object().shape({
    idNumber: yup.string().typeError('Введите верный Id').required('Обязательное поле'),
    password: yup.string().typeError('Введите верный пароль').required('Обязательное поле'),
  })

  const loginData:ILoginData[] = [
    {
      label: 'Номер студенческого',
      type: 'text',
      name: 'idNumber',
    },
    {
      label: 'Пароль',
      type: 'password',
      name: 'password',
    },
  ]

  return (
    <div>
      <h2>Login</h2>
      <Formik
      initialValues={{
        idNumber:'',
        password:'',
      }}
      validateOnBlur
      onSubmit={()=>{console.log('Login')}}
      validationSchema={ValidityState}
      >  
      {({ values,errors,touched,handleChange, handleBlur,isValid,handleSubmit, dirty }) => (
        <form onSubmit={handleSubmit}>
          {loginData.map((item,index)=>(
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

export default Login;
