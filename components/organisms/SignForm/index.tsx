import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
// import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import { setLogin } from '../../../services/auth';
// import Input from '../../atoms/Input/Input';

export default function SignForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    if (!email || !password) {
      toast.error('email atau password tidak boleh kosong');
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('login berhasil mas bro');
        const { token } = response.data;
        const tokenBase64 = window.btoa(token);
        // console.log(tokenBase64);
        Cookies.set('token', tokenBase64, { expires: 1 });
        // console.log('token: ', token);
        // const user = jwt_decode(token);
        // console.log('user: ', user);
        router.push('/');
      }
    }
  };

  return (
    <>
      <form action="">
        <div className="container mx-auto">
          <div className="pb-50">
            <a className="navbar-brand" href="../index.html">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </div>
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
          <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
          <div className="pt-50">
            {/* <Input label="Email Address" /> */}
            <label
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Email Address

            </label>
            <input
              type="email"
              className="form-control rounded-pill text-lg"
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="pt-30">
            <label
              htmlFor="password"
              className="form-label text-lg fw-medium color-palette-1 mb-10"
            >
              Password

            </label>
            <input
              type="password"
              className="form-control rounded-pill text-lg"
              placeholder="Your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="button-group d-flex flex-column mx-auto pt-50">
            <button
              className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
              type="button"
              onClick={onSubmit}
            >
              Continue to Sign In

            </button>
            <Link href="/sign-up">
              <a
                className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                role="button"
              >
                Sign
                Up

              </a>

            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}
