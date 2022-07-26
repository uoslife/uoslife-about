import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'

export const getStaticPaths = () => ({
  fallback: false,
  paths: getFiles('docs').map((p) => ({
    params: {
      slug: formatSlug(p).split('/'),
    },
  })),
})

export const getStaticProps = async ({ params }) => ({
  props: { post: await getFileBySlug('docs', params.slug.join('/')) },
})

const Document = ({ post }) => (
  <MDXLayoutRenderer
    layout="PostLayout"
    route="docs"
    mdxSource={post.mdxSource}
    frontMatter={post.frontMatter}
  />
)

export default Document
