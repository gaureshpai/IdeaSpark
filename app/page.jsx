// pages/page.jsx
import React from 'react';
import Layout from '@components/Layout';

const Home = () => {
  return (
    <Layout>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p>
          Promptopia is an open-source AI prompting
          tool for the modern world to
          discover, create, and share creative prompts.
        </p>
      </section>
    </Layout>
  );
};

export default Home;
