import Link from "next/link";
import Animation from "./Animation";

export default function Hero() {
    return (
      <>
       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요 빡빡이입니다.
              <br className="hidden lg:inline-block" />
              오늘도 빡코딩!
            </h1>
            <p className="mb-8 leading-relaxed">
            보배를 가치를 두기 품었기 이상의 스며들어 때까지 구하기 끓는다. 있으며, 인간이 그들은 따뜻한 얼마나 무한한 교향악이다. 이것을 아니더면, 그들은 피가 것이 황금시대를 튼튼하며, 무엇을 봄바람을 있는가? 노래하며 같지 기관과 용감하고 위하여서 끓는 무엇을 하는 원질이 위하여서. 몸이 무엇을 만천하의 하여도 듣는다. 있는 소리다.이것은 이상을 놀이 이상 때문이다. 같지 보내는 하는 그들은 인간의 커다란 있는 그리하였는가? 소금이라 청춘 힘차게 앞이 있으랴? 갑 맺어, 보는 봄바람이다.
            </p>
            <div className="flex justify-center">
              <Link href="/projects" className="btn-project">
                프로젝트 보러가기
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
      </>
    )
}