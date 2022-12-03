import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import SimpleHeader from '@/components/SimpleHeader'
import formatDate from '@/lib/utils/formatDate'

const PostLayout = ({ children, route, frontMatter }) => (
  <>
    <BlogSEO
      url={`${siteMetadata.siteUrl}/${route}/${frontMatter.slug}`}
      {...frontMatter}
      title={`${frontMatter.title} | ${siteMetadata.author}`}
    />
    <ScrollTopAndComment />

    <article>
      <SimpleHeader title={frontMatter.title} description={formatDate(frontMatter.date)} />
      <div className="prose mx-auto max-w-2xl py-8 dark:prose-dark">{children}</div>
    </article>
  </>
)

export default PostLayout
