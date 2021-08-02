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

          <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
        `}</style>

          <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
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