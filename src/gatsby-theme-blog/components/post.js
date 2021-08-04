import * as React from 'react'
import { css } from 'theme-ui'
import { getSrc } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from './layout'
import SEO from './seo'
import PostTitle from './post-title'
import PostDate from './post-date'
import PostFooter from './post-footer'
import PostHero from './post-hero'
import Tags from './tags'
import PostTag from './post-tag'

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={post.socialImage ? getSrc(post.socialImage) : getSrc(post.image)}
      imageAlt={post.imageAlt}
    />
    <main>
      <article>
        <header>
          <PostHero post={post} />
          <PostTitle>{post.title}</PostTitle>
          <PostDate>{post.date}</PostDate>
          <PostTag tags={post.tags} />
        </header>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
      <Tags />
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
