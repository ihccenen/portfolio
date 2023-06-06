import { Playfair_Display } from 'next/font/google';
import { FaGithub } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Image from 'next/image';
import styles from './Footer.module.css';

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={`${styles.h2} ${playfairDisplay.className}`}>
            Contact me
          </h2>
          <p>
            Please get in touch if you think our work could be mutually
            beneficial!
          </p>
          <div className={styles.address}>
            <p>1234 Random Road</p>
            <p>Random Town, California 12345</p>
          </div>
          <div className={styles.contact}>
            <p>
              <BsTelephone />
              555-555-5555
            </p>
            <p>
              <AiOutlineMail />
              ashleywilliams.is.not.real@gmail.com
            </p>
          </div>
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
        <div className={styles['img-wrapper']}>
          <Image
            src="/pexels-luka-peric.jpg"
            width={1280}
            height={853}
            quality={100}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}
