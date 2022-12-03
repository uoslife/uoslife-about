import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'
import { MDXLayoutRenderer } from '@/components/MDXComponents'

export const getStaticPaths = () => ({
  fallback: false,
  paths: getFiles('notices').map((p) => ({
    params: {
      slug: formatSlug(p).split('/'),
    },
  })),
})

export const getStaticProps = async ({ params }) => ({
  props: { post: await getFileBySlug('notices', params.slug.join('/')) },
})

const Notice = ({ post }) => (
  <MDXLayoutRenderer
    layout="PostLayout"
    route="notices"
    mdxSource={post.mdxSource}
    frontMatter={post.frontMatter}
  />
)

export default Notice
