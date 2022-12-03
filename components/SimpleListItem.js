import formatDate from '@/lib/utils/formatDate'

const SimpleListItem = ({ category, title, createdAt, children }) => {
  return (
    <div className="flex justify-between py-3 px-4">
      <div className="flex items-center gap-1.5">
        {category && (
          <div className="rounded bg-gray-200 py-0.5 px-2 text-sm font-medium dark:bg-gray-800">
            {category}
          </div>
        )}
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="flex gap-3">
        <div className="text-gray-600 dark:text-gray-400">{children}</div>
        <div className="font-medium text-gray-600 dark:text-gray-400">{formatDate(createdAt)}</div>
      </div>
    </div>
  )
}

export default SimpleListItem
