

Prototype website and content for **CyberGhana**, a cybersecurity education project for Ghana. It covers mobile money (MoMo) fraud, the Data Protection Act and the Cyber Security Authority framework, plus ethical hacking tracks.

> **Prototype notice:** the statistics, instructor profiles, testimonials, partnerships, pricing and course counts in these pages are **sample placeholder content** for design and layout. They do not describe a real enrolled cohort or real people.

## What's inside
| File | Description |
|---|---|
| `academy.html` | Single-page academy site: courses, learning paths (defensive and offensive tracks), pricing, and an AI tutor chat UI |
| `bootcamp.html` | 5-page bootcamp site: home, schedule, courses, about, pricing |
| `shorts-scripts/free-wifi-voiceover.txt` | Voiceover script for the CyberGhana YouTube Short on public Wi-Fi risks |

## Tech
Plain HTML, CSS and JavaScript. No build step. Open either HTML file in a browser.

## AI tutor note
The chat UI in `academy.html` is front-end only. A production version must call the AI model from a **backend server** that holds the API key. Never put an API key in client-side code.

## Roadmap
- Real backend for sign-ups and the AI tutor
- Replace placeholder content with real course material
- Automated Shorts pipeline (n8n) for daily security tips

## Author
Alexander Ayikwei, Ghana
