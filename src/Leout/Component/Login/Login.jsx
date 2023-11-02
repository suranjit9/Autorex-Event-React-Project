import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { authContext } from "../../../UseContext/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert";


const Login = () => {
    const { singIn,passwordRestor } = useContext(authContext);
    const locetion = useLocation();
    const neviget = useNavigate();
    const emailRef = useRef(null);
    // const [nameFilt, setName] = useState(null);
    const handeleEmailSignin = e => {
        e.preventDefault();
        const newFrom = new FormData(e.currentTarget);
        
        
        const email = newFrom.get('email');
        const password = newFrom.get('password');
        // console.log(email, password);
        singIn(email, password)
            .then(() => {
                // console.log(result.user);
                toast("Wow so easy!");
                neviget(locetion?.state ? locetion.state : '/');
            })
            .catch((error) => {
                toast(error.message);
                
              });
    }
    const hendalPasswordRestor =() =>{
        const email = emailRef.current.value;
        passwordRestor(email)
        .then(()=>{
            swal(" Password reset email sent!", "success");
        })
        .catch((error) => {
            toast(error.message);
            
          });
       
    }
    return (
        
            <div className="max-w-fit mx-auto">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-2xl font-bold mt-6 mb-2">Please Sign IN</h1>
                    <hr />
                    <form onSubmit={handeleEmailSignin} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                           
                            <label className="label">
                                <h2 onClick={hendalPasswordRestor} className="label-text-alt link link-hover">Forgot password?</h2>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
                <p className="text-center text-xl font-bold mt-4">Do not have an Account <Link className="text-green-600" to='/singUp'>Sign UP</Link></p>
            </div>
       

    );
};

export default Login;