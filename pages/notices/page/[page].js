import { getAllFilesFrontMatter } from '@/lib/mdx'
import { NOTICE_DESCRIPTION, NOTICE_TITLE, NOTICES_PER_PAGE } from '../../notices'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'

export const getStaticPaths = async () => {
  const totalPosts = await getAllFilesFrontMatter('notices')
  const length = Math.ceil(totalPosts.length / NOTICES_PER_PAGE)

  return {
    fallback: false,
    paths: Array.from({ length }, (_, i) => ({
      params: { page: (i + 1).toString() },
    })),
  }
}

export const getStaticProps = async ({ params }) => {
  const notices = await getAllFilesFrontMatter('notices')
  const currentPage = parseInt(params.page)

  return {
    props: {
      items: notices.slice(NOTICES_PER_PAGE * (currentPage - 1), NOTICES_PER_PAGE * currentPage),
      pagination: { currentPage, totalPages: Math.ceil(notices.length / NOTICES_PER_PAGE) },
    },
  }
}

const NoticesPage = ({ items, pagination }) => (
  <>
    <PageSEO
      title={`${NOTICE_TITLE} | ${siteMetadata.author}`}
      description={siteMetadata.description}
    />

    <ListLayout
      route="notices"
      title={NOTICE_TITLE}
      description={NOTICE_DESCRIPTION}
      items={items}
      pagination={pagination}
    />
  </>
)

export default NoticesPage
