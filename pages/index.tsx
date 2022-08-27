import type { NextPage } from 'next';
// components
import Hero from '../components/Hero';
import PageHead from '../components/PageHead';

export default function Home(): NextPage | JSX.Element {
  return (
    <>
      <PageHead title='Home' />
      <Hero />
    </>
  );
};