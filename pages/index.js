import Head from 'next/head';
import {
  GlobeAltIcon,
  HeartIcon,
  MailIcon,
  PencilAltIcon,
  PhoneIcon,
  TrashIcon,
} from '@heroicons/react/outline';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Assignment</title>
      </Head>
       <div className="flex flex-wrap mt-12 mb-15 justify-center ">
        {data.map((cur) => (
          <div>
            <div className="py-5 px-5  ml-8 mr-5 border rounded-t bg-cyan-100 border-gray border-b-0  ">
              <div className="bg-gray-100 h-50 w-75">
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars/${cur.username}.svg?options[mood][]=happy`}
                  className="h-50 w-40 justify-center ml-auto mr-auto "
                />
              </div>
              <div className="border pl-5 pb-5 bg-white">
                <h3 className="text-lg font-semibold mt-3">{cur.name}</h3>

                <div className="flex items-center ">
                  <MailIcon className="h-4 mr-1 font-thin text-gray-500" />
                  <h1 className="text-sm text-gray-500">{cur.email}</h1>
                </div>

                <div className="flex items-center ">
                  <PhoneIcon className="h-4 mr-1 font-thin text-gray-500" />
                  <h1 className="text-sm text-gray-500">{cur.phone}</h1>
                </div>

                <div className="flex items-center ">
                  <GlobeAltIcon className="h-4 mr-1 font-thin text-gray-500" />
                  <h1 className="text-sm text-gray-500">{cur.website}</h1>
                </div>
              </div>
            </div>
            <div className="flex mb-6 border-1 w-65 pt-2 pb-2 ml-8 mr-5 rounded-b bg-cyan-300">
              <HeartIcon className="h-6 mr-10 ml-10 text-red-500 hover:text-red-700  cursor-pointer" />
              <PencilAltIcon className="h-6 mr-20 ml-10  text-gray-500 cursor-pointer" />
              <TrashIcon className="h-6 mr-10 text-gray-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
