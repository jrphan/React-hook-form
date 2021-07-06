import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit,  formState: { errors }  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="App">
        <h4 className="text-center">Registration Form</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>FullName</label>
            <input type="text" className="form-control font-weight-bold" placeholder="Your Name" {...register("firstName", { required: true })}/>
            
            {errors.firstName && errors.firstName.type ==='required' &&  <p className="text-danger">Vui long nhap ten</p>}
          </div>


          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control font-weight-bold" placeholder="Your Email" {...register("email" ,{ required: true }, { pattern: /^[A-Za-z]+$/i })}/>
            
            {errors.email?.type === 'required' && <p className="text-danger">Vui long nhap Email</p>}
            {errors.email?.type === 'pattern' && <p className="text-danger">Ban can phai nhap dung email</p>}
          </div>



          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control font-weight-bold" placeholder="Your password" {...register("password" ,{ required: true },  { min: 6, max: 20 })}/>
          
            {errors.password && <p className="text-danger">Vui long nhap Password</p>}
            {errors.password && <p className="text-danger">Vui long nhap Password</p>}
          </div>


          <button type="submit" className="btn btn-primary text-center">Register</button>

        </form>
    </div>
  );
}

export default App;
