// i18n Module - Bilingual EN/CN
const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm",
    'hero.name': 'Khoo Zi Yi',
    'hero.cta1': 'Get In Touch',
    'hero.cta2': 'View Experience',
    'hero.scroll': 'Scroll',
    'about.title': 'About Me',
    'about.subtitle': 'Building the future of cross-border payments',
    'about.summary': 'Java Engineer at <strong>Ant International Group (Alipay+)</strong> with proven expertise in high-traffic cross-border payment marketing systems. Successfully built and maintained platforms serving <strong>15M+ users</strong> with mission-critical reliability. Recently promoted to Level 10 (P5) for consistently high performance. Currently pioneering <strong>AI-augmented development workflows</strong> and leading supplier integration architecture for the Alipay+ wallet ecosystem.',
    'about.counter1': 'Users Served',
    'about.counter2': 'Daily Traffic',
    'about.counter3': 'Performance Rating',
    'about.counter4': 'Engineer Level',
    'exp.title': 'Experience',
    'exp.subtitle': 'My professional journey',
    'exp.role1.title': 'Java Engineer (Level 10) - Voyager Supply Team',
    'exp.role1.date': 'Mar 2026 - Present',
    'exp.role1.details': '<li>Architected supplier integration platform enabling seamless onboarding of third-party vendors into the Alipay+ wallet ecosystem</li><li>Designed multi-tenant integration framework supporting diverse supplier APIs with contract standardization and protocol adaptation</li><li>Led wallet platform supply-side investment initiatives, coordinating cross-team deliverables</li><li>Pioneered AI-augmented development workflows, building custom AI Skills (MCP-based tooling) for automated system design, code generation, and integration testing</li><li>Developed reusable AI automation tools including SOFA RPC testing, DRM configuration management, and parameter center operations</li>',
    'exp.role2.title': 'Java Engineer (Level 9) - CN Cross-Border Marketing',
    'exp.role2.date': 'Aug 2024 - Feb 2026',
    'exp.role2.details': '<li>Built high-traffic cross-border marketing platform serving 15M+ Chinese outbound users with 8,000+ daily traffic</li><li>Owned end-to-end delivery of per-transaction discount campaigns including referral programs, promotional lottery events, and cumulative spending promotions</li><li>Designed viral referral system enabling user-to-user invitation with real-time reward distribution and anti-fraud validation</li><li>Developed campaign management platform for large-scale promotional events (Double 11, CNY) with high concurrency and graceful degradation</li><li>Built intelligent marketing push system with user segmentation, timing optimization, and A/B testing</li><li>Achieved performance ratings of 3.5 (2024) and 3.75 (2025), resulting in promotion from Level 9 to Level 10</li>',
    'exp.role3.title': 'IT Intern',
    'exp.role3.date': 'Oct 2022 - Jan 2023',
    'exp.role3.details': '<li>Conducted WiFi Onsite survey, delivering project 50% ahead of schedule</li><li>Developed 3 Power Apps (Referral, Survey, Request Tracking) improving operational efficiency by 20-30%</li><li>Built SharePoint site for Finance department, reducing processing time by 30%</li>',
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies I work with daily',
    'skills.cat1.title': 'Backend',
    'skills.cat1.desc': 'Java, Spring Boot, SOFA Stack, MyBatis',
    'skills.cat2.title': 'Distributed',
    'skills.cat2.desc': 'MQ, DRM, Service Mesh, Transactions',
    'skills.cat3.title': 'Databases',
    'skills.cat3.desc': 'MySQL, OceanBase, Redis, Tair, ES',
    'skills.cat4.title': 'AI & Tooling',
    'skills.cat4.desc': 'MCP, AI Skills, LLM, Prompt Eng.',
    'skills.bar1': 'Java & Spring Ecosystem',
    'skills.bar2': 'Distributed Systems',
    'skills.bar3': 'AI Engineering & MCP',
    'skills.bar4': 'System Architecture',
    'skills.bar5': 'Databases & Caching',
    'skills.bar6': 'DevOps & Cloud',
    'edu.title': 'Education',
    'edu.subtitle': 'Academic background',
    'edu.degree': 'Bachelor of Computer Science (Honours with Distinction)',
    'edu.university': 'Universiti Tunku Abdul Rahman (UTAR)',
    'edu.duration': 'June 2021 - June 2024',
    'edu.badge1': "President's List (6x)",
    'edu.badge2': 'Alibaba Cloud Certified',
    'edu.badge3': 'Hackathon 8th Place',
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's connect and discuss opportunities",
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'footer.built': 'Built with vanilla HTML, CSS & JavaScript',
    'footer.copy': '\u00a9 2026 Khoo Zi Yi'
  },
  cn: {
    'nav.about': '\u5173\u4e8e',
    'nav.experience': '\u5de5\u4f5c\u7ecf\u5386',
    'nav.skills': '\u6280\u672f\u80fd\u529b',
    'nav.education': '\u6559\u80b2\u80cc\u666f',
    'nav.contact': '\u8054\u7cfb\u6211',
    'hero.greeting': '\u4f60\u597d\uff0c\u6211\u662f',
    'hero.name': '邱紫瑜',
    'hero.cta1': '\u8054\u7cfb\u6211',
    'hero.cta2': '\u67e5\u770b\u7ecf\u5386',
    'hero.scroll': '\u5411\u4e0b\u6eda\u52a8',
    'about.title': '\u5173\u4e8e\u6211',
    'about.subtitle': '\u6784\u5efa\u8de8\u5883\u652f\u4ed8\u7684\u672a\u6765',
    'about.summary': '蚂蚁国际集团（Alipay+）<strong>Java工程师</strong>，在高流量跨境支付营销系统方面拥有丰富经验。成功构建并维护服务<strong>超过1500万用户</strong>的平台，确保关键任务的可靠性。因持续高绩效表现最近晋升至Level 10 (P5)。目前正在开拓<strong>AI增强开发工作流</strong>，并主Alipay+钱包生态系统的供应商集成架构。',
    'about.counter1': '\u670d\u52a1\u7528\u6237\u6570',
    'about.counter2': '\u65e5\u5747\u6d41\u91cf',
    'about.counter3': '\u7ee9\u6548\u8bc4\u5206',
    'about.counter4': '\u5de5\u7a0b\u5e08\u7b49\u7ea7',
    'exp.title': '\u5de5\u4f5c\u7ecf\u5386',
    'exp.subtitle': '\u6211\u7684\u804c\u4e1a\u65c5\u7a0b',
    'exp.role1.title': 'Java工程师 (Level 10) - 航海者供给团队',
    'exp.role1.date': '2026\u5e743\u6708 - \u81f3\u4eca',
    'exp.role1.details': '<li>\u67b6\u6784\u8bbe\u8ba1\u4f9b\u5e94\u5546\u96c6\u6210\u5e73\u53f0\uff0c\u5b9e\u73b0\u7b2c\u4e09\u65b9\u4f9b\u5e94\u5546\u65e0\u7f1d\u63a5\u5165Alipay+\u94b1\u5305\u751f\u6001\u7cfb\u7edf</li><li>\u8bbe\u8ba1\u591a\u79df\u6237\u96c6\u6210\u6846\u67b6\uff0c\u652f\u6301\u591a\u6837\u5316\u4f9b\u5e94\u5546API\u7684\u5408\u7ea6\u6807\u51c6\u5316\u548c\u534f\u8bae\u9002\u914d</li><li>\u4e3b\u5bfc\u94b1\u5305\u5e73\u53f0\u4f9b\u7ed9\u4fa7\u6295\u5165\u8ba1\u5212\uff0c\u534f\u8c03\u8de8\u56e2\u961f\u4ea4\u4ed8</li><li>\u5f00\u521b AI \u589e\u5f3a\u5f00\u53d1\u5de5\u4f5c\u6d41\uff0c\u6784\u5efa\u57fa\u4e8e MCP \u7684\u81ea\u5b9a\u4e49 AI Skills\uff0c\u7528\u4e8e\u81ea\u52a8\u5316\u7cfb\u7edf\u8bbe\u8ba1\u3001\u4ee3\u7801\u751f\u6210\u548c\u96c6\u6210\u6d4b\u8bd5</li><li>\u5f00\u53d1\u53ef\u590d\u7528\u7684AI\u81ea\u52a8\u5316\u5de5\u5177\uff0c\u5305\u62ecSOFA RPC\u6d4b\u8bd5\u3001DRM\u914d\u7f6e\u7ba1\u7406\u548c\u53c2\u6570\u4e2d\u5fc3\u64cd\u4f5c</li>',
    'exp.role2.title': 'Java工程师 (Level 9) - 中国跨境营销',
    'exp.role2.date': '2024\u5e748\u6708 - 2026\u5e742\u6708',
    'exp.role2.details': '<li>构建高流量跨境营销平台，服务超过1500万中国出境用户，日均流量8000+</li><li>端到端交付笔笔减营销活动，包括人传人、大促抽奖、累额冲单等</li><li>设计裂变式人传人系统，实现用户间邀请与实时奖励发放及反欺诈验证</li><li>开发大促活动管理平台（双11、春节），支持高并发和优雅降级</li><li>构建智能营销Push系统，支持用户分层、发送时机优化和A/B测试</li><li>绩效评分达 3.5（2024）和 3.75（2025），成功从Level 9晋升至Level 10</li>',
    'exp.role3.title': 'IT\u5b9e\u4e60\u751f',
    'exp.role3.date': '2022\u5e7410\u6708 - 2023\u5e741\u6708',
    'exp.role3.details': '<li>\u5b8c\u6210WiFi\u73b0\u573a\u8c03\u67e5\uff0c\u63d0\u524d50%\u4ea4\u4ed8\u9879\u76ee</li><li>\u5f00\u53d13\u4e2aPower Apps\uff08\u63a8\u8350\u3001\u8c03\u67e5\u3001\u8bf7\u6c42\u8ddf\u8e2a\uff09\uff0c\u63d0\u5347\u8fd0\u8425\u6548\u738720-30%</li><li>\u4e3a\u8d22\u52a1\u90e8\u95e8\u6784\u5efaSharePoint\u7ad9\u70b9\uff0c\u51cf\u5c11\u5904\u7406\u65f6\u95f430%</li>',
    'skills.title': '\u6280\u672f\u80fd\u529b',
    'skills.subtitle': '\u6211\u6bcf\u5929\u4f7f\u7528\u7684\u6280\u672f\u6808',
    'skills.cat1.title': '\u540e\u7aef\u5f00\u53d1',
    'skills.cat1.desc': 'Java, Spring Boot, SOFA\u6808, MyBatis',
    'skills.cat2.title': '\u5206\u5e03\u5f0f\u7cfb\u7edf',
    'skills.cat2.desc': '\u6d88\u606f\u961f\u5217, DRM, \u670d\u52a1\u7f51\u683c, \u5206\u5e03\u5f0f\u4e8b\u52a1',
    'skills.cat3.title': '\u6570\u636e\u5e93',
    'skills.cat3.desc': 'MySQL, OceanBase, Redis, Tair, ES',
    'skills.cat4.title': 'AI\u4e0e\u5de5\u5177',
    'skills.cat4.desc': 'MCP, AI Skills, LLM, \u63d0\u793a\u5de5\u7a0b',
    'skills.bar1': 'Java & Spring \u751f\u6001\u7cfb\u7edf',
    'skills.bar2': '\u5206\u5e03\u5f0f\u7cfb\u7edf',
    'skills.bar3': 'AI\u5de5\u7a0b & MCP',
    'skills.bar4': '\u7cfb\u7edf\u67b6\u6784',
    'skills.bar5': '\u6570\u636e\u5e93 & \u7f13\u5b58',
    'skills.bar6': 'DevOps & \u4e91\u8ba1\u7b97',
    'edu.title': '\u6559\u80b2\u80cc\u666f',
    'edu.subtitle': '\u5b66\u672f\u7ecf\u5386',
    'edu.degree': '\u8ba1\u7b97\u673a\u79d1\u5b66\u5b66\u58eb\uff08\u4f18\u7b49\u8363\u8a89\u5b66\u4f4d\uff09',
    'edu.university': '\u62c9\u66fc\u5927\u5b66 (UTAR)',
    'edu.duration': '2021\u5e746\u6708 - 2024\u5e746\u6708',
    'edu.badge1': '\u6821\u957f\u5609\u8bb8\u540d\u5355 (6\u6b21)',
    'edu.badge2': '\u963f\u91cc\u4e91\u8ba4\u8bc1',
    'edu.badge3': '\u9ed1\u5ba2\u677e\u7b2c8\u540d',
    'contact.title': '\u8054\u7cfb\u6211',
    'contact.subtitle': '\u8ba9\u6211\u4eec\u4fdd\u6301\u8054\u7cfb\uff0c\u63a2\u8ba8\u5408\u4f5c\u673a\u4f1a',
    'contact.email.label': '\u90ae\u7bb1',
    'contact.phone.label': '\u7535\u8bdd',
    'footer.built': '\u7528\u539f\u751f HTML, CSS & JavaScript \u6784\u5efa',
    'footer.copy': '\u00a9 2026 邱紫瑜'
  }
};

let currentLang = 'en';

export function initI18n() {
  // Load saved language
  currentLang = localStorage.getItem('lang') || 'en';
  applyLanguage(currentLang);
  updateToggleUI();

  // Bind language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        applyLanguage(lang);
        updateToggleUI();
      }
    });
  });
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Simple text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // HTML content (for lists)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'cn' ? 'zh-CN' : 'en';
}

function updateToggleUI() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

export function getCurrentLang() {
  return currentLang;
}
