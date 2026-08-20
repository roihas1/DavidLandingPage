# דויד שלום פרץ — אתר נחיתה

אתר נחיתה בעברית (RTL) להנדסאי חשמל בעל תעודה. בנוי עם React + Vite + Tailwind CSS, מותאם למובייל, עם נגישות לפי ת"י 5568 / WCAG 2.0 AA.

**מאגר GitHub:** [roihas1/DavidLandingPage](https://github.com/roihas1/DavidLandingPage)

## תכונות

- דף בית חד-עמודי: Hero, שירותים, אודות, למה לבחור בי, גלריה, המלצות, צור קשר
- דף הצהרת נגישות נפרד (`/accessibility`)
- כפתורי צף: נגישות + וואטסאפ (עם הודעה מוכנה מראש)
- ניווט RTL, sticky header, תפריט מובייל
- תפריט נגישות: הגדלת/הקטנת טקסט, ניגודיות גבוהה, הדגשת קישורים
- קישור "דלג לתוכן הראשי"
- תוכן מרכזי בקובץ אחד — קל לעריכה

## הרצה מקומית

```bash
npm install
npm run dev
```

פתחו את הכתובת שמופיעה בטרמינל (בדרך כלל `http://localhost:5173`).

| נתיב | עמוד |
|------|------|
| `/` | דף הבית |
| `/accessibility` | הצהרת נגישות |

## בנייה לפרודקשן

```bash
npm run build
npm run preview
```

## עריכת תוכן

**כל התוכן נמצא בקובץ אחד:** [`src/data/siteContent.js`](src/data/siteContent.js)

| שדה | מה זה משנה |
|-----|------------|
| `businessName` | שם העסק (כותרת, פוטר, ניווט) |
| `heroTitle` | כותרת ראשית ב-Hero |
| `tagline` | תת-כותרת ב-Hero |
| `heroHeadline` | משפט מרכזי ב-Hero |
| `heroSubtext` | תיאור קצר מתחת לכותרת |
| `phone` | מספר טלפון לתצוגה |
| `phoneLink` | מספר לקישור `tel:` (ללא מקפים) |
| `whatsapp` | מספר וואטסאפ בפורמט בינלאומי (972...) |
| `whatsappMessage` | הודעה מוכנה לפתיחה בוואטסאפ |
| `serviceArea` | אזור שירות |
| `yearsExperience` | שנות ניסיון |
| `aboutText` | פסקת "אודות" |
| `nav` | קישורי תפריט עליון |
| `services` | רשימת שירותים (כותרת, תיאור, אייקון) |
| `whyUs` | נקודות "למה לבחור בי" |
| `gallery` | פריטי גלריה (כותרת + תמונה אופציונלית) |
| `testimonials` | המלצות לקוחות |
| `accessibility` | טקסט הצהרת הנגישות |
| `footer` | טקסט פוטר וקישור לנגישות |

## החלפת תמונות בגלריה

ב-`gallery`, הוסיפו שדה `image` עם נתיב לתמונה:

```js
{ title: "לוח חשמל חדש", image: "/images/panel.jpg" }
```

שימו את הקבצים בתיקייה `public/images/`.

## חיבור ל-GitHub

```bash
git remote add origin https://github.com/roihas1/DavidLandingPage.git
git branch -M main
git push -u origin main
```

אם המאגר כבר קיים עם README מרחוק:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## מבנה הפרויקט

```
src/
├── data/siteContent.js          # כל התוכן
├── pages/
│   ├── HomePage.jsx             # דף הבית
│   └── AccessibilityPage.jsx    # הצהרת נגישות
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Sections.jsx             # Services, About, WhyUs, Gallery, Testimonials, Contact, Footer
│   ├── FloatingActions.jsx      # כפתורי נגישות + וואטסאפ
│   ├── AccessibilityControl.jsx # תפריט נגישות
│   ├── AccessibilityStatement.jsx
│   ├── Logo.jsx
│   ├── SkipLink.jsx
│   └── ...
├── context/                     # הגדרות נגישות (localStorage)
├── hooks/
├── App.jsx                      # ניתוב (React Router)
└── index.css                    # Tailwind + ערכת צבעים
```

## טכנולוגיות

- React 19 + Vite 8
- React Router
- Tailwind CSS v4
- גופנים: Heebo, Rubik (Google Fonts)
- Font Awesome (אייקון נגישות)
- RTL מלא (`lang="he" dir="rtl"`)

## צבעי מותג

| צבע | שימוש | ערך |
|-----|--------|-----|
| Amber | כפתורים, הדגשות | `#f59e0b` |
| WhatsApp | כפתורי וואטסאפ | `#25d366` |
| Navy | רקע Hero / Contact | `#0f172a` |
