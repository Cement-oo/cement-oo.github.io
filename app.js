// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。我会尽量更新最新情况，欢迎多多关注。",
  githubUrl: "https://github.com/ytzzjx",
  lastUpdated: "2026-08-14",
  disclaimer:
    "以上额度、签到与模型信息仅供参考，各站活动和规则随时可能调整，请以站点内公告和实际使用情况为准，可能存在偏差。",
  entries: [
    {
      publishedAt: "2026-08-13 22:12",
      kind: "近期优惠",
      name: "AgentRouter",
      summary: "GPT 系列现降价 30%；Claude 系列目前出现问题，据站长说明，现阶段可以多用，之后会给予补偿。",
      details:
        "注册送 175 刀、每日签到 25 刀，速度快且稳定。GitHub 需要是 2025 年 12 月之前注册的老号，没有的话可以使用 Linux Do 账号。",
      registration: "GitHub 老号（2025 年 12 月之前注册）或 Linux Do 账号。",
      signupBonus: "175 刀",
      dailyCheckin: "25 刀",
      experience: "GPT 降价 30%，Claude 系列当前异常",
      caveat: "Claude 系列补偿为站长说明，具体方案以站内后续公告为准；签到需退出账号后重新登录才会生效。",
      benefits: ["GPT 降价 30%", "Claude 后续补偿", "注册送 175 刀", "每日签到 25 刀", "老号门槛"],
      url: "https://agentrouter.org/register?aff=i3Xz",
      tone: "active",
    },
    {
      publishedAt: "2026-08-13 22:12",
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
    {
      publishedAt: "2026-08-14 15:23",
      kind: "暂时开放",
      name: "TabiToken",
      summary: "目前暂时开放注册，窗口随时可能关闭；邀请注册额度为 120 刀，每日签到 5-10 刀。",
      details:
        "主打 Claude Opus 4.8 和 Opus 5，速度快、连接稳定。签到入口：点击右上角个人头像，进入个人资料后签到。",
      registration: "目前暂时开放，窗口可能随时关闭，建议尽快尝试。",
      signupBonus: "120 刀",
      dailyCheckin: "5-10 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "速度快、稳定",
      caveat: "注册窗口可能随时关闭；签到需前往右上角个人头像 → 个人资料。",
      benefits: ["暂时开放", "注册送 120 刀", "每日签到 5-10 刀", "个人资料内签到"],
      url: "https://tabitoken.com/sign-up?aff=AQDR",
      tone: "limited",
    },
    {
      publishedAt: "2026-08-14 15:23",
      kind: "暂时开放",
      name: "GoRouter",
      summary: "目前暂时开放注册，窗口随时可能关闭；邀请注册额度为 70 刀，每日签到 5-10 刀。",
      details:
        "主打 Claude Opus 4.8 和 Opus 5，速度和稳定性都不错。签到入口：点击右上角个人头像，进入个人资料后签到。",
      registration: "目前暂时开放，窗口可能随时关闭，建议尽快尝试。",
      signupBonus: "70 刀",
      dailyCheckin: "5-10 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "速度快、稳定",
      caveat: "注册窗口可能随时关闭；已注册用户请尽快调用，否则有封号风险。",
      benefits: ["暂时开放", "注册送 70 刀", "每日签到 5-10 刀", "个人资料内签到", "已注册请尽快调用"],
      url: "https://gorouter.app/sign-up?aff=e9NL",
      tone: "limited",
    },
    {
      publishedAt: "2026-08-13 22:12",
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
      publishedAt: "2026-08-14 00:22",
      kind: "半公益",
      name: "Xingya",
      summary: "半公益代币站，新站开业；注册即领取试吃 50 芽点，邀请好友注册并加入 QQ 群再送 80 芽点。",
      details:
        "采用代币模式，充值比例 1:100，按次计费，约 4 代币/请求，适合酒馆用户。提供小克和 Gemini 新模型，每日签到可领取 20-50 芽点。",
      registration: "通过邀请链接注册；邀请好友注册并加入 QQ 群后，可再领取 80 芽点。",
      signupBonus: "试吃 50 芽点",
      dailyCheckin: "20-50 芽点",
      models: "小克 / Gemini 新模型",
      experience: "代币模式，约 4 代币/请求，适合酒馆用户",
      caveat: "充值比例、代币消耗和新用户福利可能调整，请以站内实际规则为准。",
      benefits: ["试吃 50 芽点", "邀请注册并入 QQ 群再送 80", "每日签到 20-50", "充值比例 1:100", "约 4 代币/请求", "小克", "Gemini 新模型"],
      url: "https://xingya.site/sign-up?aff=SV10",
      tone: "notice",
    },
    {
      publishedAt: "2026-08-14 10:40",
      kind: "限时开放",
      name: "ArityFlow",
      summary: "老站现已限时重开，支持 QQ 注册；使用邀请码注册会赠送额度，具体数额待确认。",
      details:
        "站点主要面向酒馆用户，采用按次计费，每日签到最高 50，并提供小克和免费模型。除 coding 分组外，站方会严格检查编程行为，违规可能导致封号。",
      registration: "使用 QQ 注册，并通过邀请码领取注册赠送额度。",
      signupBonus: "有赠送，数额待确认",
      dailyCheckin: "最高 50",
      models: "小克 / 免费模型",
      experience: "按次计费，主要面向酒馆用户",
      caveat: "严查除 coding 分组以外的编程行为，违规可能封号。",
      benefits: ["老站限时重开", "QQ 注册", "邀请码赠送额度", "每日签到最高 50", "按次计费", "小克", "免费模型"],
      url: "https://www.arityflow.top/sign-up?aff=PTiI",
      tone: "caution",
    },
    {
      publishedAt: "2026-08-13 22:12",
      kind: "老站重开",
      name: "Kscsnkli AI",
      summary: "老站现已开放注册，以国产模型为主；注册送 20,000,000 额度，每日可签到 20,000。",
      details:
        "站点后续以国产模型为主，GPT、Claude 和 DeepSeek 将开始限量供应。使用模型前，可先通过游乐场功能查看模型是否正常，再决定是否调用。",
      registration: "通过邀请链接注册。",
      signupBonus: "20,000,000",
      dailyCheckin: "20,000",
      models: "国产模型为主 / GPT / Claude / DeepSeek",
      experience: "国产模型为主，部分模型限量供应",
      caveat: "GPT、Claude 和 DeepSeek 将限量供应，使用前请先在游乐场查看模型是否正常。",
      benefits: ["注册送 20,000,000", "每日签到 20,000", "国产模型为主", "游乐场状态检查", "部分模型限量"],
      url: "https://ai.kscsnkli.site/sign-up?aff=qeZ9",
      tone: "active",
    },
    {
      publishedAt: "2026-08-13 22:12",
      kind: "谨慎使用",
      name: "SeekAI",
      summary: "额度给得大方，注册送 200、每天签到 20，模型覆盖较全；疑似网页反代，工具调用有些问题。",
      details:
        "国产模型、GPT、Claude 都能用，但实际体验不太稳定，也存在降智。疑似采用网页反代，工具调用可能无法正常工作，更适合普通对话或备用。",
      registration: "GitHub 账号注册，新号即可。",
      signupBonus: "200 刀",
      dailyCheckin: "20 刀",
      models: "国产模型 / GPT / Claude",
      experience: "疑似网页反代，工具调用有问题",
      caveat: "工具调用可能异常，稳定性和输出质量也有波动，建议仅作备用。",
      benefits: ["注册送 200 刀", "每日签到 20 刀", "模型全", "疑似网页反代", "工具调用异常"],
      url: "https://seekai.cc/sign-up?aff=NzMk",
      tone: "caution",
    },
    {
      publishedAt: "2026-08-13 22:12",
      kind: "暂停注册",
      name: "一梦五千年",
      summary: "目前已关闭注册；恢复开放后会及时更新。原注册奖励为 10 刀，GPT-5.6-sol 与 GPT-5.6-luna 为 1x 倍率。",
      details:
        "此前支持 QQ 或 163 邮箱注册，也提供其他国产模型。现已达到注册限制，暂时无需尝试注册。",
      registration: "目前暂停注册，等待重新开放。",
      signupBonus: "10 刀",
      dailyCheckin: "随机奖励",
      models: "GPT-5.6-sol / GPT-5.6-luna / 国产模型",
      experience: "已关闭注册",
      caveat: "注册已关闭；不要批量测活，可能会被拉黑 IP。",
      benefits: ["原注册送 10 刀", "暂时关闭注册", "1x 倍率", "随机签到奖励"],
      url: "https://fapi.leileihog.top/sign-up?aff=ZR02",
      tone: "limited",
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
