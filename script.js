const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-nav]");
const navLinks = [...document.querySelectorAll(".main-nav a[href^='#']")];
const sections = [...document.querySelectorAll("main section[id]")];
const revealElements = [...document.querySelectorAll(".reveal")];
const programDialog = document.querySelector("[data-program-dialog]");
const programTitle = document.querySelector("[data-program-title]");
const programEyebrow = document.querySelector("[data-program-eyebrow]");
const programDetail = document.querySelector("[data-program-detail]");
const awardDialog = document.querySelector("[data-award-dialog]");
const awardTitle = document.querySelector("[data-award-title]");
const awardTable = document.querySelector("[data-award-table]");
const experienceOpenButton = document.querySelector("[data-experience-open]");
const partnerDialog = document.querySelector("[data-partner-dialog]");
const experienceDetailDialog = document.querySelector("[data-experience-detail-dialog]");
const experienceDetailTitle = document.querySelector("[data-experience-detail-title]");
const experiencePrograms = document.querySelector("[data-experience-programs]");
const faqItems = [...document.querySelectorAll(".faq-list details")];
const summaryCta = document.querySelector(".summary-cta");
const guideApplyCta = document.querySelector(".apply-form-grid-single a");
const floatingApply = document.querySelector("[data-floating-apply]");

const programDetails = {
  "physical-ai": {
    eyebrow: "PHYSICAL AI",
    title: "피지컬AI챌린지",
    awardKey: "physical-ai",
    items: [
      ["대회운영", "국립창원대학교 SW중심대학사업단"],
      ["참가대상", "미래 콘텐츠, AI, 로봇 분야에 관심이 있는 청소년"],
      ["참가인원", "종목별 모집요강 기준으로 확정"],
      ["종목소개", "AI·로봇 융합 역량을 심화하고, 문제 해결 중심의 창의적 사고력과 논리적 문제 해결 역량을 겨루는 종목입니다."],
      ["심사기준", "토너먼트 경기형 기준으로 운영하며, 로봇 컬링·스포츠시티·라인팔로잉·로봇 씨름·자율주행 모빌리티 등 미션별 점수, 시간, 승점 기준을 반영합니다."],
      ["시상계획", "시상 규모 보기"],
      ["문의", "㈜추론 / 010-6314-1725, 010-5276-1739"],
    ],
  },
  drone: {
    eyebrow: "DRONE CONTENTS",
    title: "드론콘텐츠리그",
    awardKey: "drone",
    items: [
      ["대회운영", "㈜코코드론"],
      ["참가대상", "미래 콘텐츠와 드론 미션 경기에 관심이 있는 청소년"],
      ["참가인원", "종목별 모집요강 기준으로 확정"],
      ["종목소개", "드론빙고와 REX-CUBE 등 미션형 경기와 전략형 팀전으로 운영되는 드론 콘텐츠 종목입니다."],
      ["심사기준", "드론빙고는 1:1 개인전 예선~결선 토너먼트로 정확성, 시간, 미션수행 능력을 평가합니다. REX-CUBE는 2인 1팀 전략형 팀전으로 정확성, 시간, 착륙, 팀워크와 협동심, 전략을 평가합니다."],
      ["시상계획", "시상 규모 보기"],
      ["문의", "㈜코코드론 / 055-311-0098"],
    ],
  },
  "ai-game": {
    eyebrow: "AI GAME",
    title: "AI게임제작대회",
    awardKey: "ai-game",
    items: [
      ["대회운영", "㈜공감오래콘텐츠"],
      ["참가대상", "AI 활용 게임 제작에 관심이 있는 청소년"],
      ["참가인원", "종목별 모집요강 기준으로 확정"],
      ["종목소개", "AI를 활용해 게임을 기획·제작하고 완성도와 재미, 발표력을 함께 평가하는 제작형 종목입니다."],
      ["심사기준", "창의성 30%, AI 활용도 25%, 완성도 20%, 재미 15%, 발표력 10%"],
      ["시상계획", "시상 규모 보기"],
      ["문의", "㈜공감오래콘텐츠 / 055-338-6705"],
    ],
  },
  "ai-video": {
    eyebrow: "AI VIDEO",
    title: "AI영상제작대회",
    awardKey: "ai-video",
    items: [
      ["대회운영", "㈜알리아스"],
      ["참가대상", "AI 영상 제작과 스토리텔링에 관심이 있는 청소년"],
      ["참가인원", "종목별 모집요강 기준으로 확정"],
      ["종목소개", "AI 기술을 활용해 영상 기획, 스토리텔링, 편집 완성도와 주제 전달력을 겨루는 영상 제작 종목입니다."],
      ["심사기준", "기획력·스토리텔링 25%, AI 활용 기술 25%, 영상 편집·완성도 25%, 주제 부합성·전달력 15%, 도전정신·혁신성 10%"],
      ["시상계획", "시상 규모 보기"],
      ["문의", "㈜알리아스 / 055-333-0233"],
    ],
  },
  webtoon: {
    eyebrow: "WEBTOON",
    title: "만화그리기대회",
    awardKey: "webtoon",
    items: [
      ["대회운영", "㈜피플앤스토리"],
      ["참가대상", "만화·웹툰 창작에 관심이 있는 청소년"],
      ["참가인원", "종목별 모집요강 기준으로 확정"],
      ["종목소개", "현장에서 제시된 주제로 기획 및 제작한 만화의 완성도를 평가하는 종목입니다."],
      ["심사기준", "그림 30%, 스토리 30%, 연출 20%, 창의성 10%, 완성도 10%"],
      ["시상계획", "시상 규모 보기"],
      ["문의", "(주)피플앤스토리 / 055-337-3487"],
    ],
  },
};

const physicalFinalAwardRows = [
  ["경상남도지사상", "1팀(2명)", "대상"],
  ["경상남도교육감상", "1팀(2명)", "최우수상"],
  ["경남문화예술진흥원장상", "1팀(2명)", "우수상"],
  ["국립창원대학교 SW중심대학사업단장상", "1팀(2명)", "장려상"],
];

const physicalCategories = ["로봇 컬링", "스포츠시티", "라인팔로잉", "로봇 씨름", "자율주행 모빌리티"];

const awardDetails = {
  "physical-ai": {
    title: "피지컬AI챌린지 시상계획",
    groups: [
      ...physicalCategories.map((category) => ({
        label: `과정 중 · ${category}`,
        rows: [["국립창원대학교 총장상", "1팀(2명)", "대상"]],
      })),
      ...physicalCategories.map((category) => ({
        label: `결선 중 · ${category}`,
        rows: physicalFinalAwardRows,
      })),
    ],
  },
  drone: {
    title: "드론콘텐츠리그 시상계획",
    groups: [
      {
        label: "드론빙고 개인전",
        rows: [
          ["경상남도지사상", "1명", ""],
          ["경상남도교육감상", "1명", ""],
          ["경남문화예술진흥원장상", "2명", ""],
          ["영산대학교 경남RISE사업단장상", "2명", ""],
          ["영산대학교 와이즈인재개발원장상", "2명", ""],
          ["(사)경남콘텐츠산업협회장상", "2명", ""],
        ],
      },
      {
        label: "REX-CUBE 팀전",
        rows: [
          ["영산대학교 총장상", "1팀", ""],
          ["영산대학교 경남RISE사업단장상", "2팀", ""],
          ["영산대학교 와이즈인재개발원장상", "2팀", ""],
          ["영산대학교 드론공간정보공학과 학과장상", "2팀", ""],
          ["(사)경남콘텐츠산업협회장상", "2팀", ""],
          ["(사)경남드론협회장상", "3팀", ""],
          ["(주)코코드론 대표이사상", "3팀", ""],
        ],
      },
    ],
  },
  "ai-game": {
    title: "AI게임제작대회 시상계획",
    groups: [
      {
        label: "초등부",
        rows: [
          ["경남대학교 총장상", "1팀", "대상"],
          ["경남문화예술진흥원장상", "1팀", "최우수상"],
          ["(사)한국인공지능게임협회장상", "4팀", "우수상"],
          ["경남대학교 SW중심대학사업단장상", "4팀", "장려상"],
          ["-", "전원", "참가인증서"],
        ],
      },
      {
        label: "중·고등부",
        rows: [
          ["경상남도지사상", "1팀", "대상"],
          ["경상남도교육감상", "1팀", "최우수상"],
          ["경남대학교 총장상", "1팀", "우수상"],
          ["경남문화예술진흥원장상", "1팀", "장려상"],
          ["(사)한국인공지능게임협회장상", "1팀", "BEST 팀워크"],
          ["경남대학교 SW중심대학사업단장상", "3팀", "MVP"],
          ["-", "전원", "참가인증서"],
        ],
      },
    ],
  },
  webtoon: {
    title: "만화그리기대회 시상계획",
    groups: [
      {
        label: "웹툰 공모전",
        rows: [
          ["경상남도지사상", "1명", "고등부 1"],
          ["경상남도교육감상", "2명", "초·중등부 각 1"],
          ["경남문화예술진흥원장상", "3명", "초·중·고등부 각 1"],
          ["창원문성대학교총장상", "3명", "초·중·고등부 각 1"],
          ["경남콘텐츠산업협회장상", "3명", "초·중·고등부 각 1"],
        ],
      },
    ],
  },
  "ai-video": {
    title: "AI영상제작대회 시상계획",
    groups: [
      {
        label: "통합(중·고등)",
        rows: [["경상남도지사상", "1팀", "대상"]],
      },
      {
        label: "중학생부",
        rows: [
          ["경상남도교육감상", "1팀", "최우수상"],
          ["경남문화예술진흥원장상", "1팀", "우수상"],
          ["마산대학교 총장상", "2팀", "장려상"],
        ],
      },
      {
        label: "고등학생부",
        rows: [
          ["경상남도교육감상", "1팀", "최우수상"],
          ["경남문화예술진흥원장상", "1팀", "우수상"],
          ["마산대학교 총장상", "2팀", "장려상"],
        ],
      },
    ],
  },
};

const experienceDetails = {
  "people-story": {
    title: "피플앤스토리",
    programs: [
      {
        title: "캐리커처",
        paragraphs: [
          "현장에서 전문 작가가 방문객의 얼굴 특징을 살려 캐리커처를 그려주는 체험 프로그램입니다.",
        ],
      },
      {
        title: "라이브드로잉",
        paragraphs: [
          "작가가 현장에서 그림을 완성해가는 과정을 직접 보여주는 드로잉 퍼포먼스입니다.",
        ],
      },
      {
        title: "와콤 체험",
        paragraphs: [
          "디지털 태블릿을 활용해 직접 그림을 그려보는 체험형 프로그램입니다.",
          "웹툰·일러스트·디지털 드로잉에 관심 있는 청소년과 방문객이 부담 없이 참여할 수 있는 창작 체험 콘텐츠입니다.",
        ],
      },
    ],
  },
  cocodrone: {
    title: "코코드론",
    programs: [
      {
        title: "드론전시회",
        paragraphs: [
          "드론 전시는 미래 산업에서 활용되는 드론 기술을 소개하는 체험형 전시입니다.",
          "참가자들은 드론의 기본 구조와 비행 원리를 이해하고, 촬영·물류·농업·재난 안전·시설 점검 등 다양한 분야에서 드론이 어떻게 활용되는지 살펴볼 수 있습니다.",
        ],
      },
      {
        title: "드론 시뮬레이터",
        paragraphs: [
          "드론 시뮬레이터는 게임형 미션을 수행하며 드론 조종 방법을 익히는 체험 프로그램입니다.",
          "참가자는 실제 조종기를 사용해 이착륙부터 전후·좌우·상하 이동까지 단계별로 연습하며, 드론의 기본 조작 원리와 안전한 운용 방법을 재미있게 배울 수 있습니다.",
        ],
      },
    ],
  },
  gonggamore: {
    title: "공감오래콘텐츠",
    programs: [
      {
        title: "AI 게임 제작 대회 결과물 체험",
        paragraphs: [
          "AI 활용 게임 제작 대회 초등부 및 중·고등부 참가자들이 제작한 결과물과 시안을 직접 체험하며, 창의적인 아이디어가 디지털 콘텐츠로 구현되는 과정을 이해하고 경험할 수 있는 체험 프로그램입니다.",
        ],
      },
    ],
  },
  chooron: {
    title: "추론",
    programs: [
      {
        title: "인터랙티브 로봇 체험",
        paragraphs: [
          "사탕 뽑기, 색상 분류기, 브레이크 댄서, 그림 회전 로봇 등 다양한 로봇 콘텐츠를 직접 체험하는 프로그램입니다.",
          "별도의 사전 신청 없이 현장에서 체험 방법과 안전 수칙을 안내받은 뒤 원하는 로봇을 자유롭게 선택해 참여할 수 있습니다.",
        ],
      },
    ],
  },
  ifnewworld: {
    title: "이퓨월드",
    programs: [
      {
        title: "XR 기반 네컷 촬영 체험",
        paragraphs: [
          "XR 기술을 활용해 특별한 네컷 사진을 촬영하는 체험형 프로그램입니다.",
          "참여자가 현장에서 촬영에 참여하고 완성된 결과물을 확인할 수 있는 실감형 콘텐츠입니다.",
        ],
      },
    ],
  },
  mmday: {
    title: "엠엠데이",
    programs: [
      {
        title: "MMDAY 굿즈 플리마켓",
        paragraphs: [
          "‘MMDAY(엠엠데이)’의 캐릭터 IP ‘MMDAYZ(엠엠데이즈)’를 활용한 다양한 굿즈를 소개하고 판매하는 플리마켓 부스입니다.",
          "방문객이 캐릭터 상품을 현장에서 직접 살펴보고 구매할 수 있습니다.",
        ],
      },
    ],
  },
  kcmf: {
    title: "시청자미디어재단",
    programs: [
      {
        title: "방송·미디어 체험",
        paragraphs: [
          "미디어나눔버스에서 라디오 방송 콘텐츠 제작 과정을 직접 경험하는 프로그램입니다.",
          "PD, 성우, DJ 등 방송 관련 역할을 체험하며 미디어가 만들어지고 활용되는 과정을 쉽고 재미있게 배울 수 있습니다.",
          "체험은 1회에 6인까지 동시에 진행할 수 있으며, 1회 체험에 20분 정도 소요됩니다.",
        ],
      },
    ],
  },
};

const openExperienceDetail = (companyKey) => {
  const data = experienceDetails[companyKey];
  if (!data || !experienceDetailDialog || !experienceDetailTitle || !experiencePrograms) return;

  const programItems = data.programs.map((program) => {
    const item = document.createElement("article");
    item.className = "experience-program-item";

    const title = document.createElement("h4");
    title.textContent = program.title;

    const copy = document.createElement("div");
    copy.className = "experience-program-copy";
    program.paragraphs.forEach((paragraph) => {
      const text = document.createElement("p");
      text.textContent = paragraph;
      copy.append(text);
    });

    item.append(title, copy);
    return item;
  });

  experienceDetailTitle.textContent = data.title;
  experiencePrograms.replaceChildren(...programItems);

  if (typeof experienceDetailDialog.showModal === "function") {
    experienceDetailDialog.showModal();
  } else {
    experienceDetailDialog.setAttribute("open", "");
  }
};

const openAwardDialog = (awardKey) => {
  const data = awardDetails[awardKey];
  if (!data || !awardDialog || !awardTitle || !awardTable) return;

  const table = document.createElement("table");
  table.className = "award-detail-table";

  const caption = document.createElement("caption");
  caption.textContent = `${data.title} 상세표`;

  const tableHead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["구분", "훈격", "인원", "비고"].forEach((heading) => {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = heading;
    headerRow.append(cell);
  });
  tableHead.append(headerRow);

  const tableBody = document.createElement("tbody");
  data.groups.forEach((group) => {
    group.rows.forEach(([honor, count, note], index) => {
      const row = document.createElement("tr");

      if (index === 0) {
        const groupCell = document.createElement("th");
        groupCell.scope = "rowgroup";
        groupCell.rowSpan = group.rows.length;
        groupCell.className = "award-group-cell";
        groupCell.textContent = group.label;
        row.append(groupCell);
      }

      [honor, count, note].forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.append(cell);
      });

      tableBody.append(row);
    });
  });

  table.append(caption, tableHead, tableBody);
  awardTitle.textContent = data.title;
  awardTable.replaceChildren(table);

  if (typeof awardDialog.showModal === "function") {
    awardDialog.showModal();
  } else {
    awardDialog.setAttribute("open", "");
  }
};

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  if (!navigation || !menuButton || !header) return;
  navigation.classList.remove("open");
  header.classList.remove("menu-active");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "메뉴 열기");
  document.body.classList.remove("menu-open");
};

if (menuButton && navigation && header) {
  menuButton.addEventListener("click", () => {
    const willOpen = !navigation.classList.contains("open");
    navigation.classList.toggle("open", willOpen);
    header.classList.toggle("menu-active", willOpen);
    menuButton.setAttribute("aria-expanded", String(willOpen));
    menuButton.setAttribute("aria-label", willOpen ? "메뉴 닫기" : "메뉴 열기");
    document.body.classList.toggle("menu-open", willOpen);
  });
}

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

const desktopNavigationQuery = window.matchMedia("(min-width: 1021px)");
const syncMenuWithViewport = (event) => {
  if (event.matches) closeMenu();
};

if (typeof desktopNavigationQuery.addEventListener === "function") {
  desktopNavigationQuery.addEventListener("change", syncMenuWithViewport);
} else {
  desktopNavigationQuery.addListener(syncMenuWithViewport);
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

const scheduleSubjects = {
  2: "피지컬AI챌린지",
  3: "AI게임제작대회",
  4: "드론콘텐츠리그",
  5: "만화그리기대회",
  6: "AI영상제작대회",
};

const scheduleEvents = [...document.querySelectorAll(".schedule-board .schedule-event")];
const getScheduleColumns = (event) => {
  const [startValue, endValue] = event.style.gridColumn.split("/").map((value) => value.trim());
  const start = Number.parseInt(startValue || event.style.gridColumnStart, 10);
  const end = Number.parseInt(endValue, 10);

  if (!Number.isFinite(start)) return [];
  if (!Number.isFinite(end) || end <= start) return [start];

  return Array.from({ length: end - start }, (_, index) => start + index);
};

const getScheduleStartMinutes = (time) => {
  const match = time?.match(/(\d{1,2}):(\d{2})/);
  return match ? Number(match[1]) * 60 + Number(match[2]) : Number.MAX_SAFE_INTEGER;
};

scheduleEvents.forEach((event) => {
  const columns = getScheduleColumns(event);
  const subjects = columns.map((column) => scheduleSubjects[column]).filter(Boolean);
  if (!subjects.length) return;

  const time = event.querySelector("span")?.textContent?.trim();
  const title = event.querySelector("strong")?.textContent?.trim();
  const description = event.querySelector("p")?.textContent?.trim();
  event.dataset.scheduleColumns = columns.join(",");
  event.setAttribute("aria-label", [subjects.join("·"), time, title, description].filter(Boolean).join(", "));
});

const scheduleMobileTabs = [...document.querySelectorAll("[data-schedule-lane]")].filter((element) => element.matches("button"));
const scheduleMobileList = document.querySelector("[data-schedule-mobile-list]");
const scheduleCurrentLabel = document.querySelector("[data-schedule-current]");
const scheduleCurrentBar = document.querySelector("[data-schedule-current-bar]");

const centerScheduleTab = (button) => {
  const tabList = button?.parentElement;
  if (!button || !tabList) return;

  tabList.scrollTo({
    left: button.offsetLeft - (tabList.clientWidth - button.offsetWidth) / 2,
    behavior: "smooth",
  });
};

const renderMobileSchedule = (column) => {
  if (!scheduleMobileList || !scheduleSubjects[column]) return;

  const selectedEvents = scheduleEvents
    .filter((event) => event.dataset.scheduleColumns?.split(",").includes(String(column)))
    .map((event, index) => {
      const time = event.querySelector("span")?.textContent?.trim() || "시간 미정";
      return { event, index, time, start: getScheduleStartMinutes(time) };
    })
    .sort((a, b) => a.start - b.start || a.index - b.index);

  const groups = [];
  selectedEvents.forEach((item) => {
    const previousGroup = groups.at(-1);
    if (previousGroup?.time === item.time) {
      previousGroup.events.push(item.event);
    } else {
      groups.push({ time: item.time, events: [item.event] });
    }
  });

  const items = groups.map((group) => {
    const item = document.createElement("li");
    item.className = "schedule-mobile-slot";

    const time = document.createElement("time");
    time.textContent = group.time;

    const events = document.createElement("div");
    events.className = "schedule-mobile-events";
    events.replaceChildren(
      ...group.events.map((event) => {
        const clone = event.cloneNode(true);
        clone.removeAttribute("style");
        clone.classList.add("schedule-mobile-event");
        clone.querySelector("span")?.remove();
        return clone;
      }),
    );

    item.append(time, events);
    return item;
  });

  scheduleMobileList.replaceChildren(...items);
  scheduleCurrentLabel.textContent = scheduleSubjects[column];
  scheduleCurrentBar.dataset.scheduleLane = String(column);
  scheduleMobileList.closest(".schedule-mobile-agenda")?.setAttribute("aria-label", `${scheduleSubjects[column]} 대회 일정`);
};

const selectScheduleLane = (column, { focus = false } = {}) => {
  const activeButton = scheduleMobileTabs.find((button) => Number(button.dataset.scheduleLane) === column);
  if (!activeButton) return;

  scheduleMobileTabs.forEach((button) => {
    const isActive = button === activeButton;
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  renderMobileSchedule(column);
  centerScheduleTab(activeButton);
  if (focus) activeButton.focus({ preventScroll: true });
};

scheduleMobileTabs.forEach((button, index) => {
  button.addEventListener("click", () => selectScheduleLane(Number(button.dataset.scheduleLane)));
  button.addEventListener("keydown", (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + scheduleMobileTabs.length) % scheduleMobileTabs.length;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % scheduleMobileTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = scheduleMobileTabs.length - 1;

    selectScheduleLane(Number(scheduleMobileTabs[nextIndex].dataset.scheduleLane), { focus: true });
  });
});

selectScheduleLane(2);

const scheduleTableWrap = document.querySelector(".schedule-table-wrap");
const scheduleScrollHint = document.querySelector("#schedule-scroll-hint");
const syncScheduleScrollAccessibility = () => {
  if (!scheduleTableWrap) return;
  const isHorizontallyScrollable = scheduleTableWrap.scrollWidth > scheduleTableWrap.clientWidth + 2;

  if (isHorizontallyScrollable) {
    scheduleTableWrap.setAttribute("tabindex", "0");
    scheduleTableWrap.setAttribute("aria-describedby", "schedule-scroll-hint");
  } else {
    scheduleTableWrap.removeAttribute("tabindex");
    scheduleTableWrap.removeAttribute("aria-describedby");
  }

  scheduleScrollHint?.setAttribute("aria-hidden", String(!isHorizontallyScrollable));
};

window.addEventListener("resize", syncScheduleScrollAccessibility);
syncScheduleScrollAccessibility();

document.querySelectorAll("[data-program-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const data = programDetails[button.dataset.programOpen];
    if (!data || !programDialog || !programTitle || !programDetail || !programEyebrow) return;

    programEyebrow.textContent = data.eyebrow;
    programTitle.textContent = data.title;
    programDetail.replaceChildren(
      ...data.items.map(([label, value]) => {
        const item = document.createElement("article");
        item.className = "program-detail-item";

        const strong = document.createElement("strong");
        strong.textContent = label;

        if (label === "시상계획") {
          item.classList.add("program-detail-award");

          const awardButton = document.createElement("button");
          awardButton.type = "button";
          awardButton.className = "award-view-button";
          awardButton.textContent = "시상 규모 눌러서 보기";

          const arrow = document.createElement("span");
          arrow.setAttribute("aria-hidden", "true");
          arrow.textContent = "↗";
          awardButton.append(arrow);
          awardButton.addEventListener("click", () => openAwardDialog(data.awardKey));

          item.append(strong, awardButton);
          return item;
        }

        const paragraph = document.createElement("p");
        paragraph.textContent = value;

        item.append(strong, paragraph);
        return item;
      })
    );

    if (typeof programDialog.showModal === "function") {
      programDialog.showModal();
    } else {
      programDialog.setAttribute("open", "");
    }
  });
});

document.querySelector("[data-program-close]")?.addEventListener("click", () => {
  programDialog?.close();
});

programDialog?.addEventListener("click", (event) => {
  if (event.target === programDialog) programDialog.close();
});

document.querySelector("[data-award-close]")?.addEventListener("click", () => {
  awardDialog?.close();
});

awardDialog?.addEventListener("click", (event) => {
  if (event.target === awardDialog) awardDialog.close();
});

experienceOpenButton?.addEventListener("click", () => {
  if (!partnerDialog) return;

  if (typeof partnerDialog.showModal === "function") {
    partnerDialog.showModal();
  } else {
    partnerDialog.setAttribute("open", "");
  }
});

document.querySelectorAll("[data-company-open]").forEach((button) => {
  button.addEventListener("click", () => openExperienceDetail(button.dataset.companyOpen));
});

document.querySelector("[data-partner-close]")?.addEventListener("click", () => {
  partnerDialog?.close();
});

partnerDialog?.addEventListener("click", (event) => {
  if (event.target === partnerDialog) partnerDialog.close();
});

document.querySelector("[data-experience-detail-close]")?.addEventListener("click", () => {
  experienceDetailDialog?.close();
});

experienceDetailDialog?.addEventListener("click", (event) => {
  if (event.target === experienceDetailDialog) experienceDetailDialog.close();
});

if (summaryCta && floatingApply) {
  const setFloatingApplyState = (visible) => {
    floatingApply.classList.toggle("is-visible", visible);
    floatingApply.setAttribute("aria-hidden", String(!visible));

    if (visible) {
      floatingApply.removeAttribute("tabindex");
    } else {
      floatingApply.setAttribute("tabindex", "-1");
    }
  };

  const updateFloatingApply = () => {
    const headerHeight = header?.offsetHeight ?? 0;
    const ctaRect = summaryCta.getBoundingClientRect();
    const guideCtaRect = guideApplyCta?.getBoundingClientRect();
    const guideCtaVisible = guideCtaRect
      ? guideCtaRect.top < window.innerHeight && guideCtaRect.bottom > headerHeight
      : false;

    setFloatingApplyState(ctaRect.bottom <= headerHeight && !guideCtaVisible);
  };

  if ("IntersectionObserver" in window) {
    const floatingApplyObserver = new IntersectionObserver(updateFloatingApply, {
      threshold: [0, 0.2, 1],
    });
    floatingApplyObserver.observe(summaryCta);
    if (guideApplyCta) floatingApplyObserver.observe(guideApplyCta);
  } else {
    window.addEventListener("scroll", updateFloatingApply, { passive: true });
  }

  window.addEventListener("resize", updateFloatingApply);
  updateFloatingApply();
}

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

faqItems.forEach((details) => {
  const summary = details.querySelector("summary");
  if (!summary || typeof details.animate !== "function" || reduceMotionQuery.matches) return;

  let animation = null;
  let animationToken = 0;

  const finishAnimation = (token, open) => {
    if (token !== animationToken) return;

    details.open = open;
    details.classList.remove("is-animating", "is-expanding", "is-closing");
    details.style.height = "";
    details.style.overflow = "";
    animation = null;
  };

  const expand = () => {
    const token = ++animationToken;
    const startHeight = details.offsetHeight;

    animation?.cancel();
    details.style.height = `${startHeight}px`;
    details.style.overflow = "hidden";
    details.open = true;
    details.classList.remove("is-closing");
    details.classList.add("is-animating", "is-expanding");

    window.requestAnimationFrame(() => {
      if (token !== animationToken) return;

      animation = details.animate(
        { height: [`${startHeight}px`, `${details.scrollHeight}px`] },
        { duration: 380, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
      animation.onfinish = () => finishAnimation(token, true);
    });
  };

  const collapse = () => {
    const token = ++animationToken;
    const startHeight = details.offsetHeight;
    const endHeight = summary.offsetHeight;

    animation?.cancel();
    details.style.overflow = "hidden";
    details.classList.remove("is-expanding");
    details.classList.add("is-animating", "is-closing");
    animation = details.animate(
      { height: [`${startHeight}px`, `${endHeight}px`] },
      { duration: 320, easing: "cubic-bezier(0.4, 0, 0.2, 1)" }
    );
    animation.onfinish = () => finishAnimation(token, false);
  };

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (!details.open || details.classList.contains("is-closing")) {
      expand();
    } else {
      collapse();
    }
  });
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
    revealObserver.observe(element);
  });

  const navigationObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-34% 0px -54%", threshold: [0.01, 0.2, 0.5] }
  );

  sections.forEach((section) => navigationObserver.observe(section));
} else {
  revealElements.forEach((element) => element.classList.add("in-view"));
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

if (finePointerQuery.matches && !reduceMotionQuery.matches) {
  const cursorRoot = document.documentElement;
  const cursorLayer = document.createElement("div");
  const cursorDot = document.createElement("div");
  const cursorTrail = document.createElement("div");
  const interactiveSelector = "a, button, summary, input, select, textarea, [role='button']";

  cursorLayer.className = "festival-cursor-layer";
  cursorLayer.setAttribute("popover", "manual");
  cursorLayer.setAttribute("aria-hidden", "true");
  cursorDot.className = "festival-cursor";
  cursorTrail.className = "festival-cursor-trail";
  cursorDot.setAttribute("aria-hidden", "true");
  cursorTrail.setAttribute("aria-hidden", "true");
  cursorLayer.append(cursorTrail, cursorDot);
  document.body.append(cursorLayer);

  const supportsCursorPopover = typeof cursorLayer.showPopover === "function";
  const openCursorDialogs = [...document.querySelectorAll("dialog[open]")];

  const raiseCursorLayer = () => {
    if (supportsCursorPopover) {
      if (cursorLayer.matches(":popover-open")) cursorLayer.hidePopover();
      cursorLayer.showPopover();
      return;
    }

    const activeDialog = openCursorDialogs[openCursorDialogs.length - 1];
    (activeDialog ?? document.body).append(cursorTrail, cursorDot);
  };

  const cursorDialogObserver = new MutationObserver((mutations) => {
    mutations.forEach(({ target }) => {
      if (!(target instanceof HTMLDialogElement)) return;

      const stackIndex = openCursorDialogs.indexOf(target);
      if (stackIndex >= 0) openCursorDialogs.splice(stackIndex, 1);
      if (target.open) openCursorDialogs.push(target);
    });

    raiseCursorLayer();
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    cursorDialogObserver.observe(dialog, { attributes: true, attributeFilter: ["open"] });
  });

  raiseCursorLayer();

  let cursorX = -100;
  let cursorY = -100;
  let trailX = -100;
  let trailY = -100;
  let cursorStarted = false;

  const placeCursor = (element, x, y) => {
    element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
  };

  const animateCursor = () => {
    trailX += (cursorX - trailX) * 0.18;
    trailY += (cursorY - trailY) * 0.18;
    placeCursor(cursorTrail, trailX, trailY);
    window.requestAnimationFrame(animateCursor);
  };

  document.addEventListener("pointermove", (event) => {
    if (event.pointerType && event.pointerType !== "mouse") return;

    cursorX = event.clientX;
    cursorY = event.clientY;

    if (!cursorStarted) {
      trailX = cursorX;
      trailY = cursorY;
      placeCursor(cursorTrail, trailX, trailY);
      cursorStarted = true;
    }

    const moveTarget = event.target instanceof Element ? event.target : null;
    placeCursor(cursorDot, cursorX, cursorY);
    cursorRoot.classList.add("festival-cursor-ready", "festival-cursor-visible");
    cursorRoot.classList.toggle("festival-cursor-interactive", Boolean(moveTarget?.closest(interactiveSelector)));
  }, { passive: true });

  document.addEventListener("pointerover", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    cursorRoot.classList.toggle("festival-cursor-interactive", Boolean(target?.closest(interactiveSelector)));
  }, { passive: true });

  document.addEventListener("pointerdown", (event) => {
    if (!event.pointerType || event.pointerType === "mouse") cursorRoot.classList.add("festival-cursor-pressed");
  }, { passive: true });

  document.addEventListener("pointerup", () => cursorRoot.classList.remove("festival-cursor-pressed"), { passive: true });
  document.addEventListener("pointercancel", () => cursorRoot.classList.remove("festival-cursor-pressed"), { passive: true });
  document.documentElement.addEventListener("mouseleave", () => {
    cursorRoot.classList.remove("festival-cursor-visible", "festival-cursor-interactive", "festival-cursor-pressed");
  });

  animateCursor();
}
