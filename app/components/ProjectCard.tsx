import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { FaGithub } from 'react-icons/fa';
import { RxExternalLink } from 'react-icons/rx';
import styles from './ProjectCard.module.css';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function ProjectCard({
  project,
}: {
  project: {
    name: string;
    screenshot?: string;
    description: string;
    repositoryURL: string;
    liveURL?: string;
  };
}) {
  const {
    name,
    description,
    screenshot,
    repositoryURL,
    liveURL,
  } = project;

  return (
    <div className={styles.card}>
      <div className={styles['screenshot-wrapper']}>
        {screenshot ? (
          <Image
            className={styles.img}
            data-testid="screenshot"
            src={screenshot}
            width={1920}
            height={927}
            quality={100}
            alt=""
          />
        ) : (
          <p
            className={`${styles['no-screenshot']} ${playfairDisplay.className}`}
            data-testid="no-screenshot"
          >
            No screenshot
          </p>
        )}
      </div>
      <div className={styles['card-middle']}>
        <h3 className={`${styles.h3} ${playfairDisplay.className}`}>{name}</h3>
        <div className={styles.links}>
          <a
            className={styles.flex}
            href={repositoryURL}
            data-testid="repository"
          >
            <FaGithub />
          </a>
          {liveURL && (
            <a className={styles.flex} href={liveURL} data-testid="live-site">
              <RxExternalLink />
            </a>
          )}
        </div>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
