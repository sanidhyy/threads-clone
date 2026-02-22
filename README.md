<a name="readme-top"></a>

# A Next.js 13 Meta Threads application.

![A Next.js 13 Meta Threads application.](/.github/images/img_main.png "A Next.js 13 Meta Threads application.")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/threads-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threads-clone/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threads-clone/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/threads-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threads-clone/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/threads-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threads-clone/commits "Github commits")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://threaad.vercel.app/ "Vercel status")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/threads-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threads-clone/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/threads-clone?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/threads-clone/pulls "GitHub pull requests")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of Threads Clone.

<!--- FOLDER_STRUCTURE_START --->

```bash
threads-clone/
  |- public/
  |- app/
    |-- (auth)/
        |--- onboarding/
        |--- sign-in/
        |--- sign-up/
        |--- layout.tsx
    |-- (root)/
        |--- activity/
        |--- communities/
        |--- create-thread/
        |--- profile/
        |--- search/
        |--- thread/
        |--- layout.tsx
        |--- page.tsx
    |-- api/
    |-- favicon.ico
    |-- globals.css
  |- components/
    |-- cards/
    |-- forms/
    |-- shared/
    |-- ui/
  |- constants/
    |-- index.ts
  |- lib/
    |-- actions/
    |-- models/
    |-- validations/
    |-- mongoose.ts
    |-- uploadthing.ts
    |-- utils.ts
  |- public/
    |-- assets/
    |-- icons/
  |- .env.local/
  |- .env.example/
  |- components.json
  |- middleware.ts
  |- next.config.js/
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.js
  |- tsconfig.json
```

<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in root folder.
4. Contents of `.env.local`:

```bash
# .env.local file
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_CLERK_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXX

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

MONGODB_URL=mongodb+srv://XXXXXXXXXXXXXXXXXXXXXXXXXXX

UPLOADTHING_SECRET=sk_live_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
UPLOADTHING_APP_ID=XXXXXXXX
```

5. **Clerk Keys**:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` are provided by Clerk. You need to sign up for an account on Clerk (https://www.clerk.dev/), log in, and access these keys in your account settings.

![Copy Clerk Secret and Publishable Key](/.github/images/step_clerk.png "Copy Clerk Secret and Publishable Key")

6. **Clerk Webhook Secret**:
   - `NEXT_CLERK_WEBHOOK_SECRET` is also provided by Clerk. To obtain this secret, navigate to the Clerk dashboard and set up a webhook. You will find the secret in the webhook settings.

![Copy Clerk Webhook Key](/.github/images/step_clerk_webhook.png "Copy Clerk Webhook Key")

7. **URLs for Clerk**:
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`, `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`, and `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` are endpoints or URLs related to your Clerk setup. You can configure these in your Clerk dashboard.

8. **MongoDB URL**:
   - `MONGODB_URL` is the connection URL for your MongoDB database. You will need to create a MongoDB account (https://www.mongodb.com/) or use an existing one. Obtain the connection URL from your MongoDB dashboard.

![Copy MongoDB Auth URL](/.github/images/step_mongodb.png "Copy MongoDB Auth URL")

9. **Uploadthing Keys**:
   - `UPLOADTHING_SECRET` and `UPLOADTHING_APP_ID` are provided by Uploadthing. You need to sign up for an account on Uploadthing (https://www.uploadthing.com/) and access these keys in your account settings.

![Copy Uploadthing Secret Key and App ID](/.github/images/step_uploadthing.png "Copy Uploadthing Secret Key and App ID")

### :books: Additional Resources

- Clerk Documentation: https://www.clerk.dev/docs/
- MongoDB Documentation: https://docs.mongodb.com/
- Uploadthing Documentation: https://docs.uploadthing.com/

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## :camera: Screenshots:

![Modern UI/UX using Tailwind CSS](/.github/images/img1.png "Modern UI/UX using Tailwind CSS")

![Create Threads](/.github/images/img2.png "Create Threads")

![Create Communities](/.github/images/img3.png "Create Communities")

![View Profile](/.github/images/img4.png "View Profile")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel") [![MongoDB](https://skillicons.dev/icons?i=mongodb "MongoDB")](https://mongodb.com/ "MongoDB")

## :wrench: Stats

[![Stats for this App](/.github/images/stats.svg "Stats for this App")](https://pagespeed-insights-svg.glitch.me/?url=https://threaad.vercel.app/ "Stats for this App")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in My Portfolio

<!--- DEPENDENCIES_START --->

- [Clerk](https://clerk.com/ "Clerk")
- [ShadCN UI](https://shadcn.com/ "ShadCN UI")
- [CLSX](https://www.npmjs.com/package/clsx "CLSX")
- [Uploadthing](https://uploadthing.com/ "Uploadthing")
- [ZOD](https://zod.dev "ZOD")
- [React Hook Form](https://www.react-hook-form.com "React Hook Form")
- [Class Variance Authority](https://www.npmjs.com/package/class-variance-authority "Class Variance Authority")
- [React Hot Toast](https://www.npmjs.com/package/react-hot-toast "React Hot Toast")
- [Lucide Icon](https://lucide.dev "Lucide Icon")
- [Prettier](https://prettier.io "Prettier")
- [ESLint](https://eslint.org "ESLint")
- [Next PWA](https://www.npmjs.com/package/next-pwa "Next PWA")
<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app "Tweet")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/threads-clone&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/threads-clone&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/threads-clone&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/threads-clone&type=Timeline" />
  </picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
