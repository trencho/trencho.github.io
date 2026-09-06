import type { ReactNode } from 'react';

/**
 * The professional summary, as the paragraphs' inner content.
 *
 * It lives here rather than inside About because the /cv route renders the same
 * three paragraphs, and a CV that disagrees with the About section about the
 * author's own career is the problem that route exists to remove. Each consumer
 * supplies its own wrapper - About animates them, the CV does not - so only the
 * words are shared.
 *
 * Each paragraph carries an `id` so consumers key on that rather than on the array
 * index, which keeps React's reconciliation honest if one is ever inserted rather
 * than appended.
 */
export interface SummaryParagraph {
  id: string;
  body: ReactNode;
}

export const SUMMARY_PARAGRAPHS: SummaryParagraph[] = [
  {
    id: 'focus',
    body: (
      <>
        I&apos;m a software engineer focused on <b>backend</b> and{' '}
        <b>data engineering</b>. I&apos;ve designed and shipped{' '}
        <b>RESTful APIs</b> and, more recently, large-scale <b>ETL pipelines</b>{' '}
        — building data workflows on <b>Azure Databricks</b> and{' '}
        <b>Apache Spark</b> for the insurance sector, after years of{' '}
        <b>Java/Spring</b> development across banking (3DS secure payments),
        telecommunications and healthcare.
      </>
    ),
  },
  {
    id: 'delivery',
    body: (
      <>
        My work spans the full delivery cycle: modelling data and APIs,
        containerising with <b>Docker</b> and <b>Kubernetes</b>, and shipping
        through <b>CI/CD</b>. I&apos;ve collaborated directly with international
        clients across <b>Europe and the US</b>, translating business
        requirements into maintainable, production-ready systems.
      </>
    ),
  },
  {
    id: 'background',
    body: (
      <>
        I hold a{' '}
        <b>
          Master&apos;s in Electrical Engineering and Information Technologies
        </b>
        , where my thesis on monitoring atmospheric impacts and predicting air
        pollution grew into open-source machine-learning projects. I value{' '}
        <b>clean, well-tested code</b>, pragmatic design and continuous learning
        — and I&apos;m comfortable explaining technical trade-offs to both
        engineers and non-technical stakeholders.
      </>
    ),
  },
];
