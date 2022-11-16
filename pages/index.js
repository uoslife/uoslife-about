import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div className="flex flex-col gap-4">
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      {posts.forEach((post) => console.log(post))}
      <div className="flex justify-center gap-8 rounded-lg bg-zinc-50 py-8 px-4 dark:bg-zinc-800">
        <img src="/static/cv_images/00_diagram.svg" alt="" className="hidden md:block" />
        <div className="flex flex-col justify-center text-zinc-600 dark:text-zinc-300">
          <h1 className="text-3xl font-medium">
            시대의 연결을
            <br />
            만들어 가는 사람들,
          </h1>
          <h1 className="mb-3 text-3xl font-extrabold">
            중앙동아리 <span className="text-blue-600">UOSLIFE</span>
          </h1>
          <p>
            <span className="text-blue-600">'UOSLIFE'</span>는 서울시립대학교 구성원을 <br />
            <span className="text-blue-600">연결</span>하기 위해 앱 서비스를 운영하는 팀입니다.
          </p>
        </div>
      </div>

      <div className="flex grid-cols-3 flex-col gap-4 md:grid">
        <div className="flex flex-col items-center justify-start rounded-xl bg-zinc-50 px-4 py-8 dark:bg-zinc-800">
          <h3 className="text-xl font-extrabold text-blue-900 dark:text-blue-200">커뮤니티</h3>
          <h4 className="text-md font-medium text-zinc-600 dark:text-zinc-300">학생을 연결하다</h4>
          <p className="mt-1 text-center text-sm text-zinc-400">
            포털시스템 혹은 학생증으로 인증된 서울시립대 학생들만 이용할 수 있는 커뮤니티
          </p>
        </div>
        <div className="flex flex-col items-center justify-start rounded-xl bg-zinc-50 px-4 py-8 dark:bg-zinc-800">
          <h3 className="text-xl font-extrabold text-blue-900 dark:text-blue-200">공지사항</h3>
          <h4 className="text-md font-medium text-zinc-600 dark:text-zinc-300">학교을 연결하다</h4>
          <p className="mt-1 text-center text-sm text-zinc-400">
            서울시립대 홈페이지에 올라와 있는 공지사항을 모바일에서 확인할 수 있는 기능
          </p>
        </div>
        <div className="flex flex-col items-center justify-start rounded-xl bg-zinc-50 px-4 py-8 dark:bg-zinc-800">
          <h3 className="text-xl font-extrabold text-blue-900 dark:text-blue-200">시간표</h3>
          <h4 className="text-md font-medium text-zinc-600 dark:text-zinc-300">강의을 연결하다</h4>
          <p className="mt-1 text-center text-sm text-zinc-400">
            강의 정보와 시간표를 시대생 앱에서 손쉽게 조회할 수 있는 기능
          </p>
        </div>
        <div className="flex flex-col items-center justify-start rounded-xl bg-zinc-50 px-4 py-8 dark:bg-zinc-800">
          <h3 className="text-xl font-extrabold text-blue-900 dark:text-blue-200">학생자치기구</h3>
          <h4 className="text-md font-medium text-zinc-600 dark:text-zinc-300">
            소통창구를 연결하다
          </h4>
          <p className="mt-1 text-center text-sm text-zinc-400">
            각 학생기구/단과대에 학교 민원 및 건의사항 등 목소리를 전할 수 있는 소통창구 기능
          </p>
        </div>
        <div className="flex flex-col items-center justify-start rounded-xl bg-zinc-50 px-4 py-8 dark:bg-zinc-800">
          <h3 className="text-xl font-extrabold text-blue-900 dark:text-blue-200">학식</h3>
          <h4 className="text-md font-medium text-zinc-600 dark:text-zinc-300">일상을 연결하다</h4>
          <p className="mt-1 text-center text-sm text-zinc-400">
            학교 식당에서 제공하는 오늘과 내일의 식단을 확인할 수 있는 기능
          </p>
        </div>
        <div className="flex flex-col items-center justify-start rounded-xl bg-zinc-50 px-4 py-8 dark:bg-zinc-800">
          <h3 className="text-xl font-extrabold text-blue-900 dark:text-blue-200">메신저</h3>
          <h4 className="text-md font-medium text-zinc-600 dark:text-zinc-300">서로을 연결하다</h4>
          <p className="mt-1 text-center text-sm text-zinc-400">
            쪽지를 통해 유저와 이야기 하고 보틀을 통해 랜덤으로 익명의 누군가와 이야기 할 수 있는
            기능
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 rounded-lg bg-zinc-50 p-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
        <h3 className="text-2xl font-extrabold">시대생팀은 이렇게 이루어져 있어요</h3>
        <img src="/static/cv_images/10_teams.svg" alt="" style={{ height: '256px' }} />
      </div>
    </div>
  )
}
