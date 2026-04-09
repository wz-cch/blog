import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './about.module.css';

const TECH_TAGS = ['Golang', 'C#', 'Kubernetes', 'IoTDB', 'PostgreSQL', 'AI 應用', '系統架構', 'Vibe Coding'];

const FOCUS_AREAS = [
  { label: 'AI × 系統架構', desc: '把 AI 工具真正整合進生產環境，而不只是 demo' },
  { label: '平台工程', desc: 'IDP、開發者體驗、內部工具的設計與演化' },
  { label: '時序資料庫', desc: 'IoTDB、InfluxDB、TimescaleDB 在不同場景的選型' },
];

export default function About(): ReactNode {
  return (
    <Layout title="關於我" description="wz-cch — 平台工程師，十年實戰，專注 AI 應用與系統架構">
      <main className={styles.main}>
        <div className={styles.container}>
          {/* 標題 */}
          <div className={styles.header}>
            <Heading as="h1">wz-cch</Heading>
            <p className={styles.subtitle}>平台工程師 · 十年實戰 · AI 應用</p>
          </div>

          {/* 自我介紹 */}
          <section className={styles.section}>
            <p className={styles.intro}>
              平台工程師，十年實戰，專注 AI 應用與系統架構。曾在不同規模的團隊裡踩過平台建置、時序資料庫選型、以及 AI 整合進 production 的各種坑。這裡寫的東西都是真實跑過的，不是 demo。
            </p>
          </section>

          {/* 技術標籤 */}
          <section className={styles.section}>
            <Heading as="h2" className={styles.sectionTitle}>技術標籤</Heading>
            <div className={styles.techTags}>
              {TECH_TAGS.map((tag) => (
                <span key={tag} className={styles.techTag}>{tag}</span>
              ))}
            </div>
          </section>

          {/* 目前關注方向 */}
          <section className={styles.section}>
            <Heading as="h2" className={styles.sectionTitle}>目前關注方向</Heading>
            <div className={styles.focusGrid}>
              {FOCUS_AREAS.map((area) => (
                <div key={area.label} className={styles.focusCard}>
                  <h3 className={styles.focusLabel}>{area.label}</h3>
                  <p className={styles.focusDesc}>{area.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 連結 */}
          <section className={styles.section}>
            <Heading as="h2" className={styles.sectionTitle}>找到我</Heading>
            <div className={styles.links}>
              <a
                href="https://www.linkedin.com/in/chien-hsiang-chen-2378b1255/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary button--lg"
              >
                LinkedIn
              </a>
              {/* 3C 部落格連結（選擇性放） */}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
