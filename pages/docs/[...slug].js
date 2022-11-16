import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'DocsLayout'

export async function getStaticPaths() {
  const posts = getFiles('docs')
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: await getFileBySlug('docs', params.slug.join('/')),
    },
  }
}

export default function Blog({ post, authorDetails }) {
  const { mdxSource, toc, frontMatter } = post

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      toc={toc}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      authorDetails={authorDetails}
    />
  )
}
