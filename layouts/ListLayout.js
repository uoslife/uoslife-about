import SimpleListItem from '@/components/SimpleListItem'
import Link from '@/components/Link'
import Pagination from '@/components/Pagination'
import SimpleHeader from '@/components/SimpleHeader'

const ListLayout = ({ title, description, route, items, pagination }) => {
  return (
    <div className="flex flex-col gap-4">
      {title && description && <SimpleHeader title={title} description={description} />}

      <div className="flex flex-col divide-y border-y">
        {items.map((item) => (
          <Link key={item.slug} href={`/${route}/${item.slug}`}>
            <SimpleListItem
              category={item.category}
              title={item.title}
              createdAt={item.date}
              item={item}
            >
              {item.services && item.services.length > 0 && (
                <small>영향 서비스: {item.services.join(', ')}</small>
              )}
            </SimpleListItem>
          </Link>
        ))}
      </div>

      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          route={route}
        />
      )}
    </div>
  )
}

export default ListLayout
