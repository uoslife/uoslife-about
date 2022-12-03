import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage, route }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button rel="previous" className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            ← 이전 페이지
          </button>
        )}

        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/${route}/` : `/${route}/page/${currentPage - 1}`}>
            <button rel="previous">← 이전 페이지</button>
          </Link>
        )}

        <span className="font-semibold text-gray-600 dark:text-gray-400">
          {currentPage} / {totalPages}
        </span>

        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            다음 페이지 →
          </button>
        )}

        {nextPage && (
          <Link href={`/${route}/page/${currentPage + 1}`}>
            <button rel="next">다음 페이지 →</button>
          </Link>
        )}
      </nav>
    </div>
  )
}
