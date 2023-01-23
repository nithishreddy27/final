import Link from 'next/link'

const Form = ({ isLogin, errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}  className="bg-white shadow-md rounded-lg px-12 pt-20 pb-12 mb-4">
    {/* <div className='sm:mx-auto sm:w-full sm:max-w-md'> */}

   <h1 className="text-center font-bold text-2xl">Sign up to your account</h1>
            <div class="mb-4 mt-10">
      <label className="block text-gray-700 text-sm mb-2 font-semibold" for="username">
        Email address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-orange-500 " id="username" name="email" type="email"/>
    </div>
    <div className="">
      <label className="block text-gray-700 text-sm font-semibold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400 focus:border-2" id="password" name='password' type="password"/>
    </div>
    <div className="">
      <label className="block text-gray-700 text-sm font-semibold mb-2" for="confirmpassword">
        Confirm Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-orange-400 focus:border-2" id="confirmpassword" name="rpassword" type="password"/>
    </div>
    <p>Already a user? Log in</p>
    <p id="mess"></p>
    <div className='text-center mt-5'>
      <input type="submit" value="Sing up"  className='bg-orange-600 font-semibold cursor-pointer block w-[100%] text-white h-10 rounded-md hover:bg-orange-700'/>
            
    </div>
          
    {errorMessage && <p className="error">{errorMessage}</p>}

  </form>
)

export default Form
