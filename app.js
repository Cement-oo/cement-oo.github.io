// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。",
  githubUrl: "https://github.com/your-github-id",
  lastUpdated: "2026-08-11",
  entries: [
    {
      publishedAt: "2026-08-11 20:30",
      kind: "精选中转",
      name: "公益中转 01",
      summary: "面向日常对话和轻量使用，注册简单，新用户可领取体验额度。",
      details: "支持常用模型，适合想先体验再决定是否长期使用的用户。具体可用模型与额度以站内公告为准。",
      registration: "点击卡片进入邀请页，使用邮箱完成注册并在个人中心查看到账福利。",
      benefits: ["注册赠送", "每日签到", "活动进行中"],
      url: "https://example.com",
      tone: "active",
    },
    {
      publishedAt: "2026-08-09 11:00",
      kind: "限时福利",
      name: "稳定中转 02",
      summary: "偏向稳定使用场景，当前邀请注册可参加限时新用户活动。",
      details: "适合有连续使用需求的用户。活动奖励、有效时间和使用限制请以注册页面显示为准。",
      registration: "通过本卡片打开注册页面，完成账号验证后按活动说明领取奖励。",
      benefits: ["限时额度", "新用户专享", "名额有限"],
      url: "https://example.com",
      tone: "limited",
    },
    {
      publishedAt: "2026-08-05 09:15",
      kind: "新站收录",
      name: "体验中转 03",
      summary: "近期收录的新站，适合尝鲜体验，注册门槛低，活动规则持续更新。",
      details: "当前处于体验阶段，建议先使用赠送额度测试速度和可用性，再根据自己的需求选择。",
      registration: "点击卡片直达邀请注册链接，按页面提示完成注册即可。",
      benefits: ["新站体验", "注册活动", "低门槛"],
      url: "https://example.com",
      tone: "notice",
    },
  ],
};

const toneLabels = {
  active: "活动中",
  limited: "限时",
  notice: "新收录",
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
          <div class="entry-info">
            <div class="entry-info-row">
              <span class="entry-info-label"><i data-lucide="user-round-plus" aria-hidden="true"></i>注册方式</span>
              <p class="registration-text">${escapeHtml(entry.registration)}</p>
            </div>
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

  document.querySelector("[data-github-link]").href = safeHttpUrl(siteConfig.githubUrl);
  document.querySelector("#feed-items").innerHTML = siteConfig.entries.map(renderEntry).join("");

  window.lucide?.createIcons();
});
