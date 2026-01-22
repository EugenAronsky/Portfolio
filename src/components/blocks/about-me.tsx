import { User2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Item, ItemContent, ItemHeader } from '../ui/item';

function AboutMe() {
  return (
    <section className="relative mt-76 box-border flex w-full justify-center">
      <svg
        viewBox="0 0 2160 585"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        className="pointer-events-none absolute w-full -translate-y-[48%] transition-all duration-500"
      >
        <path
          d="M960.878 260.518c93.975 15.277 188 30.276 521.372 67.17 1.082.06 2.164.122 3.279.185 30.077 1.675 60.104 2.336 90.221 2.315l2.575-.001c100.675-.04 200.474-9.832 544.093-94.601l8.623-2.67q3.087-.956 6.172-1.914a4712 4712 0 0 1 9.588-2.963l2.97-.926 2.742-.841 2.413-.746C2157 225 2157 225 2160 225v360H0V224c160.819-21.207 160.819-21.207 240.437-26.25l3.977-.252c23.015-1.443 46.033-2.511 69.086-3.06l2.64-.064c83.512-1.937 167.09 1.8 644.738 66.144"
          fill="#fff"
        />
      </svg>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="z-10 w-full max-w-7xl"
        >
          <Item className="w-full overflow-hidden px-5 lg:px-16">
            <ItemHeader className="justify-start gap-5">
              <div className="rounded-md bg-blue-300 p-1.5">
                <User2 className="fill-blue-100 stroke-blue-500" />
              </div>
              <div className="flex w-full flex-col gap-2">
                <b className="text-xl">About Me</b>
              </div>
            </ItemHeader>

            <ItemContent
              style={{
                backgroundImage:
                  'radial-gradient(#d5d5d5 0.6000000000000001px, transparent 0.6000000000000001px), radial-gradient(#d5d5d5 0.6000000000000001px, transparent 0.6000000000000001px)',

                backgroundSize: '14px 14px',
                backgroundPosition: '0 0, 7px 7px',
              }}
              className="flex w-full flex-row rounded-lg px-5 py-4 shadow-[inset_0_0_10px_0] shadow-black/20 lg:px-14"
            >
              <div className="max-w-3xl">
                <p>
                  <b>Frontend Developer with 5 years of experience</b>, including{' '}
                  <b>3 years in the Israel Defense</b> Forces and{' '}
                  <b>2 years as a freelance developer</b>, building scalable and complex,
                  high-responsibility frontend systems where{' '}
                  <b>performance, reliability, and usability</b> are critical.
                </p>
                <br />
                <span>
                  I work with <b className="">React, Next.js, JavaScript, and TypeScript</b>,
                  focusing on:
                </span>

                <p className="whitespace-pre">
                  <br /> • performance optimization
                  <br /> • frontend architecture
                  <br /> • scalable design systems
                </p>

                <br />
                <span>
                  I enjoy taking products <b>from idea to production</b>, ensuring{' '}
                  <b>clean, readable, and maintainable code</b> that performs reliably in real-world
                  environments.
                </span>
              </div>
            </ItemContent>
          </Item>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default AboutMe;
