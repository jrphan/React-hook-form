import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

function App() {

  let schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  })

  const { register, handleSubmit,  formState: { errors }  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);

  return (
    <div className="App">
        <h4 className="text-center">Registration Form</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>FullName</label>
            <input type="text" className="form-control font-weight-bold" placeholder="Your Name" {...register("fullname")} name="fullname"/>
            
            {errors.fullname && errors.fullname.type ==='required' &&  <p className="text-danger">Vui long nhap ten</p>}
          </div>


          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control font-weight-bold" placeholder="Your Email" {...register("email")} name="email"/>
            
            {errors.email?.type === 'email' && <p className="text-danger">Ban can phai nhap dung email</p>}
            {errors.email?.type === 'required' && <p className="text-danger">Vui long nhap Email</p>}
          </div>



          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control font-weight-bold" placeholder="Your password" {...register("password")} name="password"/>
          
            {errors.password?.type === 'min' && <p className="text-danger">Vui long nhap Password tren 6 chu</p>}
            {errors.password?.type === 'required' && <p className="text-danger">Vui long nhap Password</p>}
          </div>


          <button type="submit" className="btn btn-primary text-center">Register</button>

        </form>
    </div>
  );
}

export default App;
