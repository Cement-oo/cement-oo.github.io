// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。我会尽量更新最新情况，欢迎多多关注。",
  githubUrl: "https://github.com/ytzzjx",
  lastUpdated: "2026-08-12",
  disclaimer:
    "以上额度、签到与模型信息仅供参考，各站活动和规则随时可能调整，请以站点内公告和实际使用情况为准，可能存在偏差。",
  entries: [
    {
      publishedAt: "2026-08-12 12:42",
      kind: "公益新站",
      name: "Lzhiyu",
      summary: "新开公益站，使用推广码注册即送 100 额度，每天签到随机送 50-100 额度。",
      details:
        "注册流程简单，可使用 Kimi-K3、GLM-5.2 和 DeepSeek V4-0731。适合先注册领取初始额度，再通过每日签到补充使用额度。",
      registration: "通过带推广码的邀请链接注册，注册后即可登录使用。",
      signupBonus: "100 额度",
      dailyCheckin: "随机 50-100 额度",
      models: "Kimi-K3 / GLM-5.2 / DeepSeek V4-0731",
      experience: "注册简单，新站活动待持续观察",
      caveat: "注册与签到规则可能调整，请以站内说明为准。",
      benefits: ["注册送 100 额度", "每日随机签到 50-100", "Kimi-K3", "GLM-5.2", "DeepSeek V4-0731"],
      url: "https://lzhiyu.ccwu.cc/register?ref=REF-8A7434490E",
      tone: "notice",
    },
    {
      publishedAt: "2026-08-12 10:47",
      kind: "公益新站",
      name: "SirThisWay",
      summary: "新站现可注册，注册满一天后可签到，签到送 1 刀，连续签到奖励更多。",
      details:
        "签到可获得 Grok、xGPT 和 Claude 的指定额度：0.03 Grok、0.1 xGPT、0.1 Claude。适合先注册后再回来完成每日签到。",
      registration: "通过邀请链接注册，满 24 小时后可开启签到。",
      signupBonus: "注册满一天后可签到",
      dailyCheckin: "1 刀，连续更多",
      models: "Grok / xGPT / Claude",
      experience: "新站，活动规则待持续观察",
      caveat: "签到资格需在注册满一天后才生效。",
      benefits: ["每日签到送 1 刀", "连续签到奖励更多", "0.03 Grok", "0.1 xGPT", "0.1 Claude"],
      url: "https://sirthisway.icu/register?aff=VKKDVDVG27MZ",
      tone: "notice",
    },
    {
      publishedAt: "2026-08-12 10:47",
      kind: "老站重开",
      name: "Kscsnkli AI",
      summary: "老站现已开放注册，注册送 20,000,000 额度，每日可签到 20,000。",
      details:
        "模型覆盖完整，Claude 以外的模型通常很难用完额度；但相应模型消耗也较高，使用前建议先留意各模型的计费规则。",
      registration: "通过邀请链接注册。",
      signupBonus: "20,000,000",
      dailyCheckin: "20,000",
      models: "Claude / GPT / 其他模型",
      experience: "模型齐全，消耗相对较高",
      caveat: "不同模型的额度消耗不同，请以站内实际规则为准。",
      benefits: ["注册送 20,000,000", "每日签到 20,000", "老站开放注册", "模型齐全"],
      url: "https://ai.kscsnkli.site/sign-up?aff=qeZ9",
      tone: "active",
    },
    {
      publishedAt: "2026-08-12 10:47",
      kind: "公益新站",
      name: "一梦五千年",
      summary: "可注册的公益新站，注册即送 10 刀，GPT-5.6-sol 与 GPT-5.6-luna 为 1x 倍率。",
      details:
        "支持 QQ 或 163 邮箱注册，也提供其他国产模型。邀请新用户注册后，双方各获 10 额度，合计可得 20 额度；签到奖励随机。",
      registration: "QQ 或 163 邮箱注册，注册后即可使用。",
      signupBonus: "10 刀",
      dailyCheckin: "随机奖励",
      models: "GPT-5.6-sol / GPT-5.6-luna / 国产模型",
      experience: "实测可注册，注册即可使用",
      caveat: "不要批量测活，可能会被拉黑 IP。",
      benefits: ["注册送 10 刀", "邀请双方各得 10 额度", "1x 倍率", "随机签到奖励"],
      url: "https://fapi.leileihog.top/sign-up?aff=ZR02",
      tone: "notice",
    },
    {
      publishedAt: "2026-08-11 21:10",
      kind: "暂停注册",
      name: "TabiToken",
      summary: "目前已关闭注册；恢复开放后会及时更新通知，原邀请注册额度为 120 刀。",
      details:
        "主打 Claude Opus 4.8 和 Opus 5，速度快、连接稳定。活动恢复和规则变动会在页面及时更新，暂时无需尝试注册。",
      registration: "目前暂停注册，等待重新开放。",
      signupBonus: "120 刀",
      dailyCheckin: "5-10 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "速度快、稳定",
      caveat: "注册已关闭，开放后会及时更新。",
      benefits: ["原注册送 120 刀", "每日签到", "暂时关闭注册", "等待通知"],
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
      caveat: "限时重新开放；注册后请尽快调用，否则有封号风险。",
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
