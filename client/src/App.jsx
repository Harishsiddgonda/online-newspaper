import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';

const USERS_KEY = 'vachanaKrantiUsers';
const ACTIVE_USER_KEY = 'vachanaKrantiActiveUser';
const LANG_KEY = 'vachanaKrantiLang';

const i18n = {
  kn: {
    brandTitle: 'ವಚನ ಕ್ರಾಂತಿ',
    brandSub: 'ನಗರ • ರಾಜ್ಯ • ರಾಷ್ಟ್ರ • ಜಗತ್ತು',
    dateKicker: 'ಬುಧವಾರ, 28 ಅಕ್ಟೋಬರ್ 2026',
    epaper: 'ಇ-ಪೇಪರ್',
    latest: 'ಮುಖ್ಯಾಂಶಗಳು',
    topStories: 'ಪ್ರಮುಖ ಸುದ್ದಿಗಳು',
    topUpdates: 'ಇತ್ತೀಚಿನ ಅಪ್ಡೇಟ್ಸ್',
    weather: 'ಹವಾಮಾನ',
    weatherCity: 'ಬೆಂಗಳೂರು',
    moreNews: 'ಹೆಚ್ಚಿನ ಸುದ್ದಿಗಳು',
    india: 'ರಾಷ್ಟ್ರೀಯ',
    world: 'ವಿಶ್ವ',
    business: 'ವಾಣಿಜ್ಯ',
    politics: 'ರಾಜಕೀಯ',
    technology: 'ತಂತ್ರಜ್ಞಾನ',
    sports: 'ಕ್ರೀಡೆ',
    culture: 'ಸಂಸ್ಕೃತಿ',
    education: 'ಶಿಕ್ಷಣ',
    health: 'ಆರೋಗ್ಯ',
    environment: 'ಪರಿಸರ',
    all: 'ಎಲ್ಲವೂ',
    home: 'ಮುಖಪುಟ',
    admin: 'ಸಂಪಾದಕ',
    login: 'ಲಾಗಿನ್',
    logout: 'ಲಾಗ್‌ಔಟ್',
    readMore: 'ಸಂಪೂರ್ಣ ಸುದ್ದಿ ಓದಿ',
    back: 'ಹಿಂದೆ',
    moreFromNewsroom: 'ಸುದ್ದಿ ಕೊಠಡಿಯಿಂದ ಇನ್ನಷ್ಟು ವರದಿಗಳು',
    publishedOn: 'ಪ್ರಕಟಣೆ',
    readingTime: 'ಓದುವ ಸಮಯ',
    minRead: 'ನಿಮಿಷ ಓದು',
    epaperHeading: 'ವಚನ ಕ್ರಾಂತಿ ಡಿಜಿಟಲ್ ಇ-ಪೇಪರ್ ಆವೃತ್ತಿ',
    epaperSub: 'ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ದಿನಪತ್ರಿಕೆ • ಬೆಂಗಳೂರು',
    editionSelect: 'ಆವೃತ್ತಿ ಆಯ್ಕೆಮಾಡಿ',
    editionBengaluru: 'ಬೆಂಗಳೂರು ಮಹಾನಗರ ಆವೃತ್ತಿ',
    editionState: 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಆವೃತ್ತಿ',
    page: 'ಪುಟ',
    page1: 'ಪುಟ ೧: ಪ್ರಮುಖ ಸುದ್ದಿ',
    page2: 'ಪುಟ ೨: ರಾಜ್ಯ / ನಗರ',
    page3: 'ಪುಟ ೩: ವಾಣಿಜ್ಯ & ತಂತ್ರಜ್ಞಾನ',
    page4: 'ಪುಟ ೪: ಜಗತ್ತು & ಪರಿಸರ',
    printPdf: 'ಮುದ್ರಿಸಿ / PDF ಉಳಿಸಿ',
    viewWebsite: 'ವೆಬ್‌ಸೈಟ್‌ಗೆ ಹಿಂತಿರುಗಿ',
    bilingualNotice: 'ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಎರಡೂ ಭಾಷೆಗಳಲ್ಲಿ ಓದಲು ಮೇಲಿರುವ ಬಟನ್ ಬಳಸಿ.',
    readBoth: 'ದ್ವಿಭಾಷಾ (ಎರಡೂ)',
    readKn: 'ಕನ್ನಡ',
    readEn: 'English',
    footerDesc: 'ಜನಸಾಮಾನ್ಯರ ಧ್ವನಿಯಾಗಿ ನೈಜ ಹಾಗೂ ನಿಷ್ಪಕ್ಷಪಾತ ವರದಿಗಳನ್ನು ನೀಡುತ್ತಿರುವ ಕರ್ನಾಟಕದ ವಿಶ್ವಾಸಾರ್ಹ ದಿನಪತ್ರಿಕೆ.',
    dailyBriefing: 'ದೈನಂದಿನ ಇ-ಸುದ್ದಿಪತ್ರ',
    subscribe: 'ಚಂದಾದಾರರಾಗಿ',
    emailPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ',
    storyNotFound: 'ಸುದ್ದಿ ಲಭ್ಯವಿಲ್ಲ',
    storyNotFoundDesc: 'ನೀವು ಹುಡುಕುತ್ತಿರುವ ಲೇಖನ ತೆಗೆದುಹಾಕಿರಬಹುದು ಅಥವಾ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ.',
    noStories: 'ಯಾವುದೇ ಸುದ್ದಿಗಳು ಲಭ್ಯವಿಲ್ಲ',
  },
  en: {
    brandTitle: 'Vachana Kranti',
    brandSub: 'City • State • Nation • World',
    dateKicker: 'Wednesday, October 28, 2026',
    epaper: 'E-Paper',
    latest: 'LATEST',
    topStories: 'Top stories',
    topUpdates: 'Top updates',
    weather: 'Weather',
    weatherCity: 'Bengaluru',
    moreNews: 'More news',
    india: 'National',
    world: 'World',
    business: 'Business',
    politics: 'Politics',
    technology: 'Technology',
    sports: 'Sports',
    culture: 'Culture',
    education: 'Education',
    health: 'Health',
    environment: 'Environment',
    all: 'All',
    home: 'Home',
    admin: 'Admin',
    login: 'Login',
    logout: 'Logout',
    readMore: 'Read full story',
    back: 'Back',
    moreFromNewsroom: 'More from the newsroom',
    publishedOn: 'Published',
    readingTime: 'Read time',
    minRead: 'min read',
    epaperHeading: 'Vachana Kranti Digital E-Paper Edition',
    epaperSub: "Karnataka's Premier Daily Broadsheet • Bengaluru",
    editionSelect: 'Select Edition',
    editionBengaluru: 'Bengaluru Metro Edition',
    editionState: 'Karnataka State Edition',
    page: 'Page',
    page1: 'Page 1: Front Page',
    page2: 'Page 2: City & State',
    page3: 'Page 3: Business & Tech',
    page4: 'Page 4: World & Environment',
    printPdf: 'Print / Save PDF',
    viewWebsite: 'Back to Website',
    bilingualNotice: 'Use the buttons above to toggle between Kannada, English, or Bilingual view.',
    readBoth: 'Bilingual (Both)',
    readKn: 'ಕನ್ನಡ',
    readEn: 'English',
    footerDesc: 'Independent broadsheet journalism delivering credible reporting across local, regional, and global affairs.',
    dailyBriefing: 'Daily Newsletter',
    subscribe: 'Subscribe',
    emailPlaceholder: 'Your email address',
    storyNotFound: 'Story not found',
    storyNotFoundDesc: 'The article you are looking for no longer exists or was removed.',
    noStories: 'No stories available in this section yet.',
  },
};

const categoryMap = {
  world: { kn: 'ವಿಶ್ವ', en: 'World' },
  politics: { kn: 'ರಾಜಕೀಯ', en: 'Politics' },
  business: { kn: 'ವಾಣಿಜ್ಯ', en: 'Business' },
  technology: { kn: 'ತಂತ್ರಜ್ಞಾನ', en: 'Technology' },
  education: { kn: 'ಶಿಕ್ಷಣ', en: 'Education' },
  health: { kn: 'ಆರೋಗ್ಯ', en: 'Health' },
  culture: { kn: 'ಸಂಸ್ಕೃತಿ', en: 'Culture' },
  environment: { kn: 'ಪರಿಸರ', en: 'Environment' },
};

const categoriesList = ['All', 'World', 'Politics', 'Business', 'Technology', 'Education', 'Health', 'Culture', 'Environment'];

const formatDate = (dateString, lang = 'en') => {
  try {
    return new Intl.DateTimeFormat(lang === 'kn' ? 'kn-IN' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
};

const getArticleTitle = (article, lang) => (lang === 'kn' ? (article?.titleKn || article?.title) : article?.title);
const getArticleSummary = (article, lang) => (lang === 'kn' ? (article?.summaryKn || article?.summary) : article?.summary);
const getArticleContent = (article, lang) => {
  if (lang === 'kn') {
    return article?.contentKn && article.contentKn.length > 0 ? article.contentKn : article?.content || [];
  }
  return article?.content || [];
};
const getArticleCategory = (article, lang) => (lang === 'kn' ? (article?.categoryKn || article?.category) : article?.category);
const getArticleReadTime = (article, lang) => (lang === 'kn' ? (article?.readTimeKn || article?.readTime) : article?.readTime);

const getRegisteredUsers = () => {
  if (typeof window === 'undefined') return [];
  const stored = window.localStorage.getItem(USERS_KEY) || window.localStorage.getItem('dailyLedgerUsers');
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
};

const getCurrentUser = () => {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem(ACTIVE_USER_KEY) || window.localStorage.getItem('dailyLedgerActiveUser');
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

function App() {
  const [articles, setArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(LANG_KEY) || 'kn';
    }
    return 'kn';
  });
  const [loading, setLoading] = useState(true);

  const t = i18n[lang] || i18n.kn;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANG_KEY, lang);
      document.body.className = `lang-${lang}`;
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(currentUser));
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Failed to load articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleArticleAdded = (newArticle) => {
    setArticles((prev) => [newArticle, ...prev]);
  };

  const handleLogout = () => setCurrentUser(null);

  if (loading) {
    return (
      <div className="loading-shell d-flex align-items-center justify-content-center min-vh-100">
        <div className="spinner-border text-danger" role="status" aria-label="Loading" />
        <span className="ms-3 fw-bold">{lang === 'kn' ? 'ಸುದ್ದಿಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...' : 'Loading latest news...'}</span>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="newspaper-app">
        <header className="top-header container-fluid py-2 px-3 px-md-4 shadow-sm bg-white">
          <div className="container">
            <div className="row align-items-center g-2">
              <div className="col-lg-5 col-md-6">
                <div className="brand-block">
                  <span className="brand-kicker text-muted small">{t.dateKicker}</span>
                  <Link to="/" className="brand-link d-block">
                    <h1 className="brand-title mb-0">{t.brandTitle}</h1>
                  </Link>
                </div>
              </div>

              <div className="col-lg-7 col-md-6 d-flex justify-content-md-end align-items-center gap-2 gap-lg-3 flex-wrap">
                <div className="lang-switch-btn me-2" role="group" aria-label="Language selector">
                  <button
                    type="button"
                    className={lang === 'kn' ? 'active' : ''}
                    onClick={() => setLang('kn')}
                    title="ಕನ್ನಡದಲ್ಲಿ ಓದಿ"
                  >
                    ಕನ್ನಡ
                  </button>
                  <button
                    type="button"
                    className={lang === 'en' ? 'active' : ''}
                    onClick={() => setLang('en')}
                    title="Read in English"
                  >
                    English
                  </button>
                </div>

                <nav className="navbar navbar-expand p-0" aria-label="Main navigation">
                  <ul className="navbar-nav align-items-center gap-1 gap-lg-2">
                    <li className="nav-item"><NavLink to="/" className="nav-link py-1 px-2">{t.home}</NavLink></li>
                    <li className="nav-item">
                      <NavLink to="/epaper" className="nav-link py-1 px-2 fw-bold text-danger">
                        <i className="bi bi-newspaper me-1"></i>{t.epaper}
                      </NavLink>
                    </li>
                    <li className="nav-item"><NavLink to="/world" className="nav-link py-1 px-2">{t.world}</NavLink></li>
                    <li className="nav-item"><NavLink to="/politics" className="nav-link py-1 px-2">{t.politics}</NavLink></li>
                    <li className="nav-item"><NavLink to="/business" className="nav-link py-1 px-2">{t.business}</NavLink></li>
                  </ul>
                </nav>

                <div className="header-actions d-flex align-items-center gap-2 ms-lg-2">
                  <NavLink to="/admin" className="btn btn-sm btn-outline-dark rounded-pill px-3">{t.admin}</NavLink>
                  {currentUser ? (
                    <button type="button" className="btn btn-sm btn-dark rounded-pill px-3" onClick={handleLogout}>
                      {t.logout}
                    </button>
                  ) : (
                    <NavLink to="/login" className="btn btn-sm btn-dark rounded-pill px-3">{t.login}</NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage articles={articles} lang={lang} setLang={setLang} t={t} />} />
          <Route path="/epaper" element={<EpaperPage articles={articles} lang={lang} setLang={setLang} t={t} />} />
          <Route path="/world" element={<CategoryPage articles={articles} routeName="world" lang={lang} t={t} />} />
          <Route path="/politics" element={<CategoryPage articles={articles} routeName="politics" lang={lang} t={t} />} />
          <Route path="/business" element={<CategoryPage articles={articles} routeName="business" lang={lang} t={t} />} />
          <Route path="/culture" element={<CategoryPage articles={articles} routeName="culture" lang={lang} t={t} />} />
          <Route path="/article/:id" element={<ArticlePage articles={articles} lang={lang} setLang={setLang} t={t} />} />
          <Route path="/login" element={<AuthPage currentUser={currentUser} setCurrentUser={setCurrentUser} lang={lang} t={t} />} />
          <Route path="/admin" element={<AdminPage currentUser={currentUser} onArticleAdded={handleArticleAdded} lang={lang} t={t} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer t={t} lang={lang} />
      </div>
    </BrowserRouter>
  );
}

function HomePage({ articles, lang, setLang, t }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredArticle = useMemo(
    () => articles.find((article) => article.featured) ?? articles[0],
    [articles],
  );

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return articles;
    return articles.filter((article) => article.category === selectedCategory);
  }, [articles, selectedCategory]);

  const sideStories = articles.slice(1, 5);
  const cityStories = articles.slice(0, 4);
  const moreNews = articles.slice(4, 8);

  return (
    <main className="container py-3 newspaper-home">
      <div className="top-strip d-flex justify-content-between align-items-center">
        <div>
          <span>{t.dateKicker}</span>
          <span className="mx-2">•</span>
          <span>{t.weatherCity} 28°C ☀️</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Link to="/epaper" className="badge bg-danger text-white text-decoration-none px-2 py-1">
            <i className="bi bi-file-earmark-pdf me-1"></i>{t.epaper}
          </Link>
          <span className="small text-muted">{lang === 'kn' ? 'ದ್ವಿಭಾಷಾ ಆವೃತ್ತಿ' : 'Bilingual Edition'}</span>
        </div>
      </div>

      <header className="masthead-card my-3">
        <div className="masthead-row">
          <div className="masthead-left">
            <Link to="/epaper" className="edition-badge text-decoration-none text-reset">
              <i className="bi bi-newspaper me-1"></i>{t.epaper}
            </Link>
          </div>
          <div className="masthead-center">
            <div className="brand-mark">{t.brandTitle}</div>
            <div className="subbrand text-muted small">{t.brandSub}</div>
          </div>
          <div className="masthead-right d-flex gap-2 justify-content-end align-items-center">
            <div className="lang-switch-btn" role="group">
              <button
                type="button"
                className={lang === 'kn' ? 'active' : ''}
                onClick={() => setLang('kn')}
              >
                ಕನ್ನಡ
              </button>
              <button
                type="button"
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
            <Link to="/epaper" className="btn btn-sm btn-dark rounded-pill px-3">
              {lang === 'kn' ? 'ಇ-ಪೇಪರ್ ಓದಿ' : 'Read E-Paper'}
            </Link>
          </div>
        </div>

        <nav className="news-nav d-flex flex-wrap gap-2 px-3 py-2 border-top">
          {categoriesList.map((cat) => {
            const label = cat === 'All' ? t.all : (categoryMap[cat.toLowerCase()]?.[lang] || cat);
            return (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-danger' : 'btn-light'} rounded-pill px-3 py-1`}
                onClick={() => setSelectedCategory(cat)}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </header>

      <div className="ticker-strip mb-4">
        <span className="ticker-label">{t.latest}</span>
        <div className="ticker-track">
          {articles.slice(0, 3).map((art, idx) => (
            <span key={art.id}>
              {idx > 0 && <span className="mx-2">•</span>}
              <Link to={`/article/${art.id}`} className="text-reset text-decoration-none">
                {getArticleTitle(art, lang)}
              </Link>
            </span>
          ))}
        </div>
      </div>

      <section className="hero-grid">
        <article className="lead-story story-block">
          {featuredArticle && (
            <Link to={`/article/${featuredArticle.id}`} className="story-link">
              <img src={featuredArticle.image} alt={getArticleTitle(featuredArticle, lang)} style={{ maxHeight: '380px', objectFit: 'cover', width: '100%' }} />
              <div className="story-body p-3">
                <span className="story-tag badge bg-danger mb-2">{getArticleCategory(featuredArticle, lang)}</span>
                <h2 className="kn-serif">{getArticleTitle(featuredArticle, lang)}</h2>
                <p className="lead-summary text-muted">{getArticleSummary(featuredArticle, lang)}</p>
                <div className="story-meta-row text-muted small d-flex justify-content-between mt-2">
                  <span><i className="bi bi-person me-1"></i>{featuredArticle.author}</span>
                  <span><i className="bi bi-calendar3 me-1"></i>{formatDate(featuredArticle.publishedAt, lang)}</span>
                  <span><i className="bi bi-clock me-1"></i>{getArticleReadTime(featuredArticle, lang)}</span>
                </div>
              </div>
            </Link>
          )}
        </article>

        <div className="side-stack">
          {sideStories.map((article) => (
            <Link key={article.id} to={`/article/${article.id}`} className="story-link compact-story p-2 border-bottom">
              <div className="compact-text pe-2">
                <span className="story-tag small text-danger fw-bold">{getArticleCategory(article, lang)}</span>
                <h4 className="kn-serif fs-6 mt-1">{getArticleTitle(article, lang)}</h4>
                <small className="text-muted">{formatDate(article.publishedAt, lang)}</small>
              </div>
              <img src={article.image} alt={getArticleTitle(article, lang)} style={{ width: '90px', height: '70px', objectFit: 'cover', borderRadius: '4px' }} />
            </Link>
          ))}
        </div>

        <aside className="side-panel">
          <div className="panel-box bg-white p-3 border rounded shadow-sm mb-3">
            <h3 className="fs-5 border-bottom pb-2 text-danger fw-bold">{t.topUpdates}</h3>
            {cityStories.map((article) => (
              <Link key={article.id} to={`/article/${article.id}`} className="update-item d-block py-2 border-bottom text-reset text-decoration-none">
                <span className="badge bg-light text-dark me-2">{getArticleCategory(article, lang)}</span>
                <strong className="d-block mt-1 kn-serif">{getArticleTitle(article, lang)}</strong>
              </Link>
            ))}
          </div>

          <div className="panel-box weather-box bg-white p-3 border rounded shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-0 fw-bold">{t.weather}</h5>
                <small className="text-muted">{t.weatherCity}</small>
                <div className="fs-3 fw-bold mt-1">28°C</div>
              </div>
              <div className="fs-1">☀️</div>
            </div>
            <div className="mt-2 text-muted small">
              {lang === 'kn' ? 'ಗಾಳಿಯ ಗುಣಮಟ್ಟ: ಉತ್ತಮ (AQI 48)' : 'Air Quality: Good (AQI 48)'}
            </div>
          </div>
        </aside>
      </section>

      <section className="category-section mt-5">
        <div className="section-head d-flex justify-content-between align-items-center mb-3">
          <h3 className="kn-serif mb-0">{t.topStories}</h3>
          <span className="badge bg-dark rounded-pill px-3 py-2">
            {selectedCategory === 'All' ? t.all : (categoryMap[selectedCategory.toLowerCase()]?.[lang] || selectedCategory)}
          </span>
        </div>

        <div className="news-grid">
          {filteredArticles.slice(0, 6).map((article) => (
            <Link key={article.id} to={`/article/${article.id}`} className="story-link card-story">
              <img src={article.image} alt={getArticleTitle(article, lang)} style={{ height: '180px', objectFit: 'cover' }} />
              <div className="card-copy p-3">
                <span className="story-tag small text-danger fw-bold">{getArticleCategory(article, lang)}</span>
                <h4 className="kn-serif fs-5 mt-1">{getArticleTitle(article, lang)}</h4>
                <p className="text-muted small mb-2">{getArticleSummary(article, lang)}</p>
                <div className="story-meta-row text-muted small d-flex justify-content-between">
                  <span>{article.author}</span>
                  <span>{formatDate(article.publishedAt, lang)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="segment-row mt-5">
        <div className="segment-block bg-white p-3 border rounded shadow-sm">
          <h4 className="border-bottom pb-2 text-danger kn-serif">{t.india}</h4>
          {moreNews.slice(0, 3).map((news) => (
            <Link key={news.id} to={`/article/${news.id}`} className="mini-link d-block py-2 border-bottom text-reset text-decoration-none">
              <span className="kn-serif">{getArticleTitle(news, lang)}</span>
            </Link>
          ))}
        </div>

        <div className="segment-block bg-white p-3 border rounded shadow-sm">
          <h4 className="border-bottom pb-2 text-danger kn-serif">{t.world}</h4>
          {moreNews.slice(1, 4).map((news) => (
            <Link key={news.id} to={`/article/${news.id}`} className="mini-link d-block py-2 border-bottom text-reset text-decoration-none">
              <span className="kn-serif">{getArticleTitle(news, lang)}</span>
            </Link>
          ))}
        </div>

        <div className="segment-block bg-white p-3 border rounded shadow-sm">
          <h4 className="border-bottom pb-2 text-danger kn-serif">{t.business}</h4>
          {moreNews.slice(2, 5).map((news) => (
            <Link key={news.id} to={`/article/${news.id}`} className="mini-link d-block py-2 border-bottom text-reset text-decoration-none">
              <span className="kn-serif">{getArticleTitle(news, lang)}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function EpaperPage({ articles, lang, setLang, t }) {
  const [activePage, setActivePage] = useState(1);
  const [edition, setEdition] = useState('bengaluru');
  const [epaperLangMode, setEpaperLangMode] = useState('both'); // 'kn' | 'en' | 'both'

  const leadStory = articles[0];
  const pageStories = useMemo(() => {
    if (activePage === 1) return articles.slice(0, 4);
    if (activePage === 2) return articles.slice(2, 6);
    if (activePage === 3) return articles.slice(4, 8);
    return articles.slice(5, 9);
  }, [articles, activePage]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="epaper-view-shell py-4">
      <div className="epaper-toolbar py-3 px-4 mb-4">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <Link to="/" className="btn btn-outline-dark btn-sm rounded-pill">
              <i className="bi bi-arrow-left me-1"></i>{t.viewWebsite}
            </Link>
            <div className="d-flex align-items-center gap-2">
              <span className="small fw-bold text-muted">{t.editionSelect}:</span>
              <select
                className="form-select form-select-sm rounded-pill"
                value={edition}
                onChange={(e) => setEdition(e.target.value)}
              >
                <option value="bengaluru">{t.editionBengaluru}</option>
                <option value="state">{t.editionState}</option>
              </select>
            </div>
          </div>

          <div className="d-flex align-items-center gap-2 flex-wrap">
            <span className="small fw-bold text-muted">{t.readingMode}:</span>
            <div className="btn-group btn-group-sm" role="group">
              <button
                type="button"
                className={`btn ${epaperLangMode === 'kn' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => setEpaperLangMode('kn')}
              >
                ಕನ್ನಡ
              </button>
              <button
                type="button"
                className={`btn ${epaperLangMode === 'en' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => setEpaperLangMode('en')}
              >
                English
              </button>
              <button
                type="button"
                className={`btn ${epaperLangMode === 'both' ? 'btn-danger' : 'btn-outline-danger'}`}
                onClick={() => setEpaperLangMode('both')}
              >
                {t.readBoth}
              </button>
            </div>

            <button type="button" className="btn btn-sm btn-dark rounded-pill ms-2" onClick={handlePrint}>
              <i className="bi bi-printer me-1"></i>{t.printPdf}
            </button>
          </div>
        </div>

        <div className="container mt-3 pt-2 border-top d-flex justify-content-center gap-2 flex-wrap">
          {[1, 2, 3, 4].map((p) => (
            <button
              key={p}
              type="button"
              className={`epaper-page-nav-pill ${activePage === p ? 'active' : ''}`}
              onClick={() => setActivePage(p)}
            >
              {t[`page${p}`] || `Page ${p}`}
            </button>
          ))}
        </div>
      </div>

      <div className="epaper-broadsheet container">
        <header className="epaper-header">
          <div className="epaper-top-meta">
            <span>RNI NO: KARKAN/2026/89421</span>
            <span>{edition === 'bengaluru' ? t.editionBengaluru : t.editionState}</span>
            <span>VOL. 18 • ISSUE 294 • ₹ 5.00</span>
          </div>

          <h1 className="epaper-brand-title">{i18n.kn.brandTitle} / {i18n.en.brandTitle}</h1>
          <div className="text-center text-muted fw-bold small">{t.epaperSub}</div>

          <div className="epaper-bottom-meta">
            <span>{t.dateKicker}</span>
            <span>{t[`page${activePage}`]}</span>
            <span>{edition === 'bengaluru' ? 'ಬೆಂಗಳೂರು • BENGALURU' : 'ಕರ್ನಾಟಕ • KARNATAKA'}</span>
          </div>
        </header>

        {epaperLangMode === 'both' ? (
          <div>
            <div className="alert alert-warning py-2 px-3 small border-0 mb-4 d-flex justify-content-between align-items-center">
              <span>
                <i className="bi bi-translate me-2"></i>
                <strong>ದ್ವಿಭಾಷಾ ಇ-ಪೇಪರ್ ಆವೃತ್ತಿ / Bilingual E-Paper Edition:</strong> ಲೇಖನಗಳನ್ನು ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಎರಡೂ ಭಾಷೆಗಳಲ್ಲಿ ಏಕಕಾಲದಲ್ಲಿ ಓದಬಹುದು.
              </span>
            </div>

            {pageStories.map((story, sIndex) => (
              <div key={story.id} className="bilingual-box">
                <div className="lang-col kn-col">
                  <span className="badge bg-danger mb-2">{story.categoryKn || story.category}</span>
                  <h3 className="kn-serif fs-4 mb-2">{story.titleKn || story.title}</h3>
                  <p className="fw-bold text-dark">{story.summaryKn || story.summary}</p>
                  <div className="text-secondary small">
                    {(story.contentKn || story.content || []).map((par, pIdx) => (
                      <p key={pIdx} className="mb-2">{par}</p>
                    ))}
                  </div>
                  <div className="text-muted small mt-2">
                    <span>{story.author}</span> • <span>{formatDate(story.publishedAt, 'kn')}</span>
                  </div>
                </div>

                <div className="lang-col">
                  <span className="badge bg-secondary mb-2">{story.category}</span>
                  <h3 className="fs-4 mb-2">{story.title}</h3>
                  <p className="fw-bold text-dark">{story.summary}</p>
                  <div className="text-secondary small">
                    {(story.content || []).map((par, pIdx) => (
                      <p key={pIdx} className="mb-2">{par}</p>
                    ))}
                  </div>
                  <div className="text-muted small mt-2">
                    <span>{story.author}</span> • <span>{formatDate(story.publishedAt, 'en')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="epaper-grid">
            <div className="epaper-lead-article">
              {leadStory && (
                <div>
                  <span className="badge bg-danger mb-2">{getArticleCategory(leadStory, epaperLangMode)}</span>
                  <h2 className="epaper-lead-headline kn-serif">{getArticleTitle(leadStory, epaperLangMode)}</h2>
                  <p className="epaper-lead-summary">{getArticleSummary(leadStory, epaperLangMode)}</p>
                  <img
                    src={leadStory.image}
                    alt={getArticleTitle(leadStory, epaperLangMode)}
                    className="img-fluid w-100 rounded mb-3"
                    style={{ maxHeight: '350px', objectFit: 'cover' }}
                  />
                  <div className="epaper-lead-columns">
                    {getArticleContent(leadStory, epaperLangMode).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  <div className="border-top pt-2 mt-3 text-muted small d-flex justify-content-between">
                    <span>{leadStory.author}</span>
                    <span>{formatDate(leadStory.publishedAt, epaperLangMode)}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="epaper-side-list">
              {pageStories.slice(1).map((story) => (
                <div key={story.id} className="epaper-side-item">
                  <span className="badge bg-dark mb-1">{getArticleCategory(story, epaperLangMode)}</span>
                  <h4 className="kn-serif fs-5">{getArticleTitle(story, epaperLangMode)}</h4>
                  <p className="text-muted small mb-2">{getArticleSummary(story, epaperLangMode)}</p>
                  <Link to={`/article/${story.id}`} className="btn btn-outline-danger btn-sm rounded-pill py-0 px-2 small">
                    {t.readMore}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryPage({ articles, routeName, lang, t }) {
  const catKey = routeName.toLowerCase();
  const pageArticles = useMemo(() => {
    return articles.filter((art) => art.category.toLowerCase() === catKey);
  }, [articles, catKey]);

  const categoryTitle = categoryMap[catKey]?.[lang] || routeName;

  return (
    <main className="container py-4">
      <div className="p-4 mb-4 bg-white border rounded shadow-sm">
        <h1 className="kn-serif text-danger mb-2">{categoryTitle}</h1>
        <p className="text-muted mb-0">
          {lang === 'kn'
            ? `ವಚನ ಕ್ರಾಂತಿಯ ${categoryTitle} ವಿಭಾಗದ ತಾಜಾ ಸುದ್ದಿಗಳು ಮತ್ತು ಪ್ರಮುಖ ವಿದ್ಯಮಾನಗಳು.`
            : `Latest reporting and in-depth coverage in ${categoryTitle}.`}
        </p>
      </div>

      <div className="row g-4">
        {pageArticles.length > 0 ? (
          pageArticles.map((article) => (
            <div key={article.id} className="col-md-6 col-lg-4">
              <Link to={`/article/${article.id}`} className="text-reset text-decoration-none">
                <article className="story-card h-100 bg-white border rounded overflow-hidden shadow-sm">
                  <img src={article.image} alt={getArticleTitle(article, lang)} className="img-fluid w-100" style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="p-3">
                    <span className="badge bg-danger mb-2">{getArticleCategory(article, lang)}</span>
                    <h4 className="kn-serif fs-5">{getArticleTitle(article, lang)}</h4>
                    <p className="text-muted small">{getArticleSummary(article, lang)}</p>
                    <div className="d-flex justify-content-between text-muted small mt-2">
                      <span>{article.author}</span>
                      <span>{formatDate(article.publishedAt, lang)}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-light border p-4 text-center">
              <h3>{t.noStories}</h3>
              <Link to="/" className="btn btn-dark rounded-pill mt-2">{t.home}</Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function ArticlePage({ articles, lang, setLang, t }) {
  const { id } = useParams();
  const article = articles.find((item) => item.id === Number(id));
  const [viewMode, setViewMode] = useState('active'); // 'active' | 'both'

  if (!article) {
    return (
      <div className="container py-5">
        <div className="card border-0 shadow-sm p-4 text-center">
          <h3>{t.storyNotFound}</h3>
          <p className="text-muted">{t.storyNotFoundDesc}</p>
          <Link to="/" className="btn btn-dark rounded-pill mx-auto">{t.home}</Link>
        </div>
      </div>
    );
  }

  const relatedArticles = articles.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <main className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <Link to="/" className="btn btn-outline-dark btn-sm rounded-pill">
          <i className="bi bi-arrow-left me-1"></i>{t.back}
        </Link>

        <div className="d-flex align-items-center gap-2">
          <span className="small text-muted fw-bold">ಭಾಷೆ / Language:</span>
          <div className="btn-group btn-group-sm" role="group">
            <button
              type="button"
              className={`btn ${lang === 'kn' && viewMode === 'active' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => { setLang('kn'); setViewMode('active'); }}
            >
              ಕನ್ನಡ
            </button>
            <button
              type="button"
              className={`btn ${lang === 'en' && viewMode === 'active' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => { setLang('en'); setViewMode('active'); }}
            >
              English
            </button>
            <button
              type="button"
              className={`btn ${viewMode === 'both' ? 'btn-danger' : 'btn-outline-danger'}`}
              onClick={() => setViewMode('both')}
            >
              {t.readBoth}
            </button>
          </div>
        </div>
      </div>

      <article className="article-page card border-0 shadow-lg overflow-hidden bg-white">
        <img src={article.image} alt={getArticleTitle(article, lang)} className="img-fluid w-100" style={{ maxHeight: '420px', objectFit: 'cover' }} />

        <div className="card-body p-4 p-lg-5">
          {viewMode === 'both' ? (
            <div className="bilingual-box mt-0 border-0 p-0">
              <div className="lang-col kn-col">
                <span className="badge bg-danger mb-2">{article.categoryKn || article.category}</span>
                <div className="text-muted small mb-3">
                  <span>{article.author}</span> • <span>{formatDate(article.publishedAt, 'kn')}</span> • <span>{article.readTimeKn || article.readTime}</span>
                </div>
                <h1 className="kn-serif fs-2 mb-3">{article.titleKn || article.title}</h1>
                <p className="lead fw-bold text-dark">{article.summaryKn || article.summary}</p>
                <div className="article-content mt-4">
                  {(article.contentKn || article.content || []).map((para, i) => (
                    <p key={i} className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="lang-col">
                <span className="badge bg-secondary mb-2">{article.category}</span>
                <div className="text-muted small mb-3">
                  <span>{article.author}</span> • <span>{formatDate(article.publishedAt, 'en')}</span> • <span>{article.readTime}</span>
                </div>
                <h1 className="fs-2 mb-3">{article.title}</h1>
                <p className="lead fw-bold text-dark">{article.summary}</p>
                <div className="article-content mt-4">
                  {(article.content || []).map((para, i) => (
                    <p key={i} className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-danger">{getArticleCategory(article, lang)}</span>
                <div className="text-muted small">
                  <span><i className="bi bi-person me-1"></i>{article.author}</span>
                  <span className="mx-2">•</span>
                  <span><i className="bi bi-calendar3 me-1"></i>{formatDate(article.publishedAt, lang)}</span>
                  <span className="mx-2">•</span>
                  <span><i className="bi bi-clock me-1"></i>{getArticleReadTime(article, lang)}</span>
                </div>
              </div>

              <h1 className="kn-serif mb-3" style={{ fontSize: '2.4rem' }}>{getArticleTitle(article, lang)}</h1>
              <p className="lead text-muted mb-4 border-start border-4 border-danger ps-3">{getArticleSummary(article, lang)}</p>

              <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.85' }}>
                {getArticleContent(article, lang).map((para, idx) => (
                  <p key={idx} className="mb-3">{para}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <section className="related-section mt-5">
        <h3 className="kn-serif mb-3">{t.moreFromNewsroom}</h3>
        <div className="row g-4">
          {relatedArticles.map((rel) => (
            <div key={rel.id} className="col-md-4">
              <Link to={`/article/${rel.id}`} className="text-reset text-decoration-none">
                <div className="card h-100 border rounded shadow-sm overflow-hidden bg-white">
                  <img src={rel.image} alt={getArticleTitle(rel, lang)} style={{ height: '160px', objectFit: 'cover' }} />
                  <div className="p-3">
                    <span className="badge bg-danger small mb-1">{getArticleCategory(rel, lang)}</span>
                    <h5 className="kn-serif mt-1">{getArticleTitle(rel, lang)}</h5>
                    <p className="text-muted small mb-0">{getArticleSummary(rel, lang)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function AuthPage({ currentUser, setCurrentUser, lang, t }) {
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === 'login') {
      if (
        (form.email.toLowerCase() === 'admin@vachanakranti.com' || form.email.toLowerCase() === 'admin@dailyledger.com') &&
        form.password === 'admin123'
      ) {
        const adminUser = { name: 'Admin Editor / ಪ್ರಧಾನ ಸಂಪಾದಕ', email: form.email, role: 'admin' };
        setCurrentUser(adminUser);
        navigate('/admin');
        return;
      }

      const storedUsers = getRegisteredUsers();
      const user = storedUsers.find((u) => u.email.toLowerCase() === form.email.toLowerCase() && u.password === form.password);

      if (user) {
        setCurrentUser({ name: user.name, email: user.email, role: 'reader' });
        navigate('/');
        return;
      }

      setMessage(lang === 'kn' ? 'ತಪ್ಪಾದ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್. ಅಡ್ಮಿನ್ ಪರೀಕ್ಷೆಗೆ admin@vachanakranti.com / admin123 ಬಳಸಿ.' : 'Invalid email or password. Use admin@vachanakranti.com / admin123 to test admin access.');
      return;
    }

    if (!form.name || !form.email || !form.password) {
      setMessage(lang === 'kn' ? 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.' : 'Please fill in all fields.');
      return;
    }

    const storedUsers = getRegisteredUsers();
    if (storedUsers.some((u) => u.email.toLowerCase() === form.email.toLowerCase())) {
      setMessage(lang === 'kn' ? 'ಈ ಇಮೇಲ್ ಈಗಾಗಲೇ ನೋಂದಾಯಿತವಾಗಿದೆ.' : 'This email is already registered.');
      return;
    }

    const newUser = { name: form.name, email: form.email, password: form.password, role: 'reader' };
    storedUsers.push(newUser);
    window.localStorage.setItem(USERS_KEY, JSON.stringify(storedUsers));
    setCurrentUser(newUser);
    navigate('/');
  };

  return (
    <div className="container py-5">
      <div className="card mx-auto shadow border-0 p-4" style={{ maxWidth: '450px' }}>
        <div className="d-flex mb-4">
          <button
            type="button"
            className={`btn flex-fill ${mode === 'login' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => setMode('login')}
          >
            {t.login}
          </button>
          <button
            type="button"
            className={`btn flex-fill ${mode === 'register' ? 'btn-dark' : 'btn-outline-dark'}`}
            onClick={() => setMode('register')}
          >
            {lang === 'kn' ? 'ನೋಂದಣಿ' : 'Register'}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === 'register' && (
            <div className="mb-3">
              <label className="form-label">{lang === 'kn' ? 'ಪೂರ್ಣ ಹೆಸರು' : 'Full Name'}</label>
              <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
            </div>
          )}
          <div className="mb-3">
            <label className="form-label">{lang === 'kn' ? 'ಇಮೇಲ್ ವಿಳಾಸ' : 'Email Address'}</label>
            <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">{lang === 'kn' ? 'ಪಾಸ್‌ವರ್ಡ್' : 'Password'}</label>
            <input name="password" type="password" className="form-control" value={form.password} onChange={handleChange} required />
          </div>
          {message && <div className="alert alert-danger py-2 small">{message}</div>}
          <button type="submit" className="btn btn-dark w-100 rounded-pill mt-2">
            {mode === 'login' ? t.login : (lang === 'kn' ? 'ಖಾತೆ ರಚಿಸಿ' : 'Create Account')}
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminPage({ currentUser, onArticleAdded, lang, t }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    titleKn: '',
    category: 'Technology',
    categoryKn: 'ತಂತ್ರಜ್ಞಾನ',
    author: '',
    readTime: '4 min read',
    readTimeKn: '4 ನಿಮಿಷ ಓದು',
    summary: '',
    summaryKn: '',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    content: '',
    contentKn: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        publishedAt: new Date().toISOString(),
        featured: false,
        content: form.content.split(/\n+/).map((p) => p.trim()).filter(Boolean),
        contentKn: form.contentKn.split(/\n+/).map((p) => p.trim()).filter(Boolean),
      };

      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Publishing failed');

      const article = await response.json();
      onArticleAdded(article);
      setStatus(lang === 'kn' ? 'ಸುದ್ದಿ ಯಶಸ್ವಿಯಾಗಿ ಪ್ರಕಟಗೊಂಡಿದೆ!' : 'Article published successfully!');
      setForm({
        title: '',
        titleKn: '',
        category: 'Technology',
        categoryKn: 'ತಂತ್ರಜ್ಞಾನ',
        author: '',
        readTime: '4 min read',
        readTimeKn: '4 ನಿಮಿಷ ಓದು',
        summary: '',
        summaryKn: '',
        image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
        content: '',
        contentKn: '',
      });
    } catch (err) {
      setStatus(err.message);
    }
  };

  if (!currentUser || currentUser.role !== 'admin') return null;

  return (
    <div className="container py-4">
      <div className="card shadow-sm border-0 p-4">
        <h2 className="kn-serif mb-4">{lang === 'kn' ? 'ಹೊಸ ಸುದ್ದಿ ಪ್ರಕಟಿಸಿ (ದ್ವಿಭಾಷಾ ಸಂಪಾದಕ)' : 'Publish Story (Bilingual Editor)'}</h2>
        {status && <div className="alert alert-success">{status}</div>}
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label fw-bold">Headline (English)</label>
            <input className="form-control" name="title" value={form.title} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">ಶೀರ್ಷಿಕೆ (ಕನ್ನಡ)</label>
            <input className="form-control" name="titleKn" value={form.titleKn} onChange={handleChange} placeholder="ಕನ್ನಡ ಶೀರ್ಷಿಕೆ" />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Category (English)</label>
            <select className="form-select" name="category" value={form.category} onChange={handleChange}>
              {categoriesList.filter((c) => c !== 'All').map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">ವರ್ಗ (ಕನ್ನಡ)</label>
            <input className="form-control" name="categoryKn" value={form.categoryKn} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Author / ವರದಿಗಾರ</label>
            <input className="form-control" name="author" value={form.author} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Image URL</label>
            <input className="form-control" name="image" value={form.image} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Summary (English)</label>
            <textarea className="form-control" name="summary" rows="3" value={form.summary} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">ಸಾರಾಂಶ (ಕನ್ನಡ)</label>
            <textarea className="form-control" name="summaryKn" rows="3" value={form.summaryKn} onChange={handleChange} placeholder="ಕನ್ನಡದಲ್ಲಿ ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ" />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Full Content (English)</label>
            <textarea className="form-control" name="content" rows="6" value={form.content} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">ಸಂಪೂರ್ಣ ಲೇಖನ (ಕನ್ನಡ)</label>
            <textarea className="form-control" name="contentKn" rows="6" value={form.contentKn} onChange={handleChange} placeholder="ಕನ್ನಡದಲ್ಲಿ ಪೂರ್ಣ ಲೇಖನ" />
          </div>
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-danger rounded-pill px-4">
              {lang === 'kn' ? 'ಸುದ್ದಿ ಪ್ರಕಟಿಸಿ' : 'Publish Article'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Footer({ t, lang }) {
  return (
    <footer className="site-footer bg-white border-top mt-5 py-4">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-4">
            <h5 className="kn-serif fw-bold text-danger mb-2">{t.brandTitle}</h5>
            <p className="text-muted small mb-0">{t.footerDesc}</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-3">
              <Link to="/" className="text-muted text-decoration-none small">{t.home}</Link>
              <Link to="/epaper" className="text-danger fw-bold text-decoration-none small">{t.epaper}</Link>
              <Link to="/world" className="text-muted text-decoration-none small">{t.world}</Link>
              <Link to="/business" className="text-muted text-decoration-none small">{t.business}</Link>
            </div>
            <div className="text-muted small mt-2">
              © 2026 {t.brandTitle}. {lang === 'kn' ? 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.' : 'All rights reserved.'}
            </div>
          </div>
          <div className="col-md-4">
            <div className="newsletter-box">
              <p className="small fw-bold mb-1">{t.dailyBriefing}</p>
              <div className="input-group">
                <input type="email" className="form-control form-control-sm" placeholder={t.emailPlaceholder} />
                <button className="btn btn-danger btn-sm" type="button">{t.subscribe}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
