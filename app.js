// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。",
  githubUrl: "https://github.com/Cement-oo",
  lastUpdated: "2026-08-11",
  disclaimer:
    "以上额度、签到与模型信息仅供参考，各站活动和规则随时可能调整，请以站点内公告和实际使用情况为准，可能存在偏差。",
  entries: [
    {
      publishedAt: "2026-08-11 21:10",
      kind: "新站速薅",
      name: "TabiToken",
      summary: "新站限时开放，邀请注册直接送 120 刀，是目前几家里起步额度最高的。",
      details:
        "主打 Claude Opus 4.8 和 Opus 5，速度快、连接稳定。新站的活动力度和规则变动都比较快，想薅建议尽早注册。",
      registration: "GitHub 账号注册，新号即可。",
      signupBonus: "120 刀",
      dailyCheckin: "5-10 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "速度快、稳定",
      caveat: "限时开放，窗口期可能随时关闭。",
      benefits: ["注册送 120 刀", "每日签到", "限时开放", "新站"],
      url: "https://tabitoken.com/sign-up?aff=AQDR",
      tone: "limited",
    },
    {
      publishedAt: "2026-08-11 21:05",
      kind: "限时重开",
      name: "GoRouter",
      summary: "此前关闭过一段时间，现在重新限时开放邀请注册，送 70 刀。",
      details:
        "同样主打 Claude Opus 4.8 和 Opus 5，速度和稳定性都不错。属于重开窗口期，建议先注册占住名额。",
      registration: "GitHub 账号注册，新号即可。",
      signupBonus: "70 刀",
      dailyCheckin: "5-10 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "速度快、稳定",
      caveat: "限时重新开放，名额可能随时收紧。",
      benefits: ["注册送 70 刀", "每日签到", "限时重开"],
      url: "https://gorouter.app/sign-up?aff=e9NL",
      tone: "limited",
    },
    {
      publishedAt: "2026-08-11 21:00",
      kind: "模型齐全",
      name: "SeekAI",
      summary: "额度给得大方，注册送 200、每天签到 20，模型覆盖是几家里最全的。",
      details:
        "国产模型、GPT、Claude 都能用，胜在选择多。但实际体验不太稳定，也存在降智，更适合当备用站或跑对质量要求不高的任务。",
      registration: "GitHub 账号注册，新号即可。",
      signupBonus: "200 刀",
      dailyCheckin: "20 刀",
      models: "国产模型 / GPT / Claude",
      experience: "不稳定，存在降智",
      caveat: "稳定性和输出质量都打折，别当主力。",
      benefits: ["注册送 200 刀", "每日签到 20 刀", "模型全", "稳定性一般"],
      url: "https://seekai.cc/sign-up?aff=NzMk",
      tone: "caution",
    },
    {
      publishedAt: "2026-08-11 20:55",
      kind: "长期稳定",
      name: "AgentRouter",
      summary: "注册就给 175 刀，每天签到 25 刀，长期用下来最划算的一档。",
      details:
        "速度快、稳定性好，适合当主力。门槛在账号上：GitHub 需要是 2025 年 12 月之前注册的老号，没有的话可以用 Linux Do 账号。",
      registration: "GitHub 老号（2025 年 12 月之前注册）或 Linux Do 账号。",
      signupBonus: "175 刀",
      dailyCheckin: "25 刀",
      experience: "速度快、稳定",
      caveat: "签到需要先退出账号再重新登录才会生效。",
      benefits: ["注册送 175 刀", "每日签到 25 刀", "老号门槛"],
      url: "https://agentrouter.org/register?aff=i3Xz",
      tone: "active",
    },
    {
      publishedAt: "2026-08-11 20:50",
      kind: "高额稳定",
      name: "AnyRouter",
      summary: "邀请注册送 100，每天签到 25，体验是几家里最好的，代价是人多得挤。",
      details:
        "只要能连上，速度快、稳定，也没有降智问题。缺点是用的人多，高峰期得多试几次才能挤进去。",
      registration: "Linux Do 二级账号，或 .edu.cn 教育邮箱注册。",
      signupBonus: "100 刀",
      dailyCheckin: "25 刀",
      experience: "挤进去后速度快、稳定，无降智",
      caveat: "人多，高峰期需要反复重试才能挤进去。",
      benefits: ["注册送 100 刀", "每日签到 25 刀", "无降智", "人多需排队"],
      url: "https://anyrouter.top/register?aff=LJPP",
      tone: "active",
    },
  ],
};

const toneLabels = {
  active: "推荐",
  limited: "限时",
  notice: "新收录",
  caution: "谨慎",
};

const escapeHtml = (value) =>
  String(value).replace(/[&<>'"]/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
    return entities[character];
  });

const safeHttpUrl = (value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : "https://example.com";
  } catch {
    return "https://example.com";
  }
};

const parsePublishedAt = (publishedAt) => new Date(String(publishedAt).replace(" ", "T"));

const formatPublishedAt = (publishedAt) => {
  const parsed = parsePublishedAt(publishedAt);
  if (Number.isNaN(parsed.getTime())) return { date: publishedAt, time: "" };
  return {
    date: new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(parsed),
    time: new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(parsed),
  };
};

const applyText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const getBenefits = (entry) =>
  Array.isArray(entry.benefits) ? entry.benefits.filter(Boolean).map(String) : [];

// 字段缺失时整行不渲染，方便按站点情况增减信息。
const infoRow = (icon, label, value) =>
  value
    ? `<div class="entry-info-row">
              <span class="entry-info-label"><i data-lucide="${icon}" aria-hidden="true"></i>${label}</span>
              <p class="registration-text">${escapeHtml(value)}</p>
            </div>`
    : "";

const quotaCell = (label, value) =>
  value
    ? `<div class="quota-cell">
              <span class="quota-label">${escapeHtml(label)}</span>
              <strong class="quota-value">${escapeHtml(value)}</strong>
            </div>`
    : "";

const renderEntry = (entry) => {
  const tone = toneLabels[entry.tone] ? entry.tone : "active";
  const href = safeHttpUrl(entry.url);
  const safeName = escapeHtml(entry.name);
  const datetime = escapeHtml(String(entry.publishedAt).replace(" ", "T"));
  const publishedAt = formatPublishedAt(entry.publishedAt);
  const benefits = getBenefits(entry);
  const benefitTags = benefits.length
    ? benefits.map((benefit) => `<li>${escapeHtml(benefit)}</li>`).join("")
    : "<li>暂无福利说明</li>";

  return `
    <article class="feed-item" data-tone="${tone}">
      <div class="feed-meta">
        <time datetime="${datetime}" aria-label="发布时间 ${escapeHtml(entry.publishedAt)}">
          <span>${escapeHtml(publishedAt.date)}</span>
          <span>${escapeHtml(publishedAt.time)}</span>
        </time>
      </div>
      <a class="feed-card" href="${escapeHtml(href)}" target="_blank" rel="noreferrer" aria-label="打开 ${safeName} 的邀请链接">
        <div class="entry-content">
          <p class="entry-kind">${escapeHtml(entry.kind)} / ${toneLabels[tone]}</p>
          <h3>${safeName}</h3>
          <p class="entry-description">${escapeHtml(entry.summary)}</p>
          <p class="entry-details">${escapeHtml(entry.details)}</p>
          <div class="entry-quota">
            ${quotaCell("注册赠送", entry.signupBonus)}
            ${quotaCell("每日签到", entry.dailyCheckin)}
          </div>
          <div class="entry-info">
            ${infoRow("user-round-plus", "注册方式", entry.registration)}
            ${infoRow("sparkles", "可用模型", entry.models)}
            ${infoRow("gauge", "速度与稳定性", entry.experience)}
            ${infoRow("triangle-alert", "注意", entry.caveat)}
            <div class="entry-info-row">
              <span class="entry-info-label"><i data-lucide="gift" aria-hidden="true"></i>福利</span>
              <ul class="benefit-tags">${benefitTags}</ul>
            </div>
          </div>
        </div>
        <span class="entry-arrow" aria-hidden="true"><i data-lucide="arrow-up-right"></i></span>
      </a>
    </article>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  document.title = `${siteConfig.brand} | 站点与福利导航`;
  applyText("[data-brand]", siteConfig.brand);
  applyText("[data-eyebrow]", siteConfig.eyebrow);
  applyText("[data-title]", siteConfig.title);
  applyText("[data-intro]", siteConfig.intro);
  applyText("[data-footer]", siteConfig.brand);
  applyText("[data-site-count]", String(siteConfig.entries.length).padStart(2, "0"));
  applyText("[data-last-updated]", `更新于 ${siteConfig.lastUpdated.replaceAll("-", ".")}`);
  applyText("[data-disclaimer]", siteConfig.disclaimer);

  document.querySelector("[data-github-link]").href = safeHttpUrl(siteConfig.githubUrl);
  document.querySelector("#feed-items").innerHTML = siteConfig.entries.map(renderEntry).join("");

  window.lucide?.createIcons();
});
