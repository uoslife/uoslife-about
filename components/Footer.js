import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 mb-8 flex flex-col items-center gap-2 text-sm">
        <div className="flex flex-row gap-2">
          <Link href="/docs/privacy">
            <strong>개인정보처리방침</strong>
          </Link>
          <Link href="/docs/tos">서비스 이용약관 </Link>
          <Link href="/blog">공지사항</Link>
        </div>
        <div>© 2022 시대생팀, All Rights Reserved.</div>
      </div>
    </footer>
  )
}
