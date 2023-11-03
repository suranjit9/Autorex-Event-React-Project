import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { FcGoogle } from 'react-icons/FC';
import { authContext } from "../../../UseContext/AuthProvider/AuthProvider";


const SignUP = () => {
    const { userCreate, googleSingup } = useContext(authContext);
    // const [userName, setUserName] = useState(null);
    const handeleEmailSignUP = e => {
        e.preventDefault();
        const newFrom = new FormData(e.currentTarget)
        const name = newFrom.get('name');
        const email = newFrom.get('email');
        const password = newFrom.get('password');
        let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
        
        // if(password.match(check)){
        //     console.log("Your password is strong.");
        // }else {
        //     return swal(`Oppo!Your Password Is So Week` );
            
        //   }
        // console.log(userName);
        userCreate(email, password, name)
            .then(result => {
                // setUserName(name)
                swal("successfully Sing UP");
                console.log(result.user)
            })
          .catch(error => {
           console.log(error.message)
          });
    }
    return (
        <div className="max-w-fit mx-auto">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-center text-2xl font-bold mt-6 mb-2">Please Sign UP</h1>
                <hr />
                <form onSubmit={handeleEmailSignUP} className="card-body">
                <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input  type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary mb-4">Login</button>
                        <button onClick={googleSingup} className="btn btn-outline w-full"><FcGoogle/>Google Sing UP</button>
                    </div>
                </form>
            </div>
            <p className="text-center text-xl font-bold mt-4">Alredy have an Account <Link className="text-green-600" to='/Login'>Sign IN</Link></p>
        </div>
    );
};

export default SignUP;