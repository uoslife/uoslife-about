import { getAllFilesFrontMatter } from '@/lib/mdx'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'

export const NOTICES_PER_PAGE = 10
export const NOTICE_TITLE = '서비스 공지사항'
export const NOTICE_DESCRIPTION = '시대생 서비스 공지사항을 알려드립니다.'

export const getStaticProps = async () => {
  const notices = await getAllFilesFrontMatter('notices')

  return {
    props: {
      items: notices.slice(0, NOTICES_PER_PAGE),
      pagination: {
        currentPage: 1,
        totalPages: Math.ceil(notices.length / NOTICES_PER_PAGE),
      },
    },
  }
}

const Notices = ({ items, pagination }) => (
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

export default Notices
