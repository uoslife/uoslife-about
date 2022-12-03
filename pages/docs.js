import { getAllFilesFrontMatter } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'

export const DOCS_TITLE = '문서'
export const DOCS_DESCRIPTION = '시대생 서비스와 관련된 문서를 제공합니다.'

export const getStaticProps = async () => ({
  props: {
    items: await getAllFilesFrontMatter('docs'),
  },
})

const Notices = ({ items }) => (
  <>
    <PageSEO
      title={`${DOCS_TITLE} | ${siteMetadata.author}`}
      description={siteMetadata.description}
    />

    <ListLayout route="docs" title={DOCS_TITLE} description={DOCS_DESCRIPTION} items={items} />
  </>
)

export default Notices
