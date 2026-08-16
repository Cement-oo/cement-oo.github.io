// 只需修改这个对象，就能更新页面中的品牌、介绍和站点信息。
const siteConfig = {
  brand: "公益中转分享",
  eyebrow: "PUBLIC BENEFIT DIRECTORY",
  title: "公益中转分享",
  intro: "好用的站点、注册方式和最新福利，一页看完，点击直达。我会尽量更新最新情况，欢迎多多关注。",
  githubUrl: "https://github.com/ytzzjx",
  lastUpdated: "2026-08-16",
  disclaimer:
    "以上额度、签到与模型信息仅供参考，各站活动和规则随时可能调整，请以站点内公告和实际使用情况为准，可能存在偏差。",
  entries: [
    {
      publishedAt: "2026-08-16 17:11",
      kind: "近期优惠",
      name: "AgentRouter",
      summary: "GPT 系列现降价 30%，模型已全部恢复正常；站长鼓励正常使用，有时会补充消耗额度，也可能给予标注“0.8 折”的 Core 分组，具体奖励和获取机制尚未确认。",
      details:
        "注册送 175 刀、每日签到 25 刀，速度快且稳定。GitHub 需要是 2025 年 12 月之前注册的老号，没有的话可以使用 Linux Do 账号。站长表示正常使用可能获得消耗额度补充或 Core 分组（标注 0.8 折）奖励，具体获取和发放规则尚未确认。",
      registration: "GitHub 老号（2025 年 12 月之前注册）或 Linux Do 账号。",
      signupBonus: "175 刀",
      dailyCheckin: "25 刀",
      experience: "GPT 降价 30%，模型已恢复正常，速度快且稳定",
      caveat: "正常使用可能有消耗额度补充或 Core 分组（标注 0.8 折）奖励，但具体机制尚未确认；签到需退出账号后重新登录才会生效。",
      benefits: ["GPT 降价 30%", "模型已恢复正常", "正常使用可能有额外奖励", "Core 分组（0.8 折）机制待确认", "注册送 175 刀", "每日签到 25 刀", "老号门槛"],
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
      publishedAt: "2026-08-15 10:38",
      kind: "公益新站",
      name: "Zynk 公益站",
      summary: "注册后联系群主可领取 200 额度；支持每日签到，签到金额随机，8 月 14 日和 8 月 15 日实测均为 15。",
      details:
        "新站目前暂不稳定，适合作为备用。账号每个月必须使用超过 100 额度，未达到使用要求可能会被删除。",
      registration: "通过邀请链接注册，进入后联系群主领取 200 额度。",
      signupBonus: "联系群主送 200",
      dailyCheckin: "随机；最近两次均为 15",
      experience: "新站暂不稳定，建议先小量使用",
      caveat: "每个月必须使用超过 100 额度，否则可能删号；签到金额为随机值。",
      benefits: ["联系群主送 200", "每日随机签到", "8 月 14 日签到 15", "8 月 15 日签到 15"],
      url: "https://gy.leyanshi.me/sign-up?aff=lorI",
      tone: "notice",
    },
    {
      publishedAt: "2026-08-15 14:51",
      kind: "随缘注册",
      name: "TabiToken",
      summary: "注册窗口不固定，开放时间摸不准，有空可以自行试试；邀请注册额度为 120 刀，每日签到 5-10 刀。",
      details:
        "主打 Claude Opus 4.8 和 Opus 5，速度快、连接稳定。注册状态可能随时变化；签到入口：点击右上角个人头像，进入个人资料后签到。",
      registration: "注册窗口不固定，建议有空时自行尝试。",
      signupBonus: "120 刀",
      dailyCheckin: "5-10 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "速度快、稳定",
      caveat: "开放时间不固定，页面状态可能与实际注册窗口存在延迟；已注册用户请尽快调用，否则有封号风险。",
      benefits: ["随缘注册", "注册送 120 刀", "每日签到 5-10 刀", "个人资料内签到", "已注册请尽快调用"],
      url: "https://tabitoken.com/sign-up?aff=AQDR",
      tone: "limited",
    },
    {
      publishedAt: "2026-08-15 14:51",
      kind: "随缘注册",
      name: "GoRouter",
      summary: "注册窗口不固定，开放时间摸不准，有空可以自行试试；邀请注册额度为 70 刀，每日签到 5-10 刀。",
      details:
        "主打 Claude Opus 4.8 和 Opus 5，速度和稳定性都不错。注册状态可能随时变化；签到入口：点击右上角个人头像，进入个人资料后签到。",
      registration: "注册窗口不固定，建议有空时自行尝试。",
      signupBonus: "70 刀",
      dailyCheckin: "5-10 刀",
      models: "Claude Opus 4.8 / Opus 5",
      experience: "速度快、稳定",
      caveat: "开放时间不固定；已注册用户请尽快调用，否则有封号风险。",
      benefits: ["随缘注册", "注册送 70 刀", "每日签到 5-10 刀", "个人资料内签到", "已注册请尽快调用"],
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
      summary: "额度给得大方，注册送 200、每天签到 20；目前仅支持 DeepSeek，疑似网页反代，工具调用有些问题。",
      details:
        "目前仅能使用 DeepSeek，实际体验不太稳定，也存在降智。疑似采用网页反代，工具调用可能无法正常工作，更适合普通对话或备用。",
      registration: "GitHub 账号注册，新号即可。",
      signupBonus: "200 刀",
      dailyCheckin: "20 刀",
      models: "DeepSeek",
      experience: "目前仅支持 DeepSeek；疑似网页反代，工具调用有问题",
      caveat: "目前仅支持 DeepSeek；工具调用可能异常，稳定性和输出质量也有波动，建议仅作备用。",
      benefits: ["注册送 200 刀", "每日签到 20 刀", "仅支持 DeepSeek", "疑似网页反代", "工具调用异常"],
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

const pageCopy = {
  "zh-CN": {
    brand: siteConfig.brand,
    eyebrow: siteConfig.eyebrow,
    title: siteConfig.title,
    intro: siteConfig.intro,
    nav: "精选站点 · 点击直达",
    updateStatus: "持续更新中",
    directoryLabel: "站点汇总",
    siteCountLabel: "当前收录",
    sectionEyebrow: "HANDPICKED",
    feedTitle: "站点推荐",
    sectionNote: "整张卡片均可点击",
    disclaimer: siteConfig.disclaimer,
    documentTitle: "公益中转分享 | 站点与福利导航",
    metaDescription: "公益中转分享，集中整理注册方式、活动福利、模型信息与风险提示。",
    lastUpdated: "更新于",
    signupBonus: "注册赠送",
    dailyCheckin: "每日签到",
    registration: "注册方式",
    models: "可用模型",
    experience: "速度与稳定性",
    caution: "注意",
    benefits: "福利",
    noBenefits: "暂无福利说明",
    publishedAt: "发布时间",
    openLink: "打开 {name} 的邀请链接",
    githubLabel: "打开 GitHub 主页",
    githubTitle: "GitHub 主页",
    backToTop: "返回页面顶部",
    languageLabel: "语言选择",
  },
  en: {
    brand: "Public AI API Directory",
    eyebrow: "PUBLIC BENEFIT DIRECTORY",
    title: "Public AI API Directory",
    intro:
      "Tested AI API services, registration requirements, current bonuses, and risk notes in one place. I update service status whenever possible.",
    nav: "Curated services · Direct links",
    updateStatus: "Actively maintained",
    directoryLabel: "Service directory",
    siteCountLabel: "Services listed",
    sectionEyebrow: "HANDPICKED",
    feedTitle: "Recommended services",
    sectionNote: "Click anywhere on a card",
    disclaimer:
      "Bonuses, check-in rewards, and model availability are for reference only. Rules may change at any time; verify details on each service before use.",
    documentTitle: "Public AI API Directory | Services and bonuses",
    metaDescription:
      "A maintained directory of AI API services with registration requirements, bonuses, model availability, and risk notes.",
    lastUpdated: "Updated",
    signupBonus: "Sign-up bonus",
    dailyCheckin: "Daily check-in",
    registration: "Registration",
    models: "Models",
    experience: "Experience",
    caution: "Caution",
    benefits: "Benefits",
    noBenefits: "No benefit details",
    publishedAt: "Published",
    openLink: "Open the {name} referral link",
    githubLabel: "Open GitHub profile",
    githubTitle: "GitHub profile",
    backToTop: "Back to top",
    languageLabel: "Language",
  },
};

const entryTranslations = {
  AgentRouter: {
    kind: "Current offer",
    summary:
      "GPT models are 30% cheaper and all models have returned to normal. The operator encourages normal use, which may occasionally bring credit top-ups or access to a Core group advertised with a 0.8 rate; eligibility and the reward mechanism are unconfirmed.",
    details:
      "New accounts receive $175 in credit and daily check-ins add $25. Fast and stable. Requires a GitHub account created before December 2025, or a Linux Do account. Normal use may bring consumed-credit top-ups or access to the Core group advertised with a 0.8 rate, but the exact rules are unconfirmed.",
    registration: "GitHub account created before December 2025, or a Linux Do account.",
    signupBonus: "$175 credit",
    dailyCheckin: "$25",
    experience: "GPT 30% discount; models restored and currently stable",
    caveat:
      "Normal use may qualify for consumed-credit top-ups or access to a Core group advertised with a 0.8 rate, but the mechanism is unconfirmed. Sign out and back in for check-in credit to take effect.",
    benefits: ["GPT 30% discount", "Models restored", "Possible usage rewards", "Core 0.8-rate mechanism unconfirmed", "$175 sign-up credit", "$25 daily check-in", "Older account required"],
  },
  AnyRouter: {
    kind: "High bonus and stable",
    summary:
      "Referral registration grants $100 and daily check-ins add $25. It offers one of the best experiences here, but demand is high.",
    details:
      "Once connected, it is fast, stable, and does not appear degraded. During peak hours you may need to retry several times.",
    registration: "Linux Do level 2 account, or an .edu.cn academic email address.",
    signupBonus: "$100 credit",
    dailyCheckin: "$25",
    experience: "Fast and stable once connected; no obvious degradation",
    caveat: "Heavy demand means repeated retries may be needed during peak hours.",
    benefits: ["$100 sign-up credit", "$25 daily check-in", "No obvious degradation", "Busy during peak hours"],
  },
  "Zynk 公益站": {
    kind: "New public service",
    name: "Zynk Public Service",
    summary:
      "Contact the group admin after registering to receive 200 credits. Daily check-in rewards are random; August 14 and 15 both yielded 15.",
    details:
      "This is a new service and currently unstable, so treat it as a backup. Accounts must use more than 100 credits each month or may be deleted.",
    registration: "Register through the referral link, then contact the group admin for 200 credits.",
    signupBonus: "200 via group admin",
    dailyCheckin: "Random; last two were 15",
    experience: "New and unstable; start with light usage",
    caveat: "Monthly usage must exceed 100 credits or the account may be deleted. Check-in rewards are random.",
    benefits: ["200 credits via group admin", "Random daily check-in", "Aug 14 check-in: 15", "Aug 15 check-in: 15"],
  },
  TabiToken: {
    kind: "Intermittent registration",
    summary:
      "Registration windows are irregular and hard to predict, so try the link whenever convenient. Referral registration grants $120, with $5-10 from daily check-ins.",
    details:
      "Focused on Claude Opus 4.8 and Opus 5, with fast and stable connections. Registration status may change at any time. To check in, open the profile photo in the top-right and go to Profile.",
    registration: "Registration opens intermittently; try the link whenever convenient.",
    signupBonus: "$120 credit",
    dailyCheckin: "$5-10",
    models: "Claude Opus 4.8 / Opus 5",
    experience: "Fast and stable",
    caveat: "Opening times are irregular and this page may lag behind the actual registration window. Make an API request soon after registration or the account may be suspended.",
    benefits: ["Intermittent registration", "$120 sign-up credit", "$5-10 daily check-in", "Check in from Profile", "Use soon after registration"],
  },
  GoRouter: {
    kind: "Intermittent registration",
    summary:
      "Registration windows are irregular and hard to predict, so try the link whenever convenient. Referral registration grants $70, with $5-10 from daily check-ins.",
    details:
      "Focused on Claude Opus 4.8 and Opus 5, with good speed and stability. Registration status may change at any time. To check in, open the profile photo in the top-right and go to Profile.",
    registration: "Registration opens intermittently; try the link whenever convenient.",
    signupBonus: "$70 credit",
    dailyCheckin: "$5-10",
    models: "Claude Opus 4.8 / Opus 5",
    experience: "Fast and stable",
    caveat: "Opening times are irregular. Make an API request soon after registration or the account may be suspended.",
    benefits: ["Intermittent registration", "$70 sign-up credit", "$5-10 daily check-in", "Check in from Profile", "Use soon after registration"],
  },
  Lzhiyu: {
    kind: "New public service",
    summary:
      "Register with the referral code to receive 100 credits. Daily check-ins award a random 50-100 credits.",
    details:
      "Registration is straightforward. Available models include Kimi-K3, GLM-5.2, and DeepSeek V4-0731. Daily check-ins can replenish the starting credit.",
    registration: "Register through the referral link and use the service after signing in.",
    signupBonus: "100 credits",
    dailyCheckin: "Random 50-100 credits",
    models: "Kimi-K3 / GLM-5.2 / DeepSeek V4-0731",
    experience: "Simple registration; new-service reliability is still being observed",
    caveat: "Registration and check-in rules may change. Refer to the service's current notices.",
    benefits: ["100 sign-up credits", "Random 50-100 daily check-in", "Kimi-K3", "GLM-5.2", "DeepSeek V4-0731"],
  },
  Xingya: {
    kind: "Freemium service",
    summary:
      "A new token-based service. New users receive a 50 Sprout-point trial; invite a friend who joins the QQ group for another 80 points.",
    details:
      "Top-ups use a 1:100 ratio and requests cost about 4 tokens each, making it suitable for SillyTavern users. Offers Claude and newer Gemini models, plus 20-50 points from daily check-ins.",
    registration: "Register through the referral link. Invite a friend who joins the QQ group to receive another 80 points.",
    signupBonus: "50-point trial",
    dailyCheckin: "20-50 Sprout points",
    models: "Claude / newer Gemini models",
    experience: "About 4 tokens per request; suited to SillyTavern",
    caveat: "Top-up ratios, token costs, and new-user rewards may change. Check the current rules before paying.",
    benefits: ["50-point trial", "80 more after referral and QQ group join", "20-50 daily check-in", "1:100 top-up ratio", "About 4 tokens/request", "Claude", "Newer Gemini models"],
  },
  ArityFlow: {
    kind: "Limited reopening",
    summary:
      "An established service has temporarily reopened. QQ registration is supported, and referral codes grant credit; the exact amount is unconfirmed.",
    details:
      "Primarily aimed at SillyTavern users with per-request billing. Daily check-ins can reach 50, with Claude and free models available. Programming outside the coding group is strictly monitored and may lead to suspension.",
    registration: "Register with QQ and use the referral code to receive the available sign-up credit.",
    signupBonus: "Available; amount unconfirmed",
    dailyCheckin: "Up to 50",
    models: "Claude / free models",
    experience: "Per-request billing, mainly for SillyTavern users",
    caveat: "Programming outside the coding group is strictly monitored and may lead to account suspension.",
    benefits: ["Limited reopening", "QQ registration", "Referral bonus", "Daily check-in up to 50", "Per-request billing", "Claude", "Free models"],
  },
  "Kscsnkli AI": {
    kind: "Reopened service",
    summary:
      "The service has reopened with a focus on Chinese models. New accounts receive 20,000,000 credits and daily check-ins add 20,000.",
    details:
      "Chinese models will be the main offering, while GPT, Claude, and DeepSeek are moving to limited availability. Use the Playground to check model status before making requests.",
    registration: "Register through the referral link.",
    signupBonus: "20,000,000",
    dailyCheckin: "20,000",
    models: "Chinese models / GPT / Claude / DeepSeek",
    experience: "Chinese models are prioritized; some other models are limited",
    caveat: "GPT, Claude, and DeepSeek have limited availability. Check each model in the Playground before use.",
    benefits: ["20,000,000 sign-up credits", "20,000 daily check-in", "Chinese-model focus", "Playground status checks", "Some models limited"],
  },
  SeekAI: {
    kind: "Use with caution",
    summary:
      "Generous credits: $200 on registration and $20 from daily check-ins. DeepSeek is currently the only available model; the service may use a web-proxy backend and tool calls can fail.",
    details:
      "Only DeepSeek is currently available. Reliability and output quality fluctuate and may be degraded. Better suited to basic chat or backup use.",
    registration: "Register with a GitHub account; new accounts are accepted.",
    signupBonus: "$200 credit",
    dailyCheckin: "$20",
    models: "DeepSeek only",
    experience: "DeepSeek only; possible web proxy and tool-calling issues",
    caveat: "DeepSeek is currently the only available model. Tool calls may fail, and stability and output quality can fluctuate. Use as a backup only.",
    benefits: ["$200 sign-up credit", "$20 daily check-in", "DeepSeek only", "Possible web proxy", "Tool-calling issues"],
  },
  "一梦五千年": {
    kind: "Registration paused",
    name: "Yimeng 5000",
    summary:
      "Registration is currently closed and this page will be updated if it reopens. The previous sign-up bonus was $10, with GPT-5.6-sol and GPT-5.6-luna at a 1x rate.",
    details:
      "QQ and 163 email registration were previously supported, along with additional Chinese models. The registration limit has been reached, so there is no need to retry for now.",
    registration: "Registration is paused; wait for reopening.",
    signupBonus: "$10",
    dailyCheckin: "Random reward",
    models: "GPT-5.6-sol / GPT-5.6-luna / Chinese models",
    experience: "Registration closed",
    caveat: "Registration is closed. Do not bulk-probe availability, as your IP may be blocked.",
    benefits: ["Previous $10 sign-up credit", "Registration paused", "1x rate", "Random check-in reward"],
  },
};

const toneLabels = {
  "zh-CN": {
    active: "推荐",
    limited: "限时",
    notice: "新收录",
    caution: "谨慎",
  },
  en: {
    active: "Recommended",
    limited: "Limited",
    notice: "New",
    caution: "Caution",
  },
};

const defaultLocale = "zh-CN";
const supportedLocales = new Set([defaultLocale, "en"]);
let currentLocale = defaultLocale;

const getStoredLocale = () => {
  try {
    const storedLocale = window.localStorage.getItem("directory-language");
    return supportedLocales.has(storedLocale) ? storedLocale : null;
  } catch {
    return null;
  }
};

const storeLocale = (locale) => {
  try {
    window.localStorage.setItem("directory-language", locale);
  } catch {
    // Language switching still works when browser storage is unavailable.
  }
};

const resolveLocale = () => {
  const requestedLocale = new URLSearchParams(window.location.search).get("lang");
  if (requestedLocale === "en") return "en";
  if (requestedLocale === "zh" || requestedLocale === defaultLocale) return defaultLocale;
  return getStoredLocale() || defaultLocale;
};

const updateLocaleInUrl = (locale) => {
  const url = new URL(window.location.href);
  if (locale === defaultLocale) {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", locale);
  }
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
};

const localizeEntry = (entry) =>
  currentLocale === "en" && entryTranslations[entry.name]
    ? { ...entry, ...entryTranslations[entry.name] }
    : entry;

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
  const dateLocale = currentLocale === "en" ? "en-US" : "zh-CN";
  return {
    date: new Intl.DateTimeFormat(dateLocale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(parsed),
    time: new Intl.DateTimeFormat(dateLocale, {
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
              <span class="entry-info-label"><i data-lucide="${icon}" aria-hidden="true"></i>${escapeHtml(label)}</span>
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

const renderEntry = (sourceEntry) => {
  const copy = pageCopy[currentLocale];
  const entry = localizeEntry(sourceEntry);
  const localizedTones = toneLabels[currentLocale];
  const tone = localizedTones[entry.tone] ? entry.tone : "active";
  const href = safeHttpUrl(entry.url);
  const safeName = escapeHtml(entry.name);
  const safeAnalyticsName = escapeHtml(sourceEntry.name);
  const datetime = escapeHtml(String(entry.publishedAt).replace(" ", "T"));
  const publishedAt = formatPublishedAt(entry.publishedAt);
  const benefits = getBenefits(entry);
  const benefitTags = benefits.length
    ? benefits.map((benefit) => `<li>${escapeHtml(benefit)}</li>`).join("")
    : `<li>${escapeHtml(copy.noBenefits)}</li>`;
  const openLinkLabel = escapeHtml(copy.openLink.replace("{name}", entry.name));

  return `
    <article class="feed-item" data-tone="${tone}">
      <div class="feed-meta">
        <time datetime="${datetime}" aria-label="${escapeHtml(copy.publishedAt)} ${escapeHtml(entry.publishedAt)}">
          <span>${escapeHtml(publishedAt.date)}</span>
          <span>${escapeHtml(publishedAt.time)}</span>
        </time>
      </div>
      <a class="feed-card" href="${escapeHtml(href)}" target="_blank" rel="noreferrer" aria-label="${openLinkLabel}" data-umami-event="打开 ${safeAnalyticsName}">
        <div class="entry-content">
          <p class="entry-kind">${escapeHtml(entry.kind)} / ${escapeHtml(localizedTones[tone])}</p>
          <h3>${safeName}</h3>
          <p class="entry-description">${escapeHtml(entry.summary)}</p>
          <p class="entry-details">${escapeHtml(entry.details)}</p>
          <div class="entry-quota">
            ${quotaCell(copy.signupBonus, entry.signupBonus)}
            ${quotaCell(copy.dailyCheckin, entry.dailyCheckin)}
          </div>
          <div class="entry-info">
            ${infoRow("user-round-plus", copy.registration, entry.registration)}
            ${infoRow("sparkles", copy.models, entry.models)}
            ${infoRow("gauge", copy.experience, entry.experience)}
            ${infoRow("triangle-alert", copy.caution, entry.caveat)}
            <div class="entry-info-row">
              <span class="entry-info-label"><i data-lucide="gift" aria-hidden="true"></i>${escapeHtml(copy.benefits)}</span>
              <ul class="benefit-tags">${benefitTags}</ul>
            </div>
          </div>
        </div>
        <span class="entry-arrow" aria-hidden="true"><i data-lucide="arrow-up-right"></i></span>
      </a>
    </article>
  `;
};

const renderPage = () => {
  const copy = pageCopy[currentLocale];
  const githubLink = document.querySelector("[data-github-link]");
  const brandLink = document.querySelector("[data-brand-link]");
  const languageSwitcher = document.querySelector("[data-language-switcher]");
  const directorySummary = document.querySelector("[data-directory-summary]");
  const metaDescription = document.querySelector('meta[name="description"]');

  document.documentElement.lang = currentLocale;
  document.title = copy.documentTitle;
  metaDescription?.setAttribute("content", copy.metaDescription);
  applyText("[data-brand]", copy.brand);
  applyText("[data-eyebrow]", copy.eyebrow);
  applyText("[data-title]", copy.title);
  applyText("[data-intro]", copy.intro);
  applyText("[data-nav-copy]", copy.nav);
  applyText("[data-update-status]", copy.updateStatus);
  applyText("[data-site-count-label]", copy.siteCountLabel);
  applyText("[data-section-eyebrow]", copy.sectionEyebrow);
  applyText("[data-feed-title]", copy.feedTitle);
  applyText("[data-section-note]", copy.sectionNote);
  applyText("[data-footer]", copy.brand);
  applyText("[data-site-count]", String(siteConfig.entries.length).padStart(2, "0"));
  applyText("[data-last-updated]", `${copy.lastUpdated} ${siteConfig.lastUpdated.replaceAll("-", ".")}`);
  applyText("[data-disclaimer]", copy.disclaimer);

  brandLink?.setAttribute("aria-label", copy.backToTop);
  languageSwitcher?.setAttribute("aria-label", copy.languageLabel);
  directorySummary?.setAttribute("aria-label", copy.directoryLabel);
  document.querySelector(".site-nav")?.setAttribute("aria-label", copy.nav);

  if (githubLink) {
    githubLink.href = safeHttpUrl(siteConfig.githubUrl);
    githubLink.setAttribute("aria-label", copy.githubLabel);
    githubLink.setAttribute("title", copy.githubTitle);
  }

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.langOption === currentLocale));
  });

  document.querySelector("#feed-items").innerHTML = siteConfig.entries.map(renderEntry).join("");

  window.lucide?.createIcons();
};

const setLocale = (locale, { updateUrl = true } = {}) => {
  if (!supportedLocales.has(locale)) return;
  currentLocale = locale;
  storeLocale(locale);
  if (updateUrl) updateLocaleInUrl(locale);
  renderPage();
};

document.addEventListener("DOMContentLoaded", () => {
  currentLocale = resolveLocale();

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => setLocale(button.dataset.langOption));
  });

  renderPage();
});
