import Feed from "@components/Feed";
import ChatGPTLink from "@components/ChatGPTLink";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Promptopia is an open-source AI prompting tool for the modern world to
      discover, create, and share creative prompts.
    </p>

    <p className='desc text-center'>
      Create your own prompts for others to use,
      Copy the prompts you need to use and Use ChatGPT to get the answers
    </p>
      

    <p className='desc text-center'>
       {' '}
      <ChatGPTLink />
    </p>
    <Feed />
  </section>
);

export default Home;
