import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { FaGithub } from 'react-icons/fa';
import styles from './page.module.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function Home() {
  return (
    <>
      <div className={styles['header-container']}>
        <header className={`${styles.header}`}>
          <div className={styles['top-right-wrapper']}>
            <div className={styles['top-right']}>
              <Image
                className={styles.img}
                src="/pexels-polina-kovaleva.jpg"
                width={1280}
                height={1920}
                quality={100}
                alt=""
              />
              <h1 className={`${styles.h1} ${playfairDisplay.className}`}>
                ihccenen
              </h1>
            </div>
          </div>
          <div className={styles['about-me']}>
            <h2 className={`${styles.h2} ${playfairDisplay.className}`}>
              About me
            </h2>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className={styles.links}>
              <a
                href="https://github.com/ihccenen"
                target="_blank"
                aria-label="github profile"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </header>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2 className={`${styles.h2} ${playfairDisplay.className}`}>
            My work
          </h2>
          <div className={styles['project-card-wrapper']} />
        </main>
      </div>
    </>
  );
}
