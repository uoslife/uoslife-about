import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Image from '@/components/Image'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`404 Not Found | ${siteMetadata.author}`} />

      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
            <Image src="https://cdn.uoslife.net/emojis/rumae/28.png" height={106} width={80} />
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-2 text-3xl font-extrabold">404</p>
          <p className="mb-4 text-xl font-medium">페이지를 찾을 수 없습니다.</p>
          <Link href="/">
            <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
              첫 화면으로 이동하기
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
