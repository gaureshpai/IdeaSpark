"use client";

import '@styles/model.page.css'
import Feed from "@components/Feed";
import ChatGPTLink from "@components/ChatGPTLink";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      <span className='explore_possibilities'>Unleash Your Creativity</span>
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'>with IdeaSpark</span>
    </h1>
    <p className='desc text-center' style={{ color: '#4A5568' }}>
      IdeaSpark is a platform designed to ignite innovation and collaboration.
    </p>
    <p className='desc text-center' style={{ color: '#4A5568' }}>
      Share your unique ideas, explore others contributions, and leverage AI to fuel your creativity.
    </p>
    <p className='desc text-center'>
      {' '}
      <ChatGPTLink />
    </p>

    <Feed />
  </section>
);

export default Home;
