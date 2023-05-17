import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logo from '../../images/logo.png';
import './Register.css';
import Grid from '@mui/material/Grid';

export const Register= () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="background-image">
    <Grid container>
        <Grid item xs={4} ></Grid>

    <Grid item xs={4} >
        <form onSubmit={handleSubmit(onSubmit)} className="register_main">
             <div className="register_submain">
            <img className="register__logo" src={logo} width="100px" alt="logo"/>
            <div className="register__signin">
        <input type="text" className="register__text" placeholder="Full Name..." {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" className="register__text" placeholder="Email..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" className="register__text" placeholder="Age..." {...register("age")} />
      <p>{errors.age?.message}</p>
      <input
        type="password" className="register__text"
        placeholder="Password..."
        {...register("password")}
      />
      <p>{errors.password?.message}</p>
      <input
        type="password" className="register__text"
        placeholder="Confirm Password..."
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
     <button className="register__button">Submit</button>
</div>
    </div>
    </form>
    </Grid>
     <Grid item xs={4} ></Grid>
    </Grid>
    </div>
   
  );
};