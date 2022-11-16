import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function DocsLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/docs/${slug}`} {...frontMatter} />
      <ScrollTopAndComment />

      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="py-6">
            <div className="space-y-3 text-center">
              <PageTitle>{title}</PageTitle>
              <div className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
              </div>
            </div>
          </header>

          <div className="prose max-w-none py-10 dark:prose-dark">{children}</div>
        </div>
      </article>
    </SectionContainer>
  )
}
