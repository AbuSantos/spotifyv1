import { getProviders, signIn } from 'next-auth/react'
const Login = async () => {
  const providers = await getProviders()

  console.log('Rendered with providers:', providers)

  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt=" a text"
      />
      {providers &&
        Object.values(providers).map((provider) => (
          <div>
            <button className="text-gray-100">
              Login with {provider.name}
            </button>
          </div>
        ))}
    </div>
  )
}

export default Login
