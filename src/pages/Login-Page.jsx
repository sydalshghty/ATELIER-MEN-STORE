import loginLogo from "../../src/assets/login-logo.svg";
import { Check,Eye,EyeOff } from "lucide-react";
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
    const navigate = useNavigate();

    const [showIcon,setShowIcon] = useState(false);
    const [type,setType] = useState("password");
    const [active,setActive] = useState(false);

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === "" || password === ""){
            setError("*pleace fill all the field")
        }
        else{
            setError(null);
            console.log({
                "email": email,
                "password": password
            });
            navigate(`/`)
        }
    }
    return (
        <section className="login-page w-full h-screen bg-(--bg-login) pt-20 pl-6 pr-6 pb-20 flex justify-center items-center flex-col">
            <div className="col-logo w-full flex justify-center items-center sm:mb-6 lg:mb-8 mb-6">
                <img src={loginLogo} alt="logo" />
            </div>
            <div className="col-heading flex flex-col gap-4 text-center mb-8">
                <h1 className="font-serif  text-(--color-heading) font-bold sm:text-3xl lg:text-4xl text-2xl">Welcome back</h1>
                <p className="text-(--color-text) sm:text-[15px] lg:text-[18px]">Enter your details to access your curated wardrobe.</p>
            </div>
            <form action="" className="lg:w-md sm:w-md w-full">
                <div className="col-email flex flex-col gap-2 mb-6 w-full">
                    <label className="text-[14px] text-(--color-label) font-medium uppercase">Email Address</label>
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" placeholder="name@example.com" name="email" required className="w-full lg:h-14.5 h-12  p-4 border border-(--color-border) rounded-sm outline-none text-[16px] text-(--color-label) bg-white font-medium placeholder:pl-1" />
                </div>
                <div className="col-password flex flex-col gap-2 mb-6 w-full">
                    <div className="flex justify-between items-center">
                        <label className="text-[14px] text-(--color-label) font-medium uppercase">Password</label>
                        <a href="##" className="text-(--color-forget) text-[14px] font-bold">Forgot?</a>
                    </div>
                    <div className="flex items-center w-full lg:h-14.5 h-12 p-4 border border-(--color-border) rounded-sm outline-none text-[16px] 
                        text-(--color-label) bg-white font-medium">
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type={type} name="password" required 
                        className="placeholder:pl-1 w-full h-full border-none outline-none"    
                        />
                        {showIcon ? 
                            <Eye className="cursor-pointer lg:w-6 w-5" onClick={() => {
                                setShowIcon(!showIcon);
                                setType("password")
                            }}/>
                            :
                            <EyeOff className="cursor-pointer lg:w-6 w-5" onClick={() => {
                                setShowIcon(!showIcon);
                                setType("text")
                            }}/>
                        }
                    </div>
                </div>
                <p className="text-red-500 capitalize text-[14px] font-sans font-medium mb-5">{error}</p>
                <div className="col-check flex items-center gap-2 mb-6">
                    <span className={`${active ? "active" : ""} w-4 h-4 border border-(--color-border) rounded-xs 
                        flex justify-center items-center cursor-pointer`} onClick={() => {
                            setActive(! active)
                        }}>
                        
                        <Check className="text-white" />
                    </span>
                    <p className="text-[14px] text-(--color-text)">Stay signed in for 30 days</p>
                </div>
                <input type="submit" value={`SIGN IN`} 
                    onClick={handleSubmit}
                    className="mb-6 cursor-pointer w-full lg:h-15 h-12 bg-(--color-forget) rounded-sm text-[16px] text-white" />
            </form>
            <span className="continue-with mb-6 text-[14px] uppercase font-medium text-(--color-label)">Or continue with</span>
            <div className="google-facebook-btns flex gap-4 items-center mb-6">
                <button className="google-btn  h-11.5 lg:w-54 w-36 border border-(--color-border) rounded flex items-center justify-center gap-2 cursor-pointer hover:bg-(--color-forget) transition-colors duration-500 hover:border-none hover:text-white">
                    <FaGoogle />
                    <p className="text-[14px] uppercase text-(--color-heading) font-bold">Google</p>
                </button>
                <button className="facebook-btn lg:w-54 w-36 h-11.5 border border-(--color-border) rounded flex items-center justify-center gap-2 cursor-pointer hover:bg-(--color-forget) transition-colors duration-500 hover:border-none hover:text-white">
                    <FaFacebook />
                    <p className="text-[14px] uppercase text-(--color-heading) font-bold">Facebook</p>
                </button>
            </div>
            <div className="create-account flex mb-6 items-center">
                <p className="text-[16px] text-(--color-text)">New to the Atelier?</p>
                <Link to={`/register`} className="text-[16px] text-(--color-heading)">Create an account</Link>
            </div>
        </section>
    )
}
export default LoginPage;