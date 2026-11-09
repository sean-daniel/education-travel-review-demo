const activities = {
  pending: [
    {
      id: "2119613364476432384",
      school: "贵阳一小",
      base: "贵州拥抱大学研学教育基地",
      name: "贵阳拥抱大学-市直-出行申报-1109-A",
      theme: "优秀传统文化",
      time: "2026-11-25 08:30",
      duration: "2天",
      grade: "小学一年级、二年级",
      students: "20",
      fee: "50.00",
      teachers: "15",
      status: "待审核",
      statusClass: "status-pending",
      createdAt: "2026-11-09 10:12",
      range: "区县内",
      contact: "13658571574",
      leader: "张老师",
      phone: "183****5914"
    },
    {
      id: "2118638065173643264",
      school: "观山湖区铭苑中学",
      base: "羊昌花画小镇社会实践基地",
      name: "劳动实践教育-区县内-1108-B",
      theme: "劳动实践教育",
      time: "2026-11-18 07:40",
      duration: "1天",
      grade: "初中三年级",
      students: "103",
      fee: "90.00",
      teachers: "20",
      status: "待审核",
      statusClass: "status-pending",
      createdAt: "2026-11-08 15:26",
      range: "跨区县",
      contact: "18984114633",
      leader: "周老师",
      phone: "189****4633"
    },
    {
      id: "2118631057734672389",
      school: "贵阳市德华学校",
      base: "贵州省桥梁科普教育博物馆",
      name: "桥梁工程与科学探索-市直-1108-C",
      theme: "国防科工教育",
      time: "2026-11-22 08:30",
      duration: "1天",
      grade: "小学五年级",
      students: "96",
      fee: "65.00",
      teachers: "8",
      status: "待审核",
      statusClass: "status-pending",
      createdAt: "2026-11-08 09:42",
      range: "区县内",
      contact: "15086088629",
      leader: "李老师",
      phone: "139****1008"
    }
  ],
  done: [
    {
      id: "2118638065173643260",
      school: "观山湖区铭苑中学",
      base: "羊昌花画小镇社会实践基地",
      name: "劳动实践教育-区县内-1104-E",
      theme: "劳动实践教育",
      time: "2026-11-16 07:40",
      duration: "1天",
      grade: "初中三年级",
      students: "103",
      fee: "90.00",
      teachers: "20",
      status: "已通过",
      statusClass: "status-success",
      createdAt: "2026-11-06 18:30",
      range: "区县内",
      contact: "18984114633",
      leader: "周老师",
      phone: "189****4633"
    },
    {
      id: "2118631057734672380",
      school: "贵阳市德华学校",
      base: "贵州省桥梁科普教育博物馆",
      name: "德华学校秋季一日研学活动-1103-F",
      theme: "科技教育",
      time: "2026-11-12 08:00",
      duration: "1天",
      grade: "初中二年级",
      students: "96",
      fee: "65.00",
      teachers: "8",
      status: "已退回",
      statusClass: "status-rejected",
      createdAt: "2026-11-05 11:20",
      range: "区县内",
      contact: "15086088629",
      leader: "李老师",
      phone: "139****1008"
    }
  ]
};

const mainMaterials = [
  {
    id: "course-red",
    kind: "course",
    kindLabel: "研学课程",
    name: "红飘带",
    subtitle: "关联课程 · 革命传统教育",
    scope: "初中",
    duration: "6小时",
    type: "革命传统教育",
    price: "¥50.00",
    status: "已上架",
    creator: "贵州拥抱大学研学教育基地管理员",
    createdAt: "2026-11-04 14:23:43",
    fileName: "红飘带-课程详情.pdf",
    fileSize: "2.1 MB",
    updated: "2026-11-04",
    intro: "红飘带",
    detailParagraphs: ["红飘带"],
    videoName: ""
  },
  {
    id: "plan-red",
    kind: "plan",
    kindLabel: "出行方案",
    name: "红飘带出行",
    subtitle: "基地名称：贵州拥抱大学研学教育基地 · 关联课程：红飘带",
    scope: "初中",
    duration: "1.0天",
    type: "革命传统教育",
    status: "已上架",
    baseName: "贵州拥抱大学研学教育基地",
    linkedCourse: "红飘带",
    linkedCourseId: "course-red",
    dining: "基地承担",
    studentFee: "¥50.00",
    teacherFee: "¥70.00",
    creator: "贵州拥抱大学研学教育基地管理员",
    createdAt: "2026-11-04 15:03:37",
    intro: "早餐午餐晚餐共30元，交通往返费40元",
    dayPlans: [
      {
        day: "第1天",
        rows: [
          { time: "09:00 至 18:00", name: "参观红飘带活动", content: "手工制作，聆听讲解" }
        ]
      }
    ],
    fees: [
      { name: "就餐费用", price: "¥30.00" },
      { name: "交通出行", price: "¥40.00" }
    ],
    meal: "早中午三餐",
    travel: "从高铁站接到红飘带基地",
    vehicle: "旅游大巴5辆，司机5人",
    activityRoute: "从贵阳市实验第一小学行至贵黄高速行至贵州省桥梁科普教育博物馆（往返）",
    fileName: "红飘带出行-学校活动详情.pdf",
    fileSize: "1.8 MB",
    updated: "2026-11-04"
  }
];

const MAIN_ACTIVITY_ID = "2119613364476432384";
let currentListTab = "pending";
let currentMaterialTab = "all";
let currentActivity = activities.pending[0];
let currentMaterial = mainMaterials[0];
let toastTimer = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  $("#toastText").textContent = message;
  $("#toast").classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").classList.remove("show"), 2600);
}

function showView(view) {
  const views = {
    list: "#listView",
    detail: "#detailView",
    course: "#courseDetailView",
    plan: "#planDetailView"
  };
  Object.entries(views).forEach(([name, selector]) => {
    $(selector).classList.toggle("active", name === view);
  });
  $("#tabList").classList.toggle("active", view === "list");
  $("#tabDetail").classList.toggle("active", view === "detail");
  $("#tabCourseDetail").classList.toggle("active", view === "course");
  $("#tabPlanDetail").classList.toggle("active", view === "plan");

  const crumbTail = {
    list: '<strong>研学出行/教育局端</strong>',
    detail: '<strong>活动明细</strong>',
    course: '<span class="crumb-muted">活动明细</span><span class="crumb-separator">/</span><strong>课程详情</strong>',
    plan: '<span class="crumb-muted">活动明细</span><span class="crumb-separator">/</span><strong>学校活动详情</strong>'
  }[view];
  $("#breadcrumbs").innerHTML = `<span class="crumb-muted">工作台</span><span class="crumb-separator">/</span><span class="crumb-muted">审核管理</span><span class="crumb-separator">/</span>${crumbTail}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function matchesFilters(row) {
  const keyword = $("#keywordInput").value.trim();
  const school = $("#schoolInput").value.trim();
  const status = $("#statusSelect").value;
  const haystack = `${row.name} ${row.school} ${row.base}`;
  return (!keyword || haystack.includes(keyword))
    && (!school || row.school.includes(school))
    && (!status || row.status === status);
}

function renderList() {
  const data = activities[currentListTab].filter(matchesFilters);
  $("#listRows").innerHTML = data.map((row) => `
    <tr>
      <td><div class="cell-primary">${escapeHtml(row.school)}</div></td>
      <td><div class="cell-primary">${escapeHtml(row.base)}</div><div class="cell-sub">申报基地</div></td>
      <td>
        <div class="cell-primary">${escapeHtml(row.name)}</div>
        <div class="cell-sub">ID ${escapeHtml(row.id)}</div>
      </td>
      <td>${escapeHtml(row.theme)}</td>
      <td>${escapeHtml(row.time)}</td>
      <td>${escapeHtml(row.duration)}</td>
      <td>${escapeHtml(row.grade)}</td>
      <td>${escapeHtml(row.students)} 人</td>
      <td>${escapeHtml(row.fee)}</td>
      <td>${escapeHtml(row.teachers)} 人</td>
      <td><span class="status ${row.statusClass}">${escapeHtml(row.status)}</span></td>
      <td>${escapeHtml(row.createdAt)}</td>
      <td>
        <div class="row-actions">
          <button class="text-action" type="button" data-open-activity="${escapeHtml(row.id)}">详情</button>
          ${row.status === "待审核" ? `<button class="text-action" type="button" data-review-activity="${escapeHtml(row.id)}">审核</button>` : ""}
        </div>
      </td>
    </tr>
  `).join("");

  if (!data.length) {
    $("#listRows").innerHTML = '<tr><td colspan="13"><div class="empty-state"><div class="empty-icon"><svg class="icon"><use href="#i-search"/></svg></div>暂无符合条件的出行申报</div></td></tr>';
  }
  $("#totalCount").textContent = data.length;
  $("#pendingCount").textContent = activities.pending.length;
  $("#doneCount").textContent = activities.done.length;

  $$("[data-open-activity]").forEach((button) => {
    button.addEventListener("click", () => openActivity(button.dataset.openActivity));
  });
  $$("[data-review-activity]").forEach((button) => {
    button.addEventListener("click", () => {
      openActivity(button.dataset.reviewActivity);
      openReview("pass");
    });
  });
}

const materialCache = new Map();

function findActivity(id) {
  return [...activities.pending, ...activities.done].find((activity) => activity.id === id);
}

function buildGeneratedMaterials(activity) {
  const theme = activity.theme;
  const courseId = `${activity.id}-course`;
  const planId = `${activity.id}-plan`;
  const courseName = theme.includes("劳动")
    ? "田间劳动与作物观察"
    : theme.includes("科技") || theme.includes("国防") || theme.includes("科学")
      ? "桥梁结构里的工程思维"
      : `${theme}主题探究课程`;
  const planName = `${activity.school}—${activity.base}研学出行方案`;
  return [
    {
      id: courseId,
      kind: "course",
      kindLabel: "研学课程",
      name: courseName,
      subtitle: `关联课程 · ${theme}`,
      scope: activity.grade,
      type: theme,
      duration: "6小时",
      price: `¥${activity.fee}`,
      status: "已上架",
      creator: `${activity.base}管理员`,
      createdAt: activity.createdAt,
      fileName: `${courseName}-课程详情.pdf`,
      fileSize: "1.6 MB",
      updated: activity.createdAt.slice(0, 10),
      intro: `${theme}主题课程`,
      detailParagraphs: [
        `本课程围绕${theme}展开，结合${activity.base}的实景资源设计观察、体验与小组任务。`,
        `课程适用于${activity.grade}，通过现场讲解与实践体验帮助学生形成结构化认知。`
      ]
    },
    {
      id: planId,
      kind: "plan",
      kindLabel: "出行方案",
      name: planName,
      subtitle: `基地名称：${activity.base} · 关联课程：${courseName}`,
      scope: activity.grade,
      type: theme,
      duration: activity.duration,
      status: "已上架",
      baseName: activity.base,
      linkedCourse: courseName,
      linkedCourseId: courseId,
      dining: "基地承担",
      studentFee: `¥${activity.fee}`,
      teacherFee: "¥0.10",
      creator: `${activity.base}管理员`,
      createdAt: activity.createdAt,
      intro: `本次${theme}主题研学活动由${activity.school}组织，前往${activity.base}开展课程实践。`,
      dayPlans: [
        {
          day: "第1天",
          rows: [
            { time: `${activity.time.slice(11)} 至 18:00`, name: courseName, content: "课程体验、现场讲解与小组实践" }
          ]
        }
      ],
      fees: [
        { name: "交通出行", price: `¥${activity.fee}` },
        { name: "课程执行", price: "¥0.00" }
      ],
      meal: "早中午三餐",
      travel: `${activity.school}往返${activity.base}`,
      vehicle: "旅游大巴1辆",
      activityRoute: `${activity.school}行至${activity.base}（往返）`,
      fileName: `${planName}-学校活动详情.pdf`,
      fileSize: "1.9 MB",
      updated: activity.createdAt.slice(0, 10),
    }
  ];
}

function getMaterialsForActivity(activity = currentActivity) {
  if (!activity) return [];
  if (activity.id === MAIN_ACTIVITY_ID) return mainMaterials;
  if (!materialCache.has(activity.id)) {
    materialCache.set(activity.id, buildGeneratedMaterials(activity));
  }
  return materialCache.get(activity.id);
}

function renderMaterials() {
  const materials = getMaterialsForActivity();
  const filtered = currentMaterialTab === "all"
    ? materials
    : materials.filter((material) => material.kind === currentMaterialTab);

  $("#courseRows").innerHTML = filtered.map((material) => `
    <tr>
      <td>
        <div class="material-name-cell">
          <span class="material-icon ${material.kind}">
            <svg class="icon"><use href="#${material.kind === "course" ? "i-book" : "i-route"}"/></svg>
          </span>
          <div>
            <button class="material-title" type="button" data-material-detail="${escapeHtml(material.id)}">${escapeHtml(material.name)}</button>
            <div class="material-subtitle">${escapeHtml(material.subtitle)}</div>
          </div>
        </div>
      </td>
      <td><span class="type-badge ${material.kind === "plan" ? "plan" : ""}">${escapeHtml(material.kindLabel)}</span></td>
      <td>${escapeHtml(material.scope)}</td>
      <td>${escapeHtml(material.duration)}</td>
      <td>${escapeHtml(material.type)}</td>
      <td><span class="status status-success">${escapeHtml(material.status)}</span></td>
      <td>
        <div class="row-action-buttons">
          <button class="mini-action" type="button" data-material-detail="${escapeHtml(material.id)}">详情</button>
          <button class="mini-action download" type="button" data-material-download="${escapeHtml(material.id)}">
            <svg class="icon icon-sm"><use href="#i-download"/></svg>PDF
          </button>
        </div>
      </td>
    </tr>
  `).join("");

  if (!filtered.length) {
    $("#courseRows").innerHTML = '<tr><td colspan="7"><div class="empty-state">暂无相关课程或出行方案</div></td></tr>';
  }

  $(".material-count").textContent = `共 ${filtered.length} 项材料`;
  const counts = {
    all: materials.length,
    course: materials.filter((material) => material.kind === "course").length,
    plan: materials.filter((material) => material.kind === "plan").length
  };
  $$("[data-material-tab]").forEach((tab) => {
    const number = $(".chip-number", tab);
    if (number) number.textContent = counts[tab.dataset.materialTab];
    tab.classList.toggle("active", tab.dataset.materialTab === currentMaterialTab);
  });

  $$("[data-material-detail]").forEach((button) => {
    button.addEventListener("click", () => openMaterialDetail(button.dataset.materialDetail));
  });
  $$("[data-material-download]").forEach((button) => {
    button.addEventListener("click", () => printMaterial(button.dataset.materialDownload));
  });
}

function renderWorkflow(activity) {
  const education = $("#educationNode");
  const traffic = $("#trafficNode");
  const finish = $("#finishNode");
  [education, traffic, finish].forEach((node) => node.classList.remove("done", "current"));

  const educationMeta = $(".timeline-meta", education);
  const trafficMeta = $(".timeline-meta", traffic);
  const finishMeta = $(".timeline-meta", finish);
  trafficMeta.innerHTML = "办理人：贵阳市南明区交管大队<br>状态：等待中";
  finishMeta.textContent = "审批完成后归档";

  if (activity.status === "待审核") {
    education.classList.add("current");
    educationMeta.innerHTML = "办理人：贵阳教育局<br>状态：待审核<br>当前节点";
    return;
  }

  education.classList.add("done");
  if (activity.status === "已通过") {
    educationMeta.innerHTML = `办理人：贵阳教育局<br>状态：审批通过<br>${escapeHtml(activity.reviewedAt || "2026-11-09 11:05")}`;
    traffic.classList.add("current");
    trafficMeta.innerHTML = `办理人：贵阳市南明区交管大队<br>状态：待审核<br>${escapeHtml(activity.reviewedAt || "2026-11-09 11:05")} 流转`;
  } else {
    educationMeta.innerHTML = `办理人：贵阳教育局<br>状态：已退回修改<br>${escapeHtml(activity.reviewedAt || "2026-11-09 11:05")}`;
    traffic.classList.remove("current");
    trafficMeta.innerHTML = "办理人：贵阳市南明区交管大队<br>状态：未流转";
  }
}

function updateReviewActions(activity) {
  const canReview = activity.status === "待审核";
  $$(".header-actions [data-review-result], .approval-card [data-review-result]").forEach((button) => {
    button.hidden = !canReview;
  });
  const hintTitle = $(".approval-card h3");
  const hintText = $(".approval-card p");
  if (canReview) {
    hintTitle.textContent = "审核提示";
    hintText.textContent = "请重点核对申报涉及的课程内容、课程实施材料以及往返出行方案是否完整一致。";
  } else if (activity.status === "已通过") {
    hintTitle.textContent = "审核结果";
    hintText.textContent = "本次申报已审批通过，正在等待交管大队审核。";
  } else {
    hintTitle.textContent = "审核结果";
    hintText.textContent = "本次申报已退回学校修改，请关注学校重新提交后的材料。";
  }
}

function openActivity(id) {
  const activity = findActivity(id);
  if (!activity) return;

  currentActivity = activity;
  currentMaterial = getMaterialsForActivity(activity)[0];
  $("#tabCourseDetail").hidden = true;
  $("#tabPlanDetail").hidden = true;
  $("#detailTitle").textContent = activity.name;
  $("#detailStatus").className = `status ${activity.statusClass}`;
  $("#detailStatus").textContent = activity.status;
  $("#detailSchool").textContent = activity.school;
  $("#detailBase").textContent = activity.base;
  $("#detailCreated").textContent = `创建于 ${activity.createdAt}`;

  $("#infoActivityName").textContent = activity.name;
  $("#infoRange").textContent = activity.range;
  $("#infoFee").textContent = `元/人/次　${activity.fee}`;
  $("#infoTheme").textContent = activity.theme;
  $("#infoGrade").textContent = activity.grade;
  $("#infoBase").textContent = activity.base;
  $("#infoContact").textContent = activity.contact;
  $("#infoTime").textContent = activity.time;
  $("#infoTeachers").textContent = `${activity.teachers}人`;
  $("#infoDuration").textContent = activity.duration;
  $("#infoStudents").textContent = `${activity.students}人`;
  $("#infoLeader").textContent = activity.leader;
  $("#infoPhone").textContent = activity.phone;

  updateReviewActions(activity);
  renderWorkflow(activity);
  renderMaterials();
  showView("detail");
}

function findMaterial(id) {
  return getMaterialsForActivity().find((item) => item.id === id);
}

function baseInfoGrid(items) {
  return `
    <div class="base-info-scroll">
      <div class="base-info-table">
        ${items.map((item) => item
          ? `<div class="base-info-key">${escapeHtml(item.label)}</div><div class="base-info-value ${item.className || ""}">${item.html ? item.value : escapeHtml(item.value)}</div>`
          : '<div class="base-info-key is-empty"></div><div class="base-info-value is-empty"></div>'
        ).join("")}
      </div>
    </div>
  `;
}

function detailCard(title, body, extraClass = "") {
  return `
    <section class="card base-detail-card ${extraClass}">
      <div class="base-section-title"><span></span>${escapeHtml(title)}</div>
      ${body}
    </section>
  `;
}

function courseVisual() {
  return `
    <div class="course-cover-art">
      <div class="ribbon-line ribbon-line-a"></div>
      <div class="ribbon-line ribbon-line-b"></div>
      <div class="course-cover-mark">红飘带</div>
      <div class="course-cover-sub">红色文化 · 实景课堂</div>
    </div>
  `;
}

function activityVisuals() {
  return `
    <div class="base-media-gallery">
      <div class="activity-visual visual-one"><span>参观红飘带</span><small>实景讲解</small></div>
      <div class="activity-visual visual-two"><span>手工制作</span><small>课程实践</small></div>
      <div class="activity-visual visual-three"><span>现场讲解</span><small>沉浸学习</small></div>
    </div>
  `;
}

function renderCourseDetail(material) {
  currentMaterial = material;
  $("#courseDetailContent").innerHTML = `
    ${detailCard("课程基础信息", baseInfoGrid([
      { label: "课程名称", value: material.name },
      { label: "适合学段", value: material.scope },
      { label: "课程类型", value: material.type },
      { label: "课程时长(小时)", value: material.duration.replace("小时", "") },
      { label: "课程价格", value: material.price },
      null
    ]))}
    ${detailCard("课程图片", `<div class="base-course-gallery">${courseVisual()}</div>`)}
    ${detailCard("课程视频", `
      <div class="base-empty-block">
        <svg class="icon"><use href="#i-monitor"/></svg>
        <span>暂无课程视频</span>
      </div>
    `)}
    ${detailCard("课程详情", `
      <div class="base-rich-content">
        ${(material.detailParagraphs || [material.intro]).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
    `)}
    ${detailCard("课程简介", `<p class="base-plain-text">${escapeHtml(material.intro)}</p>`)}
  `;
}

function renderPlanDetail(plan) {
  const linkedCourse = findMaterial(plan.linkedCourseId) || mainMaterials[0];
  const courseLinkButton = `<button class="inline-link" type="button" data-open-linked-course="${escapeHtml(linkedCourse.id)}">${escapeHtml(plan.linkedCourse)}</button>`;
  const scheduleBody = `
    <div class="base-day-tabs">${plan.dayPlans.map((day, index) => `<button class="base-day-tab ${index === 0 ? "active" : ""}" type="button">${escapeHtml(day.day)}</button>`).join("")}</div>
    <div class="table-wrap">
      <table class="base-detail-table">
        <thead><tr><th style="width:150px">时间</th><th style="width:220px">活动名称</th><th>活动内容</th></tr></thead>
        <tbody>
          ${plan.dayPlans[0].rows.map((row) => `<tr><td>${escapeHtml(row.time)}</td><td>${escapeHtml(row.name)}</td><td>${escapeHtml(row.content)}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
  const feeBody = `
    <div class="table-wrap">
      <table class="base-detail-table fee-table">
        <thead><tr><th>项目名称</th><th style="width:180px">价格(元)</th></tr></thead>
        <tbody>${plan.fees.map((fee) => `<tr><td>${escapeHtml(fee.name)}</td><td>${escapeHtml(fee.price)}</td></tr>`).join("")}</tbody>
      </table>
    </div>
  `;
  $("#planDetailContent").innerHTML = `
    ${detailCard("活动基础信息", baseInfoGrid([
      { label: "活动名称", value: plan.name },
      { label: "基地名称", value: plan.baseName },
      { label: "适合学段", value: plan.scope },
      { label: "活动类型", value: plan.type },
      { label: "活动时长(天)", value: plan.duration.replace("天", "") },
      { label: "关联课程", value: courseLinkButton, html: true },
      { label: "就餐形式", value: plan.dining },
      { label: "学生费用", value: plan.studentFee },
      { label: "老师费用", value: plan.teacherFee },
      { label: "状态", value: plan.status },
      { label: "创建人", value: plan.creator },
      { label: "创建时间", value: plan.createdAt }
    ]))}
    ${detailCard("活动介绍", `<p class="base-plain-text">${escapeHtml(plan.intro)}</p>`)}
    ${detailCard("关联课程", `
      <div class="linked-course-block">
        <div class="linked-course-title">
          <strong>${escapeHtml(linkedCourse.name)}</strong>
          <button class="text-action" type="button" data-open-linked-course="${escapeHtml(linkedCourse.id)}">查看课程详情</button>
        </div>
        <p>${escapeHtml(linkedCourse.intro)}</p>
        <div class="linked-course-meta">
          <span>适合学段：${escapeHtml(linkedCourse.scope)}</span>
          <span>课程类型：${escapeHtml(linkedCourse.type)}</span>
          <span>课程时长：${escapeHtml(linkedCourse.duration)}</span>
        </div>
      </div>
    `)}
    ${detailCard("活动图片", activityVisuals())}
    ${detailCard("活动视频", `
      <div class="base-empty-block">
        <svg class="icon"><use href="#i-monitor"/></svg>
        <span>暂无活动视频</span>
      </div>
    `)}
    ${detailCard("活动安排", scheduleBody)}
    ${detailCard("费用明细", feeBody)}
    ${detailCard("餐食安排", `<p class="base-plain-text">${escapeHtml(plan.meal)}</p>`)}
    ${detailCard("出行安排", `
      <div class="base-travel-info">
        <div><span>出行安排：</span>${escapeHtml(plan.travel)}</div>
        <div><span>活动申报车辆：</span>${escapeHtml(plan.vehicle)}</div>
        <div><span>活动申报线路：</span>${escapeHtml(plan.activityRoute)}</div>
      </div>
    `)}
  `;
  $$("[data-open-linked-course]", $("#planDetailContent")).forEach((button) => {
    button.addEventListener("click", () => openCourseDetail(button.dataset.openLinkedCourse));
  });
}

function openMaterialDetail(id) {
  const material = findMaterial(id);
  if (!material) return;
  if (material.kind === "course") {
    openCourseDetail(id);
  } else {
    openPlanDetail(id);
  }
}

function openCourseDetail(id) {
  const material = findMaterial(id);
  if (!material || material.kind !== "course") return;
  $("#tabCourseDetail").hidden = false;
  renderCourseDetail(material);
  showView("course");
}

function openPlanDetail(id) {
  const material = findMaterial(id);
  if (!material || material.kind !== "plan") return;
  currentMaterial = material;
  $("#tabPlanDetail").hidden = false;
  renderPlanDetail(material);
  showView("plan");
}

function syncReviewDialog(result) {
  const isPass = result === "pass";
  $("#reviewComment").value = isPass
    ? "课程及出行方案材料完整，同意出行。"
    : "课程实施材料与出行方案存在以下问题，请补充完善后重新提交：";
  $("#submitReview").className = `btn ${isPass ? "btn-success" : "btn-danger"}`;
  $("#submitReview").textContent = isPass ? "提交审核" : "确认退回";
}

function openReview(prefill = "pass") {
  if (!currentActivity || currentActivity.status !== "待审核") {
    showToast("该申报已完成审核，无需重复提交");
    return;
  }
  $("#reviewDialog .dialog-head p").textContent = currentActivity.name;
  const radio = $(`input[name="reviewResult"][value="${prefill}"]`);
  if (radio) radio.checked = true;
  syncReviewDialog(prefill);
  $("#reviewDialog").showModal();
}

function nowText() {
  const date = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function submitReview() {
  if (!currentActivity || currentActivity.status !== "待审核") {
    showToast("该申报已完成审核");
    return;
  }
  const result = $('input[name="reviewResult"]:checked').value;
  const comment = $("#reviewComment").value.trim();
  const index = activities.pending.findIndex((item) => item.id === currentActivity.id);
  if (index === -1) return;

  activities.pending.splice(index, 1);
  currentActivity.status = result === "pass" ? "已通过" : "已退回";
  currentActivity.statusClass = result === "pass" ? "status-success" : "status-rejected";
  currentActivity.reviewedAt = nowText();
  currentActivity.reviewComment = comment || (result === "pass" ? "同意出行。" : "材料需补充完善。");
  activities.done.unshift(currentActivity);
  currentListTab = "done";
  $$("[data-list-tab]").forEach((tab) => tab.classList.toggle("active", tab.dataset.listTab === "done"));

  $("#reviewDialog").close();
  $("#detailStatus").className = `status ${currentActivity.statusClass}`;
  $("#detailStatus").textContent = currentActivity.status;
  updateReviewActions(currentActivity);
  renderWorkflow(currentActivity);
  renderList();
  showToast(result === "pass" ? "审批通过，已流转至交管大队" : "已退回学校修改");
}

function printHeader(title, subtitle, meta) {
  return `
    <div class="print-brand">
      <strong>贵州省研学综合服务网</strong>
      <span>贵阳市教育局 · 研学出行审核</span>
    </div>
    <h1 class="print-title">${escapeHtml(title)}</h1>
    <p class="print-subtitle">${escapeHtml(subtitle)}</p>
    <div class="print-meta">
      ${meta.map(([label, value]) => `<div><small>${escapeHtml(label)}</small><b>${escapeHtml(value)}</b></div>`).join("")}
    </div>
  `;
}

function printFooter() {
  return `
    <div class="print-signature"><span>审核单位：贵阳市教育局</span><span>打印时间：${escapeHtml(nowText())}</span></div>
    <div class="print-foot">本文件由贵州省研学综合服务网生成，仅用于本次研学出行申报审核演示。</div>
  `;
}

function materialTable(materials) {
  return `
    <table>
      <thead><tr><th style="width:34px">序号</th><th>名称</th><th style="width:70px">类别</th><th>适用对象 / 行程</th><th>关联文件</th></tr></thead>
      <tbody>
        ${materials.map((material, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(material.name)}</td>
            <td>${escapeHtml(material.kindLabel)}</td>
            <td>${escapeHtml(material.scope)}</td>
            <td>${escapeHtml(material.fileName)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function buildMaterialPrint(material) {
  if (material.kind === "course") {
    return `
      ${printHeader(
        material.name,
        `研学课程 · ${currentActivity.school} · ${currentActivity.name}`,
        [
          ["课程名称", material.name],
          ["适合学段", material.scope],
          ["课程类型", material.type],
          ["课程时长", material.duration],
          ["课程价格", material.price],
          ["课程状态", material.status]
        ]
      )}
      <div class="print-section">
        <h2>课程详情</h2>
        ${(material.detailParagraphs || [material.intro]).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
      <div class="print-section">
        <h2>课程简介</h2>
        <p>${escapeHtml(material.intro)}</p>
      </div>
      <div class="print-section">
        <h2>创建信息</h2>
        <table>
          <tr><th style="width:110px">创建账号</th><td>${escapeHtml(material.creator)}</td></tr>
          <tr><th>创建时间</th><td>${escapeHtml(material.createdAt)}</td></tr>
          <tr><th>关联文件</th><td>${escapeHtml(material.fileName)}</td></tr>
        </table>
      </div>
      ${printFooter()}
    `;
  }

  return `
    ${printHeader(
      material.name,
      `出行方案 · ${currentActivity.school} · ${currentActivity.name}`,
      [
        ["活动名称", material.name],
        ["基地名称", material.baseName],
        ["适合学段", material.scope],
        ["活动类型", material.type],
        ["活动时长", material.duration],
        ["关联课程", material.linkedCourse]
      ]
    )}
    <div class="print-section">
      <h2>活动介绍</h2>
      <p>${escapeHtml(material.intro)}</p>
    </div>
    <div class="print-section">
      <h2>活动安排</h2>
      <table>
        <thead><tr><th style="width:120px">时间</th><th style="width:160px">活动名称</th><th>活动内容</th></tr></thead>
        <tbody>
          ${material.dayPlans[0].rows.map((row) => `<tr><td>${escapeHtml(row.time)}</td><td>${escapeHtml(row.name)}</td><td>${escapeHtml(row.content)}</td></tr>`).join("")}
        </tbody>
      </table>
    </div>
    <div class="print-section">
      <h2>费用明细</h2>
      <table>
        <thead><tr><th>项目名称</th><th style="width:140px">价格(元)</th></tr></thead>
        <tbody>${material.fees.map((fee) => `<tr><td>${escapeHtml(fee.name)}</td><td>${escapeHtml(fee.price)}</td></tr>`).join("")}</tbody>
      </table>
    </div>
    <div class="print-section">
      <h2>餐食与出行安排</h2>
      <table>
        <tr><th style="width:110px">餐食安排</th><td>${escapeHtml(material.meal)}</td></tr>
        <tr><th>出行安排</th><td>${escapeHtml(material.travel)}</td></tr>
        <tr><th>申报车辆</th><td>${escapeHtml(material.vehicle)}</td></tr>
        <tr><th>申报线路</th><td>${escapeHtml(material.activityRoute)}</td></tr>
      </table>
    </div>
    <div class="print-section">
      <h2>创建信息</h2>
      <table>
        <tr><th style="width:110px">就餐形式</th><td>${escapeHtml(material.dining)}</td></tr>
        <tr><th>学生费用 / 老师费用</th><td>${escapeHtml(material.studentFee)} / ${escapeHtml(material.teacherFee)}</td></tr>
        <tr><th>创建人</th><td>${escapeHtml(material.creator)}</td></tr>
        <tr><th>创建时间</th><td>${escapeHtml(material.createdAt)}</td></tr>
      </table>
    </div>
    ${printFooter()}
  `;
}

function buildActivityPrint() {
  const materials = getMaterialsForActivity(currentActivity);
  const courses = materials.filter((material) => material.kind === "course");
  const plans = materials.filter((material) => material.kind === "plan");
  return `
    ${printHeader(
      "研学实践教育活动方案",
      `${currentActivity.school} · ${currentActivity.name}`,
      [
        ["学校名称", currentActivity.school],
        ["研学基地", currentActivity.base],
        ["研学主题", currentActivity.theme],
        ["出行时间", currentActivity.time],
        ["学生 / 老师", `${currentActivity.students}人 / ${currentActivity.teachers}人`],
        ["活动时长", currentActivity.duration]
      ]
    )}
    <div class="print-section">
      <h2>活动基础信息</h2>
      <table>
        <tr><th style="width:92px">活动名称</th><td>${escapeHtml(currentActivity.name)}</td><th style="width:76px">研学范围</th><td>${escapeHtml(currentActivity.range)}</td></tr>
        <tr><th>出行年级</th><td>${escapeHtml(currentActivity.grade)}</td><th>活动费用</th><td>${escapeHtml(currentActivity.fee)} 元/人/次</td></tr>
        <tr><th>带队负责人</th><td>${escapeHtml(currentActivity.leader)}</td><th>联系电话</th><td>${escapeHtml(currentActivity.phone)}</td></tr>
      </table>
    </div>
    <div class="print-section">
      <h2>研学课程</h2>
      ${materialTable(courses)}
    </div>
    <div class="print-section">
      <h2>出行方案</h2>
      ${materialTable(plans)}
    </div>
    <div class="print-section">
      <h2>活动人员信息</h2>
      <table>
        <tr><th style="width:110px">学生人数</th><td>${escapeHtml(currentActivity.students)}人</td><th style="width:110px">老师人数</th><td>${escapeHtml(currentActivity.teachers)}人</td></tr>
        <tr><th>贫困生数量</th><td>2人</td><th>特殊儿童数</th><td>1人</td></tr>
      </table>
      <p class="print-note">人员名单及特殊照护安排已在学校申报材料中备案，审核时可结合活动人员信息模块核对。</p>
    </div>
    ${printFooter()}
  `;
}

function buildSafetyPrint() {
  const plans = getMaterialsForActivity(currentActivity).filter((material) => material.kind === "plan");
  return `
    ${printHeader(
      "研学实践教育安全应急预案",
      `${currentActivity.school} · ${currentActivity.name}`,
      [
        ["学校名称", currentActivity.school],
        ["研学基地", currentActivity.base],
        ["出行时间", currentActivity.time],
        ["学生 / 老师", `${currentActivity.students}人 / ${currentActivity.teachers}人`],
        ["带队负责人", currentActivity.leader],
        ["应急联系电话", currentActivity.contact]
      ]
    )}
    <div class="print-section">
      <h2>应急组织</h2>
      <p>建立“学校带队负责人—基地安全员—随车安全员”三级联络机制。活动前完成安全交底，活动中按课程节点清点人数，突发事件按“发现—上报—处置—记录”流程响应。</p>
      <table>
        <tr><th style="width:120px">学校带队负责人</th><td>${escapeHtml(currentActivity.leader)}　${escapeHtml(currentActivity.phone)}</td></tr>
        <tr><th>基地应急联系人</th><td>${escapeHtml(currentActivity.contact)}</td></tr>
        <tr><th>集合与疏散点</th><td>${escapeHtml(currentActivity.base)}主入口集合广场</td></tr>
      </table>
    </div>
    <div class="print-section">
      <h2>出行与现场安全方案</h2>
      ${materialTable(plans)}
    </div>
    <div class="print-section">
      <h2>重点处置流程</h2>
      <ul>
        <li>人员走失：立即停止当前活动，按小组清点，安全员分区搜寻并同步上报。</li>
        <li>身体不适：由随队老师陪同至基地医疗点，必要时联系 120 并通知家长。</li>
        <li>天气变化：根据预警调整室外课程，启用室内备选课程与避雨路线。</li>
        <li>交通延误：及时调整返程计划，完成家长告知与人员交接记录。</li>
      </ul>
    </div>
    ${printFooter()}
  `;
}

function buildReceiptPrint() {
  const materials = getMaterialsForActivity(currentActivity);
  const result = currentActivity.status === "待审核" ? "待审核" : currentActivity.status;
  const comment = currentActivity.reviewComment || "尚未提交审核意见。";
  const flow = currentActivity.status === "已通过"
    ? "学校提交 → 市教育局审批通过 → 交管大队待审核"
    : currentActivity.status === "已退回"
      ? "学校提交 → 市教育局退回修改"
      : "学校提交 → 市教育局待审核";
  return `
    ${printHeader(
      "研学出行申报审核回执",
      `${currentActivity.school} · ${currentActivity.name}`,
      [
        ["申报编号", currentActivity.id],
        ["审核状态", result],
        ["学校名称", currentActivity.school],
        ["研学基地", currentActivity.base],
        ["出行时间", currentActivity.time],
        ["审核时间", currentActivity.reviewedAt || "待审核"]
      ]
    )}
    <div class="print-section">
      <h2>审核结论</h2>
      <table>
        <tr><th style="width:100px">审核结果</th><td>${escapeHtml(result)}</td></tr>
        <tr><th>审核意见</th><td>${escapeHtml(comment)}</td></tr>
        <tr><th>流程进度</th><td>${escapeHtml(flow)}</td></tr>
      </table>
    </div>
    <div class="print-section">
      <h2>申报课程与出行方案</h2>
      ${materialTable(materials)}
    </div>
    ${printFooter()}
  `;
}

function printPdf(kind, materialId) {
  const sheet = $("#printSheet");
  if (kind === "material") {
    const material = getMaterialsForActivity().find((item) => item.id === materialId);
    if (!material) return;
    sheet.innerHTML = buildMaterialPrint(material);
  } else if (kind === "activity") {
    sheet.innerHTML = buildActivityPrint();
  } else if (kind === "safety") {
    sheet.innerHTML = buildSafetyPrint();
  } else if (kind === "receipt") {
    sheet.innerHTML = buildReceiptPrint();
  }

  document.body.classList.add("is-printing");
  const cleanup = () => document.body.classList.remove("is-printing");
  window.addEventListener("afterprint", cleanup, { once: true });
  showToast("已生成打印版式，可在打印窗口选择“另存为 PDF”");
  setTimeout(() => {
    window.print();
    cleanup();
  }, 80);
}

function printMaterial(materialId) {
  printPdf("material", materialId);
}

function init() {
  $("#searchButton").addEventListener("click", renderList);
  $("#resetButton").addEventListener("click", () => {
    $("#keywordInput").value = "";
    $("#schoolInput").value = "";
    $("#statusSelect").value = "";
    renderList();
  });
  ["#keywordInput", "#schoolInput"].forEach((selector) => {
    $(selector).addEventListener("keydown", (event) => {
      if (event.key === "Enter") renderList();
    });
  });
  $("#statusSelect").addEventListener("change", renderList);

  $$("[data-list-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      currentListTab = tab.dataset.listTab;
      $$("[data-list-tab]").forEach((item) => item.classList.toggle("active", item === tab));
      renderList();
    });
  });
  $$("[data-material-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      currentMaterialTab = tab.dataset.materialTab;
      renderMaterials();
    });
  });

  $("#tabList").addEventListener("click", () => showView("list"));
  $("#tabDetail").addEventListener("click", () => showView("detail"));
  $("#tabCourseDetail").addEventListener("click", () => showView("course"));
  $("#tabPlanDetail").addEventListener("click", () => showView("plan"));
  $("#backToList").addEventListener("click", () => showView("list"));
  $("#backFromCourse").addEventListener("click", () => showView("detail"));
  $("#backFromPlan").addEventListener("click", () => showView("detail"));
  $("#downloadCoursePdf").addEventListener("click", () => {
    if (currentMaterial?.kind === "course") printMaterial(currentMaterial.id);
  });
  $("#downloadPlanPdf").addEventListener("click", () => {
    if (currentMaterial?.kind === "plan") printMaterial(currentMaterial.id);
  });

  $$("[data-review-result]").forEach((button) => {
    button.addEventListener("click", () => openReview(button.dataset.reviewResult));
  });
  $$('input[name="reviewResult"]').forEach((radio) => {
    radio.addEventListener("change", () => syncReviewDialog(radio.value));
  });
  $("#submitReview").addEventListener("click", submitReview);

  $$("[data-pdf-document]").forEach((button) => {
    button.addEventListener("click", () => printPdf(button.dataset.pdfDocument));
  });
  $$("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(button.dataset.closeDialog);
      if (dialog?.open) dialog.close();
    });
  });
  $$("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  renderList();
  renderMaterials();
  renderWorkflow(currentActivity);
  updateReviewActions(currentActivity);
}

init();

