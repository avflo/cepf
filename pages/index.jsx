import Layout from '../components/layout';
import { getAllFilesFrontMatter } from '../lib/mdx';
import NextLink  from 'next/link';
import { Fragment } from 'react';

export default function Home({ posts }) {
  return (
    <Layout>
      <Fragment>
        <div >
          <main>
            <h1 className="title">
              BLOG
            </h1>

            <p className="description">
              Corporación Educacional Paulo Freire
            </p>

            <div className="grid">
              {posts.map( post => (
                <NextLink href={`/${post.slug}`} key={post.slug}>
                  <a>
                    <h2> {post.title} &rarr;</h2>
                    <p> {post.date} </p>
                  </a>            
                </NextLink>
              ))}
            </div>
          </main>
        </div>
      </Fragment>

    </Layout>
  )
}

export async function getStaticProps(){
  const posts = await getAllFilesFrontMatter("posts");
  console.log(posts);
  return {
    props: {posts},
  }
}