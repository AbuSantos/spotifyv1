'use client'
import { getProviders, signIn } from 'next-auth/react'
const Login = async () => {
  const providers = await getProviders()

  console.log('Rendered with providers:', providers)

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt=" a text"
      />
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button
              className="text-white bg-[#18D860] p-5 rounded-lg"
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
    </div>
  )
}

export default Login
