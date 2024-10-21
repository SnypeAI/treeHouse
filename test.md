# Directory Structure: /root/main/work/Phones/PhantomPhones

## Directory Tree

├── 📄 .env.local
├── 📂 .git
├── 📄 .gitignore
├── 📂 .next
├── 📄 .npmrc
├── 📂 .vercel
│   ├── 📄 README.txt
│   ├── 📂 cache
│   └── 📄 project.json
├── 📄 README.md
├── 📄 check-errors.ts
├── 📂 data
│   ├── 📄 currencyData.ts
│   └── 📄 products.json
├── 📄 eslint-errors.json
├── 📄 gitpush.txt
├── 📂 lib
│   └── 📄 telegram-bot.ts
├── 📄 next-env.d.ts
├── 📄 next-sitemap.config.js
├── 📄 next.config.js
├── 📂 node_modules
├── 📄 package.json
├── 📂 pages
│   └── 📂 api
│       ├── 📄 article.json
│       ├── 📄 comments.ts
│       ├── 📄 related-articles.ts
│       ├── 📄 telegram-bot.ts
│       ├── 📄 telegram-webhook.ts
│       ├── 📄 test.json
│       └── 📄 verify-telegram.ts
├── 📄 postcss.config.js
├── 📄 postcss.config.mjs
├── 📂 public
├── 📂 src
│   ├── 📂 app
│   │   ├── 📂 about
│   │   ├── 📂 cart
│   │   │   ├── 📄 CartPageStyles.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📂 checkout
│   │   ├── 📂 contact
│   │   │   └── 📄 page.tsx
│   │   ├── 📄 favicon.ico
│   │   ├── 📂 fonts
│   │   │   ├── 📄 GeistMonoVF.woff
│   │   │   └── 📄 GeistVF.woff
│   │   ├── 📄 globals.css
│   │   ├── 📄 layout.tsx
│   │   ├── 📂 pacmanGame
│   │   │   └── 📄 pacman.tsx
│   │   ├── 📄 page.tsx
│   │   └── 📂 products
│   │       ├── 📂 [slug]
│   │       │   └── 📄 page.tsx
│   │       ├── 📄 page.tsx
│   │       └── 📄 productImage.tsx
│   ├── 📂 components
│   │   ├── 📄 CurrencySelector.tsx
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 GlowingButton.tsx
│   │   ├── 📄 MuiNextLink.tsx
│   │   ├── 📄 Navbar.tsx
│   │   ├── 📄 Pagination.tsx
│   │   ├── 📄 ProductCard.tsx
│   │   ├── 📄 ProductDetails.tsx
│   │   └── 📄 Providers.tsx
│   ├── 📂 contexts
│   │   ├── 📄 CartContext.tsx
│   │   ├── 📄 CurrencyContext.tsx
│   │   └── 📄 ExchangeRateContext.tsx
│   ├── 📄 globals.css
│   ├── 📂 styles
│   │   └── 📄 globals.css
│   ├── 📂 theme
│   │   ├── 📂 gsap
│   │   │   └── 📂 scramble
│   │   │       └── 📄 subheaderScramble.tsx
│   │   └── 📄 theme.ts
│   └── 📂 types
│       ├── 📄 index.d.ts
│       └── 📄 telegraf-ratelimit.d.ts
├── 📄 tailwind.config.js
├── 📄 tailwind.config.ts
├── 📄 tsconfig.json
└── 📄 vercel.json


## File Contents


## File: /root/main/work/Phones/PhantomPhones/.env.local

### Content
```local
NEXT_PUBLIC_API_URL=https://www.phantomphones.xyz
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cHN0emVkaWdlY2d5eHljdWR3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODEyNzUyOSwiZXhwIjoyMDQzNzAzNTI5fQ.IordHbLVlkSlYIox-TDEDSyTVp4jhnJ-YYzOJgm9xps
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cHN0emVkaWdlY2d5eHljdWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMjc1MjksImV4cCI6MjA0MzcwMzUyOX0.1oFXh74_obQvjrO2Kc6d7tulGbDhZDls9liSVuZJqZI
SUPABASE_URL=https://hvpstzedigecgyxycudw.supabase.co
TELEGRAM_BOT_TOKEN=8000916485:AAFPBYIRkxTaROCx17NUXHNZg7WUzFCc_Ns
TELEGRAM_WEBHOOK_SECRET=jhbhjUuioBHJhiljHUuiHKJHnjmbuiuy8978678gbgvGiuijjn-mklhyfghkjm%cggccnmJNKKkZcaghgyT679iklkkmbgfggbn§
CSRF_SECRET=kbhjnJKBhjnjLKnjhBjnmklm4e690bghgCFg-joilknjcfggfrJ-IOuytyjukJHHgvffyuiuKLbjhguki3567uyjggfhhJfhtjkj
SESSION_SECRET=jhbnlknjkvyfrtu7iu897r6546787UYFtfghjhiuyvcftfguijkhVHGFhjhjgctghKLJklnbnvgfr78i7yeredvcghbjkBvghchjgjkn578ubhgTGUgfyGHujhhgy66785rtgbJNkjjhj
```


## File: /root/main/work/Phones/PhantomPhones/.gitignore

### Content
```
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Next.js build output
/.next/
/out/

# Production
/build

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# IDEs and editors
/.idea
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace

# VS Code
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json

# Logs
logs
*.log

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Temporary files
*.swp
*.swo

# macOS
.DS_Store
.AppleDouble
.LSOverride

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# Linux
*~

```


## File: /root/main/work/Phones/PhantomPhones/.npmrc

### Content
```
always-auth=true
//npm.greensock.com/:_authToken=9c9f3c9b-02ec-48ed-bbd3-9848c5c5cb55
@gsap:registry=https://npm.greensock.com

```


## File: /root/main/work/Phones/PhantomPhones/.vercel/README.txt

### Content
```txt
> Why do I have a folder named ".vercel" in my project?
The ".vercel" folder is created when you link a directory to a Vercel project.

> What does the "project.json" file contain?
The "project.json" file contains:
- The ID of the Vercel project that you linked ("projectId")
- The ID of the user or team your Vercel project is owned by ("orgId")

> Should I commit the ".vercel" folder?
No, you should not share the ".vercel" folder with anyone.
Upon creation, it will be automatically added to your ".gitignore" file.

```


## File: /root/main/work/Phones/PhantomPhones/.vercel/project.json

### Content
```json
{"projectId":"prj_Kjox5vSVvHmvxRS4vRSw8UHDSMBA","orgId":"team_8LuuEsZuELzIUdSS4cq3Ycdl"}
```


## File: /root/main/work/Phones/PhantomPhones/README.md

### Content
```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```


## File: /root/main/work/Phones/PhantomPhones/check-errors.ts

### Content
```ts
import * as ts from 'typescript';
import { ESLint } from 'eslint';
import * as path from 'path';
import * as fs from 'fs';

function getTSErrors(fileName: string): ts.Diagnostic[] {
    const program = ts.createProgram([fileName], {
        noEmit: true,
        esModuleInterop: true,
        jsx: ts.JsxEmit.React
    });
    const emitResult = program.emit();
    return ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
}

async function getESLintErrors(fileName: string) {
    const eslint = new ESLint();
    const results = await eslint.lintFiles([fileName]);
    return results[0].messages;
}

async function checkErrors(fileName: string) {
    const fullPath = path.resolve(fileName);
    
    if (!fs.existsSync(fullPath)) {
        console.error(`File not found: ${fullPath}`);
        return;
    }

    console.log(`Checking errors for: ${fullPath}`);

    // TypeScript errors
    const tsErrors = getTSErrors(fullPath);
    console.log("\nTypeScript Errors:");
    tsErrors.forEach(error => {
        if (error.file && error.start !== undefined) {
            let { line, character } = error.file.getLineAndCharacterOfPosition(error.start);
            console.log(`  Line ${line + 1}, Column ${character + 1}: ${ts.flattenDiagnosticMessageText(error.messageText, "\n")}`);
        }
    });

    // ESLint errors
    try {
        const eslintErrors = await getESLintErrors(fullPath);
        console.log("\nESLint Errors:");
        eslintErrors.forEach(error => {
            console.log(`  Line ${error.line}, Column ${error.column}: ${error.message}`);
        });
    } catch (error) {
        console.error("Error running ESLint:", error);
    }
}

// Usage
const fileName = process.argv[2];
if (!fileName) {
    console.error("Please provide a file name as an argument.");
} else {
    checkErrors(fileName).catch(error => console.error("Error:", error));
}

```


## File: /root/main/work/Phones/PhantomPhones/data/currencyData.ts

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/components/CurrencySelector.tsx

### Content
```ts
// src/data/currencyData.ts

export interface CurrencyOption {
    code: string;
    name: string;
    country: string;
    flag: string;
    flagCode: string;
    continent: string;
}

export const currencyOptions: CurrencyOption[] = [
    // North America
    {
        code: 'USD',
        name: 'US Dollar',
        country: 'United States',
        flag: '🇺🇸',
        flagCode: 'us',
        continent: 'North America',
    },
    {
        code: 'CAD',
        name: 'Canadian Dollar',
        country: 'Canada',
        flag: '🇨🇦',
        flagCode: 'ca',
        continent: 'North America',
    },
    {
        code: 'MXN',
        name: 'Mexican Peso',
        country: 'Mexico',
        flag: '🇲🇽',
        flagCode: 'mx',
        continent: 'North America',
    },
    {
        code: 'BBD',
        name: 'Barbadian Dollar',
        country: 'Barbados',
        flag: '🇧🇧',
        flagCode: 'bb',
        continent: 'North America',
    },
    {
        code: 'BSD',
        name: 'Bahamian Dollar',
        country: 'Bahamas',
        flag: '🇧🇸',
        flagCode: 'bs',
        continent: 'North America',
    },
    {
        code: 'BMD',
        name: 'Bermudian Dollar',
        country: 'Bermuda',
        flag: '🇧🇲',
        flagCode: 'bm',
        continent: 'North America',
    },
    {
        code: 'KYD',
        name: 'Cayman Islands Dollar',
        country: 'Cayman Islands',
        flag: '🇰🇾',
        flagCode: 'ky',
        continent: 'North America',
    },
    {
        code: 'XCD',
        name: 'East Caribbean Dollar',
        country: 'East Caribbean States',
        flag: '🇦🇬',
        flagCode: 'ag',
        continent: 'North America',
    },
    {
        code: 'BZD',
        name: 'Belize Dollar',
        country: 'Belize',
        flag: '🇧🇿',
        flagCode: 'bz',
        continent: 'North America',
    },
    {
        code: 'SVC',
        name: 'Salvadoran Colón',
        country: 'El Salvador',
        flag: '🇸🇻',
        flagCode: 'sv',
        continent: 'North America',
    },
    // South America
    {
        code: 'BRL',
        name: 'Brazilian Real',
        country: 'Brazil',
        flag: '🇧🇷',
        flagCode: 'br',
        continent: 'South America',
    },
    {
        code: 'ARS',
        name: 'Argentine Peso',
        country: 'Argentina',
        flag: '🇦🇷',
        flagCode: 'ar',
        continent: 'South America',
    },
    {
        code: 'CLP',
        name: 'Chilean Peso',
        country: 'Chile',
        flag: '🇨🇱',
        flagCode: 'cl',
        continent: 'South America',
    },
    {
        code: 'COP',
        name: 'Colombian Peso',
        country: 'Colombia',
        flag: '🇨🇴',
        flagCode: 'co',
        continent: 'South America',
    },
    {
        code: 'CUP',
        name: 'Cuban Peso',
        country: 'Cuba',
        flag: '🇨🇺',
        flagCode: 'cu',
        continent: 'South America',
      },
    {
        code: 'PEN',
        name: 'Peruvian Sol',
        country: 'Peru',
        flag: '🇵🇪',
        flagCode: 'pe',
        continent: 'South America',
    },
    {
        code: 'UYU',
        name: 'Uruguayan Peso',
        country: 'Uruguay',
        flag: '🇺🇾',
        flagCode: 'uy',
        continent: 'South America',
    },
    {
        code: 'PYG',
        name: 'Paraguayan Guarani',
        country: 'Paraguay',
        flag: '🇵🇾',
        flagCode: 'py',
        continent: 'South America',
    },
    {
        code: 'VEF',
        name: 'Venezuelan Bolívar',
        country: 'Venezuela',
        flag: '🇻🇪',
        flagCode: 've',
        continent: 'South America',
    },
    {
        code: 'BOB',
        name: 'Bolivian Boliviano',
        country: 'Bolivia',
        flag: '🇧🇴',
        flagCode: 'bo',
        continent: 'South America',
    },
    {
        code: 'COP',
        name: 'Colombian Peso',
        country: 'Colombia',
        flag: '🇨🇴',
        flagCode: 'co',
        continent: 'South America',
    },
    {
        code: 'SRD',
        name: 'Surinamese Dollar',
        country: 'Suriname',
        flag: '🇸🇷',
        flagCode: 'sr',
        continent: 'South America',
    },
    {
        code: 'GYD',
        name: 'Guyanese Dollar',
        country: 'Guyana',
        flag: '🇬🇾',
        flagCode: 'gy',
        continent: 'South America',
    },
    {
        code: 'FKP',
        name: 'Falkland Islands Pound',
        country: 'Falkland Islands',
        flag: '🇫🇰',
        flagCode: 'fk',
        continent: 'South America',
    },
    {
        code: 'VES',
        name: 'Venezuelan Bolívar Soberano',
        country: 'Venezuela',
        flag: '🇻🇪',
        flagCode: 've',
        continent: 'South America',
      },
    // Europe
    {
        code: 'EUR',
        name: 'Euro',
        country: 'European Union',
        flag: '🇪🇺',
        flagCode: 'eu',
        continent: 'Europe',
    },
    {
        code: 'GBP',
        name: 'British Pound Sterling',
        country: 'United Kingdom',
        flag: '🇬🇧',
        flagCode: 'gb',
        continent: 'Europe',
    },
    {
        code: 'CHF',
        name: 'Swiss Franc',
        country: 'Switzerland',
        flag: '🇨🇭',
        flagCode: 'ch',
        continent: 'Europe',
    },
    {
        code: 'SEK',
        name: 'Swedish Krona',
        country: 'Sweden',
        flag: '🇸🇪',
        flagCode: 'se',
        continent: 'Europe',
    },
    {
        code: 'NOK',
        name: 'Norwegian Krone',
        country: 'Norway',
        flag: '🇳🇴',
        flagCode: 'no',
        continent: 'Europe',
    },
    {
        code: 'DKK',
        name: 'Danish Krone',
        country: 'Denmark',
        flag: '🇩🇰',
        flagCode: 'dk',
        continent: 'Europe',
    },
    {
        code: 'PLN',
        name: 'Polish Złoty',
        country: 'Poland',
        flag: '🇵🇱',
        flagCode: 'pl',
        continent: 'Europe',
    },
    {
        code: 'RUB',
        name: 'Russian Ruble',
        country: 'Russia',
        flag: '🇷🇺',
        flagCode: 'ru',
        continent: 'Europe',
    },
    {
        code: 'CZK',
        name: 'Czech Koruna',
        country: 'Czech Republic',
        flag: '🇨🇿',
        flagCode: 'cz',
        continent: 'Europe',
    },
    {
        code: 'HUF',
        name: 'Hungarian Forint',
        country: 'Hungary',
        flag: '🇭🇺',
        flagCode: 'hu',
        continent: 'Europe',
    },
    {
        code: 'RON',
        name: 'Romanian Leu',
        country: 'Romania',
        flag: '🇷🇴',
        flagCode: 'ro',
        continent: 'Europe',
    },
    {
        code: 'BGN',
        name: 'Bulgarian Lev',
        country: 'Bulgaria',
        flag: '🇧🇬',
        flagCode: 'bg',
        continent: 'Europe',
    },
    {
        code: 'HRK',
        name: 'Croatian Kuna',
        country: 'Croatia',
        flag: '🇭🇷',
        flagCode: 'hr',
        continent: 'Europe',
    },
    {
        code: 'TRY',
        name: 'Turkish Lira',
        country: 'Turkey',
        flag: '🇹🇷',
        flagCode: 'tr',
        continent: 'Europe',
    },
    {
        code: 'UAH',
        name: 'Ukrainian Hryvnia',
        country: 'Ukraine',
        flag: '🇺🇦',
        flagCode: 'ua',
        continent: 'Europe',
    },
    {
        code: 'BYN',
        name: 'Belarusian Ruble',
        country: 'Belarus',
        flag: '🇧🇾',
        flagCode: 'by',
        continent: 'Europe',
    },
    {
        code: 'ISK',
        name: 'Icelandic Króna',
        country: 'Iceland',
        flag: '🇮🇸',
        flagCode: 'is',
        continent: 'Europe',
    },
    {
        code: 'ALL',
        name: 'Albanian Lek',
        country: 'Albania',
        flag: '🇦🇱',
        flagCode: 'al',
        continent: 'Europe',
    },
    {
        code: 'MKD',
        name: 'Macedonian Denar',
        country: 'North Macedonia',
        flag: '🇲🇰',
        flagCode: 'mk',
        continent: 'Europe',
    },
    {
        code: 'RSD',
        name: 'Serbian Dinar',
        country: 'Serbia',
        flag: '🇷🇸',
        flagCode: 'rs',
        continent: 'Europe',
    },
    {
        code: 'MDL',
        name: 'Moldovan Leu',
        country: 'Moldova',
        flag: '🇲🇩',
        flagCode: 'md',
        continent: 'Europe',
    },
    {
        code: 'FOK',
        name: 'Faroese Króna',
        country: 'Faroe Islands',
        flag: '🇫🇴',
        flagCode: 'fo',
        continent: 'Europe',
      },
      {
        code: 'GGP',
        name: 'Guernsey Pound',
        country: 'Guernsey',
        flag: '🇬🇬',
        flagCode: 'gg',
        continent: 'Europe',
      },
      {
        code: 'IMP',
        name: 'Isle of Man Pound',
        country: 'Isle of Man',
        flag: '🇮🇲',
        flagCode: 'im',
        continent: 'Europe',
      },
    // Asia
    {
        code: 'JPY',
        name: 'Japanese Yen',
        country: 'Japan',
        flag: '🇯🇵',
        flagCode: 'jp',
        continent: 'Asia',
    },
    {
        code: 'CNY',
        name: 'Chinese Yuan',
        country: 'China',
        flag: '🇨🇳',
        flagCode: 'cn',
        continent: 'Asia',
    },
    {
        code: 'INR',
        name: 'Indian Rupee',
        country: 'India',
        flag: '🇮🇳',
        flagCode: 'in',
        continent: 'Asia',
    },
    {
        code: 'KRW',
        name: 'South Korean Won',
        country: 'South Korea',
        flag: '🇰🇷',
        flagCode: 'kr',
        continent: 'Asia',
    },
    {
        code: 'HKD',
        name: 'Hong Kong Dollar',
        country: 'Hong Kong',
        flag: '🇭🇰',
        flagCode: 'hk',
        continent: 'Asia',
    },
    {
        code: 'SGD',
        name: 'Singapore Dollar',
        country: 'Singapore',
        flag: '🇸🇬',
        flagCode: 'sg',
        continent: 'Asia',
    },
    {
        code: 'MYR',
        name: 'Malaysian Ringgit',
        country: 'Malaysia',
        flag: '🇲🇾',
        flagCode: 'my',
        continent: 'Asia',
    },
    {
        code: 'IDR',
        name: 'Indonesian Rupiah',
        country: 'Indonesia',
        flag: '🇮🇩',
        flagCode: 'id',
        continent: 'Asia',
    },
    {
        code: 'MVR',
        name: 'Maldivian Rufiyaa',
        country: 'Maldives',
        flag: '🇲🇻',
        flagCode: 'mv',
        continent: 'Asia',
      },
      {
        code: 'TMT',
        name: 'Turkmenistan Manat',
        country: 'Turkmenistan',
        flag: '🇹🇲',
        flagCode: 'tm',
        continent: 'Asia',
      },
    {
        code: 'THB',
        name: 'Thai Baht',
        country: 'Thailand',
        flag: '🇹🇭',
        flagCode: 'th',
        continent: 'Asia',
    },
    {
        code: 'PHP',
        name: 'Philippine Peso',
        country: 'Philippines',
        flag: '🇵🇭',
        flagCode: 'ph',
        continent: 'Asia',
    },
    {
        code: 'VND',
        name: 'Vietnamese Dong',
        country: 'Vietnam',
        flag: '🇻🇳',
        flagCode: 'vn',
        continent: 'Asia',
    },
    {
        code: 'ILS',
        name: 'Israeli New Shekel',
        country: 'Israel',
        flag: '🇮🇱',
        flagCode: 'il',
        continent: 'Asia',
    },
    {
        code: 'AED',
        name: 'UAE Dirham',
        country: 'United Arab Emirates',
        flag: '🇦🇪',
        flagCode: 'ae',
        continent: 'Asia',
    },
    {
        code: 'SAR',
        name: 'Saudi Riyal',
        country: 'Saudi Arabia',
        flag: '🇸🇦',
        flagCode: 'sa',
        continent: 'Asia',
    },
    {
        code: 'TWD',
        name: 'New Taiwan Dollar',
        country: 'Taiwan',
        flag: '🇹🇼',
        flagCode: 'tw',
        continent: 'Asia',
      },
    {
        code: 'TRY',
        name: 'Turkish Lira',
        country: 'Turkey',
        flag: '🇹🇷',
        flagCode: 'tr',
        continent: 'Asia',
    },
    {
        code: 'PKR',
        name: 'Pakistani Rupee',
        country: 'Pakistan',
        flag: '🇵🇰',
        flagCode: 'pk',
        continent: 'Asia',
    },
    {
        code: 'BDT',
        name: 'Bangladeshi Taka',
        country: 'Bangladesh',
        flag: '🇧🇩',
        flagCode: 'bd',
        continent: 'Asia',
    },
    {
        code: 'LKR',
        name: 'Sri Lankan Rupee',
        country: 'Sri Lanka',
        flag: '🇱🇰',
        flagCode: 'lk',
        continent: 'Asia',
    },
    {
        code: 'KZT',
        name: 'Kazakhstani Tenge',
        country: 'Kazakhstan',
        flag: '🇰🇿',
        flagCode: 'kz',
        continent: 'Asia',
    },
    {
        code: 'NPR',
        name: 'Nepalese Rupee',
        country: 'Nepal',
        flag: '🇳🇵',
        flagCode: 'np',
        continent: 'Asia',
    },
    {
        code: 'MMK',
        name: 'Myanmar Kyat',
        country: 'Myanmar',
        flag: '🇲🇲',
        flagCode: 'mm',
        continent: 'Asia',
    },
    {
        code: 'KHR',
        name: 'Cambodian Riel',
        country: 'Cambodia',
        flag: '🇰🇭',
        flagCode: 'kh',
        continent: 'Asia',
    },
    {
        code: 'LAK',
        name: 'Lao Kip',
        country: 'Laos',
        flag: '🇱🇦',
        flagCode: 'la',
        continent: 'Asia',
    },
    {
        code: 'KWD',
        name: 'Kuwaiti Dinar',
        country: 'Kuwait',
        flag: '🇰🇼',
        flagCode: 'kw',
        continent: 'Asia',
    },
    {
        code: 'QAR',
        name: 'Qatari Riyal',
        country: 'Qatar',
        flag: '🇶🇦',
        flagCode: 'qa',
        continent: 'Asia',
    },
    {
        code: 'BHD',
        name: 'Bahraini Dinar',
        country: 'Bahrain',
        flag: '🇧🇭',
        flagCode: 'bh',
        continent: 'Asia',
    },
    {
        code: 'OMR',
        name: 'Omani Rial',
        country: 'Oman',
        flag: '🇴🇲',
        flagCode: 'om',
        continent: 'Asia',
    },
    {
        code: 'JOD',
        name: 'Jordanian Dinar',
        country: 'Jordan',
        flag: '🇯🇴',
        flagCode: 'jo',
        continent: 'Asia',
    },
    {
        code: 'IRR',
        name: 'Iranian Rial',
        country: 'Iran',
        flag: '🇮🇷',
        flagCode: 'ir',
        continent: 'Asia',
    },
    {
        code: 'IQD',
        name: 'Iraqi Dinar',
        country: 'Iraq',
        flag: '🇮🇶',
        flagCode: 'iq',
        continent: 'Asia',
    },
    {
        code: 'YER',
        name: 'Yemeni Rial',
        country: 'Yemen',
        flag: '🇾🇪',
        flagCode: 'ye',
        continent: 'Asia',
    },
    {
        code: 'LBP',
        name: 'Lebanese Pound',
        country: 'Lebanon',
        flag: '🇱🇧',
        flagCode: 'lb',
        continent: 'Asia',
    },
    {
        code: 'SYP',
        name: 'Syrian Pound',
        country: 'Syria',
        flag: '🇸🇾',
        flagCode: 'sy',
        continent: 'Asia',
    },
    {
        code: 'AFN',
        name: 'Afghan Afghani',
        country: 'Afghanistan',
        flag: '🇦🇫',
        flagCode: 'af',
        continent: 'Asia',
    },
    {
        code: 'MNT',
        name: 'Mongolian Tögrög',
        country: 'Mongolia',
        flag: '🇲🇳',
        flagCode: 'mn',
        continent: 'Asia',
    },
    {
        code: 'UZS',
        name: 'Uzbekistani Soʻm',
        country: 'Uzbekistan',
        flag: '🇺🇿',
        flagCode: 'uz',
        continent: 'Asia',
    },
    {
        code: 'AZN',
        name: 'Azerbaijani Manat',
        country: 'Azerbaijan',
        flag: '🇦🇿',
        flagCode: 'az',
        continent: 'Asia',
    },
    {
        code: 'GEL',
        name: 'Georgian Lari',
        country: 'Georgia',
        flag: '🇬🇪',
        flagCode: 'ge',
        continent: 'Asia',
    },
    {
        code: 'AMD',
        name: 'Armenian Dram',
        country: 'Armenia',
        flag: '🇦🇲',
        flagCode: 'am',
        continent: 'Asia',
    },
    // Africa
    {
        code: 'ZAR',
        name: 'South African Rand',
        country: 'South Africa',
        flag: '🇿🇦',
        flagCode: 'za',
        continent: 'Africa',
    },
    {
        code: 'CDF',
        name: 'Congolese Franc',
        country: 'Democratic Republic of the Congo',
        flag: '🇨🇩',
        flagCode: 'cd',
        continent: 'Africa',
    },
    {
        code: 'CVE',
        name: 'Cape Verdean Escudo',
        country: 'Cape Verde',
        flag: '🇨🇻',
        flagCode: 'cv',
        continent: 'Africa',
    },
    {
        code: 'ERN',
        name: 'Eritrean Nakfa',
        country: 'Eritrea',
        flag: '🇪🇷',
        flagCode: 'er',
        continent: 'Africa',
    },
    {
        code: 'LRD',
        name: 'Liberian Dollar',
        country: 'Liberia',
        flag: '🇱🇷',
        flagCode: 'lr',
        continent: 'Africa',
    },
    {
        code: 'LSL',
        name: 'Lesotho Loti',
        country: 'Lesotho',
        flag: '🇱🇸',
        flagCode: 'ls',
        continent: 'Africa',
    },
    {
        code: 'LYD',
        name: 'Libyan Dinar',
        country: 'Libya',
        flag: '🇱🇾',
        flagCode: 'ly',
        continent: 'Africa',
    },
    {
        code: 'MRU',
        name: 'Mauritanian Ouguiya',
        country: 'Mauritania',
        flag: '🇲🇷',
        flagCode: 'mr',
        continent: 'Africa',
    },
    {
        code: 'RWF',
        name: 'Rwandan Franc',
        country: 'Rwanda',
        flag: '🇷🇼',
        flagCode: 'rw',
        continent: 'Africa',
    },
    {
        code: 'SLE',
        name: 'Sierra Leonean Leone',
        country: 'Sierra Leone',
        flag: '🇸🇱',
        flagCode: 'sl',
        continent: 'Africa',
    },
    {
        code: 'SLL',
        name: 'Sierra Leonean Leone (old currency)',
        country: 'Sierra Leone',
        flag: '🇸🇱',
        flagCode: 'sl',
        continent: 'Africa',
    },
    {
        code: 'SOS',
        name: 'Somali Shilling',
        country: 'Somalia',
        flag: '🇸🇴',
        flagCode: 'so',
        continent: 'Africa',
    },
    {
        code: 'SSP',
        name: 'South Sudanese Pound',
        country: 'South Sudan',
        flag: '🇸🇸',
        flagCode: 'ss',
        continent: 'Africa',
    },
    {
        code: 'STN',
        name: 'São Tomé and Príncipe Dobra',
        country: 'São Tomé and Príncipe',
        flag: '🇸🇹',
        flagCode: 'st',
        continent: 'Africa',
    },
    {
        code: 'SZL',
        name: 'Swazi Lilangeni',
        country: 'Eswatini',
        flag: '🇸🇿',
        flagCode: 'sz',
        continent: 'Africa',
    },
    {
        code: 'NGN',
        name: 'Nigerian Naira',
        country: 'Nigeria',
        flag: '🇳🇬',
        flagCode: 'ng',
        continent: 'Africa',
    },
    {
        code: 'EGP',
        name: 'Egyptian Pound',
        country: 'Egypt',
        flag: '🇪🇬',
        flagCode: 'eg',
        continent: 'Africa',
    },
    {
        code: 'KES',
        name: 'Kenyan Shilling',
        country: 'Kenya',
        flag: '🇰🇪',
        flagCode: 'ke',
        continent: 'Africa',
    },
    {
        code: 'GHS',
        name: 'Ghanaian Cedi',
        country: 'Ghana',
        flag: '🇬🇭',
        flagCode: 'gh',
        continent: 'Africa',
    },
    {
        code: 'MAD',
        name: 'Moroccan Dirham',
        country: 'Morocco',
        flag: '🇲🇦',
        flagCode: 'ma',
        continent: 'Africa',
    },
    {
        code: 'TND',
        name: 'Tunisian Dinar',
        country: 'Tunisia',
        flag: '🇹🇳',
        flagCode: 'tn',
        continent: 'Africa',
    },
    {
        code: 'DZD',
        name: 'Algerian Dinar',
        country: 'Algeria',
        flag: '🇩🇿',
        flagCode: 'dz',
        continent: 'Africa',
    },
    {
        code: 'UGX',
        name: 'Ugandan Shilling',
        country: 'Uganda',
        flag: '🇺🇬',
        flagCode: 'ug',
        continent: 'Africa',
    },
    {
        code: 'SDG',
        name: 'Sudanese Pound',
        country: 'Sudan',
        flag: '🇸🇩',
        flagCode: 'sd',
        continent: 'Africa',
    },
    {
        code: 'TZS',
        name: 'Tanzanian Shilling',
        country: 'Tanzania',
        flag: '🇹🇿',
        flagCode: 'tz',
        continent: 'Africa',
    },
    {
        code: 'ETB',
        name: 'Ethiopian Birr',
        country: 'Ethiopia',
        flag: '🇪🇹',
        flagCode: 'et',
        continent: 'Africa',
    },
    {
        code: 'AOA',
        name: 'Angolan Kwanza',
        country: 'Angola',
        flag: '🇦🇴',
        flagCode: 'ao',
        continent: 'Africa',
    },
    {
        code: 'XOF',
        name: 'West African CFA Franc',
        country: 'West African States',
        flag: '🇸🇳',
        flagCode: 'sn',
        continent: 'Africa',
    },
    {
        code: 'XAF',
        name: 'Central African CFA Franc',
        country: 'Central African States',
        flag: '🇨🇲',
        flagCode: 'cm',
        continent: 'Africa',
    },
    {
        code: 'MZN',
        name: 'Mozambican Metical',
        country: 'Mozambique',
        flag: '🇲🇿',
        flagCode: 'mz',
        continent: 'Africa',
    },
    {
        code: 'BWP',
        name: 'Botswana Pula',
        country: 'Botswana',
        flag: '🇧🇼',
        flagCode: 'bw',
        continent: 'Africa',
    },
    {
        code: 'ZMW',
        name: 'Zambian Kwacha',
        country: 'Zambia',
        flag: '🇿🇲',
        flagCode: 'zm',
        continent: 'Africa',
    },
    {
        code: 'NAD',
        name: 'Namibian Dollar',
        country: 'Namibia',
        flag: '🇳🇦',
        flagCode: 'na',
        continent: 'Africa',
    },
    {
        code: 'MUR',
        name: 'Mauritian Rupee',
        country: 'Mauritius',
        flag: '🇲🇺',
        flagCode: 'mu',
        continent: 'Africa',
    },
    {
        code: 'SCR',
        name: 'Seychellois Rupee',
        country: 'Seychelles',
        flag: '🇸🇨',
        flagCode: 'sc',
        continent: 'Africa',
    },
    {
        code: 'GMD',
        name: 'Gambian Dalasi',
        country: 'Gambia',
        flag: '🇬🇲',
        flagCode: 'gm',
        continent: 'Africa',
    },
    {
        code: 'GNF',
        name: 'Guinean Franc',
        country: 'Guinea',
        flag: '🇬🇳',
        flagCode: 'gn',
        continent: 'Africa',
    },
    {
        code: 'MWK',
        name: 'Malawian Kwacha',
        country: 'Malawi',
        flag: '🇲🇼',
        flagCode: 'mw',
        continent: 'Africa',
    },
    {
        code: 'MGA',
        name: 'Malagasy Ariary',
        country: 'Madagascar',
        flag: '🇲🇬',
        flagCode: 'mg',
        continent: 'Africa',
    },
    // Oceania
    {
        code: 'AUD',
        name: 'Australian Dollar',
        country: 'Australia',
        flag: '🇦🇺',
        flagCode: 'au',
        continent: 'Oceania',
    },
    {
        code: 'NZD',
        name: 'New Zealand Dollar',
        country: 'New Zealand',
        flag: '🇳🇿',
        flagCode: 'nz',
        continent: 'Oceania',
    },
    {
        code: 'FJD',
        name: 'Fijian Dollar',
        country: 'Fiji',
        flag: '🇫🇯',
        flagCode: 'fj',
        continent: 'Oceania',
    },
    {
        code: 'PGK',
        name: 'Papua New Guinean Kina',
        country: 'Papua New Guinea',
        flag: '🇵🇬',
        flagCode: 'pg',
        continent: 'Oceania',
    },
    {
        code: 'WST',
        name: 'Samoan Tala',
        country: 'Samoa',
        flag: '🇼🇸',
        flagCode: 'ws',
        continent: 'Oceania',
    },
    {
        code: 'KID',
        name: 'Kiribati Dollar',
        country: 'Kiribati',
        flag: '🇰🇮',
        flagCode: 'ki',
        continent: 'Oceania',
      },
    {
        code: 'VUV',
        name: 'Vanuatu Vatu',
        country: 'Vanuatu',
        flag: '🇻🇺',
        flagCode: 'vu',
        continent: 'Oceania',
    },
    {
        code: 'TOP',
        name: 'Tongan Paʻanga',
        country: 'Tonga',
        flag: '🇹🇴',
        flagCode: 'to',
        continent: 'Oceania',
    },
    {
        code: 'SBD',
        name: 'Solomon Islands Dollar',
        country: 'Solomon Islands',
        flag: '🇸🇧',
        flagCode: 'sb',
        continent: 'Oceania',
    },
    {
        code: 'TVD',
        name: 'Tuvaluan Dollar',
        country: 'Tuvalu',
        flag: '🇹🇻',
        flagCode: 'tv',
        continent: 'Oceania',
      },
      {
        code: 'XPF',
        name: 'CFP Franc',
        country: 'French Polynesia',
        flag: '🇵🇫',
        flagCode: 'pf',
        continent: 'Oceania',
      },
    // Central America and Caribbean
    {
        code: 'JMD',
        name: 'Jamaican Dollar',
        country: 'Jamaica',
        flag: '🇯🇲',
        flagCode: 'jm',
        continent: 'North America',
    },
    {
        code: 'TTD',
        name: 'Trinidad and Tobago Dollar',
        country: 'Trinidad and Tobago',
        flag: '🇹🇹',
        flagCode: 'tt',
        continent: 'North America',
    },
    {
        code: 'HTG',
        name: 'Haitian Gourde',
        country: 'Haiti',
        flag: '🇭🇹',
        flagCode: 'ht',
        continent: 'North America',
    },
    {
        code: 'DOP',
        name: 'Dominican Peso',
        country: 'Dominican Republic',
        flag: '🇩🇴',
        flagCode: 'do',
        continent: 'North America',
    },
    {
        code: 'GTQ',
        name: 'Guatemalan Quetzal',
        country: 'Guatemala',
        flag: '🇬🇹',
        flagCode: 'gt',
        continent: 'North America',
    },
    {
        code: 'HNL',
        name: 'Honduran Lempira',
        country: 'Honduras',
        flag: '🇭🇳',
        flagCode: 'hn',
        continent: 'North America',
    },
    {
        code: 'NIO',
        name: 'Nicaraguan Córdoba',
        country: 'Nicaragua',
        flag: '🇳🇮',
        flagCode: 'ni',
        continent: 'North America',
    },
    {
        code: 'CRC',
        name: 'Costa Rican Colón',
        country: 'Costa Rica',
        flag: '🇨🇷',
        flagCode: 'cr',
        continent: 'North America',
    },
    {
        code: 'PAB',
        name: 'Panamanian Balboa',
        country: 'Panama',
        flag: '🇵🇦',
        flagCode: 'pa',
        continent: 'North America',
    },
    // Additional Currencies
    {
        code: 'XDR',
        name: 'Special Drawing Rights',
        country: 'International Monetary Fund',
        flag: '🌐',
        flagCode: 'un',
        continent: 'International',
      },
];

```


## File: /root/main/work/Phones/PhantomPhones/data/products.json

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/app/cart/page.tsx
- /root/main/work/Phones/PhantomPhones/src/app/page.tsx
- /root/main/work/Phones/PhantomPhones/src/app/products/[slug]/page.tsx
- /root/main/work/Phones/PhantomPhones/src/app/products/page.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductDetails.tsx

### Content
```json
[
  {
    "id": 1,
    "name": "PhantomPhone v1",
    "slug": "PhantomPhone-v1",
    "price": 1850,
    "status": "In Stock",
    "options": [
      { "name": "Rear Cameras Removed", "price": 65 },
      { "name": "Front Camera Removed", "price": 65 },
      { "name": "Microphone Removed", "price": 65 }
    ],
    "description": "The PhantomPhone v1 is a fully hardened privacy phone with GrapheneOS installed. It comes pre-loaded with auto-destruct features, privacy apps, advanced auto-encryption, encrypted DNS, and all traffic is routed through Phantom Phones' zero-log encrypted Swiss servers. This untraceable device is designed for those who value privacy and security above all.",
    "detailedDescription": [
      "The **Pixel 7a** is built on the robust hardware of Google's flagship devices, ensuring top-tier performance and reliability.",
      "With **GrapheneOS**, a privacy and security-focused mobile operating system, you're protected against a wide range of threats, including remote exploits and malicious apps.",
      "Features **auto-destruct mechanisms** that can wipe your data remotely in case of theft or loss, providing peace of mind.",
      "Duress mode will allow you to provide a false passcode/password to unlock your device when forced to do so under duress. Entering this code will delete all esims, permanently destroy your storage and shut the phone down.",
      "Pre-loaded with **privacy-focused apps** such as Signal for encrypted messaging, Tor Browser for anonymous web browsing, and encrypted email clients.",
      "Utilizes **encrypted DNS** and routes all traffic through our **zero-log Swiss servers**, ensuring your online activities remain anonymous and untraceable.",
      "Ideal for journalists, activists, business professionals, and anyone concerned about digital surveillance, data privacy, and secure communications."
    ],
    "keyFeatures": [
      "Advanced Security with GrapheneOS",
      "Auto-Destruct Mechanisms",
      "Privacy-Focused Pre-installed Apps",
      "Encrypted DNS and Zero-Log Servers",
      "High-Performance Hardware",
      "Regular Security Updates"
    ],
    "specifications": {
      "Processor": "Octa-core 2.8GHz",
      "RAM": "8GB",
      "Storage": "128GB",
      "Battery": "4000mAh",
      "Display": "6.1-inch OLED",
      "Camera": "12MP rear, 8MP front",
      "Connectivity": "5G, Wi-Fi 6, Bluetooth 5.2",
      "Operating System": "GrapheneOS"
    },
    "faqs": [
      {
        "question": "What is GrapheneOS?",
        "answer": "GrapheneOS is an open-source, privacy, and security-focused mobile operating system with Android app compatibility. It provides advanced security features and enhanced privacy controls, making it ideal for users who prioritize data protection."
      },
      {
        "question": "Can I install other apps?",
        "answer": "Yes, you can install apps from trusted sources. However, we recommend using privacy-focused apps to maintain the highest level of security and privacy."
      },
      {
        "question": "Does the phone support regular updates?",
        "answer": "Absolutely! We provide regular updates to the OS and pre-installed apps to ensure ongoing security and performance improvements. Updates are delivered over-the-air and can be installed at your convenience."
      },
      {
        "question": "Is there a warranty included?",
        "answer": "Yes, the PhantomPhone v1 comes with a 2-year limited warranty covering manufacturing defects. Please refer to our warranty policy for more details."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Alice Johnson",
        "avatar": "/images/reviews/alice.jpg",
        "rating": 5,
        "comment": "The PhantomPhone with GrapheneOS is a game-changer for privacy enthusiasts. Highly recommend!"
      },
      {
        "id": 2,
        "name": "Bob Smith",
        "avatar": "/images/reviews/bob.jpg",
        "rating": 4,
        "comment": "Excellent device, but there's a learning curve with the new OS."
      },
      {
        "id": 3,
        "name": "Catherine Lee",
        "avatar": "/images/reviews/catherine.jpg",
        "rating": 5,
        "comment": "I feel so much safer knowing my data is secure. The auto-destruct feature is brilliant."
      },
      {
        "id": 4,
        "name": "David Brown",
        "avatar": "/images/reviews/david.jpg",
        "rating": 4.5,
        "comment": "Great performance and amazing security features. Worth every penny."
      }
    ],
    "image": "/images/pixel7a.webp",
    "gallery": [
      "/images/pixel7a.webp",
      "/images/pixel7a_front.png",
      "/images/pixel7a_back.png",
      "/images/pixel7a_side.png",
      "/images/pixel7a_top.png",
      "/images/pixel7a_bottom.png"
    ],
    "rating": 4.5
  },
  {
    "id": 2,
    "name": "Anonymous eSIM with Unlimited Data",
    "slug": "anonymous-esim-unlimited-data",
    "price": null,
    "status": "In Stock",
    "variants": [
      {
        "name": "Regional Coverage",
        "price": 65,
        "description": "Regional coverage for your anonymous eSIM, providing secure and private mobile data within your selected region. Many networks collect and store customer account details—including names, addresses, and billing information—with unique identifiers from your mobile devices to create unified profiles. This enables them to recognize individuals across multiple devices and deliver personalized ads. In contrast, Phantom Phones' eSIMs provide an added layer of privacy for your data, shielding you from targeted tracking. We handle the registration of your phone number on your behalf, ensuring that your personal and financial information remains confidential and is not accessible to companies that might sell it to third parties.",
        "keyFeatures": [
          "Regional Coverage",
          "Unlimited Data",
          "Complete Anonymity",
          "No Physical SIM Required",
          "Instant Activation"
        ],
        "specifications": {
          "Coverage": "Selected Region",
          "Data": "Unlimited",
          "Activation": "QR Code Scan",
          "Compatibility": "eSIM-enabled Devices"
        },
        "faqs": [
          {
            "question": "Is the eSIM truly anonymous?",
            "answer": "Yes. When you purchase an eSIM through Phantom Phones, we use our own tumbled cryptocurrency to purchase the eSIMs on your behalf. As there is no physical SIM card to extract, and when used with our privacy phones, you can be confident that the phones will 'self-destruct' upon unauthorized access, thus destroying the eSIM in the process."
          },
          {
            "question": "Can the device's location be triangulated?",
            "answer": "Yes, this is the same across all SS7 network connections. The difference with our eSIMs is that, unless the device is unencrypted and unlocked in the attacker's hands, proof of ownership of the eSIM is impossible to validate."
          },
          {
            "question": "How do I activate the eSIM?",
            "answer": "After purchase, you'll receive a QR code via your secure messenger of choice. Simply scan it with your device to activate the eSIM instantly."
          },
          {
            "question": "Is the data truly unlimited?",
            "answer": "Yes, you get unlimited data usage. Fair usage policies may apply to prevent abuse and ensure network stability."
          },
          {
            "question": "Can I make calls and send texts?",
            "answer": "This eSIM provides data services only. You can use VoIP apps for calls and messaging services for texts."
          },
          {
            "question": "What regions are supported?",
            "answer": "Regional coverage includes England, Scotland, Wales, and Northern Ireland."
          }
        ],
        "reviews": [
          {
            "id": 1,
            "name": "Charlie Davis",
            "avatar": "/images/reviews/charlie.jpg",
            "rating": 5,
            "comment": "Seamless activation and excellent coverage. A must-have for privacy."
          },
          {
            "id": 2,
            "name": "Emily White",
            "avatar": "/images/reviews/emily.jpg",
            "rating": 4,
            "comment": "Works great, but initial setup instructions could be clearer."
          }
        ],
        "gallery": [
          "/images/esim_regional.png"
        ]
      },
      {
        "name": "European Coverage",
        "price": 80,
        "description": "European coverage for your anonymous eSIM, ensuring secure connectivity across all European countries.",
        "keyFeatures": [
          "Pan-European Coverage",
          "Unlimited Data",
          "No Roaming Charges",
          "Anonymity Guaranteed",
          "24/7 Support"
        ],
        "specifications": {
          "Coverage": "Europe",
          "Data": "Unlimited",
          "Activation": "QR Code Scan",
          "Compatibility": "eSIM-enabled Devices"
        },
        "faqs": [
          {
            "question": "Is the eSIM truly anonymous?",
            "answer": "Yes. When you purchase an eSIM through Phantom Phones, we use our own tumbled cryptocurrency to purchase the eSIMs on your behalf. As there is no physical SIM card to extract, and when used with our privacy phones, you can be confident that the phones will 'self-destruct' upon unauthorized access, thus destroying the eSIM in the process."
          },
          {
            "question": "Can the device's location be triangulated?",
            "answer": "Yes, this is the same across all SS7 network connections. The difference with our eSIMs is that, unless the device is unencrypted and unlocked in the attacker's hands, proof of ownership of the eSIM is impossible to validate."
          },
          {
            "question": "How do I activate the eSIM?",
            "answer": "After purchase, you'll receive a QR code via your secure messenger of choice. Simply scan it with your device to activate the eSIM instantly."
          },
          {
            "question": "Are there any roaming charges?",
            "answer": "No, there are no roaming charges within the covered European countries."
          }
        ],
        "reviews": [
          {
            "id": 1,
            "name": "Frank Turner",
            "avatar": "/images/reviews/frank.jpg",
            "rating": 5,
            "comment": "Used it throughout my trip in Europe without any issues. Fantastic service!"
          }
        ],
        "gallery": [
          "/images/esim_europe.png"
        ]
      },
      {
        "name": "Global Coverage",
        "price": 105,
        "description": "Global coverage for your anonymous eSIM, providing secure and private mobile data in over 100 countries worldwide.",
        "keyFeatures": [
          "Global Coverage",
          "Unlimited Data",
          "Best for Frequent Travelers",
          "Secure and Private",
          "Easy to Use"
        ],
        "specifications": {
          "Coverage": "Global (100+ countries)",
          "Data": "Unlimited",
          "Activation": "QR Code Scan",
          "Compatibility": "eSIM-enabled Devices"
        },
        "faqs": [
          {
            "question": "Is the eSIM truly anonymous?",
            "answer": "Yes. When you purchase an eSIM through Phantom Phones, we use our own tumbled cryptocurrency to purchase the eSIMs on your behalf. As there is no physical SIM card to extract, and when used with our privacy phones, you can be confident that the phones will 'self-destruct' upon unauthorized access, thus destroying the eSIM in the process."
          },
          {
            "question": "Can the device's location be triangulated?",
            "answer": "Yes, this is the same across all SS7 network connections. The difference with our eSIMs is that, unless the device is unencrypted and unlocked in the attacker's hands, proof of ownership of the eSIM is impossible to validate."
          },
          {
            "question": "How do I activate the eSIM?",
            "answer": "After purchase, you'll receive a QR code via your secure messenger of choice. Simply scan it with your device to activate the eSIM instantly."
          },
          {
            "question": "Which countries are covered?",
            "answer": "Over 100 countries are covered, including the USA, UK, Canada, Australia, Japan, and many more."
          },
          {
            "question": "Is customer support available internationally?",
            "answer": "Yes, we offer 24/7 customer support accessible from anywhere in the world."
          }
        ],
        "reviews": [
          {
            "id": 1,
            "name": "Grace Hill",
            "avatar": "/images/reviews/grace.jpg",
            "rating": 4.5,
            "comment": "A lifesaver for international travel. Data speeds were decent in most countries."
          },
          {
            "id": 2,
            "name": "Henry Wilson",
            "avatar": "/images/reviews/henry.jpg",
            "rating": 4,
            "comment": "Convenient but a bit pricey. Overall, a good product."
          }
        ],
        "gallery": [
          "/images/esim_global.png"
        ]
      }
    ],
    "description": "An anonymous eSIM with unlimited data, ensuring your mobile connectivity remains private and untraceable.",
    "image": "/images/esim.webp",
    "gallery": [
      "/images/esim_overview.png"
    ],
    "rating": 4.7
  },
  {
    "id": 3,
    "name": "Phantom Extreme VPN - Multi-Hop Encryption",
    "slug": "phantom-extreme-vpn-multi-hop-encryption",
    "price": 130,
    "status": "In Development",
    "description": "A high-security VPN service offering multiple layers of encryption through servers in Switzerland and Iceland. Enhance your online anonymity with our untraceable VPN solution.",
    "detailedDescription": [
      "The **Phantom Extreme VPN** provides **6 layers of encryption** through three servers located in privacy-friendly jurisdictions.",
      "Designed to prevent even the most advanced surveillance tactics, ensuring your online activities are completely anonymous.",
      "One-off payment of £100, then £30 per month thereafter, offering exceptional value for unparalleled security.",
      "User-friendly apps available for all major platforms, including Windows, macOS, Linux, iOS, and Android."
    ],
    "keyFeatures": [
      "Multi-Hop Encryption (6 Layers)",
      "Servers in Switzerland and Iceland",
      "Zero-Log Policy",
      "High-Speed Connections",
      "Support for All Major Platforms",
      "Easy-to-Use Interface"
    ],
    "specifications": {
      "Encryption": "AES-256",
      "Protocols": "OpenVPN, WireGuard",
      "Platforms": "Windows, macOS, Linux, iOS, Android",
      "Simultaneous Connections": "Up to 5 devices",
      "Bandwidth": "Unlimited"
    },
    "faqs": [
      {
        "question": "How is this VPN different from others?",
        "answer": "Our VPN offers multi-hop encryption across multiple countries, significantly enhancing your online anonymity and security compared to standard VPN services."
      },
      {
        "question": "Do you keep any logs?",
        "answer": "No, we have a strict zero-log policy. We do not track or store any information about your online activities."
      },
      {
        "question": "Is there a free trial available?",
        "answer": "Currently, we do not offer a free trial. However, we have a 30-day money-back guarantee if you're not satisfied with the service."
      },
      {
        "question": "Can I use it on multiple devices?",
        "answer": "Yes, you can use the VPN on up to 5 devices simultaneously with a single subscription."
      }
    ],
    "reviews": [],
    "image": "/images/vpnGhost.webp",
    "gallery": [
      "/images/vpnGhost.webp",
      "/images/secureServerGhost.webp",
      "/images/vpn_encryption.png"
    ],
    "rating": 5.0
  },
  {
    "id": 4,
    "name": "Secure Storage - Encrypted Personal Server",
    "slug": "secure-storage-encrypted-personal-server",
    "price": 130,
    "status": "In Stock",
    "options": [
      { "name": "Iceland Data Center", "price": 0 },
      { "name": "Switzerland Data Center", "price": 0 }
    ],
    "description": "Encrypted personal server hosted in either Iceland or Switzerland, accessible only via registered devices. Protect your sensitive data with our secure storage solutions.",
    "detailedDescription": [
      "Our **Secure Storage** solution provides you with a personal encrypted server.",
      "Choose between **Iceland** or **Switzerland** data centers, both renowned for strong privacy laws and data protection.",
      "Access your data securely from anywhere using our encrypted applications, available on desktop and mobile platforms.",
      "Ideal for storing sensitive documents, backups, and personal data with peace of mind."
    ],
    "keyFeatures": [
      "Personal Encrypted Server",
      "Choice of Data Center Location",
      "Secure Remote Access",
      "High Availability and Redundancy",
      "Scalable Storage Options",
      "24/7 Customer Support"
    ],
    "specifications": {
      "Storage Capacity": "1TB (Expandable)",
      "Data Centers": "Iceland, Switzerland",
      "Redundancy": "RAID-6 Configuration",
      "Access": "Secure Apps for Desktop and Mobile",
      "Encryption": "End-to-End AES-256"
    },
    "faqs": [
      {
        "question": "How do I access my secure storage?",
        "answer": "You'll use our dedicated app, which requires authentication from your registered device. The app is available for Windows, macOS, iOS, and Android."
      },
      {
        "question": "Is my data encrypted?",
        "answer": "Yes, all data is encrypted both at rest and in transit using industry-leading AES-256 encryption standards."
      },
      {
        "question": "Can I share files with others?",
        "answer": "Yes, you can securely share files with other registered users. All shared data remains encrypted."
      },
      {
        "question": "What happens if I need more storage?",
        "answer": "You can upgrade your storage capacity at any time. Contact our support team to discuss your requirements."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Dana Lee",
        "avatar": "/images/reviews/dana.jpg",
        "rating": 4.5,
        "comment": "Great service! I feel much safer storing my files here."
      },
      {
        "id": 2,
        "name": "Edward Kim",
        "avatar": "/images/reviews/edward.jpg",
        "rating": 5,
        "comment": "Excellent uptime and security. Highly recommended for sensitive data."
      }
    ],
    "image": "/images/secureServerGhost.webp",
    "gallery": [
      "/images/secureServerGhost.webp",
      "/images/storage_security.png",
      "/images/storage_app.png"
    ],
    "rating": 4.8
  },
  {
    "id": 5,
    "name": "CEO pack - Ultimate Privacy Setup",
    "slug": "ceo-pack-ultimate-privacy-setup",
    "price": 3000,
    "status": "In Stock",
    "description": "A comprehensive package including multiple devices and services for the ultimate privacy setup. Secure your communications with our untraceable devices and services.",
    "detailedDescription": [
      "The **CEO pack** includes:",
      "- **(at least) 3 Pixel 7a devices** with GrapheneOS installed.",
      "- **Phantom Extreme VPN** subscription (6 months free).",
      "- **Secure Storage** solution with 1TB capacity.",
      "- **6 months of Anonymous eSIMs** with global coverage.",
      "Perfect for organizations or individuals requiring multiple secure devices and services.",
      "Experience unmatched privacy and security across all your communications and data storage needs."
    ],
    "keyFeatures": [
      "Minimum of 3 Secure Smartphones",
      "Multi-Device VPN Subscription",
      "Secure Storage with 1TB Capacity",
      "Global Anonymous eSIMs",
      "Priority 24/7 Support",
      "Customizable Package Options"
    ],
    "specifications": {
      "Devices": "Pixel 7a with GrapheneOS",
      "VPN": "Phantom Extreme VPN (6 months)",
      "Storage": "Secure Storage with 1TB",
      "eSIMs": "6 months, Global Coverage",
      "Support": "Priority 24/7 Support"
    },
    "faqs": [
      {
        "question": "Can I customize the package?",
        "answer": "Yes, contact our sales team to tailor the package to your specific needs. We offer flexible options to suit different requirements."
      },
      {
        "question": "Is there support available?",
        "answer": "Absolutely! CEO Pack customers receive priority 24/7 support. Our dedicated team is here to assist you anytime."
      },
      {
        "question": "How do I manage multiple devices?",
        "answer": "We provide a centralized dashboard where you can manage all your devices, services, and subscriptions easily."
      },
      {
        "question": "Are software updates included?",
        "answer": "Yes, all devices and services receive regular updates to ensure the highest level of security and performance."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Evan Thompson",
        "avatar": "/images/reviews/evan.jpg",
        "rating": 5,
        "comment": "An all-in-one solution that covers all my privacy needs. Exceptional value!"
      },
      {
        "id": 2,
        "name": "Fiona Gallagher",
        "avatar": "/images/reviews/fiona.jpg",
        "rating": 5,
        "comment": "Perfect for our small team. The devices and services work seamlessly together."
      },
      {
        "id": 3,
        "name": "George Martin",
        "avatar": "/images/reviews/george.jpg",
        "rating": 4.5,
        "comment": "Great package, though initial setup took some time. Support was very helpful."
      }
    ],
    "image": "/images/ceoGhost.webp",
    "gallery": [
      "/images/ceoGhost.webp",
      "/images/boss_pack_devices.png",
      "/images/boss_pack_services.png"
    ],
    "rating": 5.0
  },
  {
    "id": 6,
    "name": "Secure Laptop with Privacy OS",
    "slug": "secure-laptop-privacy-os",
    "price": 2500,
    "status": "In Stock",
    "options": [
      { "name": "32GB RAM Upgrade", "price": 200 },
      { "name": "1TB SSD Upgrade", "price": 250 },
      { "name": "Hardened Case", "price": 150 }
    ],
    "description": "A high-performance laptop designed with privacy and security at its core, featuring a privacy-focused operating system and hardware-level security features.",
    "detailedDescription": [
      "The **Secure Laptop** is built on a foundation of privacy and security, offering uncompromising protection for your digital life.",
      "Pre-installed with **Qubes OS**, a security-focused operating system that uses virtualization to provide strong isolation between different activities and data.",
      "Features **hardware kill switches** for the camera, microphone, and all wireless connectivity, giving you complete control over your device's sensors and communications.",
      "Equipped with a **high-resolution privacy screen** to prevent visual hacking in public spaces.",
      "Includes a **TPM 2.0 chip** for hardware-level encryption and secure boot capabilities.",
      "The **encrypted SSD** ensures your data remains protected even if the laptop is lost or stolen.",
      "Perfect for journalists, executives, privacy enthusiasts, and anyone handling sensitive information."
    ],
    "keyFeatures": [
      "Qubes OS Pre-installed",
      "Hardware Kill Switches",
      "High-Resolution Privacy Screen",
      "TPM 2.0 Chip",
      "Encrypted SSD",
      "Long Battery Life",
      "Robust Build Quality"
    ],
    "specifications": {
      "Processor": "Intel Core i7-1165G7",
      "RAM": "16GB (upgradable to 32GB)",
      "Storage": "512GB NVMe SSD (upgradable to 1TB)",
      "Display": "14-inch 1920x1080 IPS with Privacy Filter",
      "Battery": "70Wh, up to 12 hours",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.2 (with kill switches)",
      "Ports": "2x USB-C, 2x USB-A, HDMI, 3.5mm audio",
      "Security": "TPM 2.0, Encrypted SSD, Fingerprint Reader"
    },
    "faqs": [
      {
        "question": "What makes this laptop more secure than others?",
        "answer": "Our Secure Laptop combines hardware-level security features like kill switches and TPM 2.0 with the highly secure Qubes OS. This combination provides unparalleled isolation between tasks and strong protection against various types of attacks."
      },
      {
        "question": "Can I install other operating systems?",
        "answer": "Yes, the laptop is compatible with other operating systems. However, we recommend using Qubes OS or other privacy-focused OSes to maintain the highest level of security."
      },
      {
        "question": "Is the laptop suitable for gaming or video editing?",
        "answer": "While the laptop has a powerful processor and can handle most tasks, it's primarily designed for security and privacy. It may not have the specialized graphics capabilities required for high-end gaming or professional video editing."
      },
      {
        "question": "How often are security updates provided?",
        "answer": "Security updates for both the operating system and firmware are provided regularly. We recommend keeping automatic updates enabled to ensure you always have the latest security patches."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Sarah Connor",
        "avatar": "/images/reviews/sarah.jpg",
        "rating": 5,
        "comment": "Finally, a laptop that takes security seriously! The kill switches give me peace of mind."
      },
      {
        "id": 2,
        "name": "Edward Snowden",
        "avatar": "/images/reviews/edward.jpg",
        "rating": 5,
        "comment": "This laptop is a game-changer for privacy advocates. Qubes OS integration is flawless."
      }
    ],
    "image": "/images/secure-laptop.webp",
    "gallery": [
      "/images/secure-laptop-front.png",
      "/images/secure-laptop-side.png",
      "/images/secure-laptop-ports.png",
      "/images/secure-laptop-screen.png"
    ],
    "rating": 4.9
  },
  {
    "id": 7,
    "name": "Faraday Bag Set",
    "slug": "faraday-bag-set",
    "price": 180,
    "status": "In Stock",
    "options": [
      { "name": "Additional Small Bag", "price": 30 },
      { "name": "Additional Large Bag", "price": 50 },
      { "name": "Faraday Backpack", "price": 150 }
    ],
    "description": "A comprehensive set of Faraday bags to protect your devices from wireless signals, preventing tracking and unauthorized access.",
    "detailedDescription": [
      "Our **Faraday Bag Set** provides a portable Faraday cage for your electronic devices, blocking all wireless signals including cellular, Wi-Fi, Bluetooth, GPS, and RFID.",
      "The set includes **three sizes** to accommodate smartphones, tablets, and laptops, ensuring you can protect all your devices.",
      "Made with **multiple layers of high-shielding fabric**, our bags offer superior protection compared to standard Faraday bags.",
      "Features a **water-resistant outer layer** to protect your devices from the elements.",
      "Each bag is equipped with a **secure closure system** to ensure no signals can penetrate when sealed.",
      "Ideal for privacy-conscious individuals, journalists in sensitive areas, or anyone looking to create a truly offline environment."
    ],
    "keyFeatures": [
      "Blocks All Wireless Signals",
      "Three Sizes for Different Devices",
      "Military-Grade Shielding Material",
      "Water-Resistant Outer Layer",
      "Secure Closure System",
      "Lightweight and Portable",
      "Tested and Verified Protection"
    ],
    "specifications": {
      "Small Bag Dimensions": "6\" x 4\"",
      "Medium Bag Dimensions": "10\" x 7\"",
      "Large Bag Dimensions": "15\" x 11\"",
      "Material": "Multi-layer high-shielding fabric",
      "Outer Layer": "Water-resistant nylon",
      "Closure": "Double-seal system",
      "Shielding Effectiveness": ">60dB attenuation (1MHz-10GHz)"
    },
    "faqs": [
      {
        "question": "How do I know if the bag is working?",
        "answer": "When your device is inside a properly closed Faraday bag, it should not be able to receive any signals. Your phone, for example, should show 'No Service' when inside the bag."
      },
      {
        "question": "Can I charge my device while it's in the bag?",
        "answer": "No, the bag blocks all signals including power. You'll need to remove your device from the bag to charge it."
      },
      {
        "question": "Are these bags TSA-approved for air travel?",
        "answer": "Yes, these bags are TSA-approved. However, you may be asked to remove devices for separate scanning."
      },
      {
        "question": "How long do the bags last?",
        "answer": "With proper care, our Faraday bags can last for many years. Avoid sharp objects and excessive stretching to maintain their effectiveness."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Jason Bourne",
        "avatar": "/images/reviews/jason.jpg",
        "rating": 5,
        "comment": "These bags are a must-have for anyone serious about privacy. They work flawlessly."
      },
      {
        "id": 2,
        "name": "Lisbeth Salander",
        "avatar": "/images/reviews/lisbeth.jpg",
        "rating": 4.5,
        "comment": "Great product, though I wish the largest size was a bit bigger for my 17\" laptop."
      }
    ],
    "image": "/images/faraday-bag-set.webp",
    "gallery": [
      "/images/faraday-bag-small.png",
      "/images/faraday-bag-medium.png",
      "/images/faraday-bag-large.png",
      "/images/faraday-bag-in-use.png"
    ],
    "rating": 4.8
  },
  {
    "id": 8,
    "name": "Encrypted USB Drive",
    "slug": "encrypted-usb-drive",
    "price": 120,
    "status": "In Stock",
    "options": [
      { "name": "128GB Capacity", "price": 0 },
      { "name": "256GB Capacity", "price": 50 },
      { "name": "512GB Capacity", "price": 100 }
    ],
    "description": "A high-security USB drive with hardware-based encryption, ensuring your data remains protected even if the drive falls into the wrong hands.",
    "detailedDescription": [
      "Our **Encrypted USB Drive** offers military-grade protection for your sensitive data, combining ease of use with uncompromising security.",
      "Features **AES-256 bit hardware encryption**, the strongest commercially available.",
      "Includes a **built-in keypad** for PIN entry, ensuring that encryption remains intact even on compromised computers.",
      "**Brute force protection** automatically erases the encryption key after a predetermined number of incorrect PIN attempts.",
      "**Read-only mode** available to prevent malware infections when using the drive on untrusted systems.",
      "**Rugged aluminum housing** protects against physical damage and is waterproof and dustproof (IP68 rated).",
      "Perfect for storing sensitive documents, encryption keys, or as a secure boot drive."
    ],
    "keyFeatures": [
      "AES-256 Bit Hardware Encryption",
      "Built-in Keypad for PIN Entry",
      "Brute Force Protection",
      "Read-Only Mode",
      "Rugged, Waterproof Design",
      "OS Independent",
      "Auto-Lock Feature"
    ],
    "specifications": {
      "Capacity": "128GB (upgradable to 256GB or 512GB)",
      "Encryption": "AES-256 bit, FIPS 140-2 Level 3",
      "Interface": "USB 3.1 Gen 1",
      "Compatibility": "Windows, macOS, Linux, Chrome OS, Android",
      "Housing": "Aluminum, IP68 rated",
      "Dimensions": "4.5\" x 0.8\" x 0.4\"",
      "Weight": "2 oz"
    },
    "faqs": [
      {
        "question": "What happens if I forget my PIN?",
        "answer": "For security reasons, there is no way to recover a forgotten PIN. If you exceed the number of allowed attempts, the drive will securely erase itself."
      },
      {
        "question": "Can I use this drive on public computers?",
        "answer": "Yes, the drive is designed to be secure even on untrusted systems. Use the read-only mode for additional protection against malware."
      },
      {
        "question": "Is there any software I need to install to use the drive?",
        "answer": "No, the drive is completely self-contained and doesn't require any software installation. It works out of the box on any OS."
      },
      {
        "question": "How fast is the data transfer?",
        "answer": "The drive supports USB 3.1 Gen 1 speeds, allowing for data transfer rates up to 5Gbps, though actual speeds may vary depending on the specific use case and encryption overhead."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Elliot Alderson",
        "avatar": "/images/reviews/elliot.jpg",
        "rating": 5,
        "comment": "Top-notch security. The hardware encryption and keypad entry are exactly what I needed."
      },
      {
        "id": 2,
        "name": "Trinity",
        "avatar": "/images/reviews/trinity.jpg",
        "rating": 4.5,
        "comment": "Excellent security features. Wish it was a bit faster, but the protection is worth it."
      }
    ],
    "image": "/images/encrypted-usb.webp",
    "gallery": [
      "/images/encrypted-usb-front.png",
      "/images/encrypted-usb-keypad.png",
      "/images/encrypted-usb-in-use.png",
      "/images/encrypted-usb-size-comparison.png"
    ],
    "rating": 4.8
  },
  {
    "id": 9,
    "name": "Secure Router with Built-in VPN",
    "slug": "secure-router-built-in-vpn",
    "price": 300,
    "status": "In Stock",
    "options": [
      { "name": "1-Year VPN Subscription", "price": 100 },
      { "name": "2-Year VPN Subscription", "price": 180 },
      { "name": "Additional Ethernet Ports", "price": 50 }
    ],
    "description": "A high-performance router with integrated VPN capabilities, offering network-wide privacy and security for all your connected devices.",
    "detailedDescription": [
      "Our **Secure Router** is designed to provide comprehensive protection for your entire home or office network.",
      "Pre-installed with **custom firmware** based on OpenWrt, offering advanced security features and regular updates.",
      "**Built-in VPN client** compatible with major VPN services, including our own Phantom Extreme VPN.",
      "**Ad-blocking and tracker-blocking** capabilities to enhance privacy and improve browsing speed.",
      "**Dual-WAN support** for load balancing and failover, ensuring constant connectivity.",
      "**Advanced firewall** with intrusion detection and prevention system (IDS/IPS).",
      "**Easy-to-use interface** for managing security settings and monitoring network activity.",
      "Ideal for privacy-conscious individuals, small businesses, and anyone looking to secure their entire network with minimal effort."
    ],
    "keyFeatures": [
      "Custom Security-Focused Firmware",
      "Built-in VPN Client",
      "Ad and Tracker Blocking",
      "Dual-WAN Support",
      "Advanced Firewall with IDS/IPS",
      "Easy-to-Use Interface",
      "Regular Security Updates"
    ],
    "specifications": {
      "Processor": "Quad-core ARM Cortex-A53 1.5GHz",
      "Memory": "1GB DDR4 RAM",
      "Storage": "128MB Flash",
      "Wi-Fi": "Dual-band AC2600 (800+1733 Mbps)",
      "Ports": "1x WAN, 4x LAN (Gigabit Ethernet)",
      "USB": "1x USB 3.0 port for storage or 4G modem",
      "Antennas": "4x external high-gain antennas",
      "Power": "12V/2A"
    },
    "faqs": [
      {
        "question": "Can I use my existing VPN service with this router?",
        "answer": "Yes, the router is compatible with most major VPN services. It supports OpenVPN, WireGuard, and IPSec protocols, allowing you to use your preferred VPN provider."
      },
      {
        "question": "How does the ad-blocking feature work?",
        "answer": "The router uses DNS-based ad-blocking, which intercepts requests to known ad and tracking domains. This not only enhances privacy but can also improve browsing speeds and reduce data usage."
      },
      {
        "question": "Can I customize the firewall rules?",
        "answer": "Yes, advanced users can customize firewall rules through the router's interface. We also provide preset configurations for different security levels to suit various needs."
      },
      {
        "question": "How often are firmware updates provided?",
        "answer": "We provide regular firmware updates to address security vulnerabilities and add new features. The router can be set to automatically install these updates or notify you when they're available."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Neo",
        "avatar": "/images/reviews/neo.jpg",
        "rating": 5,
        "comment": "This router is the one. Incredible security features and the VPN integration works flawlessly."
      },
      {
        "id": 2,
        "name": "Lisbeth Salander",
        "avatar": "/images/reviews/lisbeth.jpg",
        "rating": 4.5,
        "comment": "Excellent security. The interface could be a bit more user-friendly for non-techies, but overall it's a great product."
      }
    ],
    "image": "/images/secure-router.webp",
    "gallery": [
      "/images/secure-router-front.png",
      "/images/secure-router-back.png",
      "/images/secure-router-interface.png",
      "/images/secure-router-in-use.png"
    ],
    "rating": 4.8
  },
  {
    "id": 10,
    "name": "Privacy Screen Protectors",
    "slug": "privacy-screen-protectors",
    "price": 50,
    "status": "In Stock",
    "options": [
      { "name": "Smartphone (Various Models)", "price": 0 },
      { "name": "Tablet (Various Models)", "price": 20 },
      { "name": "Laptop (13\"-15\")", "price": 30 },
      { "name": "Laptop (15\"-17\")", "price": 40 }
    ],
    "description": "High-quality privacy screen protectors that limit viewing angles, preventing visual hacking in public spaces while offering additional screen protection.",
    "detailedDescription": [
      "Our **Privacy Screen Protectors** offer a simple yet effective way to protect your digital privacy in public spaces.",
      "Utilizes **advanced micro-louver technology** to limit the viewing angle to +/- 30 degrees, making your screen appear black to anyone outside this range.",
      "Provides **protection against scratches and impacts**, helping to extend the life of your device's screen.",
      "**Anti-glare coating** reduces eye strain and improves visibility in bright environments.",
      "**Blue light filter** helps reduce potentially harmful blue light emissions, promoting better sleep patterns for night-time users.",
      "**Easy to apply and remove** without leaving residue, allowing for temporary use when needed.",
      "Available for a wide range of devices, including smartphones, tablets, and laptops of various sizes."
    ],
    "keyFeatures": [
      "Limits Viewing Angle to +/- 30 Degrees",
      "Scratch and Impact Protection",
      "Anti-Glare Coating",
      "Blue Light Filter",
      "Easy Application and Removal",
      "Multiple Device Compatibility",
      "Maintains Touch Sensitivity"
    ],
    "specifications": {
      "Material": "PET (Polyethylene Terephthalate)",
      "Thickness": "0.3mm",
      "Hardness": "3H",
      "Light Transmission": ">85%",
      "UV Rejection": ">99%",
      "Blue Light Reduction": "30%",
      "Privacy Angle": "+/- 30 degrees"
    },
    "faqs": [
      {
        "question": "Will the privacy screen protector affect my device's touch sensitivity?",
        "answer": "No, our screen protectors are designed to maintain full touch sensitivity and compatibility with stylus input where applicable."
      },
      {
        "question": "Can I use this with my device's case?",
        "answer": "In most cases, yes. Our screen protectors are designed to be case-friendly. However, some extremely bulky cases may interfere with the edges of the protector."
      },
      {
        "question": "How do I clean the privacy screen protector?",
        "answer": "Use a soft, lint-free cloth slightly dampened with water or a gentle screen cleaner. Avoid harsh chemicals as they may damage the protective coatings."
      },
      {
        "question": "Does the privacy feature work in both portrait and landscape orientations?",
        "answer": "For smartphones and tablets, the privacy feature typically works best in portrait mode. Laptop screens are designed for landscape use. We offer specific protectors for devices commonly used in both orientations."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Evelyn Salt",
        "avatar": "/images/reviews/evelyn.jpg",
        "rating": 5,
        "comment": "Essential for working in public spaces. The privacy feature works great, and I love the added blue light filter."
      },
      {
        "id": 2,
        "name": "Jason Bourne",
        "avatar": "/images/reviews/jason.jpg",
        "rating": 4.5,
        "comment": "Good privacy protection. Slight reduction in screen brightness, but worth it for the added security."
      }
    ],
    "image": "/images/privacy-screen-protector.webp",
    "gallery": [
      "/images/privacy-screen-protector-phone.png",
      "/images/privacy-screen-protector-tablet.png",
      "/images/privacy-screen-protector-laptop.png",
      "/images/privacy-screen-protector-comparison.png"
    ],
    "rating": 4.7
  },
  {
    "id": 11,
    "name": "Encrypted Messaging Device",
    "slug": "encrypted-messaging-device",
    "price": 450,
    "status": "In Stock",
    "options": [
      { "name": "1-Year Secure Messaging Service", "price": 100 },
      { "name": "2-Year Secure Messaging Service", "price": 180 },
      { "name": "Rugged Case", "price": 50 }
    ],
    "description": "A dedicated hardware device for secure, encrypted messaging, designed to provide maximum privacy and security for your communications.",
    "detailedDescription": [
      "Our **Encrypted Messaging Device** is purpose-built for secure communications, offering unparalleled privacy and ease of use.",
      "Runs a **custom-hardened operating system** with no unnecessary applications or services, minimizing the attack surface.",
      "Pre-installed with **multiple encrypted messaging apps** including Signal and Wire, configured for maximum security.",
      "Features **hardware-based encryption** and secure key storage to protect your messages and encryption keys.",
      "Includes a **self-destruct feature** that can be triggered remotely or automatically after a set number of failed unlock attempts.",
      "**Air-gapped mode** available for ultra-secure messaging without any network connectivity.",
      "**Long-lasting battery** ensures the device is available when you need it most.",
      "Ideal for journalists, executives, government officials, and anyone requiring the highest level of communication security."
    ],
    "keyFeatures": [
      "Custom Hardened Operating System",
      "Pre-installed Encrypted Messaging Apps",
      "Hardware-Based Encryption",
      "Self-Destruct Feature",
      "Air-Gapped Mode",
      "Long Battery Life",
      "Regular Security Updates"
    ],
    "specifications": {
      "Processor": "Secure Enclave Processor",
      "Memory": "4GB RAM",
      "Storage": "64GB encrypted storage",
      "Display": "5-inch 1080p touch display",
      "Battery": "4000mAh, up to 5 days standby",
      "Connectivity": "Wi-Fi, Bluetooth (with hardware switches)",
      "Camera": "8MP rear (can be physically disabled)",
      "Biometrics": "Fingerprint sensor",
      "OS": "Custom hardened Linux-based OS"
    },
    "faqs": [
      {
        "question": "Can I install additional apps on this device?",
        "answer": "To maintain maximum security, the device is locked down and doesn't allow installation of additional apps. However, we regularly update the pre-installed apps and can add new secure apps in system updates if there's high demand."
      },
      {
        "question": "How secure is the self-destruct feature?",
        "answer": "The self-destruct feature uses secure erasure techniques to overwrite all data on the device, making recovery practically impossible. It can be triggered remotely or automatically after a set number of failed unlock attempts."
      },
      {
        "question": "Can this device be used for voice calls?",
        "answer": "Yes, the device supports encrypted voice calls through the pre-installed secure messaging apps. However, it does not function as a traditional cell phone and requires an internet connection for calls."
      },
      {
        "question": "How often are security updates provided?",
        "answer": "We provide monthly security updates and immediate patches for any critical vulnerabilities. The device can be configured to install these updates automatically or manually at your discretion."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Jack Bauer",
        "avatar": "/images/reviews/jack.jpg",
        "rating": 5,
        "comment": "This device is a game-changer for secure communications. The air-gapped mode is particularly impressive."
      },
      {
        "id": 2,
        "name": "Lisbeth Salander",
        "avatar": "/images/reviews/lisbeth.jpg",
        "rating": 4.5,
        "comment": "Excellent security features. The custom OS takes some getting used to, but it's worth it for the peace of mind."
      }
    ],
    "image": "/images/encrypted-messaging-device.webp",
    "gallery": [
      "/images/encrypted-messaging-device-front.png",
      "/images/encrypted-messaging-device-side.png",
      "/images/encrypted-messaging-device-interface.png",
      "/images/encrypted-messaging-device-in-use.png"
    ],
    "rating": 4.8
  },
  {
    "id": 12,
    "name": "Privacy-Focused Tablet",
    "slug": "privacy-focused-tablet",
    "price": 800,
    "status": "In Stock",
    "options": [
      { "name": "128GB Storage Upgrade", "price": 100 },
      { "name": "Keyboard Cover", "price": 150 },
      { "name": "Privacy Screen Protector", "price": 50 }
    ],
    "description": "A high-performance tablet designed with privacy and security in mind, featuring a hardened operating system and advanced security features.",
    "detailedDescription": [
      "Our **Privacy-Focused Tablet** combines cutting-edge hardware with a security-hardened operating system to provide a versatile and secure mobile computing experience.",
      "Runs on **GrapheneOS**, a privacy and security-focused mobile operating system based on Android, offering enhanced security and privacy controls.",
      "Features **hardware-based encryption** and secure boot to protect your data and ensure the integrity of the operating system.",
      "Includes **physical switches** to disable the cameras, microphones, and all wireless connectivity for complete control over your device's sensors.",
      "**Stylus support** with handwriting recognition that never leaves the device, ensuring your notes remain private.",
      "**Split-screen secure zones** allow you to run apps with different security levels simultaneously without risking data leakage.",
      "Regular **over-the-air updates** to patch security vulnerabilities and improve functionality.",
      "Perfect for professionals handling sensitive data, privacy-conscious individuals, and anyone looking for a secure and versatile tablet experience."
    ],
    "keyFeatures": [
      "GrapheneOS for Enhanced Privacy",
      "Hardware-Based Encryption",
      "Physical Privacy Switches",
      "Stylus Support with Local Processing",
      "Split-Screen Secure Zones",
      "Regular Security Updates",
      "High-Performance Hardware"
    ],
    "specifications": {
      "Processor": "Octa-core Snapdragon 865",
      "Memory": "8GB RAM",
      "Storage": "64GB (upgradable to 128GB)",
      "Display": "10.5-inch 2560x1600 OLED",
      "Battery": "8000mAh, up to 12 hours use",
      "Cameras": "13MP rear, 8MP front (both with physical switches)",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.1 (with physical switches)",
      "Biometrics": "Under-display fingerprint sensor",
      "OS": "GrapheneOS"
    },
    "faqs": [
      {
        "question": "Can I install regular Android apps on this tablet?",
        "answer": "Yes, GrapheneOS is compatible with most Android apps. However, some apps that rely heavily on Google services may not function properly without additional configuration."
      },
      {
        "question": "How does the split-screen secure zone feature work?",
        "answer": "The split-screen secure zones allow you to run apps in isolated environments. For example, you can have a work profile running alongside a personal profile, with data securely separated between the two."
      },
      {
        "question": "Is the stylus included with the tablet?",
        "answer": "The stylus is sold separately but is specifically designed to work seamlessly with our privacy-focused tablet, ensuring all handwriting recognition is processed locally on the device."
      },
      {
        "question": "How long will this tablet receive security updates?",
        "answer": "We guarantee at least 5 years of security updates for this tablet model, ensuring long-term protection and functionality."
      }
    ],
    "reviews": [
      {
        "id": 1,
        "name": "Elliot Alderson",
        "avatar": "/images/reviews/elliot.jpg",
        "rating": 5,
        "comment": "Finally, a tablet that takes privacy seriously! GrapheneOS runs smoothly, and the hardware switches are a great touch."
      },
      {
        "id": 2,
        "name": "Trinity",
        "avatar": "/images/reviews/trinity.jpg",
        "rating": 4.5,
        "comment": "Impressive security features and performance. The split-screen secure zones are incredibly useful for separating work and personal use."
      }
    ],
    "image": "/images/privacy-tablet.webp",
    "gallery": [
      "/images/privacy-tablet-front.png",
      "/images/privacy-tablet-stylus.png",
      "/images/privacy-tablet-splitscreen.png",
      "/images/privacy-tablet-switches.png"
    ],
    "rating": 4.8
  }
]

```


## File: /root/main/work/Phones/PhantomPhones/eslint-errors.json

### Content
```json
Need to install the following packages:
eslint@9.12.0
Ok to proceed? (y) 
```


## File: /root/main/work/Phones/PhantomPhones/gitpush.txt

### Content
```txt
fannys

```


## File: /root/main/work/Phones/PhantomPhones/lib/telegram-bot.ts

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/pages/api/telegram-webhook.ts

### Content
```ts
import { Telegraf, Scenes, session } from 'telegraf';
import { createClient } from '@supabase/supabase-js';
import rateLimit from 'telegraf-ratelimit';

// Create a declaration file for 'telegraf-ratelimit'
// In 'types/telegraf-ratelimit.d.ts':
// declare module 'telegraf-ratelimit';

interface CustomSession extends Scenes.SceneSession {
  botCode?: string;
}

interface CustomContext extends Scenes.SceneContext {
  session: CustomSession;
}

const token = process.env.TELEGRAM_BOT_TOKEN;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

let bot: Telegraf<CustomContext> | null = null;
let supabase: ReturnType<typeof createClient> | null = null;

if (token && supabaseUrl && supabaseKey) {
  bot = new Telegraf<CustomContext>(token);
  supabase = createClient(supabaseUrl, supabaseKey);

  const limitConfig = {
    window: 3000, // 3 seconds
    limit: 1,
    onLimitExceeded: (ctx: CustomContext) => ctx.reply('Rate limit exceeded. Please slow down.'),
  };
  bot.use(rateLimit(limitConfig));

  const verifyCodeScene = new Scenes.BaseScene<CustomContext>('VERIFY_CODE');

  verifyCodeScene.enter((ctx) => {
    ctx.reply('Please enter the verification code from the website:');
  });

  verifyCodeScene.on('text', async (ctx) => {
    if (!supabase) {
      ctx.reply('Bot is not properly configured. Please try again later.');
      return;
    }

    const userCode = ctx.message.text.trim();
    const telegramUserId = ctx.from.id;
    const telegramUsername = ctx.from.username || '';

    try {
      // Define the expected data interface
      interface TempVerification {
        bot_code: string;
        expires_at: string;
      }

      const { data, error } = await supabase
        .from('temp_verifications')
        .select('bot_code, expires_at')
        .eq('user_code', userCode)
        .single();

      if (error || !data) {
        ctx.reply('Invalid verification code. Please try again.');
        return;
      }

      const tempVerification = data as TempVerification;

      if (new Date(tempVerification.expires_at) < new Date()) {
        await supabase
          .from('temp_verifications')
          .delete()
          .eq('user_code', userCode);

        ctx.reply('Verification code has expired. Please request a new one.');
        return;
      }

      ctx.session.botCode = tempVerification.bot_code;

      const { error: updateError } = await supabase
        .from('temp_verifications')
        .update({ telegram_user_id: telegramUserId, telegram_username: telegramUsername })
        .match({ user_code: userCode });

      if (updateError) {
        ctx.reply('An error occurred. Please try again later.');
        return;
      }

      await ctx.reply(`Your verification code is:\n\`${tempVerification.bot_code}\``, {
        parse_mode: 'MarkdownV2',
      });

      ctx.scene.leave();
    } catch (error) {
      console.error('Error processing message:', error);
      ctx.reply('An error occurred. Please try again later.');
    }
  });

  const stage = new Scenes.Stage<CustomContext>([verifyCodeScene]);
  bot.use(session());
  bot.use(stage.middleware());

  bot.command('start', (ctx) => {
    ctx.reply('Welcome to Phantom Phones Bot! What would you like to do?', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Verify Code', callback_data: 'verify_code' }],
          // Add other options as needed
        ],
      },
    });
  });

  bot.action('verify_code', (ctx) => {
    return ctx.scene.enter('VERIFY_CODE');
  });

  if (process.env.NODE_ENV !== 'production') {
    bot.launch();
  }

  process.once('SIGINT', () => bot?.stop('SIGINT'));
  process.once('SIGTERM', () => bot?.stop('SIGTERM'));
} else {
  console.warn('Telegram bot or Supabase not initialized due to missing environment variables');
  if (!token) console.warn('TELEGRAM_BOT_TOKEN is missing');
  if (!supabaseUrl) console.warn('SUPABASE_URL is missing');
  if (!supabaseKey) console.warn('SUPABASE_SERVICE_KEY is missing');
}

export default bot;

```


## File: /root/main/work/Phones/PhantomPhones/next-env.d.ts

### Content
```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/compat/navigation" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

```


## File: /root/main/work/Phones/PhantomPhones/next-sitemap.config.js

### Content
```js
// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://www.phantomphones.xyz',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};

```


## File: /root/main/work/Phones/PhantomPhones/next.config.js

### Content
```js
const TerserPlugin = require('terser-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Onion-Location',
            value: 'http://i5p6fmlkgfhdhq6kkjab4r3mhwfsz5unfpzqilwiil2nskdipnz6f3ad.onion',
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };

      // Add Terser Plugin for Minification only in production
      if (!dev) {
        config.optimization.minimizer.push(
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // Remove console logs for smaller bundle size
              },
              format: {
                comments: false, // Remove comments
              },
            },
            extractComments: false,
          })
        );
      }
    }

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },

  // Disable trailingSlash to prevent redirects
  trailingSlash: false,

  // Keep modern optimizations in place
  swcMinify: true, // Use the built-in SWC compiler for JS/TS minification

  // Add rewrite rules for webhook
  async rewrites() {
    return [
      {
        source: '/api/telegram-webhook',
        destination: '/api/telegram-webhook',
      },
      {
        source: '/api/telegram-webhook/',
        destination: '/api/telegram-webhook',
      },
    ];
  },
};

module.exports = nextConfig;





//Regular
// // next.config.js

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         fs: false,
//         net: false,
//         tls: false,
//       };
//     }
//     return config;
//   },
//   async headers() {
//     return [
//       {
//         // Apply headers to all routes
//         source: '/:path*',
//         headers: [
//           {
//             key: 'Onion-Location',
//             value: 'http://i5p6fmlkgfhdhq6kkjab4r3mhwfsz5unfpzqilwiil2nskdipnz6f3ad.onion', // Your .onion address
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

// next.config.js



// super obfuscated

// const WebpackObfuscator = require('webpack-obfuscator');
// const TerserPlugin = require('terser-webpack-plugin');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   // Apply security headers globally
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: [
//           {
//             key: 'Onion-Location',
//             value: 'http://i5p6fmlkgfhdhq6kkjab4r3mhwfsz5unfpzqilwiil2nskdipnz6f3ad.onion',
//           },
//         ],
//       },
//     ];
//   },

//   // Extend Webpack config
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       // Fallback for unsupported modules
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         fs: false,
//         net: false,
//         tls: false,
//       };

//       config.plugins.push(
//         new WebpackObfuscator(
//           {
//             rotateStringArray: true,
//             stringArray: true,
//             stringArrayThreshold: 0.75,
//             deadCodeInjection: true,
//             deadCodeInjectionThreshold: 0.4,
//             selfDefending: true,
//             debugProtection: true,
//             debugProtectionInterval: 4000,
//           },
//           []
//         )
//       );

//       // Add Terser for JavaScript minification
//       config.optimization.minimizer.push(
//         new TerserPlugin({
//           terserOptions: {
//             compress: {
//               drop_console: true, // Remove console logs
//             },
//           },
//         })
//       );
//     }

//     return config;
//   },
// };

// module.exports = nextConfig;

```


## File: /root/main/work/Phones/PhantomPhones/package.json

### Dependencies
Files that use dependencies defined in this package.json:
- /root/main/work/Phones/PhantomPhones/src/app/cart/CartPageStyles.tsx
- /root/main/work/Phones/PhantomPhones/src/app/page.tsx
- /root/main/work/Phones/PhantomPhones/src/app/cart/page.tsx
- /root/main/work/Phones/PhantomPhones/src/components/BlogCard.tsx
- /root/main/work/Phones/PhantomPhones/src/components/BlogImage.tsx
- /root/main/work/Phones/PhantomPhones/src/components/Pagination.tsx
- /root/main/work/Phones/PhantomPhones/src/app/contact/page.tsx
- /root/main/work/Phones/PhantomPhones/src/app/products/page.tsx
- /root/main/work/Phones/PhantomPhones/src/app/products/productImage.tsx
- /root/main/work/Phones/PhantomPhones/src/components/CurrencySelector.tsx
- /root/main/work/Phones/PhantomPhones/src/components/Footer.tsx
- /root/main/work/Phones/PhantomPhones/src/components/GlowingButton.tsx
- /root/main/work/Phones/PhantomPhones/src/components/Navbar.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductCard.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductDetails.tsx
- /root/main/work/Phones/PhantomPhones/src/theme/gsap/scramble/subheaderScramble.tsx
- /root/main/work/Phones/PhantomPhones/lib/telegram-bot.ts
- /root/main/work/Phones/PhantomPhones/pages/api/comments.ts
- /root/main/work/Phones/PhantomPhones/pages/api/related-articles.ts
- /root/main/work/Phones/PhantomPhones/pages/api/telegram-bot.ts
- /root/main/work/Phones/PhantomPhones/pages/api/verify-telegram.ts
- /root/main/work/Phones/PhantomPhones/check-errors.ts
- /root/main/work/Phones/PhantomPhones/src/app/pacmanGame/pacman.tsx
- /root/main/work/Phones/PhantomPhones/pages/api/telegram-webhook.ts
- /root/main/work/Phones/PhantomPhones/src/app/products/[slug]/page.tsx
- /root/main/work/Phones/PhantomPhones/src/components/Providers.tsx
- /root/main/work/Phones/PhantomPhones/src/contexts/CartContext.tsx
- /root/main/work/Phones/PhantomPhones/src/contexts/CurrencyContext.tsx
- /root/main/work/Phones/PhantomPhones/src/contexts/ExchangeRateContext.tsx
- /root/main/work/Phones/PhantomPhones/src/types/index.d.ts
- /root/main/work/Phones/PhantomPhones/src/types/telegraf-ratelimit.d.ts
- /root/main/work/Phones/PhantomPhones/next.config.js
- /root/main/work/Phones/PhantomPhones/tailwind.config.js
- /root/main/work/Phones/PhantomPhones/tailwind.config.ts

### Content
```json
{
  "name": "phantom-phones",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postbuild": "next-sitemap"
  },
  "dependencies": {
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@mui/icons-material": "^6.1.2",
    "@mui/joy": "^5.0.0-beta.48",
    "@mui/lab": "^6.0.0-beta.10",
    "@mui/material": "^6.1.2",
    "@supabase/supabase-js": "^2.45.4",
    "@typescript-eslint/parser": "^8.8.1",
    "@vercel/analytics": "^1.3.1",
    "autoprefixer": "^10.4.20",
    "date-fns": "^4.1.0",
    "eslint": "^9.12.0",
    "express-validator": "^7.2.0",
    "gsap": "npm:@gsap/shockingly@^3.12.5",
    "helmet": "^8.0.0",
    "lucide-react": "^0.447.0",
    "mermaid": "^11.3.0",
    "next": "14.2.13",
    "next-api-rate-limit": "^1.0.3",
    "next-csrf": "^0.2.1",
    "next-rate-limit": "^0.0.3",
    "next-sitemap": "^4.2.3",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.53.0",
    "react-icons": "^5.3.0",
    "react-markdown": "^9.0.1",
    "react-material-ui-carousel": "^3.4.2",
    "react-slick": "^0.30.2",
    "react-spring": "^9.7.4",
    "react-syntax-highlighter": "^15.5.0",
    "react-toastify": "^10.0.5",
    "react-transition-group": "^4.4.5",
    "react-twitter-embed": "^4.0.4",
    "recharts": "^2.12.7",
    "remark-gfm": "^4.0.0",
    "slick-carousel": "^1.8.1",
    "telegraf": "^4.16.3",
    "telegraf-ratelimit": "^2.0.0",
    "terser-webpack-plugin": "^5.3.10",
    "uuid": "^10.0.0"
  },
  "devDependencies": {
    "@tailwindcss/typography": "^0.5.15",
    "@types/node": "22.7.4",
    "@types/react": "^18",
    "@types/react-slick": "^0.23.13",
    "@types/react-syntax-highlighter": "^15.5.13",
    "next-compose-plugins": "^2.2.1",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.6.2"
  }
}

```


## File: /root/main/work/Phones/PhantomPhones/pages/api/article.json

### Content
```json
[
  {
    "title": "What Is a Drop Address?",
    "slug": "what-is-a-drop-address",
    "category": "Guides",
    "author_name": "Phantom Phones",
    "author_avatar": "/images/phantom-phones-avatar.webp",
    "published_at": null,
    "image": "/images/drop-address-guide.webp",
    "excerpt": "Learn what a drop address is and how to set one up to maintain your privacy when receiving encrypted devices from Phantom Phones.",
    "featured": true,
    "content": [
      {
        "type": "heading",
        "level": 1,
        "content": "What Is a Drop Address?"
      },
      {
        "type": "animated-counter",
        "start": 0,
        "end": 100,
        "duration": 2000,
        "prefix": "",
        "suffix": "% Privacy Protection"
      },
      {
        "type": "paragraph",
        "content": "A drop address is a secondary, alternative location you use to receive deliveries instead of your home or work address. This is a critical component for anyone who values privacy or wishes to remain untraceable. For users of Phantom Phones, setting up a drop address allows you to receive encrypted privacy devices without ever exposing your real identity or personal location to delivery companies or third parties."
      },
      {
        "type": "callout",
        "style": "info",
        "content": "While some might associate drop addresses with illicit activities, there is nothing illegal about protecting your privacy. As long as the goods you're receiving are legal (such as our encrypted phones), using a drop address is a legitimate and powerful tool in safeguarding your anonymity."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Why Use a Drop Address?"
      },
      {
        "type": "paragraph",
        "content": "Using a drop address goes beyond convenience—it's about ensuring maximum privacy. Here's why you need one:"
      },
      {
        "type": "bulletList",
        "items": [
          "Anonymity Protection: Keeping your personal details hidden is paramount. A drop address shields your home address from being associated with the items you order.",
          "Avoid Surveillance: Modern society is saturated with surveillance, whether through CCTV cameras, online tracking, or even physical monitoring. By using a drop address, you can sidestep much of this unwanted attention.",
          "Prevent Identity Ties: Your real identity remains separated from your purchases. No delivery company or middleman will know where you live or who you are."
        ]
      },
      {
        "type": "mermaid",
        "content": "graph TD\n    A[You] -->|Order| B(Phantom Phones)\n    B -->|Ship to| C{Drop Address}\n    C -->|Pickup| D[You]\n    E[Surveillance] -.-x C"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Phantom Phones: Committed to Privacy"
      },
      {
        "type": "paragraph",
        "content": "At Phantom Phones, we go to extreme lengths to ensure your privacy. Here's how we handle your data:"
      },
      {
        "type": "bulletList",
        "items": [
          "No Logs Policy: We don't keep user logs or track your actions. Once you've placed an order, we don't monitor or store any data about you.",
          "Limited Data Storage: We only keep a user's secret word, optional Telegram username (if you've opted in to communicate via this service), and your order number to allow us to provide post-sale services or additional upgrades.",
          "Cryptocurrency Payments: We only accept payments via cryptocurrency, which means no personal bank information is ever associated with your order. We provide step-by-step guidance on making anonymous cryptocurrency payments, ensuring there's no traceable link back to your identity."
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Setting Up the Perfect Drop Address"
      },
      {
        "type": "paragraph",
        "content": "The drop address you choose should be completely untraceable to your personal life. Every aspect, from selecting the location to picking up your package, must be handled with care to maintain your anonymity."
      },
      {
        "type": "progress-bar",
        "steps": [
          {"title": "Select Location", "completed": false},
          {"title": "Pay Anonymously", "completed": false},
          {"title": "Use Pseudonyms", "completed": false},
          {"title": "Choose Low Surveillance", "completed": false},
          {"title": "Use Public Landmarks", "completed": false},
          {"title": "Time Visits", "completed": false},
          {"title": "Rotate Addresses", "completed": false},
          {"title": "Use Disguises", "completed": false},
          {"title": "Use Public Transport", "completed": false},
          {"title": "Turn Off Phone", "completed": false},
          {"title": "Coordinate Remotely", "completed": false},
          {"title": "Use a Mule", "completed": false}
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "content": "1. Select a Location Completely Unrelated to You"
      },
      {
        "type": "paragraph",
        "content": "Your drop address must not have any connection to your personal or professional life. Avoid using locations that you frequent or are known to visit regularly. Some viable options include:"
      },
      {
        "type": "bulletList",
        "items": [
          "Commercial Mailboxes: Rent a private mailbox at a third-party facility that offers anonymity. Look for businesses that allow pseudonyms and don't require photo IDs.",
          "Public Parcel Lockers: Many countries have public parcel lockers in locations like supermarkets or gas stations. These allow you to receive deliveries without interaction, making them ideal for anonymous pickups.",
          "Short-Term Rentals (Airbnb, etc.): Renting an apartment, house, or storage unit for short-term use can be an excellent choice for a temporary drop address, particularly if anonymity is built into the rental agreement."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "content": "2. Pay for the Drop Address Anonymously"
      },
      {
        "type": "callout",
        "style": "warning",
        "content": "Ensure that when you pay for any service related to your drop address—whether it's a mailbox rental or short-term storage—you do so anonymously. Use cryptocurrency to pay for these services whenever possible, and avoid using credit cards or bank accounts linked to your real name."
      },
      {
        "type": "heading",
        "level": 3,
        "content": "3. Use False Identities or Pseudonyms"
      },
      {
        "type": "paragraph",
        "content": "If the drop address service requires a name, use a pseudonym or false identity. Keep it consistent across transactions and avoid providing any personal documentation (e.g., ID or driver's license) that could tie the address back to you."
      },
      {
        "type": "heading",
        "level": 3,
        "content": "4. Choose Locations with Minimal or No Surveillance"
      },
      {
        "type": "paragraph",
        "content": "A key part of ensuring that your drop address remains untraceable is selecting a location without extensive CCTV or other forms of monitoring. This can be tricky, but here are a few ways to reduce exposure:"
      },
      {
        "type": "bulletList",
        "items": [
          "Abandoned Properties: If available, an abandoned or vacant property in a quiet neighborhood could be ideal. Minor upkeep, such as mowing the lawn or putting out a garbage can, can make it appear lived-in without drawing attention.",
          "Private Businesses with Public Access: Some private businesses, such as general stores or local shops, may allow you to receive packages. Ensure they don't require personal ID to collect parcels."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "content": "5. Use Public Landmarks for Discreet Drop-offs"
      },
      {
        "type": "paragraph",
        "content": "Some users prefer to receive packages in open, public places to avoid any permanent trace of their connection to a particular address. Consider locations like:"
      },
      {
        "type": "bulletList",
        "items": [
          "Parks or Parking Lots: Meet couriers or package delivery services in public areas where you can blend in with crowds and avoid being recognized.",
          "Busy Public Buildings: Libraries, community centers, or retail areas provide perfect cover for you to casually retrieve your package without standing out."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "content": "6. Time Your Visits Strategically"
      },
      {
        "type": "paragraph",
        "content": "When picking up a package, timing is everything. Always visit the drop address during times when the area is least populated:"
      },
      {
        "type": "bulletList",
        "items": [
          "Early Mornings or Late Nights: Early mornings and late nights are perfect for discreet pickups, as fewer people are around to notice you.",
          "Off-Peak Hours: For locations that are busier during specific times of the day, visit during off-peak hours to blend into the environment more easily."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "content": "7. Rotate Drop Addresses"
      },
      {
        "type": "paragraph",
        "content": "To prevent patterns from forming, rotate between multiple drop addresses. This reduces the likelihood of detection and adds complexity to any efforts to trace your shipments. Switching up your drop addresses every few deliveries also prevents anyone from linking the same address to your orders over time."
      },
      {
        "type": "heading",
        "level": 3,
        "content": "8. Wear Light Disguises"
      },
      {
        "type": "paragraph",
        "content": "If you're concerned about being recognized when picking up packages, consider wearing a light disguise:"
      },
      {
        "type": "bulletList",
        "items": [
          "Sunglasses, Hats, or Masks: These simple disguises obscure your face without drawing suspicion.",
          "Change of Clothing: Wearing different outfits each time you visit the drop address can reduce the likelihood of someone recognizing you based on appearance."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "content": "9. Use Public Transport or Alternative Travel Methods"
      },
      {
        "type": "paragraph",
        "content": "Avoid driving your own vehicle to the drop address. Using your personal car creates a traceable record (via license plates, tolls, etc.). Instead:"
      },
      {
        "type": "bulletList",
        "items": [
          "Public Transportation: Buses, trains, or taxis provide a much more anonymous way to travel. There's no paper trail linking your vehicle to the drop location.",
          "By Foot or Bicycle: Traveling by foot or bicycle is another great option, as it leaves no digital or paper trail, unlike personal vehicles."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "content": "10. Turn Off Your Phone or Use a Burner Device"
      },
      {
        "type": "callout",
        "style": "danger",
        "content": "Your smartphone is a constant source of tracking, through GPS, cell tower pings, and Wi-Fi networks. Before heading to your drop address:"
      },
      {
        "type": "bulletList",
        "items": [
          "Turn Off Your Phone: The simplest solution is to turn off your phone entirely when visiting your drop location to avoid any digital breadcrumbs.",
          "Use a Burner Phone: If you must communicate or coordinate, use a burner phone that cannot be traced back to you. Buy a prepaid phone with cash and use it solely for communication related to the drop address."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "content": "11. Coordinate Package Delivery Remotely"
      },
      {
        "type": "paragraph",
        "content": "Whenever possible, avoid being present when the package is delivered. Instruct the courier to leave the package at the drop address without requiring your signature or direct interaction. Some couriers offer delivery options that allow you to specify drop-off instructions such as:"
      },
      {
        "type": "bulletList",
        "items": [
          "No Signature Required: Opt for delivery services that don't require a signature upon receipt. This avoids providing any identifying information.",
          "Leave in Mailbox or Specific Location: Provide clear instructions for the package to be left in a mailbox or at a designated spot (such as behind a building or at the side entrance) to avoid face-to-face interaction."
        ]
      },
      {
        "type": "heading",
        "level": 3,
        "content": "12. Use a Mule or Third Party to Retrieve the Package"
      },
      {
        "type": "paragraph",
        "content": "For ultimate separation from the drop address, consider having a third party—a 'mule'—retrieve the package for you. This person can pick up the package and pass it on to you later, creating an extra layer of distance between you and the drop address."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Advanced Techniques for Maximum Anonymity"
      },
      {
        "type": "paragraph",
        "content": "Once you've set up your drop address, here are advanced techniques to further protect your anonymity:"
      },
      {
        "type": "card-layout",
        "title": "Advanced Anonymity Techniques",
        "content": [
          {
            "title": "Use Short-Term Rentals",
            "description": "Short-term rentals, such as Airbnb properties, offer a temporary location for receiving packages. Once the rental period ends, the address is no longer linked to you. This is ideal if you only need a temporary drop location. Pay for the rental with cryptocurrency for added security."
          },
          {
            "title": "Use Package Forwarding Services",
            "description": "To add an additional layer of separation between you and your deliveries, use a package forwarding service. These services receive your package at one address, then forward it to a different location. By chaining multiple forwarding services together, you can further obfuscate the package's journey, making it almost impossible to trace."
          },
          {
            "title": "Employ Discreet Pickup Methods",
            "description": "If using a public space or parcel locker for the drop-off, consider discreetly retrieving the package by blending into crowds or timing the pickup during busy hours."
          },
          {
            "title": "Plant a Decoy Package",
            "description": "To reduce suspicion around multiple trips to the same drop location, consider placing a dummy package at the address beforehand. This allows you to look like a regular visitor who frequently picks up mail, rather than someone retrieving an important delivery."
          },
          {
            "title": "Use Remote Security Cameras",
            "description": "Install remote access security cameras at the drop location to monitor it remotely. This way, you know when your package arrives without having to be physically present at the site."
          },
          {
            "title": "Alter Your Appearance Slightly",
            "description": "While drastic disguises are unnecessary, slight alterations to your appearance—such as changing your hairstyle, wearing different clothes, or adding facial accessories—can help reduce the chances of being recognized on multiple visits to the drop address."
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Final Thoughts: Ensuring Total Privacy with Phantom Phones"
      },
      {
        "type": "paragraph",
        "content": "At Phantom Phones, your privacy is not just a feature—it's our core mission. Using a drop address is one of the most effective methods of safeguarding your anonymity, and when combined with our encrypted devices, anonymous cryptocurrency payments, and secure communication practices, it allows you to navigate a world of increasing surveillance with confidence."
      },
      {
        "type": "callout",
        "style": "success",
        "content": "By employing these tactics, from renting drop locations under pseudonyms to coordinating anonymous pickups, you can ensure that your personal identity remains shielded from the prying eyes of both corporations and individuals."
      },
      {
        "type": "paragraph",
        "content": "With Phantom Phones and this Master Guide, your path to complete privacy has never been clearer."
      },
      {
        "type": "quiz",
        "questions": [
          {
            "question": "What is the primary purpose of using a drop address?",
            "options": ["Convenience", "Cost-saving", "Privacy protection", "Faster delivery"],
            "correctAnswer": 2
          },
          {
            "question": "Which payment method is recommended for setting up a drop address?",
            "options": ["Credit card", "Bank transfer", "Cash", "Cryptocurrency"],
            "correctAnswer": 3
          },
          {
            "question": "What should you do with your personal phone when visiting a drop address?",
            "options": ["Use it normally", "Turn it off", "Leave it at home", "Use it only for emergencies"],
            "correctAnswer": 1
          }
        ]
      },
      {
        "type": "animated-counter",
        "start": 0,
        "end": 12,
        "duration": 2000,
        "prefix": "",
        "suffix": " Steps to Maximum Privacy"
      },
      {
        "type": "mermaid",
        "content": "graph TD\n    A[Order from Phantom Phones] --> B[Choose Drop Address]\n    B --> C[Pay Anonymously]\n    C --> D[Use Pseudonym]\n    D --> E[Coordinate Remote Delivery]\n    E --> F[Retrieve Package Discreetly]\n    F --> G[Enjoy Secure Device]"
      }
    ],
    "tags": ["privacy", "drop address", "anonymous shipping", "encrypted phones", "security"],
    "related_stories": ["how-to-stay-anonymous-online", "best-privacy-tools"],
    "seo": {
      "metaTitle": "What Is a Drop Address?",
      "metaDescription": "Learn how to use a drop address for anonymous, untraceable deliveries of your Phantom Phones products. Discover advanced privacy techniques in this guide.",
      "keywords": ["drop address", "anonymous shipping", "privacy", "Phantom Phones", "secure delivery"],
      "canonicalUrl": "https://phantomphones.xyz/blogs/what-is-a-drop-address",
      "ogTitle": "What Is a Drop Address? | Phantom Phones",
      "ogDescription": "A comprehensive guide on using drop addresses to receive encrypted privacy devices while protecting your identity and location.",
      "ogImage": "/images/drop-address-guide-og.webp"
    },
    "style_config": {
      "primaryColor": "#3498db",
      "secondaryColor": "#2ecc71",
      "fontFamily": "Arial, sans-serif",
      "fontSize": "16px",
      "lineHeight": "1.6"
    },
    "interactive_elements": {
      "enableComments": true,
      "enableSocialSharing": true,
      "enableRelatedArticles": true
    },
    "metadata": {
      "wordCount": 2500,
      "readingTime": "12 minutes",
      "lastUpdated": "2024-10-05T12:00:00Z"
    }
  }
]
```


## File: /root/main/work/Phones/PhantomPhones/pages/api/comments.ts

### Content
```ts
// /pages/api/comments.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const generatePhantomPhrase = (): string => {
  return crypto
    .randomBytes(32)
    .toString('base64')
    .replace(/[^a-zA-Z0-9]/g, '')
    .substr(0, 64);
};

const isValidUsername = (username: string): boolean => {
  const invalidUsernames = [
    'admin',
    'administrator',
    'adm1n',
    'phantom',
    'phant0m',
    'phantom phones',
    'Admin',
    'Administrator',
    'Phantom',
    'Phantom Phones',
  ];
  return !invalidUsernames.includes(username.toLowerCase());
};

const sanitizeString = (str: string): string => {
  return str.replace(/[^\w\s\-.,!?@]/gi, '').trim();
};

async function verifyCommenter(req: NextApiRequest, res: NextApiResponse) {
  const { username, phantomPhrase } = req.body;

  if (!username || !phantomPhrase) {
    return res.status(400).json({ error: 'Username and PhantomPhrase are required' });
  }

  try {
    const { data, error } = await supabase
      .from('commenters')
      .select('*')
      .eq('username', username)
      .eq('phantom_phrase', phantomPhrase)
      .single();

    if (error) {
      console.error('Error verifying commenter:', error);
      throw error;
    }

    if (!data) {
      return res.status(401).json({ success: false, error: 'Invalid username or PhantomPhrase' });
    }

    res.status(200).json({ success: true, commenterId: data.id });
  } catch (error) {
    console.error('Error verifying commenter:', error);
    res.status(500).json({
      error: `Can't seem to find you. Either you don't exist, or you're forgetting that usernames are case-sensitive`,
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

async function createCommenter(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.body;

  if (!username || !isValidUsername(username)) {
    return res.status(400).json({ error: 'Invalid username' });
  }

  try {
    const phantomPhrase = generatePhantomPhrase();

    // Check if the username already exists
    const { data: existingCommenter, error: checkError } = await supabase
      .from('commenters')
      .select('username')
      .eq('username', username)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing commenter:', checkError);
      throw new Error('Error checking existing commenter');
    }

    if (existingCommenter) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const { data, error } = await supabase
      .from('commenters')
      .insert({ username, phantom_phrase: phantomPhrase })
      .select();

    if (error) {
      console.error('Error inserting new commenter:', error);
      throw error;
    }

    if (!data || data.length === 0) {
      throw new Error('Commenter creation failed');
    }

    res.status(201).json({ success: true, phantomPhrase });
  } catch (error) {
    console.error('Error creating commenter:', error);
    res.status(500).json({
      error: 'Error creating commenter',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const { method } = req;
  
    switch (method) {
      case 'GET':
        return await getComments(req, res);
      case 'POST':
        const { action } = req.body;
        switch (action) {
          case 'addComment':
            return await addComment(req, res);
          case 'createCommenter':
            return await createCommenter(req, res);
          case 'verifyCommenter':
            return await verifyCommenter(req, res);
          case 'vote':
            return await processVote(req, res); // Ensure this line exists
          default:
            return res.status(400).json({ error: 'Invalid action' });
        }
    case 'PUT':
      return await updateComment(req, res);
    case 'DELETE':
      return await deleteComment(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

async function getComments(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Blog slug is required' });
  }

  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('comments')
      .eq('slug', slug)
      .single();

    if (error) throw error;

    res.status(200).json(data.comments || []);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({
      error: 'Error fetching comments',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

async function addComment(req: NextApiRequest, res: NextApiResponse) {
  let { slug, content, parentId, authorCode, username } = req.body;

  if (!slug || !content) {
    return res
      .status(400)
      .json({ error: 'Blog slug and content are required' });
  }

  // Sanitize inputs
  slug = sanitizeString(slug);
  content = sanitizeString(content);
  username = username ? sanitizeString(username) : null;
  parentId = parentId ? sanitizeString(parentId) : null;
  authorCode = authorCode ? sanitizeString(authorCode) : null;

  let newAuthorCode = authorCode || generatePhantomPhrase();

  if (username && !isValidUsername(username)) {
    return res.status(400).json({ error: 'Invalid username' });
  }

  try {
    const { data: blog, error: fetchError } = await supabase
      .from('blogs')
      .select('comments')
      .eq('slug', slug)
      .single();

    if (fetchError) throw fetchError;

    const comments = blog.comments || [];
    const newComment = {
      id: crypto.randomUUID(),
      content,
      parent_id: parentId || null,
      author_code: newAuthorCode,
      author_username:
        username || `Anon-${Math.random().toString(36).substring(2, 10)}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      upvotes: 0,
      downvotes: 0,
      replies: [],
      user_votes: {},
    };

    comments.push(newComment);

    const { error: updateError } = await supabase
      .from('blogs')
      .update({ comments })
      .eq('slug', slug);

    if (updateError) throw updateError;

    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).json({
      error: 'Error adding comment',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

async function processVote(req: NextApiRequest, res: NextApiResponse) {
  let { slug, commentId, username, phantomPhrase, voteType } = req.body;

  if (!slug || !commentId || !username || !phantomPhrase || !voteType) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Sanitize inputs
  slug = sanitizeString(slug);
  commentId = sanitizeString(commentId);
  username = sanitizeString(username);
  phantomPhrase = sanitizeString(phantomPhrase);

  if (voteType !== 'upvote' && voteType !== 'downvote') {
    return res.status(400).json({ error: 'Invalid vote type' });
  }

  try {
    // Verify commenter
    const { data: commenter, error: commenterError } = await supabase
      .from('commenters')
      .select('*')
      .eq('username', username)
      .eq('phantom_phrase', phantomPhrase)
      .single();

    if (commenterError || !commenter) {
      return res.status(401).json({ error: 'Invalid username or PhantomPhrase' });
    }

    // Fetch comments
    const { data: blog, error: fetchError } = await supabase
      .from('blogs')
      .select('comments')
      .eq('slug', slug)
      .single();

    if (fetchError || !blog) throw fetchError || new Error('Blog not found');

    const comments = blog.comments || [];

    // Find the comment
    const findComment = (commentsList: any[]): any => {
      for (let comment of commentsList) {
        if (comment.id === commentId) {
          return comment;
        } else if (comment.replies && comment.replies.length > 0) {
          const found = findComment(comment.replies);
          if (found) return found;
        }
      }
      return null;
    };

    const comment = findComment(comments);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    if (!comment.user_votes) {
      comment.user_votes = {};
    }

    const userVote = comment.user_votes[commenter.id];

    if (userVote === (voteType === 'upvote' ? 1 : -1)) {
      return res.status(400).json({ error: 'You have already voted this way' });
    }

    // Update votes
    if (voteType === 'upvote') {
      if (userVote === -1) {
        comment.downvotes -= 1;
      }
      comment.upvotes += 1;
      comment.user_votes[commenter.id] = 1;
    } else {
      if (userVote === 1) {
        comment.upvotes -= 1;
      }
      comment.downvotes += 1;
      comment.user_votes[commenter.id] = -1;
    }

    // Save changes
    const { error: updateError } = await supabase
      .from('blogs')
      .update({ comments })
      .eq('slug', slug);

    if (updateError) throw updateError;

    res.status(200).json({
      upvotes: comment.upvotes,
      downvotes: comment.downvotes,
      user_votes: comment.user_votes,
    });
  } catch (error) {
    console.error('Error processing vote:', error);
    res.status(500).json({
      error: 'Error processing vote',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

async function updateComment(req: NextApiRequest, res: NextApiResponse) {
  const { slug, id, content, authorCode } = req.body;

  if (!slug || !id || !content || !authorCode) {
    return res.status(400).json({ error: 'Blog slug, comment ID, content, and author code are required' });
  }

  try {
    const { data: blog, error: fetchError } = await supabase
      .from('blogs')
      .select('comments')
      .eq('slug', slug)
      .single();

    if (fetchError) throw fetchError;

    const comments = blog.comments || [];
    const commentIndex = comments.findIndex((c: any) => c.id === id && c.author_code === authorCode);

    if (commentIndex === -1) {
      return res.status(404).json({ error: 'Comment not found or author code is incorrect' });
    }

    comments[commentIndex].content = content;
    comments[commentIndex].updated_at = new Date().toISOString();

    const { error: updateError } = await supabase
      .from('blogs')
      .update({ comments })
      .eq('slug', slug);

    if (updateError) throw updateError;

    res.status(200).json(comments[commentIndex]);
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ error: 'Error updating comment', details: error instanceof Error ? error.message : 'Unknown error' });
  }
}

async function deleteComment(req: NextApiRequest, res: NextApiResponse) {
  const { slug, id, authorCode } = req.body;

  if (!slug || !id || !authorCode) {
    return res.status(400).json({ error: 'Blog slug, comment ID, and author code are required' });
  }

  try {
    const { data: blog, error: fetchError } = await supabase
      .from('blogs')
      .select('comments')
      .eq('slug', slug)
      .single();

    if (fetchError) throw fetchError;

    const comments = blog.comments || [];
    const commentIndex = comments.findIndex((c: any) => c.id === id && c.author_code === authorCode);

    if (commentIndex === -1) {
      return res.status(404).json({ error: 'Comment not found or author code is incorrect' });
    }

    comments.splice(commentIndex, 1);

    const { error: updateError } = await supabase
      .from('blogs')
      .update({ comments })
      .eq('slug', slug);

    if (updateError) throw updateError;

    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'Error deleting comment', details: error instanceof Error ? error.message : 'Unknown error' });
  }
}

```


## File: /root/main/work/Phones/PhantomPhones/pages/api/related-articles.ts

### Content
```ts
// pages/api/related-articles.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { slug } = req.query;

    console.log('Received request for slug:', slug);

    if (!slug || typeof slug !== 'string') {
      return res.status(400).json({ error: 'Slug is required and must be a string' });
    }

    // Fetch the current article to get its category and tags
    const { data: currentArticle, error: currentArticleError } = await supabase
      .from('blogs')
      .select('category, tags')
      .ilike('slug', slug)
      .single();

    if (currentArticleError || !currentArticle) {
      console.error('Error fetching current article:', currentArticleError);
      return res.status(404).json({ error: 'Current article not found' });
    }

    console.log('Current article:', currentArticle);

    // Fetch related articles with case-insensitive matching
    let { data: articles, error: articlesError } = await supabase
      .from('blogs')
      .select('id, title, slug, category, author_name, author_avatar, published_at, image, excerpt')
      .not('slug', 'ilike', slug)
      .or(`category.ilike.%${currentArticle.category}%,tags.cs.{${currentArticle.tags.map((tag: string) => tag.toLowerCase()).join(',')}}`)
      .order('published_at', { ascending: false })
      .limit(10);

    if (articlesError) {
      console.error('Error fetching related articles:', articlesError);
      return res.status(500).json({ error: 'Error fetching related articles' });
    }

    console.log('Related articles before randomization:', articles);

    // If no related articles found, fetch recent articles as fallback
    if (!articles || articles.length === 0) {
      console.log('No related articles found. Fetching recent articles as fallback.');
      const { data: recentArticles, error: recentArticlesError } = await supabase
        .from('blogs')
        .select('id, title, slug, category, author_name, author_avatar, published_at, image, excerpt')
        .not('slug', 'ilike', slug)
        .order('published_at', { ascending: false })
        .limit(10);

      if (recentArticlesError) {
        console.error('Error fetching recent articles:', recentArticlesError);
        return res.status(500).json({ error: 'Error fetching recent articles' });
      }

      console.log('Recent articles:', recentArticles);
      articles = recentArticles;
    }

    // Randomly select 3 articles
    const randomRelatedArticles = articles
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);

    console.log('Random related articles:', randomRelatedArticles);

    res.status(200).json(randomRelatedArticles);
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
```


## File: /root/main/work/Phones/PhantomPhones/pages/api/telegram-bot.ts

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/pages/api/telegram-webhook.ts

### Content
```ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { randomBytes } from 'crypto';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

function generateSecureString(length: number): string {
  return randomBytes(length).toString('base64').slice(0, length);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(`Received ${req.method} request to /api/telegram-bot`);
    console.log('Request headers:', JSON.stringify(req.headers, null, 2));
    console.log('Request body:', JSON.stringify(req.body, null, 2));

    if (req.method === 'GET') {
      try {
        const userCode = generateSecureString(64); // User code
        const botCode = generateSecureString(64);  // Bot code
  
        console.log(`Generated userCode: ${userCode}`);
        console.log(`Generated botCode: ${botCode}`);

        // Insert the codes into the Supabase table
        console.log('Inserting codes into Supabase');
        const { data, error } = await supabase
          .from('temp_verifications')
          .insert({ user_code: userCode, bot_code: botCode });
  
        if (error) {
          console.error('Supabase error:', error);
          throw new Error('Failed to insert verification codes into database');
        }
  
        console.log(`New verification: ${botCode}`);
  
        res.status(200).json({ userCode });
      } catch (error) {
        console.error('Unhandled error in API route:', error);
        res.status(500).json({ error: 'Internal server error', details: (error as Error).message });
      }
    } else {
      console.log(`Method ${req.method} not allowed`);
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
```


## File: /root/main/work/Phones/PhantomPhones/pages/api/telegram-webhook.ts

### Content
```ts
import { NextApiRequest, NextApiResponse } from 'next';
import bot from '../../lib/telegram-bot';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Received ${req.method} request to /api/telegram-webhook`);
  console.log('Request headers:', JSON.stringify(req.headers, null, 2));
  console.log('Request body:', JSON.stringify(req.body, null, 2));

  if (req.method === 'POST') {
    if (!bot) {
      console.error('Telegram bot is not initialized');
      return res.status(500).json({ error: 'Telegram bot is not initialized' });
    }

    try {
      console.log('Processing update with bot.handleUpdate');
      await bot.handleUpdate(req.body);
      console.log('Update processed successfully');
      return res.status(200).json({ message: 'OK' });
    } catch (error) {
      console.error('Error in Telegram webhook:', error);
      return res.status(500).json({ error: 'Error processing update' });
    }
  } else if (req.method === 'GET') {
    // Respond to GET requests (e.g., for webhook setup verification)
    console.log('Responding to GET request');
    return res.status(200).json({ message: 'Telegram webhook is active' });
  } else {
    console.log(`Method ${req.method} not allowed`);
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
```


## File: /root/main/work/Phones/PhantomPhones/pages/api/test.json

### Content
```json
[
  {
    "title": "Drop addresses, anonymous purchases, pseudonyms, and the law - UK Edition",
    "slug": "drop-address-legality-uk",
    "category": "The Law",
    "author_name": "Phantom Phones",
    "author_avatar": "/images/authors/phantom-phones-team.jpg",
    "published_at": "2023-10-08T12:00:00Z",
    "image": "/images/blog/drop-address-legal-guide.jpg",
    "excerpt": "Drop addresses, pseudonyms, and the law. A guide for keeping it legal while using a drop address - UK Edition.",
    "featured": false,
    "content": [
      {
        "type": "heading",
        "level": 1,
        "content": "Drop addresses, anonymous purchases, pseudonyms, and the law - UK Edition"
      },
      {
        "type": "animated-counter",
        "start": 0,
        "end": 100,
        "duration": 2000,
        "prefix": "",
        "suffix": "% Legal Privacy Guide"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Introduction"
      },
      {
        "type": "paragraph",
        "content": "For many individuals, maintaining privacy in an increasingly connected world is crucial. One effective way to safeguard your personal details is by using a drop address. A drop address serves as a secondary location where you can receive packages and mail without disclosing your home or business address. At Phantom Phones, we understand that privacy is a top priority for our customers, which is why we provide encrypted handsets that enhance your security. But it's important to understand the legal landscape when using drop addresses and pseudonyms, particularly in the UK."
      },
      {
        "type": "paragraph",
        "content": "This guide explores the legality of drop addresses and offers tips for staying compliant with UK laws. While drop addresses are legal, there are rules and restrictions that need to be followed to avoid legal pitfalls. Whether you're using a drop address to receive privacy-focused devices like Phantom Phones or other personal deliveries, following the legal guidelines ensures you maintain the privacy you seek without running into issues."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "What Is a Drop Address?"
      },
      {
        "type": "paragraph",
        "content": "A drop address is a secondary, alternative location where you can receive deliveries instead of your primary home or work address. People often use drop addresses to protect their privacy, particularly when receiving sensitive items. You can rent commercial mailboxes, use public parcel lockers, or even short-term rentals to serve as drop addresses."
      },
      {
        "type": "callout",
        "style": "info",
        "content": "In the UK, it is legal to use drop addresses for legitimate purposes. However, you must ensure that your use complies with the relevant laws to avoid any complications."
      },
      {
        "type": "paragraph",
        "content": "Drop addresses are widely used by privacy-conscious individuals, but understanding the laws that govern their use is crucial to avoid any unintended legal issues."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "UK Laws on Identity and Misrepresentation"
      },
      {
        "type": "paragraph",
        "content": "When setting up and using a drop address, it's important to be aware of key UK laws that regulate identity use and prevent misrepresentation. The **Identity Documents Act 2010** prohibits the possession and use of false identity documents. This means that while using pseudonyms for privacy is generally acceptable, providing fake identification to set up a drop address or receive deliveries could lead to legal issues."
      },
      {
        "type": "paragraph",
        "content": "Additionally, the **Fraud Act 2006** makes it illegal to dishonestly make false representations to gain a benefit or cause a loss to another. This includes using a false name or identity to deceive others, such as delivery companies or service providers. Always ensure that the details you provide when using a drop address are accurate and lawful, even if you choose to use a pseudonym for privacy."
      },
      {
        "type": "mermaid",
        "content": "graph TD\n    A[Identity Documents Act 2010] -->|Prohibits| B(False ID Documents)\n    C[Fraud Act 2006] -->|Prohibits| D(False Representations)\n    B --> E{Legal Issues}\n    D --> E"
      },
      {
        "type": "heading",
        "level": 2,
        "content": "How to Legally Set Up a Drop Address"
      },
      {
        "type": "paragraph",
        "content": "Setting up a drop address legally in the UK is a straightforward process as long as you follow a few simple rules. Here's how you can ensure that your drop address is set up properly while staying within the law."
      },
      {
        "type": "progress-bar",
        "steps": [
          {"title": "Choose Service", "completed": true},
          {"title": "Check Terms", "completed": true},
          {"title": "Provide ID", "completed": true},
          {"title": "Use Legally", "completed": false}
        ]
      },
      {
        "type": "bulletList",
        "items": [
          "Use established commercial mailbox services or public parcel lockers. These services are commonly used for privacy and anonymity.",
          "Check the terms and conditions of the service you use. Many providers allow pseudonyms, but ensure you're following their guidelines.",
          "If ID is required, provide legitimate identification. Avoid using false documents, as this could lead to prosecution under the Identity Documents Act.",
          "Rotate between multiple drop addresses if privacy is a high concern, but always ensure that each is used lawfully."
        ]
      },
      {
        "type": "paragraph",
        "content": "Drop addresses are convenient and can help you maintain your privacy when receiving sensitive deliveries. However, it's important to avoid providing false information or using drop addresses for illegal purposes, as this could lead to legal consequences."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Paying Anonymously: Cryptocurrency and Legal Considerations"
      },
      {
        "type": "paragraph",
        "content": "One of the ways to further enhance your privacy when using drop addresses is by paying for services and products anonymously. Many individuals choose to use cryptocurrency for anonymous transactions, which is both legal and widely accepted for privacy-focused purchases. Phantom Phones exclusively accepts cryptocurrency to ensure that our customers' payment information remains private."
      },
      {
        "type": "callout",
        "style": "warning",
        "content": "While cryptocurrency offers a layer of anonymity, the UK's **Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017** require cryptocurrency exchanges to perform Know Your Customer (KYC) checks."
      },
      {
        "type": "paragraph",
        "content": "This means that although transactions can be anonymous, purchasing cryptocurrency may still require identity verification. It is important to ensure that your cryptocurrency transactions are for legal purposes, as illegal activities tied to cryptocurrency can still be subject to legal scrutiny under the **Proceeds of Crime Act 2002**."
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Using Pseudonyms for Privacy"
      },
      {
        "type": "paragraph",
        "content": "In the UK, it is legal to use a pseudonym for receiving deliveries, provided that the pseudonym is not used for fraudulent purposes. Pseudonyms can help protect your personal identity, especially when receiving sensitive items through drop addresses. However, it's important to follow the guidelines of the service provider you're using, as some may require real names or identification for certain types of mail."
      },
      {
        "type": "paragraph",
        "content": "Phantom Phones allows customers to use pseudonyms when ordering products, provided they comply with our service terms and legal requirements. While pseudonyms offer an extra layer of privacy, ensure that you're not using them in a way that could mislead or defraud others."
      },
      {
        "type": "quiz",
        "questions": [
          {
            "question": "Is it legal to use a pseudonym for deliveries in the UK?",
            "options": ["Yes, always", "No, never", "Yes, if not used for fraud", "Only for certain items"],
            "correctAnswer": 2
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Picking Up Packages: Legally Navigating Drop Address Services"
      },
      {
        "type": "paragraph",
        "content": "When collecting mail or packages from your drop address, it's important to adhere to the rules of the service provider. If identification is required for a specific type of delivery, ensure that you use valid, lawful ID. Using fake IDs is illegal and can result in prosecution under the **Identity Documents Act 2010**."
      },
      {
        "type": "paragraph",
        "content": "Selecting locations with minimal surveillance, such as public parcel lockers or pickup points in busy areas, is a good way to maintain privacy. However, using abandoned properties or private locations without permission is illegal and could lead to charges of trespassing. Always make sure that you use legitimate locations for your drop addresses."
      },
      {
        "type": "card-layout",
        "title": "Legal vs. Illegal Drop Address Practices",
        "content": [
          {
            "title": "Legal Practices",
            "description": "Using commercial mailboxes, public parcel lockers, providing legitimate ID when required"
          },
          {
            "title": "Illegal Practices",
            "description": "Using fake IDs, trespassing on private property, using addresses without permission"
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "content": "Phantom Phones: Privacy and Responsibility"
      },
      {
        "type": "paragraph",
        "content": "At Phantom Phones, our priority is to offer encrypted devices that protect your privacy and allow you to maintain control over your data. We design our handsets for legitimate purposes, and as privacy advocates, we believe that everyone has the right to keep their personal information secure. We operate as a zero-log company, meaning that we do not store personal data about our customers beyond what is necessary to process orders."
      },
      {
        "type": "callout",
        "style": "success",
        "content": "For every order, we only retain an order ID, a secret phrase, and optional Telegram details for verification and support. These details can be deleted upon request."
      },
      {
        "type": "paragraph",
        "content": "It's important to note that while our handsets are designed to protect privacy, any misuse of our products for illegal activities is strictly against our Terms of Service. Our role is to provide tools for lawful privacy protection, and we encourage our customers to use these tools responsibly."
      },
      {
        "type": "animated-counter",
        "start": 0,
        "end": 100,
        "duration": 2000,
        "prefix": "",
        "suffix": "% Committed to Your Privacy"
      }
    ],
    "tags": ["drop address", "privacy", "pseudonyms", "UK law", "cryptocurrency", "identity fraud"],
    "related_stories": ["phantom-phones-privacy-guide", "using-cryptocurrency-for-anonymity"],
    "seo": {
      "metaTitle": "Drop addresses, anonymous purchases, pseudonyms and the law - UK Edition",
      "metaDescription": "Learn how to set up and use drop addresses in the UK while staying within the law. Discover the legal ways to protect your privacy and anonymity with drop addresses.",
      "keywords": ["drop address", "privacy", "legal pseudonym", "UK privacy law", "UK drop address", "Is using a drop address in the UK legal?", "cryptocurrency for anonymous payments"],
      "canonicalUrl": "https://phantomphones.xyz/blogs/drop-address-legality-uk",
      "ogTitle": "Drop addresses, anonymous purchases, pseudonyms and the law - UK Edition",
      "ogDescription": "A comprehensive guide on setting up and using drop addresses legally in the UK to maintain your privacy.",
      "ogImage": "/images/og/drop-address-legal-guide.jpg"
    },
    "style_config": {
      "primaryColor": "#3498db",
      "secondaryColor": "#2ecc71",
      "fontFamily": "Arial, sans-serif",
      "fontSize": "16px",
      "lineHeight": "1.6"
    },
    "interactive_elements": {
      "enableComments": true,
      "enableSocialSharing": true,
      "enableRelatedArticles": true
    },
    "metadata": {
      "wordCount": 3500,
      "readingTime": "15 minutes",
      "lastUpdated": "2023-10-08T12:00:00Z"
    }
  }
]
```


## File: /root/main/work/Phones/PhantomPhones/pages/api/verify-telegram.ts

### Content
```ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Received ${req.method} request to /api/verify-telegram`);
  console.log('Request headers:', JSON.stringify(req.headers, null, 2));
  console.log('Request body:', JSON.stringify(req.body, null, 2));

  if (req.method !== 'POST') {
    console.log(`Method ${req.method} not allowed`);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userCode, botCode } = req.body;

  // Validate incoming data
  if (!userCode || !botCode) {
    console.error('Missing userCode or botCode');
    return res.status(400).json({ error: 'Both userCode and botCode are required.' });
  }

  try {
    console.log(`Received verification request: { userCode: '${userCode}', botCode: '${botCode}' }`);

    // Fetch the corresponding entry from Supabase
    console.log('Fetching verification data from Supabase');
    const { data, error } = await supabase
      .from('temp_verifications')
      .select('*')
      .eq('user_code', userCode)
      .eq('bot_code', botCode)
      .single(); // Expect a single record

    if (error || !data) {
      console.error('Error fetching verification data from Supabase:', error);
      return res.status(400).json({ error: 'Invalid verification codes or data not found' });
    }

    const telegramUserId = data.telegram_user_id;
    const telegramUsername = data.telegram_username;

    console.log(`Verification data found for user: ${telegramUserId}, username: ${telegramUsername}`);

    // Check if the user is already verified
    console.log('Checking if user is already verified');
    const { data: existingUser, error: fetchError } = await supabase
      .from('verified_users')
      .select('*')
      .eq('telegram_user_id', telegramUserId)
      .maybeSingle(); // Use maybeSingle() to avoid errors when no rows are returned

    if (fetchError) {
      console.error('Error fetching from verified_users:', fetchError);
      return res.status(500).json({ error: 'Error checking verified users' });
    }

    // Insert the user into verified_users if they are not already verified
    if (!existingUser) {
      console.log('User not found in verified_users, inserting new record');
      const { error: insertError } = await supabase
        .from('verified_users')
        .insert({
          telegram_user_id: telegramUserId,
          telegram_username: telegramUsername,
        });

      if (insertError) {
        console.error('Error inserting into verified_users:', insertError);
        return res.status(500).json({ error: 'Error inserting into verified users' });
      }
    } else if (existingUser.telegram_username !== telegramUsername) {
      // Update the username if it has changed
      console.log('Updating username in verified_users');
      const { error: updateError } = await supabase
        .from('verified_users')
        .update({ telegram_username: telegramUsername })
        .eq('telegram_user_id', telegramUserId);

      if (updateError) {
        console.error('Error updating username in verified_users:', updateError);
        return res.status(500).json({ error: 'Error updating username in verified users' });
      }
    }

    // Delete the entry from temp_verifications
    console.log('Deleting entry from temp_verifications');
    const { error: deleteError } = await supabase
      .from('temp_verifications')
      .delete()
      .eq('user_code', userCode)
      .eq('bot_code', botCode);

    if (deleteError) {
      console.error('Error deleting temp_verifications entry:', deleteError);
      return res.status(500).json({ error: 'Error deleting temp_verifications entry' });
    }

    console.log('Verification successful, user added or updated in verified_users');
    res.status(200).json({ verified: true });
  } catch (err) {
    console.error('Unexpected error in verification:', err);
    res.status(500).json({ error: 'Internal server error', details: (err as Error).message });
  }
}
```


## File: /root/main/work/Phones/PhantomPhones/postcss.config.js

### Content
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```


## File: /root/main/work/Phones/PhantomPhones/postcss.config.mjs

### Content
```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```


## File: /root/main/work/Phones/PhantomPhones/src/app/cart/CartPageStyles.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/app/cart/page.tsx

### Content
```tsx
// src/app/cart/CartPageStyles.ts

import { extendTheme } from '@mui/joy/styles';
import { Theme } from '@mui/joy/styles';
import { keyframes } from '@emotion/react';

// Keyframe animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulsateGlow = keyframes`
  0% {
    box-shadow: 0 0 5px #00FFFF, 0 0 2px #00FFFF, 0 0 3px #00FFFF, 0 0 5px #00FFFF;
  }
  50% {
    box-shadow: 0 0 10px #00FFFF, 0 0 4px #00FFFF, 0 0 6px #00FFFF, 0 0 8px #00FFFF;
  }
  100% {
    box-shadow: 0 0 5px #00FFFF, 0 0 2px #00FFFF, 0 0 3px #00FFFF, 0 0 5px #00FFFF;
  }
`;


// Custom color palette
const customPalette = {
  primary: {
    50: '#E3F2FD', 69: '#00C000', 70: '#228B22', 71: '#E32227', 100: '#BBDEFB', 200: '#90CAF9', 300: '#64B5F6', 400: '#42A5F5',
    500: '#2196F3', 600: '#1E88E5', 700: '#1976D2', 800: '#1565C0', 900: '#0D47A1',
  },
  background: {
    body: '#0A0A0A', surface: '#1A1A1A', level1: '#222222', level2: '#2A2A2A', clearCart: 'FF0000',
  },
  text: { primary: '#FFFFFF', secondary: '#B0BEC5', crypto: '#FFFF00' },
  neutral: { outlinedBorder: '#303030' },
};

// Extended theme
export const theme = extendTheme({
  fontFamily: {
    body: "'TECHKR', sans-serif",
    display: "'HackerNoon', sans-serif",
  },
  colorSchemes: {
    light: { palette: customPalette },
    dark: { palette: customPalette },
  },
});

// Global styles
export const globalStyles = {
  body: {
    margin: 0,
    padding: 0,
    fontFamily: theme.fontFamily.body,
    backgroundColor: customPalette.background.body,
    color: customPalette.text.primary,
    fontSize: '16px',
    lineHeight: 1.5,
  },
};

// Component-specific styles
export const styles = {
  // Main container
  container: {
    py: 8,
    px: { xs: 2, sm: 4 },
    maxWidth: '1200px',
    margin: '0 auto',
  },
  // Page title
  pageTitle: {
    mb: 8,
    color: 'primary.100',
    textAlign: 'center',
    fontSize: { xs: '2.5rem', md: '3.5rem' },
    fontWeight: 'bold',
    fontFamily: theme.fontFamily.display,
    textShadow: '0 0 10px rgba(66,165,245,0.6)',
    letterSpacing: '0.05em',
  },
  // Empty cart container
  emptyCartContainer: {
    p: 6,
    textAlign: 'center',
    bgcolor: 'background.level1',
    borderRadius: 'lg',
    boxShadow: 'lg',
    animation: `${fadeIn} 0.5s ease-out`,
  },
  // Empty cart title
  emptyCartTitle: {
    mb: 4,
    color: 'primary.400',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  // Empty cart icon
  emptyCartIcon: {
    fontSize: 150,
    color: 'primary.300',
    mb: 4,
  },
  // Empty cart message
  emptyCartMessage: {
    mb: 6,
    color: 'text.secondary',
    fontSize: '1.5rem',
  },
  // Start shopping button
  startShoppingButton: {
    py: 2,
    px: 4,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    bgcolor: 'primary.600',
    color: 'white',
    borderRadius: '50px',
    transition: 'all 0.3s',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    '&:hover': {
      bgcolor: 'primary.500',
      transform: 'translateY(-4px) scale(1.05)',
      boxShadow: '0 10px 20px rgba(33,150,243,0.3)',
    },
  },
  // Cart item container
  cartItemContainer: {
    mb: 4,
    display: 'flex',
    overflow: 'hidden',
    borderRadius: 'lg',
    transition: 'all 0.3s',
    bgcolor: 'background.level1',
    border: '1px solid',
    borderColor: 'background.level2',
    animation: `${pulsateGlow} 3s infinite`,
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 20px rgba(0,255,255,0.2)',
    },
    height: '200px',
  },
  // Cart item image
  cartItemImage: {
    width: 200,
    borderRadius: 'sm',
    overflow: 'hidden',
  },
  // Cart item content
  cartItemContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    p: 3,
    justifyContent: 'space-between',
  },
  // Cart item title
  cartItemTitle: {
    fontWeight: 'bold',
    color: 'text.primary',
    fontSize: '1.5rem',
    mb: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  // Cart item variant
  cartItemVariant: {
    alignSelf: 'flex-start',
    mb: 2,
    bgcolor: 'background.level2',
    color: 'primary.400',
    fontSize: '0.9rem',
    py: 0.5,
    px: 1,
  },
  // Cart item options
  cartItemOptions: {
    mb: 1,
    color: 'text.primary',
    fontSize: '0.9rem',
  },
  // Cart item quantity
  cartItemQuantity: {
    color: 'text.primary',
    fontSize: '1rem',
  },
  // Cart item price
  cartItemPrice: {
    fontWeight: 'bold',
    color: 'text.primary',
    fontSize: '1.3rem',
  },
  // Delete button
  deleteButton: {
    '&:hover': {
      color: 'danger.400',
      transform: 'scale(1.1)',
    },
  },
  // Order summary container
  orderSummary: {
    p: 4,
    borderRadius: 'lg',
    bgcolor: 'background.level1',
    border: '1px solid',
    borderColor: 'background.level2',
    position: 'sticky',
    top: 20,
    animation: `${pulsateGlow} 3s infinite`,
    boxShadow: '0 0 20px rgba(0,255,255,0.1)',
  },
  // Order summary title
  orderSummaryTitle: {
    mb: 2,
    fontWeight: 'bold',
    color: 'text.primary',
    fontSize: '1.5rem',
  },
  // Order summary divider
  orderSummaryDivider: {
    my: 2,
    bgcolor: 'background.level2',
  },
  // Order summary item
  orderSummaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    mb: 1,
  },
  // Order summary label
  orderSummaryLabel: {
    color: 'text.primary',
    fontSize: '1.25rem',
  },
  // Order summary value
  orderSummaryValue: {
    color: 'text.primary',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  // Order summary total
  orderSummaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    mb: 2,
    fontWeight: 'bold',
  },
  // Order summary total label
  orderSummaryTotalLabel: {
    color: 'text.primary',
    fontSize: '1.25rem',
  },
  // Order summary total value
  orderSummaryTotalValue: {
    color: 'text.primary',
    fontSize: '1.2rem',
  },
  // Crypto prices container
  cryptoPricesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },
  // Crypto price item
  cryptoPriceItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  // Crypto price text
  cryptoPriceText: {
    color: 'text.primary',
    fontSize: '1.5rem',
  },
  // Checkout button
  checkoutButton: {
    py: 2,
    px: 4,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    bgcolor: 'primary.69',
    color: 'white',
    borderRadius: '50px',
    transition: 'all 0.3s',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    '&:hover': {
      bgcolor: 'primary.70',
      transform: 'translateY(-4px) scale(1.05)',
    },
  },
  // Clear cart button
  clearCartButton: {
    py: 2,
    px: 4,
    fontSize: '1.1rem',
    color: 'text.secondary',
    borderColor: 'primary.71',
    borderRadius: '50px',
    transition: 'all 0.3s',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    '&:hover': {
      bgcolor: 'primary.71',
      borderColor: 'primary.71',
      color: 'primary.100',
      transform: 'translateY(-4px)',
    },
  },
}

// Type for the custom theme
export type CustomTheme = Theme & {
  fontFamily: {
    body: string;
    display: string;
  };
};
```


## File: /root/main/work/Phones/PhantomPhones/src/app/cart/page.tsx

### Content
```tsx
// src/app/cart/page.tsx

"use client";
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useCart } from '../../contexts/CartContext';
import { useExchangeRates } from '../../contexts/ExchangeRateContext';
import { useCurrency } from '../../contexts/CurrencyContext';
import {
  CssVarsProvider,
  useColorScheme,
  Typography,
  Box,
  Container,
  Grid,
  AspectRatio,
  IconButton,
  Button,
  Divider,
  Sheet,
  Chip,
} from '@mui/joy';
import Link from 'next/link';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { CartItem, Option } from '../../types';
import { theme, styles, CustomTheme } from './CartPageStyles';

const CartContent = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const { exchangeRates } = useExchangeRates();
  const { selectedCurrency, exchangeRates: currencyExchangeRates } = useCurrency();
  const currencyRate = currencyExchangeRates[selectedCurrency] || 1;

  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode('dark');
  }, [setMode]);

  if (cartItems.length === 0) {
    return (
      <Sheet variant="outlined" sx={styles.emptyCartContainer}>
        <Typography level="h2" sx={styles.emptyCartTitle}>
          Your Cart is Empty
        </Typography>
        <ShoppingCartIcon sx={styles.emptyCartIcon} />
        <Typography level="body-lg" sx={styles.emptyCartMessage}>
          Looks like you haven't added any items to your cart yet.
        </Typography>
        <Link href="/products" passHref>
          <Button
            variant="solid"
            color="primary"
            size="lg"
            startDecorator={<ShoppingCartIcon />}
            sx={styles.startShoppingButton}
          >
            Start Shopping
          </Button>
        </Link>
      </Sheet>
    );
  }

  const totalPrice = cartItems.reduce((total, item: CartItem) => {
    const optionsPrice = item.options?.reduce((sum: number, option: Option) => sum + option.price, 0) || 0;
    const variantPrice = item.variant?.price ?? item.product.price ?? 0;
    return total + (variantPrice + optionsPrice) * item.quantity;
  }, 0);

  const totalPriceInSelectedCurrency = (totalPrice * currencyRate).toFixed(2);

  const pricesInCrypto = {
    BTC: exchangeRates.BTC ? (totalPrice / exchangeRates.BTC).toFixed(6) : 'Loading...',
    ETH: exchangeRates.ETH ? (totalPrice / exchangeRates.ETH).toFixed(6) : 'Loading...',
    LTC: exchangeRates.LTC ? (totalPrice / exchangeRates.LTC).toFixed(6) : 'Loading...',
    XMR: exchangeRates.XMR ? (totalPrice / exchangeRates.XMR).toFixed(6) : 'Loading...',
  };

  return (
    <>
    <Head>
      <title>Your Cart | Phantom Phones</title>
      <meta
        name="description"
        content="Review your selection of encrypted mobiles and anonymous eSIMs before proceeding to checkout at Phantom Phones."
      />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://phantomphones.xyz/cart" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Grid container spacing={4}>
      <Grid xs={12} md={8}>
        <TransitionGroup>
          {cartItems.map((item: CartItem, index: number) => (
            <CSSTransition key={index} timeout={500} classNames="fade">
              <Sheet variant="outlined" sx={styles.cartItemContainer}>
                <AspectRatio ratio="1" sx={styles.cartItemImage}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </AspectRatio>
                <Box sx={styles.cartItemContent}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography level="title-lg" sx={styles.cartItemTitle}>
                      {item.product.name}
                    </Typography>
                    <IconButton
                      variant="plain"
                      color="neutral"
                      size="sm"
                      onClick={() => removeFromCart(item)}
                      sx={styles.deleteButton}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  {item.variant && (
                    <Chip
                      variant="soft"
                      color="primary"
                      size="sm"
                      sx={styles.cartItemVariant}
                    >
                      {item.variant.name}
                    </Chip>
                  )}
                  {item.options && item.options.length > 0 && (
                    <Typography level="body-sm" sx={styles.cartItemOptions}>
                      Options: {item.options.map((option: Option) => option.name).join(', ')}
                    </Typography>
                  )}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                    <Typography level="body-sm" sx={styles.cartItemQuantity}>
                      Quantity: {item.quantity}
                    </Typography>
                    <Typography level="title-sm" sx={styles.cartItemPrice}>
                      {selectedCurrency}{' '}
                      {(
                        (item.variant?.price ?? item.product.price ?? 0) +
                        (item.options?.reduce(
                          (sum: number, option: Option) => sum + option.price,
                          0
                        ) || 0)
                      ).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
              </Sheet>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Grid>
      <Grid xs={12} md={4}>
        <Sheet variant="outlined" sx={styles.orderSummary}>
          <Typography level="title-lg" sx={styles.orderSummaryTitle}>
            Order Summary
          </Typography>
          <Divider sx={styles.orderSummaryDivider} />
          <Box sx={{ mb: 2 }}>
            <Box sx={styles.orderSummaryItem}>
              <Typography level="body-md" sx={styles.orderSummaryLabel}>Items:</Typography>
              <Typography level="body-md" sx={styles.orderSummaryValue}>{cartItems.reduce((total, item) => total + item.quantity, 0)}</Typography>
            </Box>
            <Box sx={styles.orderSummaryTotal}>
              <Typography level="title-md" sx={styles.orderSummaryTotalLabel}>Total:</Typography>
              <Typography level="title-md" sx={styles.orderSummaryTotalValue}>
                {selectedCurrency} {totalPriceInSelectedCurrency}
              </Typography>
            </Box>
            <Typography level="body-md" sx={styles.orderSummaryLabel}>
              Equivalent Prices:
            </Typography>
            {exchangeRates.BTC && exchangeRates.ETH && exchangeRates.LTC && exchangeRates.XMR ? (
              <Box sx={styles.cryptoPricesContainer}>
                {[
                  { name: 'BTC', value: pricesInCrypto.BTC, logo: '/images/bitcoin.webp' },
                  { name: 'ETH', value: pricesInCrypto.ETH, logo: '/images/ethereum.webp' },
                  { name: 'LTC', value: pricesInCrypto.LTC, logo: '/images/litecoin.webp' },
                  { name: 'XMR', value: pricesInCrypto.XMR, logo: '/images/monero.webp' },
                ].map((coin, index) => (
                  <Box key={index} sx={styles.cryptoPriceItem}>
                    <Image src={coin.logo} alt={coin.name} width={24} height={24} />
                    <Typography level="body-sm" sx={styles.cryptoPriceText}>
                      {coin.value} {coin.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            ) : (
              <Typography level="body-sm" sx={styles.cryptoPriceText}>Loading crypto prices...</Typography>
            )}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Link href="/checkout" passHref>
              <Button
                variant="solid"
                color="primary"
                size="lg"
                fullWidth
                sx={styles.checkoutButton}
              >
                Proceed to Checkout
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="neutral"
              onClick={clearCart}
              fullWidth
              sx={styles.clearCartButton}
            >
              Clear Cart
            </Button>
          </Box>
        </Sheet>
      </Grid>
    </Grid>
    </>
  );
};

const CartPage = () => {
  return (
    <CssVarsProvider
      theme={theme as CustomTheme}
      defaultMode="dark"
      disableTransitionOnChange
      colorSchemeStorageKey="cart-color-scheme"
      modeStorageKey="cart-mode"
    >
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.body',
          color: 'text.primary',
        }}
      >
        <Container sx={styles.container}>
          <Typography level="h2" sx={styles.pageTitle}>
            Your Shopping Cart
          </Typography>
          <CartContent />
        </Container>
      </Box>
    </CssVarsProvider>
  );
};

export default CartPage;

```


## File: /root/main/work/Phones/PhantomPhones/src/app/contact/page.tsx

### Content
```tsx
"use client";
import React from 'react';
import {
  Typography, Paper, TextField, Button, Grid, Snackbar
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const ContactPage = () => {
  const { control, handleSubmit, reset } = useForm();
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setSnackbarOpen(true);
    reset();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: '600px', margin: 'auto' }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField label="Name" fullWidth required {...field} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField label="Email" fullWidth required {...field} />}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({ field }) => <TextField label="Message" fullWidth required multiline rows={4} {...field} />}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message="Message sent successfully"
        />
      </Paper>
    </div>
  );
};

export default ContactPage;

```


## File: /root/main/work/Phones/PhantomPhones/src/app/favicon.ico

### Content
[Binary ICO file]


## File: /root/main/work/Phones/PhantomPhones/src/app/fonts/GeistMonoVF.woff

### Content
[Binary WOFF file]


## File: /root/main/work/Phones/PhantomPhones/src/app/fonts/GeistVF.woff

### Content
[Binary WOFF file]


## File: /root/main/work/Phones/PhantomPhones/src/app/globals.css

### Content
```css
/* globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'TECHKR';
  src: url('/fonts/Atari.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'HackerNoon';
  src: url('/fonts/HackerNoonV2-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

:root {
  --background: #171717;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: 'TECHKR', Arial, Helvetica, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'HackerNoon', Arial, Helvetica, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```


## File: /root/main/work/Phones/PhantomPhones/src/app/layout.tsx

### Content
```tsx
// src/app/layout.tsx

import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Providers from '../components/Providers';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Phantom Phones',
  description: 'Your one-stop solution for ultimate privacy and security.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch crypto exchange rates server-side
  const cryptoRes = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,monero&vs_currencies=usd',
    { next: { revalidate: 30 } } // Revalidate every 30 seconds
  );
  const cryptoData = await cryptoRes.json();

  const cryptoExchangeRates = {
    BTC: cryptoData.bitcoin.usd,
    ETH: cryptoData.ethereum.usd,
    LTC: cryptoData.litecoin.usd,
    XMR: cryptoData.monero.usd,
  };

  // Fetch currency exchange rates server-side
  const currencyRes = await fetch(
    'https://api.exchangerate-api.com/v4/latest/USD',
    { next: { revalidate: 3600 } } // Revalidate every hour
  );
  const currencyData = await currencyRes.json();

  const currencyExchangeRates = currencyData.rates;

  return (
    <html lang="en">
      <body>
        <Providers
          cryptoExchangeRates={cryptoExchangeRates}
          currencyExchangeRates={currencyExchangeRates}
        >
          <div className="layout-container">
            <Navbar />
            <main className="content-container">{children}</main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
```


## File: /root/main/work/Phones/PhantomPhones/src/app/pacmanGame/pacman.tsx

### Content
```tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Position {
  x: number;
  y: number;
}

interface Character extends Position {
  direction: 'up' | 'down' | 'left' | 'right';
  tween: gsap.core.Tween | null;
}

const CELL_SIZE = 20;
const BASE_SPEED = 5; // Cells per frame
const POWER_MODE_DURATION = 15500; // 15 seconds of power mode
const POWER_MODE_SPEED_MULTIPLIER = 1.17;
const FLASH_DURATION = 500; // 0.5 seconds for each color

const maze = [
  "############################",
  "#............##............#",
  "#.####.#####.##.#####.####.#",
  "#o####.#####.##.#####.####o#",
  "#..........................#",
  "#.####.##.########.##.####.#",
  "#......##....##....##......#",
  "######.##### ## #####.######",
  "     #.##          ##.#     ",
  "     #.## ###--### ##.#     ",
  "######.## #      # ##.######",
  "      .   #      #   .      ",
  "######.## #      # ##.######",
  "     #.## ######## ##.#     ",
  "     #.##          ##.#     ",
  "######.## ######## ##.######",
  "#............##............#",
  "#.####.#####.##.#####.####.#",
  "#o..##................##..o#",
  "###.##.##.########.##.##.###",
  "#......##....##....##......#",
  "#.##########.##.##########.#",
  "#..........................#",
  "############################"
];

interface EmojiphantomGameProps {
  phantomStartPosition?: Position;
}

const EmojiphantomGame: React.FC<EmojiphantomGameProps> = ({ phantomStartPosition = { x: 1, y: 1 } }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phantomRef = useRef<Character>({ ...phantomStartPosition, direction: 'right', tween: null });
  const ghostsRef = useRef<Character[]>([]);
  const dotsRef = useRef<Position[]>([]);
  const powerPelletsRef = useRef<Position[]>([]);
  const powerModeRef = useRef<boolean>(false);
  const powerModeTimerRef = useRef<number | null>(null);
  const scoreRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);
  const flashIntervalRef = useRef<number | null>(null);
  const gridColorRef = useRef<string>('blue');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = maze[0].length * CELL_SIZE;
    canvas.height = maze.length * CELL_SIZE;

    function initGame() {
      dotsRef.current = [];
      powerPelletsRef.current = [];
      for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
          if (maze[y][x] === '.') {
            dotsRef.current.push({ x, y });
          } else if (maze[y][x] === 'o') {
            powerPelletsRef.current.push({ x, y });
          }
        }
      }

      phantomRef.current = { ...phantomStartPosition, direction: 'right', tween: null };
      ghostsRef.current = [
        { x: 10, y: 1, direction: 'right', tween: null },    // 👮 Police Officer
        { x: 20, y: 12, direction: 'left', tween: null },    // 🕵️ Detective
        { x: 1, y: 22, direction: 'up', tween: null },      // 🏛️ Classical Building
        { x: 26, y: 22, direction: 'up', tween: null },     // 🐷 Pig Face
        { x: 13, y: 11, direction: 'down', tween: null }    // 🕴️ Person in Suit Levitating
      ];

      powerModeRef.current = false;
      scoreRef.current = 0;
      gridColorRef.current = 'blue';
    }

    function drawMaze() {
      if (!ctx) return;
      ctx.fillStyle = gridColorRef.current;
      for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
          if (maze[y][x] === '#') {
            ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
          }
        }
      }
    }

    function drawDots() {
      if (!ctx) return;
      ctx.fillStyle = 'white';
      dotsRef.current.forEach(dot => {
        ctx.beginPath();
        ctx.arc((dot.x + 0.5) * CELL_SIZE, (dot.y + 0.5) * CELL_SIZE, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawPowerPellets() {
      if (!ctx) return;
      ctx.font = `${CELL_SIZE * 0.8}px Arial`;
      powerPelletsRef.current.forEach(pellet => {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('📱', (pellet.x + 0.5) * CELL_SIZE, (pellet.y + 0.5) * CELL_SIZE);
      });
    }

    function drawCharacter(emoji: string, x: number, y: number) {
      if (!ctx) return;
      ctx.font = `${CELL_SIZE * 0.8}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        emoji,
        (x + 0.5) * CELL_SIZE,
        (y + 0.5) * CELL_SIZE
      );
    }

    function drawPhantom() {
      drawCharacter('👻', phantomRef.current.x, phantomRef.current.y);
    }

    function drawGhosts() {
      const theSnoopers = ['👮', '🕵️', '🏛️', '🐷', '🕴️'];
      ghostsRef.current.forEach((ghost, index) => {
        drawCharacter(theSnoopers[index], ghost.x, ghost.y);
      });
    }

    function getNextPosition(pos: Position, direction: 'up' | 'down' | 'left' | 'right'): Position {
      switch (direction) {
        case 'up':
          return { x: pos.x, y: pos.y - 1 };
        case 'down':
          return { x: pos.x, y: pos.y + 1 };
        case 'left':
          return { x: pos.x - 1, y: pos.y };
        case 'right':
          return { x: pos.x + 1, y: pos.y };
      }
    }

    function isValidMove(x: number, y: number): boolean {
      const intX = Math.floor(x);
      const intY = Math.floor(y);
      if (intY < 0 || intY >= maze.length || intX < 0 || intX >= maze[0].length) return false;
      return maze[intY][intX] !== '#';
    }

    function moveCharacter(character: Character, speed: number) {
      if (character.tween) character.tween.kill();

      const directions: ('up' | 'down' | 'left' | 'right')[] = ['up', 'down', 'left', 'right'];
      let bestDirection = character.direction;
      let bestScore = -Infinity;

      directions.forEach(direction => {
        const nextPos = getNextPosition(character, direction);
        if (isValidMove(nextPos.x, nextPos.y)) {
          let score = 0;
          if (character === phantomRef.current) {
            if (powerPelletsRef.current.some(pellet => pellet.x === nextPos.x && pellet.y === nextPos.y)) {
              score += 100;
            }
            if (dotsRef.current.some(dot => dot.x === nextPos.x && dot.y === nextPos.y)) {
              score += 10;
            }
            ghostsRef.current.forEach(ghost => {
              const distance = Math.abs(nextPos.x - ghost.x) + Math.abs(nextPos.y - ghost.y);
              score += powerModeRef.current ? (20 / distance) : (-20 / distance);
            });
          } else {
            const distance = Math.abs(nextPos.x - phantomRef.current.x) + Math.abs(nextPos.y - phantomRef.current.y);
            score += powerModeRef.current ? (-10 / distance) : (10 / distance);
          }
          if (direction === character.direction) score += 1;
          if (score > bestScore) {
            bestScore = score;
            bestDirection = direction;
          }
        }
      });

      character.direction = bestDirection;
      const nextPos = getNextPosition(character, character.direction);

      if (isValidMove(nextPos.x, nextPos.y)) {
        character.tween = gsap.to(character, {
          x: nextPos.x,
          y: nextPos.y,
          duration: 1 / (speed * (powerModeRef.current && character === phantomRef.current ? POWER_MODE_SPEED_MULTIPLIER : 1)),
          ease: 'linear',
          onComplete: () => moveCharacter(character, speed)
        });
      } else {
        moveCharacter(character, speed);
      }
    }

    function checkCollisions() {
      const phantomX = Math.floor(phantomRef.current.x);
      const phantomY = Math.floor(phantomRef.current.y);

      ghostsRef.current = ghostsRef.current.filter((ghost) => {
        const ghostX = Math.floor(ghost.x);
        const ghostY = Math.floor(ghost.y);

        if (ghostX === phantomX && ghostY === phantomY) {
          if (powerModeRef.current) {
            if (ghost.tween) ghost.tween.kill();
            scoreRef.current += 200;
            return false; // Remove the ghost
          } else {
            initGame(); // Restart the game if phantom is caught
            return true;
          }
        }
        return true;
      });
    }

    function checkPhantomItems() {
      const phantomX = Math.floor(phantomRef.current.x);
      const phantomY = Math.floor(phantomRef.current.y);

      const dotIndex = dotsRef.current.findIndex(dot => dot.x === phantomX && dot.y === phantomY);
      if (dotIndex !== -1) {
        dotsRef.current.splice(dotIndex, 1);
        scoreRef.current += 10;
      }

      const pelletIndex = powerPelletsRef.current.findIndex(pellet => pellet.x === phantomX && pellet.y === phantomY);
      if (pelletIndex !== -1) {
        powerPelletsRef.current.splice(pelletIndex, 1);
        activatePowerMode();
        scoreRef.current += 50;
      }
    }

    function activatePowerMode() {
      if (powerModeRef.current) {
        // If already in power mode, just reset the timer
        if (powerModeTimerRef.current) clearTimeout(powerModeTimerRef.current);
        if (flashIntervalRef.current) clearInterval(flashIntervalRef.current);
      } else {
        powerModeRef.current = true;
        // Increase phantom speed
        if (phantomRef.current.tween) phantomRef.current.tween.timeScale(POWER_MODE_SPEED_MULTIPLIER);
      }
      
      // Set or reset the power mode timer
      powerModeTimerRef.current = window.setTimeout(() => {
        powerModeRef.current = false;
        // Reset phantom speed
        if (phantomRef.current.tween) phantomRef.current.tween.timeScale(1);
        if (flashIntervalRef.current) clearInterval(flashIntervalRef.current);
        gridColorRef.current = 'blue'; // Reset grid color
      }, POWER_MODE_DURATION);

      // Start flashing effect
      let isRed = false;
      flashIntervalRef.current = window.setInterval(() => {
        gridColorRef.current = isRed ? 'red' : 'cyan';
        isRed = !isRed;
      }, FLASH_DURATION);
    }

    function gameLoop() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawMaze();
      drawDots();
      drawPowerPellets();
      drawPhantom();
      drawGhosts();

      checkPhantomItems();
      checkCollisions();

      if (ghostsRef.current.length === 0 && powerPelletsRef.current.length === 0 && dotsRef.current.length === 0) {
        initGame(); // Restart the game if phantom wins
      }

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    }

    function startGame() {
      initGame();
      moveCharacter(phantomRef.current, BASE_SPEED);
      ghostsRef.current.forEach(ghost => moveCharacter(ghost, BASE_SPEED));
      gameLoop();
    }

    startGame();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (powerModeTimerRef.current) clearTimeout(powerModeTimerRef.current);
      if (flashIntervalRef.current) clearInterval(flashIntervalRef.current);
      [phantomRef.current, ...ghostsRef.current].forEach(character => {
        if (character.tween) character.tween.kill();
      });
    };
  }, [phantomStartPosition]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '100%',
        maxHeight: '100%',
        opacity: 0.7,
        zIndex: 0,
      }}
    />
  );
};

export default EmojiphantomGame;
```


## File: /root/main/work/Phones/PhantomPhones/src/app/page.tsx

### Content
```tsx
// src/app/page.tsx

"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '../../data/products.json';
import {
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Box,
  Button,
  IconButton,
  Stack,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tabs,
  Tab,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  Grid,
} from '@mui/material';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

import GlowingButton from '../components/GlowingButton';
import Carousel from 'react-material-ui-carousel';
import {
  PrivacyTip as PrivacyTipIcon,
  Security as SecurityIcon,
  Shield as ShieldIcon,
  GppGood as GppGoodIcon,
  Lock as LockIcon,
  QuestionAnswer as QuestionAnswerIcon,
  MailOutline as MailOutlineIcon,
  ExpandMore as ExpandMoreIcon,
  Launch as LaunchIcon,
  Build as BuildIcon,
  TrendingUp as TrendingUpIcon,
  Telegram as TelegramIcon,
  Chat as ChatIcon,
  Message as MessageIcon,
} from '@mui/icons-material';
import Fade from '@mui/material/Fade';
import SubheaderScramble from '../theme/gsap/scramble/subheaderScramble';
import { useCurrency } from '../contexts/CurrencyContext';

interface Feature {
  title: string;
  description: string;
  icon?: JSX.Element;
  image?: string;
  chipLabel: string;
  chipColor:
    | 'default'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
    | 'secondary'
    | 'primary';
  priority: boolean;
}

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      borderColor: 'cyan',
      borderWidth: 0.5,
      borderStyle: 'solid',
      backgroundColor: 'grey.900',
      color: '#fff',
      ':hover': {
        boxShadow: 6,
        transform: 'scale(1.05)',
        transition: '0.7s',
      },
    }}
  >
    <Box sx={{ position: 'relative', width: '100%', paddingTop: '60%' }}>
      {feature.image ? (
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
          priority={feature.priority}
          quality={75}
        />
      ) : (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'grey.700',
          }}
        >
          {feature.icon}
        </Box>
      )}
    </Box>
    <CardContent sx={{ flexGrow: 1, textAlign: 'center', py: 3 }}>
      <Typography gutterBottom variant="h5" component="h3" sx={{ mb: 2 }}>
        {feature.title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {feature.description}
      </Typography>
      <Chip
        label={feature.chipLabel}
        color={feature.chipColor}
        sx={{ mt: 2, fontSize: '1rem', height: '32px' }}
      />
    </CardContent>
  </Card>
);

const HomePage: React.FC = () => {
  const products = productsData.slice(0, 5); // Display first 5 products

  const { selectedCurrency, exchangeRates: currencyExchangeRates } = useCurrency();
  const currencyRate = currencyExchangeRates[selectedCurrency] || 1;

  // State for Newsletter Dialog
  const [openDialog, setOpenDialog] = useState(false);

  // State for Tabs in "Why Choose Us" Section
  const [tabValue, setTabValue] = useState(0);

  // Handle Tabs Change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Handle Newsletter Dialog
  const handleNewsletterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  // Define Features with Correct Types
  const features: Feature[] = [
    {
      title: 'Encrypted Communications',
      description:
        'Secure your calls and messages with end-to-end encryption technologies. Our advanced encryption ensures that your communications remain confidential, protecting you from interception and eavesdropping.',
      image: '/images/encrypted.webp',
      chipLabel: 'Secure',
      chipColor: 'success',
      priority: true,
    },
    {
      title: 'Secure Devices',
      description:
        'Devices equipped with hardened operating systems resistant to threats. We use the latest security protocols to guard against malware, phishing, and other cyber attacks.',
      image: '/images/strong.webp',
      chipLabel: 'Reliable',
      chipColor: 'info',
      priority: true,
    },
    {
      title: 'Anonymous Connectivity',
      description:
        'Stay anonymous online with our eSIMs and VPN services. Protect your identity and location from trackers and data collectors.',
      image: '/images/incognito.webp',
      chipLabel: 'Anonymous',
      chipColor: 'warning',
      priority: true,
    },
    {
      title: 'Physical Security Measures',
      description:
        'Options like camera and microphone removal prevent physical surveillance. Ensure that your device cannot be used to spy on you.',
      image: '/images/bouncer.webp',
      chipLabel: 'Protected',
      chipColor: 'warning',
      priority: false,
    },
    {
      title: 'Regular Updates',
      description:
        'We regularly update our products to address new threats and enhance security. Stay ahead of potential vulnerabilities with our proactive approach.',
      image: '/images/updates.webp',
      chipLabel: 'Up-to-Date',
      chipColor: 'secondary',
      priority: false,
    },
    {
      title: '24/7 Support',
      description:
        'Our dedicated support team is available around the clock to assist you. Get immediate help whenever you need it.',
      image: '/images/support.webp',
      chipLabel: 'Support',
      chipColor: 'primary',
      priority: false,
    },
  ];

  return (
    <>
      <Head>
        <title>Phantom Phones - Encrypted Mobiles & Anonymous eSIMs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Phantom Phones offers encrypted mobiles, anonymous eSIMs, and untraceable devices to protect your privacy and ensure secure communications."
        />
        <meta
          name="keywords"
          content="Phantom Phones, Encrypted Mobiles, Anonymous eSIMs, Untraceable Devices, Secure Communications, Privacy Phones, GrapheneOS"
        />
        <meta
          property="og:title"
          content="Phantom Phones - Encrypted Mobiles & Anonymous eSIMs"
        />
        <meta
          property="og:description"
          content="Secure your communications and protect your data with Phantom Phones. Explore our range of encrypted mobiles, anonymous eSIMs, and untraceable devices."
        />
        <meta
          property="og:image"
          content="https://phantomphones.xyz/images/og/og-image-homepage.jpg"
        />
        <meta property="og:url" content="https://phantomphones.xyz" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Phantom Phones - Encrypted Mobiles & Anonymous eSIMs"
        />
        <meta
          name="twitter:description"
          content="Secure your communications and protect your data with Phantom Phones. Explore our range of encrypted mobiles, anonymous eSIMs, and untraceable devices."
        />
        <meta
          name="twitter:image"
          content="https://phantomphones.xyz/images/og/og-image-homepage.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://phantomphones.xyz" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://phantomphones.xyz",
              logo: "https://phantomphones.xyz/images/logo.png",
              name: "Phantom Phones",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-555-5555",
                contactType: "Customer Support",
                email: "support@phantomphones.xyz",
                areaServed: "Worldwide",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://twitter.com/phantomphones",
                "https://facebook.com/phantomphones",
                "https://www.linkedin.com/company/phantomphones",
              ],
            }),
          }}
        />
      </Head>
      <Box sx={{ overflowX: 'hidden', bgcolor: 'grey.900', color: '#fff' }}>
        {/* Hero Section */}
        <Paper
          elevation={3}
          sx={{
            position: 'relative',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: { xs: 400, md: 500 },
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
          <Container maxWidth="md">
            <Box
              sx={{
                position: 'relative',
                textAlign: 'center',
                zIndex: 2,
              }}
            >
              <Fade in timeout={1000}>
                <Typography
                  component="h1"
                  variant="h2"
                  color="primary"
                  gutterBottom
                >
                  Phantom Phones
                </Typography>
              </Fade>
              <Fade in timeout={2000}>
                <Typography variant="h5" color="inherit" paragraph>
                  Your one-stop solution for <strong>encrypted mobiles</strong>,{' '}
                  <strong>anonymous eSIMs</strong>, and{' '}
                  <strong>untraceable devices</strong>.
                </Typography>
              </Fade>
              <Fade in timeout={3000}>
                <Stack
                  sx={{ pt: 4 }}
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  justifyContent="center"
                >
                  <Link href="/products" passHref legacyBehavior>
                    <GlowingButton
                      variant="contained"
                      sx={{ bgcolor: 'cyan' }}
                      aria-label="Explore Products"
                    >
                      Explore Products
                    </GlowingButton>
                  </Link>
                  <Link href="/about" passHref legacyBehavior>
                    <GlowingButton
                      variant="contained"
                      sx={{ bgcolor: 'cyan' }}
                      aria-label="Learn More About Phantom Phones"
                    >
                      Learn More About Phantom Phones
                    </GlowingButton>
                  </Link>
                </Stack>
              </Fade>
              {/* Social Media Icons */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ mt: 3 }}
              >
                <IconButton
                  color="inherit"
                  href="https://telegram.org"
                  target="_blank"
                  aria-label="Telegram"
                >
                  <TelegramIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://matrix.org"
                  target="_blank"
                  aria-label="Matrix"
                >
                  <ChatIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://signal.org"
                  target="_blank"
                  aria-label="Signal"
                >
                  <MessageIcon />
                </IconButton>
              </Stack>
            </Box>
          </Container>
        </Paper>

        {/* Core Features Section */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom component="h2">
            Our Core Features
          </Typography>
          <Typography variant="subtitle1" align="center">
            <SubheaderScramble>
              We offer a suite of products and services designed to protect your
              privacy and security.
            </SubheaderScramble>
          </Typography>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard feature={feature} />
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Featured Products */}
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom component="h2">
            Featured Products
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            sx={{ mb: 4 }}
          >
            <SubheaderScramble>
              Discover our range of cutting-edge devices designed to keep your
              data secure.
            </SubheaderScramble>
          </Typography>
          <Carousel
            navButtonsAlwaysVisible
            animation="slide"
            indicators={false}
            interval={5000}
            sx={{
              '& .MuiPaper-root': {
                height: 610,
                width: '100%',
                maxWidth: 700,
                margin: '0 auto',
              },
            }}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  p: 2,
                }}
              >
                <Card
                  sx={{
                    backgroundColor: 'grey.900',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 300,
                      backgroundColor: 'grey.900',
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{
                        objectFit: 'contain',
                        padding: '16px',
                      }}
                      sizes="(max-width: 700px) 100vw, 700px"
                      priority
                      quality={75}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 180,
                      overflow: 'hidden',
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h3"
                      noWrap
                      sx={{ color: 'cyan' }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        mb: 2,
                      }}
                    >
                      {product.description}
                    </Typography>
                    <Box sx={{ mt: 'auto' }}>
                      <Typography variant="h6" color="text.primary">
                        {selectedCurrency}
                        {((product.price ?? 0) * currencyRate).toFixed(2)}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={product.rating}
                        readOnly
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  </CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      p: 2,
                      mt: 'auto',
                    }}
                  >
                    <Link href={`/products/${product.slug}`} passHref legacyBehavior>
                      <Button variant="outlined" color="primary">
                        Learn More
                      </Button>
                    </Link>
                    <Link href={`/products/${product.slug}`} passHref legacyBehavior>
                      <Button variant="contained" color="primary">
                        Configure &amp; Buy
                      </Button>
                    </Link>
                  </Box>
                </Card>
              </Box>
            ))}
          </Carousel>
        </Container>

        {/* Major Security Breaches Section */}
        <Box sx={{ py: 8, bgcolor: 'grey.900' }}>
          <Container maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom component="h2">
              Why Privacy Matters: Major Security Breaches
            </Typography>
            <Typography variant="body1" paragraph>
              In recent years, numerous security breaches have exposed the
              vulnerabilities in mobile devices and the dire need for enhanced
              privacy measures. Here are some significant incidents:
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'The Snowden Leaks',
                  description:
                    'In 2013, Edward Snowden revealed global surveillance programs run by the NSA and other intelligence agencies, highlighting the extent of government intrusion into personal communications.',
                  icon: <LockIcon sx={{ fontSize: 40, color: 'cyan' }} />,
                },
                {
                  title: 'Pegasus Spyware',
                  description:
                    'Discovered in 2016, Pegasus is a sophisticated spyware developed by NSO Group that can infiltrate smartphones and access messages, emails, and cameras without user knowledge.',
                  icon: <SecurityIcon sx={{ fontSize: 40, color: 'cyan' }} />,
                },
                {
                  title: 'Ross Ulbricht Case',
                  description:
                    'Ross Ulbricht, creator of the Silk Road marketplace, was arrested in 2013. The case raised questions about digital privacy, surveillance tactics, and the extent of government monitoring.',
                  icon: <PrivacyTipIcon sx={{ fontSize: 40, color: 'cyan' }} />,
                },
                {
                  title: 'WhatsApp Vulnerabilities',
                  description:
                    'In 2019, vulnerabilities in WhatsApp allowed attackers to install spyware via missed calls, compromising user data and communications.',
                  icon: <ShieldIcon sx={{ fontSize: 40, color: 'cyan' }} />,
                },
              ].map((breach, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: 'grey.900',
                      color: '#fff',
                      ':hover': {
                        boxShadow: 6,
                        transform: 'scale(1.02)',
                        transition: '0.3s',
                      },
                    }}
                  >
                    <ListItemIcon>{breach.icon}</ListItemIcon>
                    <Box>
                      <Typography variant="h6" component="h3">
                        {breach.title}
                      </Typography>
                      <Typography variant="body2">{breach.description}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Typography variant="body1" paragraph sx={{ mt: 4 }}>
              These incidents underscore the importance of safeguarding your
              personal information. At Phantom Phones, we are dedicated to
              providing solutions that protect you from such threats.
            </Typography>
          </Container>
        </Box>

        {/* Our Journey - Timeline */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom component="h2">
              Our Journey
            </Typography>
            <Typography variant="h6" align="center">
              Our commitment to privacy has remained steadfast.
            </Typography>
            <Timeline position="alternate" sx={{ mt: 4 }}>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: 'cyan' }}>
                    <Avatar sx={{ bgcolor: 'cyan' }}>
                      <LaunchIcon />
                    </Avatar>
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{ p: 2, bgcolor: 'grey.900', color: '#fff' }}
                  >
                    <Typography variant="h6" component="h3">
                      Founded in 2010
                    </Typography>
                    <Typography>
                      Phantom Phones was established to address the growing need
                      for privacy.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: 'cyan' }}>
                    <Avatar sx={{ bgcolor: 'cyan' }}>
                      <BuildIcon />
                    </Avatar>
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{ p: 2, bgcolor: 'grey.900', color: '#fff' }}
                  >
                    <Typography variant="h6" component="h3">
                      2015 - Product Launch
                    </Typography>
                    <Typography>
                      Released our first encrypted communication device.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: 'cyan' }}>
                    <Avatar sx={{ bgcolor: 'cyan' }}>
                      <TrendingUpIcon />
                    </Avatar>
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{ p: 2, bgcolor: 'grey.900', color: '#fff' }}
                  >
                    <Typography variant="h6" component="h3">
                      Present Day
                    </Typography>
                    <Typography>
                      Serving thousands of customers worldwide, continually
                      innovating.
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Container>
        </Box>

        {/* How Our Products Help - Stepper with LinearProgress */}
        <Box sx={{ py: 8, bgcolor: 'grey.900' }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom component="h2">
              How Our Products Help
            </Typography>
            <Typography variant="h6" align="center">
              We provide comprehensive solutions to protect your digital life.
            </Typography>
            <Stepper activeStep={-1} orientation="vertical" sx={{ mt: 4 }}>
              {[
                {
                  label: 'Assess Your Needs',
                  description:
                    'We evaluate your privacy requirements to recommend suitable products. Our experts work with you to understand your unique situation.',
                },
                {
                  label: 'Provide Customized Solutions',
                  description:
                    'Tailor our products to fit your specific privacy and security needs. From device configuration to software installation, we handle it all.',
                },
                {
                  label: 'Offer Ongoing Support',
                  description:
                    'Provide continuous updates and support to ensure long-term security. Stay protected with the latest security patches and advice.',
                },
              ].map((step, index) => (
                <Step key={index}>
                  <StepLabel>
                    <Typography color="#fff">{step.label}</Typography>
                  </StepLabel>
                  <Typography sx={{ pl: 4 }}>{step.description}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={(index + 1) * 33}
                    sx={{ mt: 2 }}
                    aria-label={`Progress for step ${index + 1}`}
                  />
                </Step>
              ))}
            </Stepper>
          </Container>
        </Box>

        {/* Why Choose Us - Tabs */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom component="h2">
              Why Choose Phantom Phones
            </Typography>
            <Typography variant="h6" align="center">
              Our dedication to excellence sets us apart.
            </Typography>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              sx={{ mb: 4, mt: 4 }}
              textColor="inherit"
              indicatorColor="primary"
              aria-label="Why Choose Us Tabs"
            >
              <Tab label="Expertise" />
              <Tab label="Privacy" />
              <Tab label="Support" />
              <Tab label="Innovation" />
            </Tabs>
            {tabValue === 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Expertise in Cybersecurity
                </Typography>
                <Typography paragraph>
                  Our team comprises seasoned professionals with decades of
                  experience in cybersecurity, ensuring that our products are
                  built with the highest security standards. We stay ahead of
                  emerging threats by continuously researching and implementing
                  cutting-edge technologies.
                </Typography>
                <Typography paragraph>
                  We have collaborated with industry leaders and participated in
                  global cybersecurity conferences, contributing to the
                  advancement of privacy protection.
                </Typography>
              </Box>
            )}
            {tabValue === 1 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Commitment to Privacy
                </Typography>
                <Typography paragraph>
                  We adhere to strict privacy policies and do not collect
                  unnecessary personal information. Your trust is paramount to
                  us. Our products are designed with privacy by default,
                  minimizing data collection and maximizing user control.
                </Typography>
                <Typography paragraph>
                  We believe in transparency and openly share our practices and
                  policies with our customers.
                </Typography>
              </Box>
            )}
            {tabValue === 2 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Exceptional Customer Support
                </Typography>
                <Typography paragraph>
                  Our dedicated support team is available 24/7 to assist you
                  with setup, troubleshooting, and any questions you may have.
                  We offer personalized assistance to ensure you get the most
                  out of our products.
                </Typography>
                <Typography paragraph>
                  We also provide educational resources, including guides and
                  tutorials, to empower you with knowledge about digital
                  privacy.
                </Typography>
              </Box>
            )}
            {tabValue === 3 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Continuous Innovation
                </Typography>
                <Typography paragraph>
                  We are always at the forefront of technology, integrating the
                  latest advancements to keep you ahead in privacy and security.
                  Our research and development team is dedicated to finding new
                  ways to enhance your protection.
                </Typography>
                <Typography paragraph>
                  From implementing quantum-resistant encryption algorithms to
                  exploring AI-driven security measures, we never stop
                  innovating.
                </Typography>
              </Box>
            )}
          </Container>
        </Box>

        {/* Customer Testimonials */}
        <Box sx={{ py: 8, bgcolor: 'grey.900' }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom component="h2">
              What Our Customers Say
            </Typography>
            <Carousel
              navButtonsAlwaysVisible
              animation="slide"
              indicators={false}
              interval={8000}
              navButtonsProps={{
                style: {
                  backgroundColor: 'transparent',
                  color: 'white',
                },
              }}
              sx={{ mt: 4 }}
            >
              {[
                {
                  quote:
                    "Phantom Phones has completely changed how I approach digital security. Their devices are top-notch!",
                  name: 'John Doe',
                  title: 'Investigative Journalist',
                  avatar: '/images/incognito.webp',
                  rating: 5,
                },
                {
                  quote:
                    'As a business professional, I need to ensure my communications are secure. Phantom Phones provides the peace of mind I require.',
                  name: 'Jane Smith',
                  title: 'CEO, TechCorp',
                  avatar: '/images/incognito.webp',
                  rating: 5,
                },
                {
                  quote:
                    'Their customer support is exceptional. They helped me set up my device and answered all my questions.',
                  name: 'Alice Johnson',
                  title: 'Human Rights Activist',
                  avatar: '/images/incognito.webp',
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: 'center',
                    px: 4,
                    maxWidth: '900px',
                    mx: 'auto',
                    position: 'relative',
                    py: 4,
                    bgcolor: 'grey.1000',
                    borderRadius: 2,
                  }}
                >
                  <Avatar
                    sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                    alt={testimonial.name}
                    src={testimonial.avatar}
                  />
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                    "{testimonial.quote}"
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    - {testimonial.name}, {testimonial.title}
                  </Typography>
                </Box>
              ))}
            </Carousel>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom component="h2">
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" align="center">
              Find answers to common questions about our products and services.
            </Typography>
            <Box sx={{ mt: 4 }}>
              {[
                {
                  question: 'How do you ensure the privacy of your devices?',
                  answer:
                    'We implement advanced encryption and security protocols, and we do not collect unnecessary user data. Our devices are designed with privacy in mind from the ground up.',
                },
                {
                  question: 'Do you offer customer support?',
                  answer:
                    'Yes, our dedicated support team is available 24/7 to assist you with any issues. We are committed to providing exceptional service.',
                },
                {
                  question: 'Are your products legal to use?',
                  answer:
                    'Absolutely. Our products are designed to comply with international laws and regulations. We prioritize ethical practices in all our operations.',
                },
                {
                  question: 'Can I customize my device?',
                  answer:
                    'Yes, we offer customization options to meet your specific privacy and security needs. Contact our team to discuss your requirements.',
                },
                {
                  question: 'What payment methods do you accept?',
                  answer:
                    'We accept various payment methods, including credit cards, PayPal, and cryptocurrencies like Bitcoin for added anonymity.',
                },
              ].map((faq, index) => (
                <Accordion
                  key={index}
                  sx={{ backgroundColor: 'grey.900', color: '#fff' }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                    aria-controls={`faq-content-${index}`}
                    id={`faq-header-${index}`}
                  >
                    <Typography variant="h6" component="h3">
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Newsletter Signup */}
        <Box sx={{ py: 8, bgcolor: 'grey.900' }}>
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom component="h2">
              Stay Updated
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              component="p"
            >
              Sign up for our newsletter to receive the latest updates and
              offers.
            </Typography>
            <Box
              component="form"
              sx={{
                mt: 4,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleNewsletterSubmit}
            >
              <TextField
                label="Email Address"
                variant="outlined"
                required
                sx={{
                  mb: { xs: 2, sm: 0 },
                  mr: { sm: 2 },
                  bgcolor: '#fff',
                  borderRadius: 1,
                }}
                inputProps={{ 'aria-label': 'Email Address' }}
              />
              <Tooltip title="Subscribe to our newsletter">
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<MailOutlineIcon />}
                  type="submit"
                  sx={{ bgcolor: 'cyan', color: '#000' }}
                >
                  Subscribe
                </Button>
              </Tooltip>
            </Box>
            {/* Newsletter Dialog */}
            <Dialog
              open={openDialog}
              onClose={handleDialogClose}
              aria-labelledby="newsletter-dialog-title"
              aria-describedby="newsletter-dialog-description"
            >
              <DialogTitle id="newsletter-dialog-title">
                Subscription Confirmed
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="newsletter-dialog-description">
                  Thank you for subscribing to our newsletter!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose} autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Container>
        </Box>

        {/* Footer */}
        <Box sx={{ bgcolor: 'grey.900', p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom component="h2">
            Phantom Phones
          </Typography>
          <Divider sx={{ my: 2, bgcolor: 'grey.700' }} />
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            component="p"
          >
            Empowering Your Privacy in the Digital Age
          </Typography>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <List sx={{ display: 'flex', justifyContent: 'center' }}>
              <ListItem sx={{ width: 'auto' }}>
                <ListItemIcon>
                  <LockIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="/privacy-policy" passHref legacyBehavior>
                    <Button color="inherit">Privacy Policy</Button>
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ width: 'auto' }}>
                <ListItemIcon>
                  <GppGoodIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="/terms-of-service" passHref legacyBehavior>
                    <Button color="inherit">Terms of Service</Button>
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ width: 'auto' }}>
                <ListItemIcon>
                  <QuestionAnswerIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText>
                  <Link href="/contact" passHref legacyBehavior>
                    <Button color="inherit">Contact Us</Button>
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
            {/* Social Media Icons in Footer */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              sx={{ mt: 2 }}
            >
              <IconButton
                color="inherit"
                href="https://telegram.org"
                target="_blank"
                aria-label="Telegram"
              >
                <TelegramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://matrix.org"
                target="_blank"
                aria-label="Matrix"
              >
                <MessageIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://signal.org"
                target="_blank"
                aria-label="Signal"
              >
                <MessageIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;

```


## File: /root/main/work/Phones/PhantomPhones/src/app/products/[slug]/page.tsx

### Content
```tsx
// src/app/products/[slug]/page.tsx

import React from 'react';
import Head from 'next/head';
import productsData from '../../../../data/products.json';
import ProductDetails from '../../../components/ProductDetails';
import { Product } from '../../../types';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { slug } = params;
  const product = productsData.find((p) => p.slug === slug) as Product | undefined;

  if (!product) {
    return (
      <div style={{ padding: '20px' }}>
        <Head>
          <title>Product Not Found | Phantom Phones</title>
          <meta name="robots" content="noindex, follow" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Product not found</h1>
        <a href="/products">
          <button style={{ marginTop: '20px' }}>Back to Products</button>
        </a>
      </div>
    );
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.gallery?.map((img) => `https://phantomphones.xyz${img}`) ?? [],
    "description": product.description,
    "sku": product.id.toString(),
    "brand": {
      "@type": "Brand",
      "name": "Phantom Phones",
    },
    "offers": {
      "@type": "Offer",
      "url": `https://phantomphones.xyz/products/${product.slug}`,
      "priceCurrency": "USD", // Set to default currency
      "price": product.price?.toFixed(2) ?? "0.00",
      "availability": product.status === 'In Stock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating.toString(),
      "reviewCount": product.reviews?.length ?? 0,
    },
    "review": product.reviews?.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name,
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
      },
      "reviewBody": review.comment,
    })),
  };

  return (
    <>
      <Head>
        <title>{product.name} | Phantom Phones</title>
        <meta
          name="description"
          content={`${product.name} is an encrypted mobile device with GrapheneOS, offering untraceable communications and unmatched privacy.`}
        />
        <meta property="og:title" content={`${product.name} | Phantom Phones`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={`https://phantomphones.xyz${product.image}`} />
        <meta property="og:url" content={`https://phantomphones.xyz/products/${product.slug}`} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://phantomphones.xyz/products/${product.slug}`} />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductPage;

```


## File: /root/main/work/Phones/PhantomPhones/src/app/products/page.tsx

### Content
```tsx
// src/app/products/page.tsx

"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import products from '../../../data/products.json';
import {
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Box,
  Pagination,
  Stack,
  Container,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCart } from '../../contexts/CartContext';
import ProductCard from '../../components/ProductCard';
import { useCurrency } from '../../contexts/CurrencyContext';

const ProductsPage = () => {
  const { addToCart } = useCart();
  const { selectedCurrency, exchangeRates: currencyExchangeRates } = useCurrency();
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleFavoriteToggle = (productId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const productSchema = filteredProducts
    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
    .map((product) => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "image": `https://phantomphones.xyz${product.image}`,
      "description": product.description,
      "sku": product.id.toString(),
      "brand": {
        "@type": "Brand",
        "name": "Phantom Phones",
      },
      "offers": {
        "@type": "Offer",
        "url": `https://phantomphones.xyz/products/${product.slug}`,
        "priceCurrency": selectedCurrency,
        "price": product.price ? product.price.toFixed(2) : "0.00",
        "availability": product.status === 'In Stock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      },
    }));

  return (
    <>
      <Head>
        <title>Products | Phantom Phones</title>
        <meta
          name="description"
          content="Explore our range of encrypted mobiles, anonymous eSIMs, and untraceable devices. Phantom Phones provides the ultimate privacy solutions."
        />
        <link rel="canonical" href="https://phantomphones.xyz/products" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@graph": productSchema }) }}
        />
      </Head>
      <Box sx={{ bgcolor: 'grey.900', color: '#fff', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom sx={{ color: 'cyan' }}>
            Our Products
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Discover our range of <strong>encrypted mobiles</strong>, <strong>anonymous eSIMs</strong>, and <strong>untraceable devices</strong> designed to protect your privacy and security.
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search Products"
            fullWidth
            sx={{
              mb: 4,
              bgcolor: 'grey.900',
              borderRadius: 1,
              input: { color: '#fff' },
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
              style: { color: '#fff' },
            }}
          />
          <Grid container spacing={4}>
            {filteredProducts
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <ProductCard
                    product={product}
                    isFavorite={favorites.includes(product.id)}
                    onFavoriteToggle={() => handleFavoriteToggle(product.id)}
                  />
                </Grid>
              ))}
          </Grid>
          {pageCount > 1 && (
            <Stack spacing={2} sx={{ mt: 4, alignItems: 'center' }}>
              <Pagination
                count={pageCount}
                page={page}
                onChange={(event, value) => setPage(value)}
                color="primary"
              />
            </Stack>
          )}
        </Container>
      </Box>
    </>
  );
};

export default ProductsPage;

```


## File: /root/main/work/Phones/PhantomPhones/src/app/products/productImage.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/components/ProductCard.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductDetails.tsx

### Content
```tsx
import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

interface ProductImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt, priority = false }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingTop: '60%', // This creates a 5:3 aspect ratio
        overflow: 'hidden',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'contain',
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
      />
    </Box>
  );
};

export default ProductImage;
```


## File: /root/main/work/Phones/PhantomPhones/src/components/CurrencySelector.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/components/Navbar.tsx

### Content
```tsx
// src/components/CurrencySelector.tsx

"use client";

import React, { useState } from 'react';
import { useCurrency } from '../contexts/CurrencyContext';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Avatar,
  Checkbox,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  InputAdornment,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { currencyOptions, CurrencyOption } from '../../data/currencyData';

const CurrencySelector = () => {
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [continentFilter, setContinentFilter] = useState<string[]>([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSearchQuery('');
    setContinentFilter([]);
  };

  const continents: string[] = Array.from(
    new Set(currencyOptions.map((option) => option.continent))
  );

  const handleContinentToggle = (continent: string) => {
    setContinentFilter((prev) => {
      const newFilter = prev.includes(continent)
        ? prev.filter((c) => c !== continent)
        : [...prev, continent];
      return newFilter;
    });
  };

  // Filter and remove duplicates
  const filteredOptions: CurrencyOption[] = currencyOptions
    .filter((option) => {
      const matchesSearch =
        option.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        option.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        option.name.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesContinent =
        continentFilter.length === 0 || continentFilter.includes(option.continent);

      return matchesSearch && matchesContinent;
    })
    // Remove duplicates based on 'code' property
    .reduce((acc: CurrencyOption[], current) => {
      const x = acc.find((item) => item.code === current.code);
      return !x ? acc.concat([current]) : acc;
    }, []);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          color: 'cyan',
          '&:hover': {
            color: 'green',
          },
        }}
      >
        <Avatar
          sx={{
            width: 30,
            height: 30,
            bgcolor: 'transparent',
            color: 'inherit',
            fontSize: '1.3rem', 
            fontWeight: 'bold', 
          }}
        >
          {selectedCurrency}
        </Avatar>
      </IconButton>

      {/* Currency Selection Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'grey.900',
            color: '#fff',
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: 'cyan',
          }}
        >
          Select Your Currency
        </DialogTitle>
        <DialogContent>
          {/* Search Bar */}
          <TextField
            variant="outlined"
            placeholder="Search Currency"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{
              mb: 2,
              input: { color: '#fff' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'cyan',
                },
                '&:hover fieldset': {
                  borderColor: 'cyan',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'cyan',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Continent Filters */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {continents.map((continent) => (
              <Chip
                key={continent}
                label={continent}
                clickable
                onClick={() => handleContinentToggle(continent)}
                sx={{
                  bgcolor: continentFilter.includes(continent)
                    ? 'cyan'
                    : 'grey.700',
                  color: continentFilter.includes(continent) ? '#000' : '#fff',
                }}
              />
            ))}
          </Box>

          {/* Currency List */}
          <List sx={{ maxHeight: '400px', overflowY: 'auto' }}>
            {filteredOptions.map((option) => (
              <ListItem
                key={option.code}
                onClick={() => {
                  setSelectedCurrency(option.code);
                  handleClose();
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    src={`https://flagcdn.com/48x36/${option.flagCode}.png`}
                    alt={option.country}
                    sx={{ width: 36, height: 24, mr: 2 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${option.country} (${option.code})`}
                  secondary={option.name}
                  primaryTypographyProps={{ color: '#fff' }}
                  secondaryTypographyProps={{ color: 'grey.500' }}
                />
                {selectedCurrency === option.code && (
                  <Checkbox
                    checked
                    sx={{ color: 'cyan' }}
                    disabled
                  />
                )}
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CurrencySelector;



```


## File: /root/main/work/Phones/PhantomPhones/src/components/Footer.tsx

### Content
```tsx
"use client";
import React from 'react';
import { Typography, Paper } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <Paper
      elevation={4}
      sx={{
        padding: 2,
        textAlign: 'center',
        backgroundColor: '#1A1A1A',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {currentYear} Phantom Phones. All rights reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;

```


## File: /root/main/work/Phones/PhantomPhones/src/components/GlowingButton.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/app/page.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductCard.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductDetails.tsx

### Content
```tsx
"use client";
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlowingButton = styled(Button)<ButtonProps>(() => ({
  color: '#000',
  backgroundColor: '#00FFFF',
  boxShadow: '0 0 3px #00FFFF',
  '&:hover': {
    backgroundColor: '#00e5e5',
    boxShadow: '0 0 20px #00FFFF',
  },
}));

export default GlowingButton;

```


## File: /root/main/work/Phones/PhantomPhones/src/components/MuiNextLink.tsx

### Content
```tsx

```


## File: /root/main/work/Phones/PhantomPhones/src/components/Navbar.tsx

### Content
```tsx
// src/components/Navbar.tsx

"use client";

import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItemText,
  Badge,
  ListItemButton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { useCart } from '../contexts/CartContext';
import { gsap } from 'gsap';
import CurrencySelector from './CurrencySelector';

const Navbar = () => {
  const { cartItems } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const theme = useTheme();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Home', href: '/' },
    { text: 'Products', href: '/products' },
    { text: 'Blog', href: '/blogs' },
    { text: 'About Us', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  // Refs for animations
  const logoRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < theme.breakpoints.values.md);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [theme.breakpoints.values.md]);

  useEffect(() => {
    // Logo Animation
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }

    // Navigation Links Animation
    if (navLinksRef.current) {
      gsap.fromTo(
        navLinksRef.current.children,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }

    // Drawer Animation
    if (drawerRef.current && drawerOpen) {
      gsap.fromTo(
        drawerRef.current,
        { x: '-100%' },
        { x: 0, duration: 0.5, ease: 'power3.out' }
      );
    } else if (drawerRef.current && !drawerOpen) {
      gsap.to(drawerRef.current, { x: '-100%', duration: 0.5, ease: 'power3.in' });
    }
  }, [drawerOpen]);

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={4}>
        <Toolbar>
          {/* Menu Icon for Mobile */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'HackerNoon, Helvetica, Arial, sans-serif',
              fontWeight: 'bold',
              letterSpacing: '1.5px',
              cursor: 'pointer',
              color: theme.palette.primary.main,
              transition: 'color 0.3s',
              '&:hover': {
                color: theme.palette.secondary.main,
              },
            }}
            ref={logoRef}
          >
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Phantom Phones
            </Link>
          </Typography>

          {/* Navigation Links for Desktop */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
              component="nav"
              aria-label="main navigation"
            >
              <List ref={navLinksRef} component="nav" sx={{ display: 'flex' }}>
                {navItems.map((item) => (
                  <ListItemButton
                    key={item.text}
                    component={Link}
                    href={item.href}
                    sx={{
                      position: 'relative',
                      padding: '8px 12px',
                      textTransform: 'none',
                      fontSize: '1.25rem',
                      fontFamily: 'TECHKR, Helvetica, Arial, sans-serif',
                      color: theme.palette.text.primary,
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&::after': {
                          transform: 'scaleX(1)',
                        },
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: theme.palette.primary.main,
                        transform: 'scaleX(0)',
                        transformOrigin: 'right',
                        transition: 'transform 0.3s ease-in-out',
                      },
                    }}
                  >
                    {item.text}
                  </ListItemButton>
                ))}
              </List>

              {/* Currency Selector */}
              <CurrencySelector />

              {/* Shopping Cart Icon */}
              <IconButton
                color="inherit"
                sx={{
                  position: 'relative',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.2)',
                  },
                }}
              >
                <Badge badgeContent={cartItems.length} color="error">
                  <Link href="/cart" style={{ color: 'inherit' }}>
                    <ShoppingCartIcon />
                  </Link>
                </Badge>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.paper,
            width: '80%', // Adjusted for better responsiveness
          },
        }}
      >
        <Box
          ref={drawerRef}
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Header with Close Icon */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            <IconButton onClick={toggleDrawer(false)} aria-label="close drawer" size="large">
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <List ref={navLinksRef} component="nav" aria-label="mobile navigation">
            {navItems.map((item) => (
              <ListItemButton
                key={item.text}
                component={Link}
                href={item.href}
                onClick={toggleDrawer(false)}
                sx={{
                  textTransform: 'none',
                  fontSize: '1.5rem',
                  fontFamily: 'TECHKR, Helvetica, Arial, sans-serif',
                  color: theme.palette.text.primary,
                  py: 2,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                />
              </ListItemButton>
            ))}
          </List>

          {/* Footer with Cart Icon and Currency Selector */}
          <Box
            sx={{
              p: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Currency Selector */}
            <CurrencySelector />

            {/* Cart Icon */}
            <IconButton color="inherit" size="large" onClick={toggleDrawer(false)}>
              <Badge badgeContent={cartItems.length} color="error">
                <Link href="/cart" style={{ color: 'inherit' }}>
                  <ShoppingCartIcon fontSize="large" />
                </Link>
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

```


## File: /root/main/work/Phones/PhantomPhones/src/components/Pagination.tsx

### Content
```tsx
import React from 'react';
import { Box, IconButton } from '@mui/joy';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }
    
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }
    
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5, my: 4 }}>
      <IconButton
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        size="sm"
        variant="outlined"
      >
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <IconButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        size="sm"
        variant="outlined"
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {typeof page === 'number' ? (
            <IconButton
              onClick={() => onPageChange(page)}
              variant={currentPage === page ? 'solid' : 'outlined'}
              color="primary"
              size="sm"
            >
              {page}
            </IconButton>
          ) : (
            <Box sx={{ mx: 0.5 }}>{page}</Box>
          )}
        </React.Fragment>
      ))}
      <IconButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        size="sm"
        variant="outlined"
      >
        <KeyboardArrowRightIcon />
      </IconButton>
      <IconButton
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        size="sm"
        variant="outlined"
      >
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default Pagination;
```


## File: /root/main/work/Phones/PhantomPhones/src/components/ProductCard.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/app/products/page.tsx

### Content
```tsx
// src/components/ProductCard.tsx

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Rating,
  Box,
  IconButton,
  Tooltip,
  Stack,
} from '@mui/material';
import Link from 'next/link';
import GlowingButton from './GlowingButton';
import ProductImage from '../app/products/productImage';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useCurrency } from '../contexts/CurrencyContext';

interface ProductCardProps {
  product: any;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onFavoriteToggle,
}) => {
  const { selectedCurrency, exchangeRates } = useCurrency();
  const exchangeRate = exchangeRates[selectedCurrency] || 1;
  const priceInSelectedCurrency = (product.price * exchangeRate).toFixed(2);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'grey.900',
        color: '#fff',
        ':hover': {
          boxShadow: 6,
          transform: 'scale(1.02)',
          transition: '0.3s',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <ProductImage src={product.image} alt={product.name} />
        <Tooltip title="Add to Wishlist">
          <IconButton
            sx={{ position: 'absolute', top: 8, right: 8, color: 'cyan' }}
            onClick={onFavoriteToggle}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Tooltip>
      </Box>
      <CardContent
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
      >
        <Link href={`/products/${product.slug}`} passHref>
          <Typography
            variant="h6"
            sx={{ cursor: 'pointer', color: 'cyan', mb: 1 }}
          >
            {product.name}
          </Typography>
        </Link>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            precision={0.1}
            size="small"
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({product.reviews?.length ?? 0} reviews)
          </Typography>
        </Box>
        {/* Updated Price Display */}
        <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mb: 1 }}>
          <Typography
            variant="h6"
            sx={{ color: 'cyan', fontWeight: 'bold' }}
          >
            {selectedCurrency}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: 'yellow', fontWeight: 'bold' }}
          >
            {priceInSelectedCurrency}
          </Typography>
        </Stack>
        <Chip
          label={product.status}
          color={
            product.status === 'In Stock'
              ? 'success'
              : product.status === 'In Development'
              ? 'warning'
              : 'default'
          }
          size="small"
          sx={{ alignSelf: 'flex-start', mb: 1 }}
        />
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          {product.description}
        </Typography>
        <Link
          href={`/products/${product.slug}`}
          passHref
          style={{ marginTop: 'auto' }}
        >
          <GlowingButton
            variant="contained"
            fullWidth
            sx={{
              bgcolor: 'cyan',
              color: '#000',
              textTransform: 'none',
            }}
          >
            Configure &amp; Buy
          </GlowingButton>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

```


## File: /root/main/work/Phones/PhantomPhones/src/components/ProductDetails.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/app/products/[slug]/page.tsx

### Content
```tsx
// src/components/ProductDetails.tsx

"use client";
import React, { useState } from 'react';
import {
  Typography,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Stack,
  Chip,
  Rating,
  Tabs,
  Tab,
  Box,
  Divider,
  Grid,
  Button,
  Avatar,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  useMediaQuery,
  useTheme,
  Tooltip,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CardMedia,
  Breadcrumbs,
} from '@mui/material';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useCart } from '../contexts/CartContext';
import { useExchangeRates } from '../contexts/ExchangeRateContext';
import { useCurrency } from '../contexts/CurrencyContext';
import GlowingButton from './GlowingButton';
import Carousel from 'react-material-ui-carousel';
import ReactMarkdown from 'react-markdown';
import { Product, Variant, Option, Review, FAQ } from '../types';
import Link from 'next/link';
import ProductImage from '../app/products/productImage';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { addToCart } = useCart();
  const { exchangeRates } = useExchangeRates();
  const { selectedCurrency, exchangeRates: currencyExchangeRates } = useCurrency();
  const exchangeRate = currencyExchangeRates[selectedCurrency] || 1;

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(
    product.variants ? product.variants[0] : null
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    option: Option
  ) => {
    if (event.target.checked) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((opt) => opt.name !== option.name));
    }
  };

  const totalPrice =
    ((selectedVariant?.price ?? product.price ?? 0) +
      selectedOptions.reduce((total, item) => total + item.price, 0)) *
    quantity;

  const totalPriceInSelectedCurrency = (totalPrice * exchangeRate).toFixed(2);

  const pricesInCrypto = {
    BTC: exchangeRates.BTC ? (totalPrice / exchangeRates.BTC).toFixed(6) : 'Loading...',
    ETH: exchangeRates.ETH ? (totalPrice / exchangeRates.ETH).toFixed(6) : 'Loading...',
    LTC: exchangeRates.LTC ? (totalPrice / exchangeRates.LTC).toFixed(6) : 'Loading...',
    XMR: exchangeRates.XMR ? (totalPrice / exchangeRates.XMR).toFixed(6) : 'Loading...',
  };

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity,
      options: selectedOptions,
      variant: selectedVariant || undefined,
    });
    setSnackbarOpen(true);
  };

  const formatCryptoValue = (value: string) => {
    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6,
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleQuantityChange = (type: string) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  const handleVariantChange = (event: any) => {
    const variantName = event.target.value;
    const variant = product.variants?.find((v) => v.name === variantName) || null;
    setSelectedVariant(variant);
    setActiveTab(0); // Reset to Details tab
  };

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, bgcolor: 'grey.900', color: '#fff' }}>
      {/* Go Back Button */}
      <Box sx={{ mb: 2 }}>
        <Link href="/products" passHref>
          <Button variant="outlined" sx={{ color: 'cyan', borderColor: 'cyan' }}>
            &larr; Go back to products
          </Button>
        </Link>
      </Box>

      <Grid container spacing={4}>
        {/* Product Images Carousel */}
        <Grid item xs={12} md={6}>
          <Badge
            badgeContent={
              <Tooltip title="Add to Wishlist">
                <IconButton onClick={handleFavoriteToggle} color="primary">
                  {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Tooltip>
            }
            sx={{ width: '100%' }}
          >
            <Carousel
              navButtonsAlwaysVisible
              animation="slide"
              indicators={!isMobile}
              sx={{ width: '100%' }}
            >
              {(selectedVariant?.gallery || product.gallery)?.map(
                (image: string, index: number) => (
                  <ProductImage
                    key={index}
                    src={image}
                    alt={`${product.name} - ${index + 1}`}
                    priority={index === 0}
                  />
                )
              )}
            </Carousel>
          </Badge>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ color: 'cyan' }}>
            {product.name}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              precision={0.1}
            />
            <Typography>
              (
              {selectedVariant?.reviews?.length ?? product.reviews?.length ?? 0} reviews)
            </Typography>
          </Stack>
          <Chip
            label={product.status}
            color={
              product.status === 'In Stock'
                ? 'success'
                : product.status === 'In Development'
                ? 'warning'
                : 'default'
            }
            size="small"
            sx={{ mt: 1 }}
          />

          {/* Updated Price Display */}
          <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ color: 'cyan', fontWeight: 'bold' }}>
              {selectedCurrency}
            </Typography>
            <Typography variant="h4" sx={{ color: 'yellow', fontWeight: 'bold' }}>
              {totalPriceInSelectedCurrency}
            </Typography>
          </Stack>

          <Divider sx={{ my: 2, bgcolor: 'grey.700' }} />

          {/* Variant Selector */}
          {product.variants && (
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="variant-select-label" sx={{ color: '#fff' }}>
                Select Option
              </InputLabel>
              <Select
                labelId="variant-select-label"
                value={selectedVariant?.name}
                label="Select Option"
                onChange={handleVariantChange}
                sx={{ color: '#fff' }}
              >
                {product.variants.map((variant: Variant, index: number) => (
                  <MenuItem key={index} value={variant.name}>
                    {variant.name} - {selectedCurrency}{' '}
                    {(variant.price * exchangeRate).toFixed(2)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}

          {/* Options */}
          {product.options && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Available Options:</Typography>
              <Stack spacing={1}>
                {product.options.map((option: Option, index: number) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        name={option.name}
                        onChange={(e) => handleOptionChange(e, option)}
                        sx={{ color: 'cyan' }}
                      />
                    }
                    label={
                      <Typography>
                        {option.name} (+{selectedCurrency}{' '}
                        {(option.price * exchangeRate).toFixed(2)})
                      </Typography>
                    }
                  />
                ))}
              </Stack>
            </Box>
          )}

          {/* Quantity Selector */}
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Typography variant="h6" sx={{ mr: 2 }}>
              Quantity:
            </Typography>
            <Stack direction="row" alignItems="center">
              <IconButton
                color="primary"
                onClick={() => handleQuantityChange('decrement')}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="h6" sx={{ mx: 2 }}>
                {quantity}
              </Typography>
              <IconButton
                color="primary"
                onClick={() => handleQuantityChange('increment')}
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Equivalent Prices */}
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Equivalent Prices:</Typography>
            {exchangeRates.BTC &&
            exchangeRates.ETH &&
            exchangeRates.LTC &&
            exchangeRates.XMR ? (
              <Stack spacing={1} sx={{ mt: 1 }}>
                {[
                  {
                    name: 'BTC',
                    value: pricesInCrypto.BTC,
                    logo: '/images/bitcoin.webp',
                  },
                  {
                    name: 'ETH',
                    value: pricesInCrypto.ETH,
                    logo: '/images/ethereum.webp',
                  },
                  {
                    name: 'LTC',
                    value: pricesInCrypto.LTC,
                    logo: '/images/litecoin.webp',
                  },
                  {
                    name: 'XMR',
                    value: pricesInCrypto.XMR,
                    logo: '/images/monero.webp',
                  },
                ].map((coin, index) => (
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    key={index}
                  >
                    <Image
                      src={coin.logo}
                      alt={coin.name}
                      width={24}
                      height={24}
                    />
                    <Typography sx={{ ml: 1 }}>
                      {formatCryptoValue(coin.value)}{' '}
                      <strong>{coin.name}</strong>
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            ) : (
              <Typography>Loading crypto prices...</Typography>
            )}
          </Box>

          {/* Add to Cart and Buy Now Buttons */}
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <GlowingButton
              variant="contained"
              onClick={handleAddToCart}
              sx={{ bgcolor: 'cyan', color: '#000' }}
            >
              Add to Cart
            </GlowingButton>
            <Button variant="outlined" sx={{ color: 'cyan', borderColor: 'cyan' }}>
              Buy Now
            </Button>
          </Stack>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            message="Item added to cart"
          />
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Box sx={{ width: '100%', mt: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          textColor="inherit"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label="Details" />
          <Tab label="Key Features" />
          <Tab label="Specifications" />
          <Tab label="Reviews" />
          <Tab label="FAQ" />
        </Tabs>
        <Box sx={{ p: 3 }}>
          {activeTab === 0 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Product Details
              </Typography>
              {selectedVariant?.description ? (
                <ReactMarkdown>{selectedVariant.description}</ReactMarkdown>
              ) : (
                product.detailedDescription?.map((paragraph: string, index: number) => (
                  <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
                ))
              )}
            </Box>
          )}
          {activeTab === 1 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Key Features
              </Typography>
              <List>
                {(selectedVariant?.keyFeatures || product.keyFeatures)?.map(
                  (feature: string, index: number) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          )}
          {activeTab === 2 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Specifications
              </Typography>
              <List>
                {Object.entries(
                  selectedVariant?.specifications || product.specifications || {}
                ).map(([key, value]: [string, string], index: number) => (
                  <ListItem key={index}>
                    <ListItemText primary={key} secondary={value} />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
          {activeTab === 3 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Customer Reviews
              </Typography>
              {selectedVariant?.reviews?.length || product.reviews?.length ? (
                <Stack spacing={2}>
                  {(selectedVariant?.reviews || product.reviews)?.map((review: Review) => (
                    <Paper
                      key={review.id}
                      sx={{ padding: 2, backgroundColor: 'grey.800', color: '#fff' }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar src={review.avatar} alt={review.name} />
                        <Typography variant="h6">{review.name}</Typography>
                      </Stack>
                      <Rating
                        name={`read-only-${review.id}`}
                        value={review.rating}
                        readOnly
                        sx={{ mt: 1 }}
                      />
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {review.comment}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              ) : (
                <Typography variant="body1">No reviews yet.</Typography>
              )}
            </Box>
          )}
          {activeTab === 4 && (
            <Box>
              <Typography variant="h5" gutterBottom>
                Frequently Asked Questions
              </Typography>
              {(selectedVariant?.faqs || product.faqs)?.map((faq: FAQ, index: number) => (
                <Accordion
                  key={index}
                  sx={{ backgroundColor: 'grey.800', color: '#fff' }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon color="inherit" />}>
                    <Typography variant="h6">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;

```


## File: /root/main/work/Phones/PhantomPhones/src/components/Providers.tsx

### Content
```tsx
// src/components/Providers.tsx

'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';
import { CartProvider } from '../contexts/CartContext';
import { ExchangeRateProvider } from '../contexts/ExchangeRateContext';
import { CurrencyProvider } from '../contexts/CurrencyContext';

const Providers = ({
  children,
  cryptoExchangeRates,
  currencyExchangeRates,
}: {
  children: React.ReactNode;
  cryptoExchangeRates: any;
  currencyExchangeRates: any;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <ExchangeRateProvider initialExchangeRates={cryptoExchangeRates}>
        <CurrencyProvider initialExchangeRates={currencyExchangeRates}>
          <CartProvider>{children}</CartProvider>
        </CurrencyProvider>
      </ExchangeRateProvider>
    </ThemeProvider>
  );
};

export default Providers;

```


## File: /root/main/work/Phones/PhantomPhones/src/contexts/CartContext.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/app/cart/page.tsx
- /root/main/work/Phones/PhantomPhones/src/app/products/page.tsx
- /root/main/work/Phones/PhantomPhones/src/components/Navbar.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductDetails.tsx
- /root/main/work/Phones/PhantomPhones/src/components/Providers.tsx

### Content
```tsx
// src/contexts/CartContext.tsx

"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemToRemove: CartItem) => void;
  clearCart: () => void;
  updateCartItem: (updatedItem: CartItem) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    // console.log('Initial cart from local storage:', storedCart);
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Update local storage whenever cart items change
  useEffect(() => {
    // console.log('Updating local storage with cart:', cartItems);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    // console.log('Adding item to cart:', item);
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) =>
          i.product.id === item.product.id &&
          i.variant?.name === item.variant?.name &&
          JSON.stringify(i.options) === JSON.stringify(item.options)
      );

      if (existingItemIndex > -1) {
        // If the item already exists, increment the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        // If the item is new, add it to the cart
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (itemToRemove: CartItem) => {
    // console.log('Removing item from cart:', itemToRemove);
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.product.id === itemToRemove.product.id &&
            item.variant?.name === itemToRemove.variant?.name &&
            JSON.stringify(item.options) === JSON.stringify(itemToRemove.options)
          )
      )
    );
  };

  const clearCart = () => {
    // console.log('Clearing cart');
    setCartItems([]);
  };

  const updateCartItem = (updatedItem: CartItem) => {
    // console.log('Updating cart item:', updatedItem);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === updatedItem.product.id &&
        item.variant?.name === updatedItem.variant?.name &&
        JSON.stringify(item.options) === JSON.stringify(updatedItem.options)
          ? updatedItem
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
```


## File: /root/main/work/Phones/PhantomPhones/src/contexts/CurrencyContext.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/app/cart/page.tsx
- /root/main/work/Phones/PhantomPhones/src/app/page.tsx
- /root/main/work/Phones/PhantomPhones/src/app/products/page.tsx
- /root/main/work/Phones/PhantomPhones/src/components/CurrencySelector.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductCard.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductDetails.tsx
- /root/main/work/Phones/PhantomPhones/src/components/Providers.tsx

### Content
```tsx
// src/contexts/CurrencyContext.tsx

"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CurrencyContextType {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  exchangeRates: { [key: string]: number };
}

interface CurrencyProviderProps {
  children: React.ReactNode;
  initialExchangeRates: { [key: string]: number };
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export const CurrencyProvider = ({
  children,
  initialExchangeRates,
}: CurrencyProviderProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState<{
    [key: string]: number;
  }>(initialExchangeRates);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        'https://api.exchangerate-api.com/v4/latest/USD'
      );
      const data = await response.json();
      setExchangeRates(data.rates);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  };

  useEffect(() => {
    if (!initialExchangeRates || Object.keys(initialExchangeRates).length === 0) {
      fetchExchangeRates();
    }
    const interval = setInterval(fetchExchangeRates, 3600000); // Refresh every hour
    return () => clearInterval(interval);
  }, []);

  return (
    <CurrencyContext.Provider
      value={{ selectedCurrency, setSelectedCurrency, exchangeRates }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

```


## File: /root/main/work/Phones/PhantomPhones/src/contexts/ExchangeRateContext.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/app/cart/page.tsx
- /root/main/work/Phones/PhantomPhones/src/components/ProductDetails.tsx
- /root/main/work/Phones/PhantomPhones/src/components/Providers.tsx

### Content
```tsx
// src/contexts/ExchangeRateContext.tsx

"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ExchangeRates {
  [currency: string]: number;
}

interface ExchangeRateContextType {
  exchangeRates: ExchangeRates;
}

interface ExchangeRateProviderProps {
  children: React.ReactNode;
  initialExchangeRates: ExchangeRates;
}

const ExchangeRateContext = createContext<ExchangeRateContextType | undefined>(
  undefined
);

export const ExchangeRateProvider = ({
  children,
  initialExchangeRates,
}: ExchangeRateProviderProps) => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>(
    initialExchangeRates
  );

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,monero&vs_currencies=usd',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
          mode: 'cors',
        }
      );
      const data = await response.json();

      const rates: ExchangeRates = {
        BTC: data.bitcoin.usd,
        ETH: data.ethereum.usd,
        LTC: data.litecoin.usd,
        XMR: data.monero.usd,
      };

      setExchangeRates(rates);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  };

  useEffect(() => {
    fetchExchangeRates(); // Fetch rates immediately on mount
    const interval = setInterval(fetchExchangeRates, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ExchangeRateContext.Provider value={{ exchangeRates }}>
      {children}
    </ExchangeRateContext.Provider>
  );
};

export const useExchangeRates = () => {
  const context = useContext(ExchangeRateContext);
  if (!context) {
    throw new Error(
      'useExchangeRates must be used within an ExchangeRateProvider'
    );
  }
  return context;
};

```


## File: /root/main/work/Phones/PhantomPhones/src/globals.css

### Content
```css
/* src/globals.css */

@tailwind base;
@tailwind components;
@tailwind utilities;


/* Custom styles */
body {
  background-color: #0A0A0A;
}

```


## File: /root/main/work/Phones/PhantomPhones/src/styles/globals.css

### Content
```css
/* src/styles/globals.css */


@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'TECHKR';
  src: url('/fonts/Atari.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'HackerNoon';
  src: url('/fonts/HackerNoonV2-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}


/* Custom styles */
body {
  background-color: #0A0A0A;
  color: #FFFFFF;
}

html,
body,
#__next {
  height: 100%;
  margin: 0;
}

.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.content-container {
  flex: 1;
}

```


## File: /root/main/work/Phones/PhantomPhones/src/theme/gsap/scramble/subheaderScramble.tsx

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/app/page.tsx

### Content
```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';

interface SubheaderScrambleProps {
  children: React.ReactNode;
}

const SubheaderScramble: React.FC<SubheaderScrambleProps> = ({ children }) => {
  const [scrambledText, setScrambledText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const originalText = children?.toString() || '';

  useEffect(() => {
    setIsClient(true);
    setScrambledText(originalText.replace(/[a-zA-Z0-9]/g, '1'));
  }, [originalText]);

  useEffect(() => {
    if (!isClient) return;

    let timeoutId: NodeJS.Timeout;
    const animationDuration = 1000; // 0.5 seconds
    const steps = 20; // Number of steps in the animation
    const stepDuration = animationDuration / steps;

    const scramble = (progress: number) => {
      const newText = originalText.split('').map((char, index) => {
        if (index < originalText.length * progress) {
          return char;
        }
        return Math.random() > 0.1 ? '1' : '0';
      }).join('');
      setScrambledText(newText);
    };

    const animate = (step: number) => {
      const progress = step / steps;
      scramble(progress);

      if (step < steps) {
        timeoutId = setTimeout(() => animate(step + 1), stepDuration);
      } else {
        console.log('Animation completed');
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Starting animation');
          animate(0);
        } else {
          clearTimeout(timeoutId);
          setScrambledText(originalText.replace(/[a-zA-Z0-9]/g, '1'));
          console.log('Reset to scrambled');
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [isClient, originalText]);

  if (!isClient) {
    return <Typography variant="subHeader">{originalText}</Typography>;
  }

  return (
    <Typography 
      variant="subHeader" 
      component="div"
      sx={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}
    >
      <span 
        ref={textRef}
        style={{ 
          color: scrambledText === originalText ? '#00B8D4' : 'white',
          transition: 'color 0.01s ease'
        }}
      >
        {scrambledText}
      </span>
    </Typography>
  );
};

export default SubheaderScramble;
```


## File: /root/main/work/Phones/PhantomPhones/src/theme/theme.ts

### Dependencies
Files that import or require this file:
- /root/main/work/Phones/PhantomPhones/src/components/Providers.tsx

### Content
```ts
// src/theme/theme.ts

import { createTheme, ThemeOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

// Extend the Typography variants
declare module '@mui/material/styles' {
  interface TypographyVariants {
    subHeader: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subHeader?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subHeader: true;
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#A0A0A0',
    },
    primary: {
      main: '#00B8D4', // Cyan
      light: '#4FF3FF',
      dark: '#0097A7',
    },
    secondary: {
      main: '#66BB6A',
      light: '#C60055',
      dark: '#C60055',
    },
    error: {
      main: '#CF6679',
    },
    info: {
      main: '#29B6F6',
    },
    success: {
      main: '#66BB6A',
    },
    warning: {
      main: '#C60055',
    },
  },
  typography: {
    fontFamily: ['TECHKR', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['HackerNoon', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontSize: '2.5rem', // Base size for mobile
      lineHeight: 1.2,
      WebkitTextStroke: '2px #000000',
      fontWeight: 'bold',
      letterSpacing: '-0.02em',
      '@media (min-width:600px)': {
        fontSize: '3.5rem', // Tablet size
      },
      '@media (min-width:960px)': {
        fontSize: '4.5rem', // Small desktop size
      },
      '@media (min-width:1280px)': {
        fontSize: '6rem', // Large desktop size
      },
    },
    h2: {
      fontFamily: ['HackerNoon', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: ['HackerNoon', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: ['HackerNoon', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontSize: '4rem',
      lineHeight: 1.2,
      color: '#1E1E1E',
      textShadow: `
        -1px -1px 0 #00ffff, 
        1px -1px 0 #00ffff, 
        -1px 1px 0 #00ffff, 
        1px 1px 0 #00ffff, 
        0 0 10px rgba(0, 255, 255, 0.7), 
        0 0 20px rgba(0, 255, 255, 0.5), 
        0 0 30px rgba(0, 255, 255, 0.3),
        2px 2px 2px rgba(0, 0, 0, 0.5)
      `,
      WebkitTextStroke: '1.5px #AAAAAA',
      transition: 'all 1s ease',
      '&:hover': {
        textShadow: `
          -1px -1px 0 #00ffff, 
          1px -1px 0 #00ffff, 
          -1px 1px 0 #00ffff, 
          1px 1px 0 #00ffff, 
          0 0 15px rgba(0, 255, 255, 0.8), 
          0 0 25px rgba(0, 255, 255, 0.6), 
          0 0 35px rgba(0, 255, 255, 0.4),
          2px 2px 2px rgba(0, 0, 0, 0.6)
        `,
        filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.8))',
      },
    },
    h5: {
      fontFamily: ['HackerNoon', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontSize: '1.5rem',
      lineHeight: 1.2,
      WebkitTextStroke: '1px #000000',
    },
    h6: {
      fontFamily: ['HackerNoon', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1.3rem',
      lineHeight: 1,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  } as TypographyOptions,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: '5em',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'subHeader' },
          style: {
            fontFamily: ['TECHKR', 'Helvetica', 'Arial', 'sans-serif'].join(','),
            fontSize: '2rem',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            textTransform: 'lowercase',
            fontVariant: 'small-caps',
            background: 'linear-gradient(45deg, #00B8D4, #00E5FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
            padding: '0.2em 0',
            
          },
        },
      ],
    },
  },
};
const theme = createTheme(themeOptions);

export default theme;
```


## File: /root/main/work/Phones/PhantomPhones/src/types/index.d.ts

### Content
```ts
// src/types/index.d.ts

import * as React from "react";

declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}


export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }
  
  export interface Option {
    name: string;
    price: number;
  }
  
  export interface Variant {
    name: string;
    price: number;
    description: string;
    keyFeatures: string[];
    specifications: Record<string, string>;
    faqs: FAQ[];
    reviews: Review[];
    gallery: string[];
  }
  
  export interface Product {
    id: number;
    name: string;
    slug: string;
    price: number | null;
    status: string;
    options?: Option[];
    variants?: Variant[];
    description: string;
    detailedDescription?: string[];
    keyFeatures?: string[];
    specifications?: Record<string, string>;
    faqs?: FAQ[];
    reviews?: Review[];
    image: string;
    gallery?: string[];
    rating: number;
    relatedProducts?: Product[];
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
    options?: Option[];
    variant?: Variant; 
  }
  
  
```


## File: /root/main/work/Phones/PhantomPhones/src/types/telegraf-ratelimit.d.ts

### Content
```ts
declare module 'telegraf-ratelimit' {
    import { Middleware } from 'telegraf';
  
    interface Options {
      window?: number;
      limit?: number;
      onLimitExceeded?: Middleware<any>;
      keyGenerator?: (ctx: any) => string;
    }
  
    function rateLimit(options: Options): Middleware<any>;
  
    export default rateLimit;
  }
  
```


## File: /root/main/work/Phones/PhantomPhones/tailwind.config.js

### Content
```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

```


## File: /root/main/work/Phones/PhantomPhones/tailwind.config.ts

### Content
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        techkr: ['TECHKR', 'Arial', 'Helvetica', 'sans-serif'],
        hackernoon: ['HackerNoon', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
```


## File: /root/main/work/Phones/PhantomPhones/tsconfig.json

### Content
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": "src",
    "paths": {
      "@components/*": ["components/*"],
      "@contexts/*": ["contexts/*"],
      "@types/*": ["types/*"],
      "@images/*": ["images/*"]
    },
    "incremental": true,
    "esModuleInterop": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

```


## File: /root/main/work/Phones/PhantomPhones/vercel.json

### Content
```json
{
    "version": 2,
    "builds": [
      { "src": "package.json", "use": "@vercel/next" }
    ],
    "routes": [
      { "src": "/api/telegram-webhook", "dest": "/api/telegram-webhook" },
      { "src": "/api/blogs", "dest": "/api/blogs" },
      { "src": "/(.*)", "dest": "/$1" }
    ]
  }
```
