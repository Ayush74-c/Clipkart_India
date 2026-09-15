const DEFAULT_CONFIG = {
  theme: 'dark-premium',
  hero: {
    headline: { en:"Breaking News. Viral Updates. Real Impact.", hi:"ब्रेकिंग स्टोरीज़। वायरल अपडेट्स। असली असर।", hinglish:"Breaking News. Viral Updates. Real Impact.", ur:"بریکنگ اسٹوریز۔ وائرل اپڈیٹس۔ حقیقی اثر۔" },
        desc: { en:"• Clipkart_India Brings Truth to Your Feed, the Impact, and the Stories That Deserve to Be Heard.\n• Stay Informed, Stay Connected, and Stay Ahead with the Latest News, Trending Stories, and Real-Time Updates from Around the World.",
          hi:"• Clipkart_India Brings Truth to Your Feed, the Impact, and the Stories That Deserve to Be Heard.\n• Stay Informed, Stay Connected, and Stay Ahead with the Latest News, Trending Stories, and Real-Time Updates from Around the World.",
          hinglish:"• Clipkart_India Brings Truth to Your Feed, the Impact, and the Stories That Deserve to Be Heard.\n• Stay Informed, Stay Connected, and Stay Ahead with the Latest News, Trending Stories, and Real-Time Updates from Around the World.",
          ur:"• Clipkart_India Brings Truth to Your Feed, the Impact, and the Stories That Deserve to Be Heard.\n• Stay Informed, Stay Connected, and Stay Ahead with the Latest News, Trending Stories, and Real-Time Updates from Around the World." },
    stat1:"50k+", stat1label:{en:"Followers",hi:"फॉलोअर्स",hinglish:"Followers",ur:"فالوورز"},
    stat2:"40+ Millions", stat2label:{en:"Monthly Views",hi:"मासिक व्यूज़",hinglish:"Monthly Views",ur:"ماہانہ ویوز"},
    stat3:"Daily", stat3label:{en:"News & Viral Updates",hi:"न्यूज़ और वायरल अपडेट्स",hinglish:"News & Viral Updates",ur:"خبریں اور وائرل اپڈیٹس"},
    ctaPortfolioLabel:{en:"View Portfolio",hi:"पोर्टफोलियो देखें",hinglish:"Portfolio Dekhein",ur:"پورٹ فولیو دیکھیں"},
    ctaPortfolioUrl:"#socialQuick"
  },
  about: {
    title:{en:"Who We Are",hi:"हम कौन हैं",hinglish:"Hum Kaun Hain",ur:"ہم کون ہیں"},
    desc:{en:"Clipkart_india is an independent digital media platform focused on delivering timely news, public-interest News, and trending updates through engaging social media content.",
          hi:"Clipkart_india एक स्वतंत्र डिजिटल मीडिया प्लेटफ़ॉर्म है जो सामयिक समाचार, जनहित की कहानियाँ और ट्रेंडिंग अपडेट सोशल मीडिया कंटेंट के ज़रिए पहुंचाता है।",
          hinglish:"Clipkart_india ek independent digital media platform hai jo timely news, public-interest News, aur trending updates ko engaging social media content ke through deliver karta hai.",
          ur:"Clipkart_india ایک آزاد ڈیجیٹل میڈیا پلیٹ فارم ہے جو بروقت خبریں، عوامی دلچسپی کی کہانیاں اور ٹرینڈنگ اپڈیٹس سوشل میڈیا مواد کے ذریعے پیش کرتا ہے۔"},
    goal:{en:"Our goal is to make important information accessible, easy to understand, and relevant to today's digital audience.",
          hi:"हमारा लक्ष्य महत्वपूर्ण जानकारी को सुलभ, समझने में आसान और आज के डिजिटल दर्शकों के लिए प्रासंगिक बनाना है।",
          hinglish:"Hamara goal important information ko accessible, samajhne mein easy, aur aaj ke digital audience ke liye relevant banana hai.",
          ur:"ہمارا مقصد اہم معلومات کو قابل رسائی، سمجھنے میں آسان اور آج کے ڈیجیٹل سامعین کے لیے متعلقہ بنانا ہے۔"}
  },
  coverage:[
    {en:"Politics & Public Affairs",hi:"राजनीति और लोक मामले",hinglish:"Politics & Public Affairs",ur:"سیاست اور عوامی امور"},
    {en:"Social Issues",hi:"सामाजिक मुद्दे",hinglish:"Social Issues",ur:"سماجی مسائل"},
    {en:"Government Policies",hi:"सरकारी नीतियाँ",hinglish:"Government Policies",ur:"حکومتی پالیسیاں"},
    {en:"Viral & Trending News",hi:"वायरल और ट्रेंडिंग स्टोरीज़",hinglish:"Viral & Trending News",ur:"وائرل اور ٹرینڈنگ اسٹوریز"},
    {en:"Public Reactions & Ground Reports",hi:"जनप्रतिक्रिया और ग्राउंड रिपोर्ट्स",hinglish:"Public Reactions & Ground Reports",ur:"عوامی ردعمل اور گراؤنڈ رپورٹس"},
    {en:"National News Updates",hi:"राष्ट्रीय समाचार अपडेट",hinglish:"National News Updates",ur:"قومی خبریں"}
  ],
  stats:[
    {value:"50k+", label:{en:"Instagram Followers",hi:"इंस्टाग्राम फॉलोअर्स",hinglish:"Instagram Followers",ur:"انسٹاगرام فالوورز"}},
    {value:"40+ Millions", label:{en:"Monthly Reach",hi:"मासिक पहुंच",hinglish:"Monthly Reach",ur:"ماہانہ رسائی"}},
    {value:"High", label:{en:"Engagement — Active Audience Across India",hi:"जुड़ाव — पूरे भारत में सक्रिय दर्शक",hinglish:"Engagement — Active Audience Across India",ur:"مصروفیت — پورے ہندوستان میں فعال سامعین"}},
    {value:"Daily", label:{en:"News & Content",hi:"समाचार और कंटेंट",hinglish:"News & Content",ur:"خبریں اور مواد"}}
  ],
  socials:[
    {id:'instagram', name:'Instagram', icon:'instagram', url:'https://www.instagram.com/clipkart_india?stkn=czJpbjhtdDYyN3By', enabled:true},
    {id:'facebook', name:'Facebook', icon:'facebook', url:'https://www.facebook.com/61588800056113/', enabled:true},
    {id:'youtube', name:'YouTube', icon:'youtube', url:'https://youtube.com/@clipkart18?si=X13_P1KOR5enqfFw', enabled:true},
    
    {id:'telegram', name:'Telegram', icon:'telegram', url:'https://t.me/clipkart_india', enabled:true},
    {id:'x', name:'X / Twitter', icon:'x', url:'https://x.com/Clipkart_India', enabled:true},
    {id:'whatsapp', name:'WhatsApp', icon:'whatsapp', url:'', enabled:false},
  ],
  contact:{email:'clipkartofficial824@gmail.com', instagramDm:'https://www.instagram.com/clipkart_india?stkn=czJpbjhtdDYyN3By', messenger:'https://www.facebook.com/61588800056113/', whatsapp:'',},
  reels:{
    instagram:[],
    facebook:[]
  }
};

const I18N_STATIC = {
  en:{ "nav.home":"Home","nav.about":"About","nav.coverage":"Coverage","nav.stats":"Stats","nav.reels":"Reels","nav.contact":"Contact",
    "hero.kicker":"Digital News · Live on Social","hero.ctaContact":"Contact Us",
    "social.eyebrow":"Find us everywhere",
    "reels.title":"Latest Reels","reels.sub":"Fresh from Instagram and Facebook — tap any card to watch on the original platform.",
    "reels.instagram":"Instagram Latest Reels","reels.facebook":"Facebook Latest Reels","reels.empty":"No reels added yet.",
    "contact.email":"Email","contact.igdm":"Instagram DM","contact.messenger":"Facebook Messenger","contact.x":"X","contact.whatsapp":"WhatsApp",
    "contact.comingsoon":"Coming soon", "footer.privacy":"Privacy", "footer.terms":"Terms" },
  hi:{ "nav.home":"होम","nav.about":"हमारे बारे में","nav.coverage":"कवरेज","nav.stats":"आंकड़े","nav.reels":"रील्स","nav.contact":"संपर्क करें",
    "hero.kicker":"डिजिटल न्यूज़ · सोशल पर लाइव","hero.ctaContact":"संपर्क करें",
    "social.eyebrow":"हमें हर जगह खोजें",
    "reels.title":"नवीनतम रील्स","reels.sub":"इंस्टाग्राम और फेसबुक से ताज़ा — मूल प्लेटफ़ॉर्म पर देखने के लिए किसी भी कार्ड पर टैप करें।",
    "reels.instagram":"इंस्टाग्राम नवीनतम रील्स","reels.facebook":"फेसबुक नवीनतम रील्स","reels.empty":"अभी तक कोई रील नहीं जोड़ी गई।",
    "contact.whatsapp":"व्हाट्सएप","contact.email":"ईमेल","contact.igdm":"इंस्टाग्राम डीएम","contact.messenger":"फेसबुक मैसेंजर","contact.x":"एक्स",
    "contact.comingsoon":"जल्द आ रहा है", "footer.privacy":"गोपनीयता", "footer.terms":"नियम" },
  hinglish:{ "nav.home":"Home","nav.about":"About","nav.coverage":"Coverage","nav.stats":"Stats","nav.reels":"Reels","nav.contact":"Contact",
    "hero.kicker":"Digital News · Social pe Live","hero.ctaContact":"Contact Karein",
    "social.eyebrow":"Humein har jagah dhoondein",
    "reels.title":"Latest Reels","reels.sub":"Instagram aur Facebook se fresh — original platform pe dekhne ke liye kisi bhi card pe tap karein.",
    "reels.instagram":"Instagram Latest Reels","reels.facebook":"Facebook Latest Reels","reels.empty":"Abhi tak koi reel add nahi hui.",
    "contact.whatsapp":"WhatsApp","contact.email":"Email","contact.igdm":"Instagram DM","contact.messenger":"Facebook Messenger","contact.x":"X",
    "contact.comingsoon":"Jald aa raha hai", "footer.privacy":"Privacy", "footer.terms":"Terms" },
  ur:{ "nav.home":"ہوم","nav.about":"ہمارے بارے میں","nav.coverage":"کوریج","nav.stats":"اعداد و شمار","nav.reels":"ریلز","nav.contact":"رابطہ کریں",
    "hero.kicker":"ڈیجیٹل نیوز · سوشل پر لائیو","hero.ctaContact":"رابطہ کریں",
    "social.eyebrow":"ہمیں ہر جگہ تلاش کریں",
    "reels.title":"تازہ ترین ریلز","reels.sub":"انسٹاگرام اور فیس بک سے تازہ — اصل پلیٹ فارم پر دیکھنے کے لیے کسی بھی کارڈ پر ٹیپ کریں۔",
    "reels.instagram":"انسٹاگرام تازہ ترین ریلز","reels.facebook":"فیس بک تازہ ترین ریلز","reels.empty":"ابھی تک کوئی ریل شامل نہیں کی گئی۔",
    "contact.whatsapp":"واٹس ایپ","contact.email":"ای میل","contact.phone":"فون کال","contact.igdm":"انسٹاگرام ڈی ایم","contact.messenger":"فیس بک میسنجر","contact.x":"ایکس",
    "contact.comingsoon":"جلد آ رہا ہے", "footer.privacy":"رازداری", "footer.terms":"شرائط" }
};

let CONFIG = null;
let LANG = 'en';
const PLATFORM_ICONS = {instagram:'instagram',facebook:'facebook',youtube:'youtube',x:'x',tiktok:'tiktok',telegram:'telegram',whatsapp:'whatsapp',linkedin:'linkedin',threads:'threads',snapchat:'snapchat'};
const PLATFORM_ICON_COLORS = {instagram:'E4405F',facebook:'1877F2',youtube:'FF0000',x:'FFFFFF',tiktok:'FFFFFF',telegram:'26A5E4',whatsapp:'25D366',linkedin:'0A66C2',threads:'FFFFFF',snapchat:'FFFC00'};

function socialIconMarkup(platform, fallback){
  const slug = PLATFORM_ICONS[platform] || PLATFORM_ICONS[fallback];
  if(!slug) return '<span class="social-icon-fallback" aria-hidden="true">↗</span>';
  const color = PLATFORM_ICON_COLORS[slug] || 'FFFFFF';
  return `<img class="social-icon" src="https://cdn.simpleicons.org/${escapeAttr(slug)}/${color}" alt="" aria-hidden="true">`;
}

const TOPIC_ICONS = [
  '<path d="M4 20h16M6 17h12M8 14h8M10 4h4l1 4H9l1-4Z"/><path d="M12 8v6"/>',
  '<circle cx="12" cy="8" r="3"/><circle cx="5.5" cy="10" r="2.5"/><circle cx="18.5" cy="10" r="2.5"/><path d="M3 20c.4-3 1.3-5 2.5-5s2.1 2 2.5 5M16 20c.4-3 1.3-5 2.5-5s2.1 2 2.5 5M8 20c.5-3.8 1.8-6 4-6s3.5 2.2 4 6"/>',
  '<path d="M4 20V9l8-5 8 5v11M2 20h20M8 20v-6h8v6M9 9h6"/>',
  '<path d="m4 16 4-5 3 3 5-7 4 5"/><path d="M4 20h16"/><circle cx="8" cy="11" r="1"/><circle cx="16" cy="7" r="1"/>',
  '<path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9h8M8 12h5"/><path d="M17 5v4l2-1 2 1V5"/>',
  '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2 2.2 3 4.9 3 8s-1 5.8-3 8c-2-2.2-3-4.9-3-8s1-5.8 3-8Z"/>'
];

function topicIconMarkup(index){
  const paths = TOPIC_ICONS[index % TOPIC_ICONS.length];
  return `<span class="topic-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths}</svg></span>`;
}

/* ================================================================
   STORAGE HELPERS  (window.storage — shared site config, no custom backend)
   ================================================================ */
async function loadConfig(){
  try{
    const res = await window.storage.get('site-config', true);
    if(res && res.value){
      const config = JSON.parse(res.value);
      const oldDesc = 'Clipkart_india is a fast-growing digital news platform delivering trending News, political updates, social issues, and viral content to audiences across India.';
      if(config.hero && config.hero.desc && config.hero.desc.en === oldDesc){
        config.hero.desc = JSON.parse(JSON.stringify(DEFAULT_CONFIG.hero.desc));
        await saveConfig(config);
      }
      return config;
    }
  }catch(e){ /* not found yet */ }
  return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}
async function saveConfig(cfg){
  try{ await window.storage.set('site-config', JSON.stringify(cfg), true); }
  catch(e){ console.error('save failed', e); alert('Could not save — please try again.'); }
}
async function getAuth(){
  try{
    const res = await window.storage.get('admin-auth', true);
    if(res && res.value) return JSON.parse(res.value);
  }catch(e){}
  return null;
}
async function setAuth(obj){
  try{ await window.storage.set('admin-auth', JSON.stringify(obj), true); }catch(e){ console.error(e); }
}
async function sha256(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

/* ================================================================
   i18n helpers
   ================================================================ */
function t(field, lang){
  lang = lang || LANG;
  if(field == null) return '';
  if(typeof field === 'string') return field;
  return field[lang] || field.en || '';
}
function applyStaticI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    // dynamic hero/about fields are set separately; static nav/etc from dict
    if(I18N_STATIC[LANG] && I18N_STATIC[LANG][key]){
      el.textContent = I18N_STATIC[LANG][key];
    }
  });
  document.documentElement.setAttribute('lang', LANG === 'ur' ? 'ur' : (LANG==='hi'?'hi':'en'));
  document.documentElement.setAttribute('dir', LANG === 'ur' ? 'rtl' : 'ltr');
}

/* ================================================================
   RENDER — public site
   ================================================================ */
function renderAll(){
  document.getElementById('themeSelect').value = CONFIG.theme;
  document.documentElement.setAttribute('data-theme', CONFIG.theme);
  applyStaticI18n();
  document.querySelectorAll('[data-social-brand]').forEach(el=>{
    el.innerHTML = socialIconMarkup(el.dataset.socialBrand);
  });

  // hero
  document.querySelector('[data-i18n="hero.headline"]').textContent = t(CONFIG.hero.headline);
  document.querySelector('[data-i18n="hero.desc"]').textContent = t(CONFIG.hero.desc);
  document.querySelector('[data-i18n="hero.stat1"]').textContent = CONFIG.hero.stat1;
  document.querySelector('[data-i18n="hero.stat1label"]').textContent = t(CONFIG.hero.stat1label);
  document.querySelector('[data-i18n="hero.stat2"]').textContent = CONFIG.hero.stat2;
  document.querySelector('[data-i18n="hero.stat2label"]').textContent = t(CONFIG.hero.stat2label);
  document.querySelector('[data-i18n="hero.stat3"]').textContent = CONFIG.hero.stat3;
  document.querySelector('[data-i18n="hero.stat3label"]').textContent = t(CONFIG.hero.stat3label);
  // about
  document.querySelector('[data-i18n="about.title"]').textContent = t(CONFIG.about.title);
  document.querySelector('[data-i18n="about.desc"]').textContent = t(CONFIG.about.desc);
  document.querySelector('[data-i18n="about.goal"]').textContent = t(CONFIG.about.goal);

  // coverage
  const covGrid = document.getElementById('coverageGrid');
  covGrid.innerHTML = CONFIG.coverage.map((c,i)=>`<div class="cov-card">${topicIconMarkup(i)}<h3>${escapeHtml(t(c))}</h3></div>`).join('');

  // stats
  const statsGrid = document.getElementById('statsGrid');
  statsGrid.innerHTML = CONFIG.stats.map(s=>`<div class="stat-card"><b>${escapeHtml(s.value)}</b><span>${escapeHtml(t(s.label))}</span></div>`).join('');

  // socials (quick links + footer + floating dock)
  const enabledSocials = CONFIG.socials.filter(s=>s.enabled && s.url);
  document.getElementById('socialStrip').innerHTML = CONFIG.socials.map(s=>{
    const live = s.enabled && s.url;
    return `<a class="social-chip ${live?'':'disabled'}" href="${live?escapeAttr(s.url):'#'}" target="${live?'_blank':'_self'}" rel="noopener">
      <span class="ic">${socialIconMarkup(s.id, s.icon)}</span><span>${escapeHtml(s.name)}</span>
    </a>`;
  }).join('');
  document.getElementById('footerSocials').innerHTML = enabledSocials.map(s=>
    `<a class="ic" href="${escapeAttr(s.url)}" target="_blank" rel="noopener" title="${escapeAttr(s.name)}">${socialIconMarkup(s.id, s.icon)}</a>`
  ).join('');
  document.getElementById('footerLinks').innerHTML =
    `<a href="#privacy-policy">${I18N_STATIC[LANG]['footer.privacy'] || 'Privacy Policy'}</a>
     <a href="#terms-and-conditions">${I18N_STATIC[LANG]['footer.terms'] === 'Terms' ? 'Terms and Conditions' : (I18N_STATIC[LANG]['footer.terms'] || 'Terms and Conditions')}</a>`;

  observeReveal();
}

function waLink(numOrUrl){
  if(/^https?:\/\//.test(numOrUrl)) return numOrUrl;
  const digits = numOrUrl.replace(/[^0-9]/g,'');
  return 'https://wa.me/'+digits;
}
function placeholderThumb(platform){
  const bg = platform==='facebook' ? '1877F2' : 'E1306C';
  return `https://placehold.co/300x400/${bg}/ffffff?text=${platform==='facebook'?'FB+Reel':'IG+Reel'}`;
}
function escapeHtml(s){ return (s||'').toString().replace(/[&<>"']/g, m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m])); }
function escapeAttr(s){ return escapeHtml(s); }

function observeReveal(){
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.15});
  els.forEach(el=>io.observe(el));
}

/* ================================================================
   THEME / LANGUAGE controls
   ================================================================ */
document.getElementById('themeSelect').addEventListener('change', async (e)=>{
  CONFIG.theme = e.target.value;
  document.documentElement.setAttribute('data-theme', CONFIG.theme);
  await saveConfig(CONFIG);
});
document.getElementById('langSelect').addEventListener('change', (e)=>{
  LANG = e.target.value;
  renderAll();
});
document.getElementById('hamburgerBtn').addEventListener('click', ()=>{
  document.body.classList.toggle('menu-open');
});
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click', ()=>document.body.classList.remove('menu-open')));

/* ================================================================
   CUSTOM CURSOR (desktop only)
   ================================================================ */
(function initCursor(){
  if(window.matchMedia('(hover:none),(pointer:coarse)').matches) return;
  document.body.classList.add('cursor-active');
  const dot=document.getElementById('cursorDot'), ring=document.getElementById('cursorRing');
  let rx=0, ry=0, mx=0, my=0;
  window.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
  function loop(){ rx += (mx-rx)*.18; ry += (my-ry)*.18; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); }
  loop();
  document.querySelectorAll('a,button,.reel-card,input,select,textarea').forEach(el=>{
    el.addEventListener('mouseenter', ()=>{ ring.style.width='46px'; ring.style.height='46px'; });
    el.addEventListener('mouseleave', ()=>{ ring.style.width='34px'; ring.style.height='34px'; });
  });
})();


/* ================================================================
   ADMIN ROUTING
   ================================================================ */
function isAdminRoute(){ return location.hash.startsWith('#/admin_clipkart'); }
async function routeCheck(){
  if(isAdminRoute()){
    document.getElementById('publicRoot').classList.add('hidden');
    document.getElementById('adminRoot').classList.add('active');
    const session = sessionStorage.getItem('ck_admin_session_placeholder'); // in-memory-ish flag only
    if(window.__adminAuthed){ showDashboard(); } else { showLogin(); }
  } else {
    document.getElementById('publicRoot').classList.remove('hidden');
    document.getElementById('adminRoot').classList.remove('active');
  }
}
window.addEventListener('hashchange', routeCheck);
document.getElementById('backToSiteFromLogin').addEventListener('click', ()=>{ location.hash='#/'; });

function showLogin(){
  document.getElementById('adminLoginView').style.display='block';
  document.getElementById('adminDashboardView').style.display='none';
}
function showDashboard(){
  document.getElementById('adminLoginView').style.display='none';
  document.getElementById('adminDashboardView').style.display='block';
  populateAdminForms();
}

document.getElementById('showForgot').addEventListener('click', ()=>{
  document.getElementById('forgotBox').style.display = document.getElementById('forgotBox').style.display==='none' ? 'block':'none';
});

document.getElementById('loginSubmit').addEventListener('click', async ()=>{
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value;
  const errBox = document.getElementById('loginError');
  errBox.style.display='none';
  let auth = await getAuth();
  if(!auth){
    // first-run setup: whatever is entered now becomes the fixed admin credentials
    const hash = await sha256(pass);
    auth = { email: email || 'admin@clipkartindia.com', passHash: hash, recoveryHash: null };
    await setAuth(auth);
  }
  const hash = await sha256(pass);
  if((email===auth.email || email==='') && hash===auth.passHash){
    window.__adminAuthed = true;
    showDashboard();
  } else {
    errBox.textContent = 'Incorrect email or password.';
    errBox.style.display='block';
  }
});

document.getElementById('resetSubmit').addEventListener('click', async ()=>{
  const code = document.getElementById('recoveryCodeInput').value;
  const newPass = document.getElementById('newPasswordInput').value;
  const auth = await getAuth();
  const errBox = document.getElementById('loginError');
  if(!auth || !auth.recoveryHash){ errBox.textContent='No recovery code has been set yet — sign in and set one under Security.'; errBox.style.display='block'; return; }
  const codeHash = await sha256(code);
  if(codeHash === auth.recoveryHash){
    auth.passHash = await sha256(newPass);
    await setAuth(auth);
    errBox.style.color='var(--green)';
    errBox.textContent='Password reset. You can sign in now.';
    errBox.style.display='block';
  } else {
    errBox.style.color='#e0473b';
    errBox.textContent='Recovery code incorrect.';
    errBox.style.display='block';
  }
});

document.getElementById('logoutBtn').addEventListener('click', ()=>{
  window.__adminAuthed=false;
  location.hash='#/';
});
document.getElementById('previewBtn').addEventListener('click', (e)=>{
  e.preventDefault();
  window.open(location.href.split('#')[0], '_blank');
});

/* ================================================================
   ADMIN TABS
   ================================================================ */
const ADMIN_TABS = [
  {id:'hero', label:'Hero'}, {id:'about', label:'About'}, {id:'coverage', label:'Coverage'},
  {id:'stats', label:'Stats'}, {id:'social', label:'Social'}, {id:'contact', label:'Contact'},
  {id:'reels', label:'Reels'}, {id:'theme', label:'Theme'}, {id:'security', label:'Security'}
];
document.getElementById('adminTabs').innerHTML = ADMIN_TABS.map((tab,i)=>
  `<button class="tab-btn ${i===0?'active':''}" data-tab="${tab.id}">${tab.label}</button>`).join('');
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`.tab-pane[data-pane="${btn.dataset.tab}"]`).classList.add('active');
  });
});

function populateAdminForms(){
  document.getElementById('f_heroHeadline').value = t(CONFIG.hero.headline,'en');
  document.getElementById('f_heroDesc').value = t(CONFIG.hero.desc,'en');
  document.getElementById('f_stat1').value = CONFIG.hero.stat1;
  document.getElementById('f_stat1l').value = t(CONFIG.hero.stat1label,'en');
  document.getElementById('f_stat2').value = CONFIG.hero.stat2;
  document.getElementById('f_stat2l').value = t(CONFIG.hero.stat2label,'en');
  document.getElementById('f_stat3').value = CONFIG.hero.stat3;
  document.getElementById('f_stat3l').value = t(CONFIG.hero.stat3label,'en');
  document.getElementById('f_ctaPortfolioLabel').value = t(CONFIG.hero.ctaPortfolioLabel,'en');
  document.getElementById('f_ctaPortfolioUrl').value = CONFIG.hero.ctaPortfolioUrl;

  document.getElementById('f_aboutTitle').value = t(CONFIG.about.title,'en');
  document.getElementById('f_aboutDesc').value = t(CONFIG.about.desc,'en');
  document.getElementById('f_aboutGoal').value = t(CONFIG.about.goal,'en');

  document.getElementById('coverageAdminList').innerHTML = CONFIG.coverage.map((c,i)=>`
    <div class="row-item"><input value="${escapeAttr(t(c,'en'))}" data-idx="${i}" class="cov-edit" style="flex:1;background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:8px 10px;">
    <button class="small-btn danger" data-remove-cov="${i}">Remove</button></div>`).join('');
  document.querySelectorAll('.cov-edit').forEach(inp=>inp.addEventListener('change', async ()=>{
    CONFIG.coverage[inp.dataset.idx].en = inp.value; CONFIG.coverage[inp.dataset.idx].hi = inp.value; CONFIG.coverage[inp.dataset.idx].hinglish = inp.value; CONFIG.coverage[inp.dataset.idx].ur = inp.value;
    await saveConfig(CONFIG); renderAll();
  }));
  document.querySelectorAll('[data-remove-cov]').forEach(b=>b.addEventListener('click', async ()=>{
    CONFIG.coverage.splice(+b.dataset.removeCov,1); await saveConfig(CONFIG); renderAll(); populateAdminForms();
  }));

  document.getElementById('statsAdminList').innerHTML = CONFIG.stats.map((s,i)=>`
    <div class="admin-grid" style="margin-bottom:10px;">
      <input value="${escapeAttr(s.value)}" data-stat-val="${i}" placeholder="Value" style="padding:8px 10px;background:var(--surface-2);border:1px solid var(--border);border-radius:8px;">
      <input value="${escapeAttr(t(s.label,'en'))}" data-stat-label="${i}" placeholder="Label" style="padding:8px 10px;background:var(--surface-2);border:1px solid var(--border);border-radius:8px;">
    </div>`).join('');

  document.getElementById('socialAdminList').innerHTML = CONFIG.socials.map((s,i)=>`
    <div class="row-item">
      <div class="tag-toggle ${s.enabled?'on':''}" data-toggle-social="${i}"><div class="knob"></div></div>
      <span class="admin-social-name" style="width:110px;">${socialIconMarkup(s.id, s.icon)} ${escapeHtml(s.name)}</span>
      <input value="${escapeAttr(s.url)}" data-social-url="${i}" placeholder="https://..." style="flex:1;background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:8px 10px;">
      <button class="small-btn danger" data-remove-social="${i}">Remove</button>
    </div>`).join('');
  document.querySelectorAll('[data-toggle-social]').forEach(t2=>t2.addEventListener('click', async ()=>{
    const i=t2.dataset.toggleSocial; CONFIG.socials[i].enabled=!CONFIG.socials[i].enabled; await saveConfig(CONFIG); renderAll(); populateAdminForms();
  }));
  document.querySelectorAll('[data-social-url]').forEach(inp=>inp.addEventListener('change', async ()=>{
    CONFIG.socials[inp.dataset.socialUrl].url = inp.value; await saveConfig(CONFIG); renderAll();
  }));
  document.querySelectorAll('[data-remove-social]').forEach(b=>b.addEventListener('click', async ()=>{
    CONFIG.socials.splice(+b.dataset.removeSocial,1); await saveConfig(CONFIG); renderAll(); populateAdminForms();
  }));

  document.getElementById('f_contactWhatsapp').value = CONFIG.contact.whatsapp;
  document.getElementById('f_contactEmail').value = CONFIG.contact.email;
  document.getElementById('f_contactIgDm').value = CONFIG.contact.instagramDm;
  document.getElementById('f_contactMessenger').value = CONFIG.contact.messenger;

  document.getElementById('igAdminList').innerHTML = renderAdminReelList(CONFIG.reels.instagram, 'instagram');
  document.getElementById('fbAdminList').innerHTML = renderAdminReelList(CONFIG.reels.facebook, 'facebook');
  bindReelRemovers();

  document.getElementById('f_defaultTheme').value = CONFIG.theme;
  document.getElementById('f_reelDate').value = new Date().toISOString().slice(0,10);
}

function renderAdminReelList(list, platform){
  if(!list.length) return `<p style="color:var(--text-muted);font-size:13px;">No reels yet.</p>`;
  return list.map((r,i)=>`<div class="row-item">
    <img src="${escapeAttr(r.thumb||placeholderThumb(platform))}" style="width:36px;height:48px;object-fit:cover;border-radius:4px;">
    <span style="flex:1;font-size:13px;color:var(--text-muted);">${escapeHtml(r.date||'')} — ${escapeHtml(r.url)}</span>
    <button class="small-btn danger" data-remove-reel="${platform}:${i}">Remove</button>
  </div>`).join('');
}
function bindReelRemovers(){
  document.querySelectorAll('[data-remove-reel]').forEach(b=>b.addEventListener('click', async ()=>{
    const [platform, idx] = b.dataset.removeReel.split(':');
    CONFIG.reels[platform].splice(+idx,1);
    await saveConfig(CONFIG); renderAll(); populateAdminForms();
  }));
}

document.getElementById('saveHero').addEventListener('click', async ()=>{
  CONFIG.hero.headline = {en:document.getElementById('f_heroHeadline').value};
  CONFIG.hero.desc = {en:document.getElementById('f_heroDesc').value};
  CONFIG.hero.stat1 = document.getElementById('f_stat1').value;
  CONFIG.hero.stat1label = {en:document.getElementById('f_stat1l').value};
  CONFIG.hero.stat2 = document.getElementById('f_stat2').value;
  CONFIG.hero.stat2label = {en:document.getElementById('f_stat2l').value};
  CONFIG.hero.stat3 = document.getElementById('f_stat3').value;
  CONFIG.hero.stat3label = {en:document.getElementById('f_stat3l').value};
  CONFIG.hero.ctaPortfolioLabel = {en:document.getElementById('f_ctaPortfolioLabel').value};
  CONFIG.hero.ctaPortfolioUrl = document.getElementById('f_ctaPortfolioUrl').value;
  await saveConfig(CONFIG); renderAll(); alert('Hero saved — now live.');
});
document.getElementById('saveAbout').addEventListener('click', async ()=>{
  CONFIG.about.title = {en:document.getElementById('f_aboutTitle').value};
  CONFIG.about.desc = {en:document.getElementById('f_aboutDesc').value};
  CONFIG.about.goal = {en:document.getElementById('f_aboutGoal').value};
  await saveConfig(CONFIG); renderAll(); alert('About saved — now live.');
});
document.getElementById('addCoverageBtn').addEventListener('click', async ()=>{
  const val = document.getElementById('newCoverageInput').value.trim();
  if(!val) return;
  CONFIG.coverage.push({en:val,hi:val,hinglish:val,ur:val});
  document.getElementById('newCoverageInput').value='';
  await saveConfig(CONFIG); renderAll(); populateAdminForms();
});
document.getElementById('saveStats').addEventListener('click', async ()=>{
  CONFIG.stats.forEach((s,i)=>{
    const v = document.querySelector(`[data-stat-val="${i}"]`).value;
    const l = document.querySelector(`[data-stat-label="${i}"]`).value;
    s.value = v; s.label = {en:l};
  });
  await saveConfig(CONFIG); renderAll(); alert('Stats saved — now live.');
});
document.getElementById('addSocialBtn').addEventListener('click', async ()=>{
  const name = document.getElementById('newSocialName').value.trim();
  const url = document.getElementById('newSocialUrl').value.trim();
  if(!name) return;
  CONFIG.socials.push({id:name.toLowerCase().replace(/\s+/g,'-'), name, icon:'🔗', url, enabled:!!url});
  document.getElementById('newSocialName').value=''; document.getElementById('newSocialUrl').value='';
  await saveConfig(CONFIG); renderAll(); populateAdminForms();
});
document.getElementById('saveContact').addEventListener('click', async ()=>{
  CONFIG.contact.whatsapp = document.getElementById('f_contactWhatsapp').value;
  CONFIG.contact.email = document.getElementById('f_contactEmail').value;
  CONFIG.contact.instagramDm = document.getElementById('f_contactIgDm').value;
  CONFIG.contact.messenger = document.getElementById('f_contactMessenger').value;
  await saveConfig(CONFIG); renderAll(); alert('Contact info saved — now live.');
});
document.getElementById('addReelBtn').addEventListener('click', async ()=>{
  const platform = document.getElementById('f_reelPlatform').value;
  const url = document.getElementById('f_reelUrl').value.trim();
  const thumb = document.getElementById('f_reelThumb').value.trim();
  const date = document.getElementById('f_reelDate').value || new Date().toISOString().slice(0,10);
  if(!url){ alert('Paste the reel URL first.'); return; }
  CONFIG.reels[platform].unshift({url, thumb, date, platform});
  CONFIG.reels[platform] = CONFIG.reels[platform].slice(0,5);
  document.getElementById('f_reelUrl').value=''; document.getElementById('f_reelThumb').value='';
  await saveConfig(CONFIG); renderAll(); populateAdminForms();
});
document.getElementById('saveTheme').addEventListener('click', async ()=>{
  CONFIG.theme = document.getElementById('f_defaultTheme').value;
  document.documentElement.setAttribute('data-theme', CONFIG.theme);
  await saveConfig(CONFIG); renderAll(); alert('Default theme saved.');
});
document.getElementById('changePassBtn').addEventListener('click', async ()=>{
  const cur = document.getElementById('f_curPass').value;
  const nw = document.getElementById('f_newPass').value;
  const auth = await getAuth();
  const curHash = await sha256(cur);
  if(!auth || curHash !== auth.passHash){ alert('Current password incorrect.'); return; }
  auth.passHash = await sha256(nw);
  await setAuth(auth);
  document.getElementById('f_curPass').value=''; document.getElementById('f_newPass').value='';
  alert('Password updated.');
});
document.getElementById('saveRecoveryBtn').addEventListener('click', async ()=>{
  const code = document.getElementById('f_recoveryCode').value;
  if(!code){ alert('Enter a recovery code first.'); return; }
  const auth = await getAuth() || {};
  auth.recoveryHash = await sha256(code);
  await setAuth(auth);
  document.getElementById('f_recoveryCode').value='';
  alert('Recovery code saved.');
});

/* ================================================================
   BOOT
   ================================================================ */
(async function boot(){
  CONFIG = await loadConfig();
  renderAll();
  await routeCheck();
})();

