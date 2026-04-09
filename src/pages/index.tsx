import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const TECH_TAGS = ['Golang', 'C#', 'Kubernetes', 'IoTDB', 'PostgreSQL', 'AI 應用', '系統架構', 'Vibe Coding'];

const TECH_POSTS = [
  {
    title: 'Vibe Coding 的坑：從 prototype 到 production 差在哪',
    date: '2026-04-09',
    tags: ['Vibe Coding', '架構設計'],
    href: '/tech',
  },
  {
    title: '你其實需要時序 DB：IoTDB vs PostgreSQL 實戰比較',
    date: '即將發布',
    tags: ['資料庫', '後端'],
    href: '/tech',
  },
  {
    title: '平台工程到底在工程什麼：從 IDP 看系統複雜度',
    date: '籌備中',
    tags: ['平台工程', '架構設計'],
    href: '/tech',
  },
];

const NOTES_POSTS = [
  {
    title: '用 AI 管我的技術部落格：Docusaurus + GitHub Actions + AI 工作流',
    date: '2026-04-09',
    tags: ['工具試用', 'GitHub範例'],
    href: '/notes',
  },
  {
    title: 'IoTDB 快速上手：時序資料的另一種選擇',
    date: '籌備中',
    tags: ['DB比較', '踩坑紀錄'],
    href: '/notes',
  },
  {
    title: 'K8s 本地開發環境：kind vs minikube 實際比較',
    date: '籌備中',
    tags: ['工具試用'],
    href: '/notes',
  },
];

function PostCard({ title, date, tags, href }: {
  title: string;
  date: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link to={href} className={styles.postCard}>
      <div className={styles.postCardContent}>
        <p className={styles.postDate}>{date}</p>
        <h3 className={styles.postTitle}>{title}</h3>
        <div className={styles.postTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="平台架構 × AI 應用 × 十年實戰">
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <Heading as="h1" className={styles.heroName}>wz-cch</Heading>
          <p className={styles.heroTagline}>平台架構 × AI 應用 × 十年實戰</p>
          <p className={styles.heroSubtitle}>寫真實踩過的坑，不寫 demo 假設。</p>
          <div className={styles.heroButtons}>
            <a
              href="https://www.linkedin.com/in/chien-hsiang-chen-2378b1255/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary button--lg"
            >
              LinkedIn
            </a>
            <Link to="/tech" className="button button--outline button--secondary button--lg">
              最新文章
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* 最新技術文章 */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">技術文章</Heading>
              <Link to="/tech" className={styles.seeAll}>查看全部 →</Link>
            </div>
            <div className={styles.postGrid}>
              {TECH_POSTS.map((post) => (
                <PostCard key={post.title} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* 最新探索筆記 */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">探索筆記</Heading>
              <Link to="/notes" className={styles.seeAll}>查看全部 →</Link>
            </div>
            <div className={styles.postGrid}>
              {NOTES_POSTS.map((post) => (
                <PostCard key={post.title} {...post} />
              ))}
            </div>
          </div>
        </section>

        {/* 關於我 */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.aboutSection}>
              <Heading as="h2">關於我</Heading>
              <p className={styles.aboutText}>
                平台工程師，十年實戰，專注 AI 應用與系統架構。曾在不同規模的團隊裡踩過平台建置、時序資料庫選型、以及 AI 整合進 production 的各種坑。這裡寫的東西都是真實跑過的，不是 demo。
              </p>
              <div className={styles.techTags}>
                {TECH_TAGS.map((tag) => (
                  <span key={tag} className={styles.techTag}>{tag}</span>
                ))}
              </div>
              <div className={styles.aboutButtons}>
                <Link to="/about" className="button button--outline button--primary">
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
