import { getProviders, signIn } from "next-auth/react";
const Loginn = ({ providers }) => {
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt=" a text"
      />
      {providers &&
        Object.values(providers).map((provider) => {
          // console.log(provider)
          <div>
            <button className="text-gray-100">
              Login hhwith {provider.name}
            </button>
          </div>;
        })}
    </div>
  );
};

export default Loginn;

export async function getServerSideProps() {
  try {
    const providers = await getProviders();

    return {
      props: {
        providers: providers,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        providers: {},
      },
    };
  }
}
