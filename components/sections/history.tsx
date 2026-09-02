import { Section } from "@/components/layout/section";

type YearGroup = { year: string; entries: { month: string; text: string }[] };

const history: YearGroup[] = [
  {
    year: "2026",
    entries: [
      {
        month: "08",
        text: "한국전기안전공사 '26년 B2G 전략컨설팅 및 혁신프로젝트 지원사업' 선정",
      },
      { month: "07", text: "지역사회 및 기업 MOU 9건" },
      { month: "07", text: "지역사회 및 기업 MOU 9건" },
      { month: "07", text: "지식재산센터 IP 나래 특허지원사업 선정" },
      { month: "06", text: "경기창조경제혁신센터 ‘판교 창업존’ 입주" },
      {
        month: "05",
        text: "사회적기업진흥원 사회적기업 창업지원 ‘돌봄 사회서비스’ 선정",
      },
      { month: "04", text: "지역아동센터 사회정서 프로그램 협력체계 확대" },
      { month: "01", text: "심바키즈 통합 개편" },
    ],
  },
  {
    year: "2025",
    entries: [
      { month: "12", text: "‘바라스페이스’ 상표 등록" },
      { month: "09", text: "신용보증기금 리틀펭귄 선정" },
      { month: "07", text: "신보 NEST 소셜 임팩트 선정" },
      { month: "04", text: "초등학교 Wee클래스 추천 학생 지원" },
      { month: "03", text: "향기로운유원 LOI 체결" },
      { month: "02", text: "심바키즈 2차 개편" },
    ],
  },
  {
    year: "2024",
    entries: [
      { month: "09", text: "심바키즈 1차 개편" },
      { month: "08", text: "혁신성장유형 벤처기업 인증" },
      { month: "07", text: "서울국제유아교육전 참가" },
      { month: "05", text: "‘바라스페이스’ 상표 출원" },
      { month: "03", text: "연구개발전담부서 인정" },
      { month: "03", text: "여성기업 인정" },
      { month: "03", text: "아동·청소년 상담 플랫폼 ‘심바키즈’ 런칭" },
      { month: "02", text: "가을정원아동발달센터 LOI 체결" },
      { month: "01", text: "‘심바’ 상표 등록" },
      { month: "01", text: "㈜바라스페이스 법인 설립" },
    ],
  },
  {
    year: "2023",
    entries: [
      { month: "12", text: "미국 OAP 글로벌 진출 MOU 체결" },
      { month: "03", text: "경기도경제과학진흥원 경기창업혁신공간 입주" },
      { month: "02", text: "중소벤처기업진흥공단 창업성공패키지 선정" },
    ],
  },
  {
    year: "2022",
    entries: [
      { month: "07", text: "바라스페이스 설립" },
      { month: "06", text: "창업진흥원 예비창업패키지 선정" },
    ],
  },
];

export function History() {
  return (
    <Section bordered={false}>
      <h2 className="t-heading">History</h2>

      <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16">
        {history.map((group) => (
          <section
            key={group.year}
            aria-labelledby={`history-${group.year}`}
            className="grid gap-4 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-10"
          >
            <h3
              id={`history-${group.year}`}
              // 연혁이 길어 훑는 동안 연도가 따라오도록 데스크톱에서만 고정
              className="t-title tabular-nums md:sticky md:top-24 md:self-start"
            >
              {group.year}
            </h3>

            {/* 본문 단보다 길게 잡는다 — 항목이 한 줄로 끝나야 훑기 좋다 */}
            <ul className="max-w-[40rem] space-y-3.5">
              {group.entries.map((entry, i) => (
                // 읽는 문단이 아니라 훑는 기록이라 본문 회색이 아닌 잉크로 둔다
                <li
                  key={`${entry.month}-${i}`}
                  className="t-body flex gap-4 text-foreground"
                >
                  <span className="w-7 shrink-0 tabular-nums text-muted-foreground">
                    {entry.month}
                  </span>
                  <span>{entry.text}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
