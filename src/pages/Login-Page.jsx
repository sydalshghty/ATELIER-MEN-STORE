import loginLogo from "../../src/assets/login-logo.svg";
import { Check } from "lucide-react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
function LoginPage() {
    return (
        <section className="login-page w-full h-screen bg-(--bg-login) pt-20 pl-6 pr-6 pb-20 flex justify-center items-center flex-col">
            <div className="col-logo w-full flex justify-center items-center mb-14">
                <img src={loginLogo} alt="logo" />
            </div>
            <div className="col-heading flex flex-col gap-4 text-center mb-12">
                <h1 className="font-serif text-4xl text-(--color-heading) font-bold">Welcome back</h1>
                <p className="text-[18px] text-(--color-text)">Enter your details to access your curated wardrobe.</p>
            </div>
            <form action="" className="w-md">
                <div className="col-email flex flex-col gap-2 mb-6 w-full">
                    <label className="text-[14px] text-(--color-label) font-medium uppercase">Email Address</label>
                    <input type="email" placeholder="name@example.com" name="email" className="w-full h-14.5 p-4 border border-(--color-border) rounded-sm outline-none text-[16px] text-(--color-label) bg-white font-medium placeholder:pl-1" />
                </div>
                <div className="col-password">
                    <div>
                        <label>Password</label>
                        <a href="">Forgot?</a>
                    </div>
                    <input type="password" name="password" />
                </div>
                <div className="col-check">
                    <span>
                        <Check />
                    </span>
                    <p>Stay signed in for 30 days</p>
                </div>
                <input type="submit" value={`SIGN IN`} />
            </form>
            <span className="continue-with">Or continue with</span>
            <div className="google-facebook-btns">
                <button className="google-btn">
                    <FaGoogle />
                    <p>Google</p>
                </button>
                <button className="facebook-btn">
                    <FaFacebook />
                    <p>Facebook</p>
                </button>
            </div>
            <div className="create-account">
                <p>New to the Atelier?</p>
                <a href="#">Create an account</a>
            </div>
        </section>
    )
}
export default LoginPage;