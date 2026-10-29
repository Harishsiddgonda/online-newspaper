const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const articles = [
  {
    id: 1,
    title: 'City leaders unveil ambitious climate plan after record heatwave',
    titleKn: 'ದಾಖಲೆಯ ಬಿಸಿಗಾಳಿ ನಂತರ ಮಹತ್ವಾಕಾಂಕ್ಷೆಯ ಹವಾಮಾನ ಯೋಜನೆಯನ್ನು ಪ್ರಕಟಿಸಿದ ನಗರ ಮುಖಂಡರು',
    category: 'World',
    categoryKn: 'ವಿಶ್ವ',
    author: 'Maya Chen',
    publishedAt: '2026-10-28',
    readTime: '5 min read',
    readTimeKn: '5 ನಿಮಿಷ ಓದು',
    summary:
      'Officials unveiled a multi-billion-dollar resiliency package aimed at cooling neighborhoods, expanding green corridors, and reducing stormwater risk.',
    summaryKn:
      'ನಗರ ಪ್ರದೇಶಗಳನ್ನು ತಂಪಾಗಿಸಲು, ಹಸಿರು ವಲಯಗಳನ್ನು ವಿಸ್ತರಿಸಲು ಮತ್ತು ಪ್ರವಾಹ ಅಪಾಯ ತಗ್ಗಿಸಲು ಅಧಿಕಾರಿಗಳು ಬಹುಕೋಟಿ ವೆಚ್ಚದ ಪ್ಯಾಕೇಜ್ ಘೋಷಿಸಿದ್ದಾರೆ.',
    image:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    content: [
      'City officials unveiled a sweeping climate resilience plan designed to protect neighborhoods from worsening heat, flooding, and severe storms. The package includes a mix of public works, tree planting, and cooling-center investment across high-risk areas.',
      'The proposal would accelerate green infrastructure projects while pairing them with stronger building standards and a revised emergency response strategy. Community groups said the proposal is a start, but they want clearer timelines and stronger equity protections for lower-income districts.',
      'The plan is expected to be debated in the next council session, with several departments asked to return with implementation benchmarks in early November.'
    ],
    contentKn: [
      'ತೀವ್ರಗೊಳ್ಳುತ್ತಿರುವ ಬಿಸಿಲು, ಪ್ರವಾಹ ಮತ್ತು ಬಿರುಗಾಳಿಯಿಂದ ನಗರದ ನಿವಾಸಿಗಳನ್ನು ರಕ್ಷಿಸಲು ನಗರ ಆಡಳಿತವು ಸಮಗ್ರ ಹವಾಮಾನ ಸಂರಕ್ಷಣಾ ಯೋಜನೆಯನ್ನು ಪ್ರಕಟಿಸಿದೆ. ಈ ಯೋಜನೆಯಲ್ಲಿ ಸಾರ್ವಜನಿಕ ಕಾಮಗಾರಿಗಳು, ದೊಡ್ಡ ಪ್ರಮಾಣದ ಮರ ನೆಡುವಿಕೆ ಮತ್ತು ಹೆಚ್ಚು ತಾಪಮಾನವಿರುವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಕೂಲಿಂಗ್ ಕೇಂದ್ರಗಳ ಸ್ಥಾಪನೆ ಒಳಗೊಂಡಿದೆ.',
      'ಹಸಿರು ಮೂಲಸೌಕರ್ಯ ಯೋಜನೆಗಳನ್ನು ತ್ವರಿತಗೊಳಿಸುವುದರೊಂದಿಗೆ ಹೊಸ ಕಟ್ಟಡ ನಿಯಮಾವಳಿಗಳು ಹಾಗೂ ತುರ್ತು ನಿರ್ವಹಣಾ ಕಾರ್ಯತಂತ್ರವನ್ನು ಜಾರಿಗೆ ತರಲು ಉದ್ದೇಶಿಸಲಾಗಿದೆ. ನಾಗರಿಕ ಸಂಘಟನೆಗಳು ಈ ಕ್ರಮವನ್ನು ಸ್ವಾಗತಿಸಿದ್ದು, ಬಡ ಬಡಾವಣೆಗಳಿಗೆ ಆದ್ಯತೆ ನೀಡುವಂತೆ ಒತ್ತಾಯಿಸಿವೆ.',
      'ಮುಂದಿನ ಕೌನ್ಸಿಲ್ ಸಭೆಯಲ್ಲಿ ಈ ಯೋಜನೆ ಬಗ್ಗೆ ಚರ್ಚೆ ನಡೆಯಲಿದ್ದು, ನವೆಂಬರ್ ಆರಂಭದ ವೇಳೆಗೆ ಕಾರ್ಯಗತಗೊಳಿಸುವ ಮಾರ್ಗಸೂಚಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಲು ವಿವಿಧ ಇಲಾಖೆಗಳಿಗೆ ಸೂಚಿಸಲಾಗಿದೆ.'
    ],
  },
  {
    id: 2,
    title: 'Startups race to build AI tools for local journalism teams',
    titleKn: 'ಸ್ಥಳೀಯ ಪತ್ರಿಕೋದ್ಯಮಕ್ಕಾಗಿ ಎಐ (AI) ತಂತ್ರಜ್ಞಾನ ರೂಪಿಸಲು ಸ್ಟಾರ್ಟ್‌ಅಪ್‌ಗಳ ಪೈಪೋಟಿ',
    category: 'Technology',
    categoryKn: 'ತಂತ್ರಜ್ಞಾನ',
    author: 'Oliver Reed',
    publishedAt: '2026-10-27',
    readTime: '4 min read',
    readTimeKn: '4 ನಿಮಿಷ ಓದು',
    summary:
      'Independent newsrooms are piloting intelligent verification and translation systems to cover more communities with fewer staff.',
    summaryKn:
      'ಕಡಿಮೆ ಸಿಬ್ಬಂದಿಯೊಂದಿಗೆ ಹೆಚ್ಚು ವರದಿಗಳನ್ನು ಮಾಡಲು ಸ್ವತಂತ್ರ ಸುದ್ದಿ ಕೊಠಡಿಗಳು ಬುದ್ಧಿವಂತ ಪರಿಶೀಲನೆ ಹಾಗೂ ಭಾಷಾಂತರ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಬಳಸುತ್ತಿವೆ.',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    content: [
      'A new generation of AI-assisted tools is helping local media organizations do more with smaller budgets. From multilingual transcription to source verification, many teams are focusing on practical solutions rather than large-scale automation.',
      'Editors say the technology is most useful when it supports reporting rather than replacing it. They are pairing AI tools with newsroom standards, public oversight, and human review before publication.',
      'Analysts expect these systems to become more common as local teams aim to cover more neighborhoods while conserving time and resources.'
    ],
    contentKn: [
      'ಹೊಸ ತಲೆಮಾರಿನ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ (AI) ತಂತ್ರಜ್ಞಾನಗಳು ಸ್ಥಳೀಯ ಮಾಧ್ಯಮ ಸಂಸ್ಥೆಗಳಿಗೆ ಸೀಮಿತ ಬಜೆಟ್‌ನಲ್ಲಿ ಹೆಚ್ಚು ಕಾರ್ಯನಿರ್ವಹಿಸಲು ನೆರವಾಗುತ್ತಿವೆ. ಬಹುಭಾಷಾ ಪ್ರತಿಲೇಖನದಿಂದ ಹಿಡಿದು ಮೂಲಗಳ ಪರಿಶೀಲನೆವರೆಗೆ ಹಲವು ತಂಡಗಳು ಪ್ರಾಯೋಗಿಕ ಪರಿಹಾರಗಳತ್ತ ಗಮನಹರಿಸಿವೆ.',
      'ಪತ್ರಕರ್ತರ ಸ್ಥಾನವನ್ನು ಕಸಿದುಕೊಳ್ಳುವ ಬದಲು, ಅವರ ವರದಿಗಾರಿಕೆಗೆ ಪೂರಕವಾಗಿ ತಂತ್ರಜ್ಞಾನ ಕೆಲಸ ಮಾಡಿದಾಗ ಹೆಚ್ಚು ಪ್ರಯೋಜನಕಾರಿ ಎಂದು ಸಂಪಾದಕರು ಹೇಳುತ್ತಾರೆ. ಪ್ರಕಟಣೆಗೆ ಮುನ್ನ ಮಾನವ ಸಂಪಾದಕರ ಪರಿಶೀಲನೆಯನ್ನು ಕಡ್ಡಾಯಗೊಳಿಸಲಾಗಿದೆ.',
      'ಸಮಯ ಮತ್ತು ವೆಚ್ಚವನ್ನು ಉಳಿಸಿ ಹೆಚ್ಚಿನ ಪ್ರದೇಶಗಳ ಸುದ್ದಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಇಂತಹ ವ್ಯವಸ್ಥೆಗಳು ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ಹೆಚ್ಚು ಜನಪ್ರಿಯವಾಗಲಿವೆ ಎಂದು ತಜ್ಞರು ಅಭಿಪ್ರಾಯಪಟ್ಟಿದ್ದಾರೆ.'
    ],
  },
  {
    id: 3,
    title: 'The new downtown food hall is reshaping the evening economy',
    titleKn: 'ನಗರದ ನೂತನ ಆಹಾರ ಮಳಿಗೆ ಸಂಜೆಯ ಆರ್ಥಿಕತೆಯನ್ನು ಬದಲಾಯಿಸುತ್ತಿದೆ',
    category: 'Business',
    categoryKn: 'ವಾಣಿಜ್ಯ',
    author: 'Sofia Patel',
    publishedAt: '2026-10-26',
    readTime: '6 min read',
    readTimeKn: '6 ನಿಮಿಷ ಓದು',
    summary:
      'Small businesses say the district is seeing more foot traffic, longer operating hours, and a stronger mix of vendors and nightlife.',
    summaryKn:
      'ಹೆಚ್ಚಿದ ಗ್ರಾಹಕರ ದಟ್ಟಣೆ, ದೀರ್ಘ ವ್ಯಾಪಾರ ಅವಧಿ ಮತ್ತು ವೈವಿಧ್ಯಮಯ ತಿನಿಸುಗಳಿಂದ ಸಣ್ಣ ವ್ಯಾಪಾರಿಗಳ ಆದಾಯ ಗಣನೀಯವಾಗಿ ಹೆಚ್ಚಾಗಿದೆ.',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    content: [
      'The new downtown food hall has become a focal point for nightlife, dining, and neighborhood commerce. Merchants say the increased foot traffic has translated into a stronger evening economy and more customer retention for nearby shops.',
      'City planners say the project demonstrates how mixed-use layouts can activate underused spaces and create more durable local demand across blocks that were once quiet after office hours.',
      'Local residents are split on the effect on traffic and noise, but most agree that the district feels more vibrant and connected than it did a year ago.'
    ],
    contentKn: [
      'ನಗರದ ಹೃದಯಭಾಗದಲ್ಲಿ ಆರಂಭವಾಗಿರುವ ನೂತನ ಆಹಾರ ಮಳಿಗೆಯು ಸಂಜೆಯ ಜೀವನಶೈಲಿ ಮತ್ತು ವ್ಯಾಪಾರ ವಹಿವಾಟಿನ ಕೇಂದ್ರಬಿಂದುವಾಗಿ ಹೊರಹೊಮ್ಮಿದೆ. ಗ್ರಾಹಕರ ಆಗಮನ ಹೆಚ್ಚಾಗಿರುವುದರಿಂದ ಸುತ್ತಮುತ್ತಲಿನ ಅಂಗಡಿಗಳಿಗೂ ಉತ್ತಮ ವ್ಯಾಪಾರ ದೊರೆಯುತ್ತಿದೆ.',
      'ಬಳಕೆಯಾಗದೆ ಉಳಿದಿದ್ದ ಸ್ಥಳಗಳನ್ನು ಹೇಗೆ ಆಕರ್ಷಕ ವ್ಯಾಪಾರ ತಾಣಗಳನ್ನಾಗಿ ಪರಿವರ್ತಿಸಬಹುದು ಎಂಬುದಕ್ಕೆ ಈ ಯೋಜನೆ ಉತ್ತಮ ಉದಾಹರಣೆಯಾಗಿದೆ ಎಂದು ನಗರ ಯೋಜನಾ ತಜ್ಞರು ಹೇಳಿದ್ದಾರೆ.',
      'ಟ್ರಾಫಿಕ್ ಮತ್ತು ಶಬ್ದ ಮಾಲಿನ್ಯದ ಬಗ್ಗೆ ಕೆಲವರು ಆತಂಕ ವ್ಯಕ್ತಪಡಿಸಿದ್ದರೂ, ನಗರಕ್ಕೆ ಹೊಸ ಜೀವಕಳೆ ಬಂದಿದೆ ಎಂಬುದನ್ನು ಹೆಚ್ಚಿನ ಸ್ಥಳೀಯರು ಒಪ್ಪಿಕೊಂಡಿದ್ದಾರೆ.'
    ],
  },
  {
    id: 4,
    title: 'Election reform bill gains momentum ahead of the autumn vote',
    titleKn: 'ಮತದಾನದ ಮುನ್ನ ಚುನಾವಣಾ ಸುಧಾರಣಾ ಮಸೂದೆಗೆ ಹೆಚ್ಚಿದ ಬೆಂಬಲ',
    category: 'Politics',
    categoryKn: 'ರಾಜಕೀಯ',
    author: 'Daniel Brooks',
    publishedAt: '2026-10-25',
    readTime: '3 min read',
    readTimeKn: '3 ನಿಮಿಷ ಓದು',
    summary:
      'Lawmakers say the new framework would improve transparency, streamline voting access, and tighten oversight of campaign spending.',
    summaryKn:
      'ಚುನಾವಣಾ ವೆಚ್ಚದ ಮೇಲೆ ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಗಾ, ಮತದಾನದ ಪ್ರಕ್ರಿಯೆಯ ಸರಳೀಕರಣ ಮತ್ತು ಪಾರದರ್ಶಕತೆ ಹೆಚ್ಚಿಸಲು ಶಾಸಕರು ನೂತನ ನಿಯಮಾವಳಿ ರೂಪಿಸಿದ್ದಾರೆ.',
    image:
      'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    content: [
      'A major electoral reform measure advanced this week after a final round of committee negotiations, and supporters say the bill could reshape how civic participation is tracked in the coming year.',
      'Critics say the proposal still leaves room for gaps in enforcement, but backers emphasized the balance between access, accountability, and administrative practicality.',
      'The legislation is expected to dominate the next round of national debates as campaign teams and civil groups prepare for the pre-election season.'
    ],
    contentKn: [
      'ಸಂಸದೀಯ ಸಮಿತಿಯ ಅಂತಿಮ ಹಂತದ ಸಮಾಲೋಚನೆಗಳ ನಂತರ ಚುನಾವಣಾ ಸುಧಾರಣಾ ಮಸೂದೆಗೆ ಮಹತ್ವದ ಅನುಮೋದನೆ ದೊರೆತಿದ್ದು, ನಾಗರಿಕ ಭಾಗವಹಿಸುವಿಕೆಗೆ ಹೊಸ ಮಾರ್ಗ ತೆರೆಯಲಿದೆ ಎಂದು ಬೆಂಬಲಿಗರು ಹೇಳಿದ್ದಾರೆ.',
      'ಕಾನೂನು ಜಾರಿಯಲ್ಲಿ ಕೆಲ ಲೋಪಗಳಿರಬಹುದು ಎಂದು ವಿರೋಧಿಗಳು ವಾದಿಸಿದರೂ, ಹೊಣೆಗಾರಿಕೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಪ್ರವೇಶದ ನಡುವೆ ಸೂಕ್ತ ಸಮತೋಲನ ಕಾಯ್ದುಕೊಳ್ಳಲಾಗಿದೆ ಎಂದು ಸರ್ಕಾರ ಸಮರ್ಥಿಸಿಕೊಂಡಿದೆ.',
      'ಮುಂಬರುವ ಚುನಾವಣಾ ಕಾಲದಲ್ಲಿ ಈ ನೂತನ ಮಸೂದೆಯು ಪ್ರಮುಖ ಚರ್ಚೆಯ ವಿಷಯವಾಗುವ ನಿರೀಕ್ಷೆಯಿದೆ.'
    ],
  },
  {
    id: 5,
    title: 'Local schools expand arts programs amid student wellness push',
    titleKn: 'ವಿದ್ಯಾರ್ಥಿಗಳ ಮಾನಸಿಕ ಕ್ಷೇಮಕ್ಕಾಗಿ ಕಲಾ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವಿಸ್ತರಿಸಿದ ಶಾಲೆಗಳು',
    category: 'Education',
    categoryKn: 'ಶಿಕ್ಷಣ',
    author: 'Lena Ortiz',
    publishedAt: '2026-10-24',
    readTime: '5 min read',
    readTimeKn: '5 ನಿಮಿಷ ಓದು',
    summary:
      'District leaders are adding more design, music, and digital media classes while investing in counseling resources and creative labs.',
    summaryKn:
      'ಕೌನ್ಸೆಲಿಂಗ್ ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ಸೃಜನಶೀಲ ಲ್ಯಾಬ್‌ಗಳ ಜೊತೆಗೆ ವಿನ್ಯಾಸ, ಸಂಗೀತ ಮತ್ತು ಡಿಜಿಟಲ್ ಮಾಧ್ಯಮ ತರಗತಿಗಳನ್ನು ಶಾಲೆಗಳು ಸೇರಿಸುತ್ತಿವೆ.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    content: [
      'School districts across the region are expanding arts education and mental health programming in a coordinated effort to help students feel more connected to school life.',
      'Administrators say the new curriculum places equal importance on creativity, wellness, and academic performance, giving students more ways to engage with school outside traditional classrooms.',
      'Parents have welcomed the changes, though many are still watching whether funding and staffing levels remain stable as the programs expand.'
    ],
    contentKn: [
      'ವಿದ್ಯಾರ್ಥಿಗಳು ಶಾಲಾ ವಾತಾವರಣದೊಂದಿಗೆ ಹೆಚ್ಚು ಬೆರೆಯಲು ಮತ್ತು ಒತ್ತಡ ಮುಕ್ತವಾಗಿರಲು ಪ್ರಾದೇಶಿಕ ಶಿಕ್ಷಣ ಇಲಾಖೆಯು ಕಲಾ ಶಿಕ್ಷಣ ಹಾಗೂ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವಿಸ್ತರಿಸಿದೆ.',
      'ಸಾಂಪ್ರದಾಯಿಕ ತರಗತಿಗಳ ಜೊತೆಗೆ ಸೃಜನಶೀಲತೆ, ಆರೋಗ್ಯ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಪ್ರಗತಿಗೆ ಸಮಾನ ಪ್ರಾಮುಖ್ಯತೆ ನೀಡಲಾಗುವುದು ಎಂದು ಶಿಕ್ಷಣಾಧಿಕಾರಿಗಳು ತಿಳಿಸಿದ್ದಾರೆ.',
      'ಪೋಷಕರು ಈ ಬದಲಾವಣೆಯನ್ನು ಮುಕ್ತಕಂಠದಿಂದ ಶ್ಲಾಘಿಸಿದ್ದು, ಮುಂಬರುವ ದಿನಗಳಲ್ಲಿ ಅನುದಾನ ಮತ್ತು ಬೋಧಕರ ಕೊರತೆಯಾಗದಂತೆ ಎಚ್ಚರವಹಿಸಲು ಕೋರಿದ್ದಾರೆ.'
    ],
  },
  {
    id: 6,
    title: 'Rising demand for public transit puts urban mobility back in focus',
    titleKn: 'ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆಗೆ ಹೆಚ್ಚಿದ ಬೇಡಿಕೆ: ನಗರ ಸಂಚಾರ ವ್ಯವಸ್ಥೆಯತ್ತ ಗಮನ',
    category: 'World',
    categoryKn: 'ವಿಶ್ವ',
    author: 'Ravi Singh',
    publishedAt: '2026-10-23',
    readTime: '4 min read',
    readTimeKn: '4 ನಿಮಿಷ ಓದು',
    summary:
      'Commuters say fare structures and service reliability are still key issues as cities plan for denser growth and cleaner transport options.',
    summaryKn:
      'ದಟ್ಟಣೆ ನಿಯಂತ್ರಣ ಮತ್ತು ಮಾಲಿನ್ಯ ರಹಿತ ಸಂಚಾರಕ್ಕೆ ಕೈಗೆಟುಕುವ ದರ ಹಾಗೂ ಸಮಯಪಾಲನೆ ಅತ್ಯಗತ್ಯ ಎಂದು ಪ್ರಯಾಣಿಕರು ಒತ್ತಾಯಿಸಿದ್ದಾರೆ.',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    content: [
      'Transit agencies are seeing renewed interest in public transportation as cities attempt to manage congestion, lower emissions, and support denser residential neighborhoods.',
      'Commuters say service reliability and route coverage remain major concerns, especially in fast-growing suburbs and mixed-use districts.',
      'Policy researchers are urging cities to pair infrastructure improvements with affordable fare systems in order to keep public transit accessible to all residents.'
    ],
    contentKn: [
      'ವಾಹನ ದಟ್ಟಣೆ ನಿಯಂತ್ರಿಸಲು, ಇಂಗಾಲದ ಹೊರಸೂಸುವಿಕೆ ತಗ್ಗಿಸಲು ಮತ್ತು ವಸತಿ ಪ್ರದೇಶಗಳಿಗೆ ಉತ್ತಮ ಸಂಪರ್ಕ ಕಲ್ಪಿಸಲು ಸಾರ್ವಜನಿಕ ಸಾರಿಗೆಯನ್ನು ಜನರು ಮತ್ತೆ ಹೆಚ್ಚಾಗಿ ಬಳಸುತ್ತಿದ್ದಾರೆ.',
      'ವಿಶೇಷವಾಗಿ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವ ಉಪನಗರಗಳಲ್ಲಿ ಬಸ್‌ ಮತ್ತು ರೈಲುಗಳ ನಿಯಮಿತ ಸಂಚಾರ ಹಾಗೂ ಮಾರ್ಗಗಳ ವಿಸ್ತರಣೆ ಅತ್ಯಗತ್ಯ ಎಂದು ದಿನನಿತ್ಯದ ಪ್ರಯಾಣಿಕರು ಹೇಳಿದ್ದಾರೆ.',
      'ಮೂಲಸೌಕರ್ಯಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದರೊಂದಿಗೆ ಸಾಮಾನ್ಯ ಜನರಿಗೆ ಕೈಗೆಟುಕುವ ಟಿಕೆಟ್ ದರಗಳನ್ನು ನಿಗದಿಪಡಿಸಬೇಕು ಎಂದು ನೀತಿ ಸಂಶೋಧಕರು ಸಲಹೆ ನೀಡಿದ್ದಾರೆ.'
    ],
  },
  {
    id: 7,
    title: 'Hospital network opens new community care clinics in underserved areas',
    titleKn: 'ಹಿಂದುಳಿದ ಪ್ರದೇಶಗಳಲ್ಲಿ ನೂತನ ಸಮುದಾಯ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳ ಆರಂಭ',
    category: 'Health',
    categoryKn: 'ಆರೋಗ್ಯ',
    author: 'Emma Foster',
    publishedAt: '2026-10-22',
    readTime: '7 min read',
    readTimeKn: '7 ನಿಮಿಷ ಓದು',
    summary:
      'The expansion aims to reduce wait times, improve preventive care access, and connect patients with specialists more quickly.',
    summaryKn:
      'ಕಡಿಮೆ ವೆಚ್ಚದ ನಿಯಮಿತ ತಪಾಸಣೆ, ಕಾಯುವ ಸಮಯ ಕಡಿತ ಮತ್ತು ತಜ್ಞ ವೈದ್ಯರ ಸಮಾಲೋಚನೆಗಾಗಿ ನೂತನ ನೆರೆಹೊರೆ ಕ್ಲಿನಿಕ್‌ಗಳನ್ನು ತೆರೆಯಲಾಗಿದೆ.',
    image:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    content: [
      'A hospital network has opened several neighborhood-based clinics focused on preventive care and lower-cost treatment options for underserved communities.',
      'Providers say the model helps reduce overcrowding in larger facilities while creating more immediate access to regular checkups, screenings, and care coordination.',
      'Patients reported quicker appointments and more personalized follow-up, although some care groups still want longer hours and expanded specialist access.'
    ],
    contentKn: [
      'ಬಡ ಮತ್ತು ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಿಗೆ ಮುನ್ನೆಚ್ಚರಿಕೆ ಆರೋಗ್ಯ ರಕ್ಷಣೆ ಮತ್ತು ಕಡಿಮೆ ವೆಚ್ಚದ ಚಿಕಿತ್ಸೆ ನೀಡಲು ಪ್ರಮುಖ ಆಸ್ಪತ್ರೆಗಳ ಒಕ್ಕೂಟವು ಹಲವು ಬಡಾವಣೆ ಕೇಂದ್ರಗಳನ್ನು ತೆರೆದಿದೆ.',
      'ದೊಡ್ಡ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಜನಸಂದಣಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಮತ್ತು ತಕ್ಷಣದ ಪ್ರಾಥಮಿಕ ಚಿಕಿತ್ಸೆ ಒದಗಿಸಲು ಈ ಮಾದರಿ ಸಹಕಾರಿಯಾಗಿದೆ ಎಂದು ವೈದ್ಯರು ತಿಳಿಸಿದ್ದಾರೆ.',
      'ರೋಗಿಗಳಿಗೆ ಶೀಘ್ರ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮತ್ತು ವೈಯಕ್ತಿಕ ಗಮನ ಸಿಗುತ್ತಿದ್ದು, ಕ್ಲಿನಿಕ್‌ಗಳ ಕಾರ್ಯನಿರ್ವಹಣಾ ಸಮಯವನ್ನು ಮತ್ತಷ್ಟು ಹೆಚ್ಚಿಸಲು ಸಾರ್ವಜನಿಕರು ಮನವಿ ಮಾಡಿದ್ದಾರೆ.'
    ],
  },
  {
    id: 8,
    title: 'Independent designers bring heritage crafts into contemporary fashion',
    titleKn: 'ಸಾಂಪ್ರದಾಯಿಕ ಕರಕುಶಲತೆಯನ್ನು ಆಧುನಿಕ ಫ್ಯಾಷನ್‌ಗೆ ಅಳವಡಿಸಿದ ಸ್ವತಂತ್ರ ವಿನ್ಯಾಸಕರು',
    category: 'Culture',
    categoryKn: 'ಸಂಸ್ಕೃತಿ',
    author: 'Nora James',
    publishedAt: '2026-10-21',
    readTime: '4 min read',
    readTimeKn: '4 ನಿಮಿಷ ಓದು',
    summary:
      'A wave of creative studios is blending traditional techniques with sustainable materials for a new generation of buyers.',
    summaryKn:
      'ಪರಿಸರಸ್ನೇಹಿ ವಸ್ತುಗಳು ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಕಲೆಯ ಸಮ್ಮಿಲನದೊಂದಿಗೆ ಯುವ ಗ್ರಾಹಕರನ್ನು ಆಕರ್ಷಿಸಲು ವಿನ್ಯಾಸಕರ ಸೃಜನಶೀಲ ಹೆಜ್ಜೆ.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    content: [
      'Independent designers are reworking heritage textiles and craft traditions into contemporary silhouettes that appeal to younger buyers.',
      'The movement reflects both a growing concern for sustainability and a renewed appetite for locally crafted goods with stronger cultural identity.',
      'Retailers say the response has been strongest in urban areas where consumers are looking for less mass-produced and more story-driven products.'
    ],
    contentKn: [
      'ಸಾಂಪ್ರದಾಯಿಕ ನೇಕಾರಿಕೆ ಮತ್ತು ಕರಕುಶಲ ಪರಂಪರೆಯನ್ನು ಆಧುನಿಕ ಉಡುಪುಗಳ ವಿನ್ಯಾಸಕ್ಕೆ ಸಂಯೋಜಿಸುವ ಮೂಲಕ ಯುವ ಪೀಳಿಗೆಯನ್ನು ಸೆಳೆಯಲು ಸ್ವತಂತ್ರ ವಿನ್ಯಾಸಕರು ಮುಂದಾಗಿದ್ದಾರೆ.',
      'ಇದು ಪರಿಸರ ಸಂರಕ್ಷಣೆಯ ಕಾಳಜಿಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುವುದರ ಜೊತೆಗೆ ಸ್ಥಳೀಯ ಕರಕುಶಲ ವಸ್ತುಗಳಿಗೆ ಹೊಸ ಮಾರುಕಟ್ಟೆಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತಿದೆ.',
      'ನಗರ ಪ್ರದೇಶಗಳಲ್ಲಿ ಈ ಉತ್ಪನ್ನಗಳಿಗೆ ಭಾರಿ ಬೇಡಿಕೆ ವ್ಯಕ್ತವಾಗಿದ್ದು, ಸಾಂಸ್ಕೃತಿಕ ಮಹತ್ವವಿರುವ ವಸ್ತುಗಳನ್ನು ಕೊಳ್ಳಲು ಜನರು ಹೆಚ್ಚು ಆಸಕ್ತಿ ತೋರುತ್ತಿದ್ದಾರೆ.'
    ],
  },
  {
    id: 9,
    title: 'Coastal cities expand flood defenses as climate warnings intensify',
    titleKn: 'ಕರಾವಳಿ ನಗರಗಳಲ್ಲಿ ಪ್ರವಾಹ ತಡೆಗೋಡೆ ಮತ್ತು ರಕ್ಷಣಾ ಕಾಮಗಾರಿಗಳ ವಿಸ್ತರಣೆ',
    category: 'Environment',
    categoryKn: 'ಪರಿಸರ',
    author: 'Mila Thompson',
    publishedAt: '2026-10-20',
    readTime: '5 min read',
    readTimeKn: '5 ನಿಮಿಷ ಓದು',
    summary:
      'Mayors are accelerating coastal barrier projects and neighborhood flood mapping as storms become more frequent and disruptive.',
    summaryKn:
      'ಹೆಚ್ಚುತ್ತಿರುವ ಬಿರುಗಾಳಿ ಮತ್ತು ಕಡಲ್ಕೊರೆತದಿಂದ ರಕ್ಷಿಸಲು ಬೃಹತ್ ತಡೆಗೋಡೆಗಳು ಹಾಗೂ ವೈಜ್ಞಾನಿಕ ಪ್ರವಾಹ ನಕ್ಷೆ ಸಿದ್ಧಪಡಿಸುತ್ತಿರುವ ನಗರ ಮುಖಂಡರು.',
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    content: [
      'Coastal communities are investing in larger sea walls, porous landscaping, and stronger drainage systems as storms become more unpredictable.',
      'Urban planners say the most effective measures combine infrastructure upgrades with public communication and neighborhood-level resilience planning.',
      'The approach remains expensive, but officials argue the cost of inaction is far greater for vulnerable communities and small businesses.'
    ],
    contentKn: [
      'ಅನಿರೀಕ್ಷಿತ ಬಿರುಗಾಳಿ ಮತ್ತು ಪ್ರವಾಹದಿಂದ ಪಾರಾಗಲು ಕರಾವಳಿ ಪ್ರದೇಶಗಳಲ್ಲಿ ದೊಡ್ಡ ಸಮುದ್ರ ತಡೆಗೋಡೆಗಳು ಮತ್ತು ಬಲವಾದ ಒಳಚರಂಡಿ ವ್ಯವಸ್ಥೆಯನ್ನು ನಿರ್ಮಿಸಲಾಗುತ್ತಿದೆ.',
      'ಮೂಲಸೌಕರ್ಯ ಅಭಿವೃದ್ಧಿಯ ಜೊತೆಗೆ ಸಾರ್ವಜನಿಕ ಜಾಗೃತಿ ಮತ್ತು ಬಡಾವಣೆ ಮಟ್ಟದ ಮುನ್ನೆಚ್ಚರಿಕಾ ಕ್ರಮಗಳು ಅತ್ಯಂತ ಪರಿಣಾಮಕಾರಿ ಎಂದು ತಜ್ಞರು ಹೇಳಿದ್ದಾರೆ.',
      'ಈ ಯೋಜನೆಗಳು ದುಬಾರಿಯಾಗಿದ್ದರೂ, ಮುಂಜಾಗ್ರತೆ ವಹಿಸದಿದ್ದರೆ ಎದುರಾಗಬಹುದಾದ ನಷ್ಟವು ಮತ್ತಷ್ಟು ಗಂಭೀರವಾಗಿರುತ್ತದೆ ಎಂದು ಅಧಿಕಾರಿಗಳು ಸ್ಪಷ್ಟಪಡಿಸಿದ್ದಾರೆ.'
    ],
  },
];

let nextArticleId = articles.length + 1;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Vachana Kranti API is running.' });
});

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.get('/api/articles/:id', (req, res) => {
  const article = articles.find((item) => item.id === Number(req.params.id));

  if (!article) {
    return res.status(404).json({ message: 'Article not found.' });
  }

  return res.json(article);
});

app.post('/api/articles', (req, res) => {
  const {
    title,
    titleKn,
    category,
    categoryKn,
    author,
    publishedAt,
    readTime,
    readTimeKn,
    summary,
    summaryKn,
    image,
    content,
    contentKn,
    featured,
  } = req.body;

  if (!title || !category || !author || !summary) {
    return res.status(400).json({ message: 'Title, category, author, and summary are required.' });
  }

  const newArticle = {
    id: nextArticleId++,
    title,
    titleKn: titleKn || title,
    category,
    categoryKn: categoryKn || category,
    author,
    publishedAt: publishedAt || new Date().toISOString(),
    readTime: readTime || '4 min read',
    readTimeKn: readTimeKn || '4 ನಿಮಿಷ ಓದು',
    summary,
    summaryKn: summaryKn || summary,
    image: image || 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    featured: Boolean(featured),
    content: Array.isArray(content) ? content : [summary],
    contentKn: Array.isArray(contentKn) ? contentKn : [summaryKn || summary],
  };

  articles.unshift(newArticle);
  return res.status(201).json(newArticle);
});

if (process.env.NODE_ENV === 'production') {
  const clientDistPath = path.join(__dirname, '../client/dist');

  app.use(express.static(clientDistPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Vachana Kranti server running on http://localhost:${PORT}`);
});
