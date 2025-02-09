import { FaApple, FaGoogle, FaUser, FaLock, FaEyeSlash } from "react-icons/fa";
import LogoLogin from '../../assets/images/login.png'
import Logo from '../../assets/images/logo.svg'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex lg:items-center py-10 border-b-2 justify-center min-h-screen bg-slate-50">
      <div className="bg-white rounded-lg text-sm shadow-lg flex max-w-4xl w-full">
        <div className="w-1/3 hidden lg:block bg-red-50 p-6 flex flex-col justify-between">
          <div>
            <img src={Logo} alt="Logo" className="w-40 mb-4" />
            <p className="text-gray-700 font-semibold">Tìm nhà đất</p>
            <p className="text-gray-500">Batdongsan.com.vn dẫn lối</p>
          </div>
          <img src={LogoLogin} alt="Illustration" className="w-full" />
        </div>

        <div className="lg:w-2/3 w-full p-8">
          <h2 className="text-lg font-semibold">Xin chào bạn</h2>
          <h1 className="text-2xl font-bold mt-1">Đăng nhập để tiếp tục</h1>

          <div className="mt-4">
            <div className="relative mb-3">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="SĐT chính hoặc email"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Mật khẩu"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <FaEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
            </div>
            <button className="w-full mt-4 bg-red-500 text-white py-3 rounded-md hover:bg-red-600">
              Đăng nhập
            </button>
          </div>

          <div className="flex justify-between mt-3 text-sm text-gray-500">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Nhớ tài khoản
            </label>
            <a href="#" className="text-red-500">
              Quên mật khẩu?
            </a>
          </div>

          <div className="mt-6 text-center text-gray-500">Hoặc</div>

          <button className="w-full mt-4 border flex items-center justify-center p-3 rounded-md hover:bg-gray-100">
            <FaApple className="text-xl mr-2" /> Đăng nhập với Apple
          </button>
          <button className="w-full mt-3 border flex items-center justify-center p-3 rounded-md hover:bg-gray-100">
            <FaGoogle className="text-xl text-red-500 mr-2" /> Đăng nhập với Google
          </button>

          <p className="mt-6 text-xs text-gray-500 text-center">
            Bằng việc tiếp tục, bạn đồng ý với{" "}
            <a href="#" className="text-red-500">
              Điều khoản sử dụng
            </a>
            ,{" "}
            <a href="#" className="text-red-500">
              Chính sách bảo mật
            </a>
            , Quy chế, Chính sách của chúng tôi.
          </p>

          <p className="mt-4 text-center text-sm">
            Chưa là thành viên?{" "}
            <Link to="/dang-ky" className="text-red-500 font-semibold">
              Đăng ký tại đây
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
