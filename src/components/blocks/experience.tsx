import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import experience_freelance from '@/lib/pic/experience-freelance.png';
import experience_iaf from '@/lib/pic/experience-iaf.png';
import { Waypoints } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useState } from 'react';
import LetterGlitch from '../LetterGlitch';
import { Card, CardContent, CardDescription } from '../ui/card';
import { Item, ItemContent, ItemHeader } from '../ui/item';

interface ExperienceCard {
  title: string;
  period: string;
  position: string;
  description: string;
  mobile_description: string;
  src: string | StaticImport;
  type: '📍 On-site' | '🌍 Remote' | 'Hybrid' | ({} & string);
}

const MotionCardContent = motion(CardContent);

function ExperienceCard({
  title,
  description,
  src,
  period,
  position,
  type,
  mobile_description,
}: ExperienceCard) {
  const [focused, setFocused] = useState(false);
  const isLg = useMediaQuery('(min-width: 1024px)');

  return (
    <Card
      tabIndex={1}
      style={{ borderStyle: 'outset' }}
      className="cursor-target relative box-border flex h-75 w-78 cursor-pointer overflow-hidden border-4 border-blue-300 p-2 transition-all duration-500 ease-in-out **:p-0 active:scale-105 sm:h-58 sm:w-125"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
    >
      <Image src={src} className="size-full rounded-xl object-cover" alt="" />
      <MotionCardContent
        className="absolute flex size-[calc(100%-15px)] h-[calc(100%+1px)] flex-col items-end will-change-transform"
        initial={false}
        style={{ y: isLg ? '81%' : '84.75%' }}
        animate={focused ? { y: -1 } : { y: isLg ? '81%' : '84.75%' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.h2
          initial={false}
          className="grid w-full font-semibold whitespace-nowrap"
          animate={focused ? { gridTemplateColumns: '0fr' } : { gridTemplateColumns: '1fr' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div
            className="absolute top-3 left-4 size-4 -translate-x-full bg-white"
            style={{ mask: `radial-gradient(circle 16px at 100% 0, transparent 100%, black 100%)` }}
          />

          <motion.span
            initial={false}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            animate={focused ? { paddingInline: 4 } : { paddingInline: 8 }}
            className="relative col-start-2 min-w-0 rounded-tl-xl bg-white py-1! shadow-[0_4px_0_0] shadow-white"
          >
            <div
              className="absolute top-3 left-[0.5px] size-4 -translate-x-full bg-white"
              style={{ mask: `radial-gradient(circle 16px at 0 0%, transparent 100%, black 100%)` }}
            />
            {title}
            <div
              className="absolute -top-[15.8px] -right-[15.9px] size-4 -translate-x-full bg-white"
              style={{ mask: `radial-gradient(circle 16px at 0 0%, transparent 100%, black 100%)` }}
            />
          </motion.span>
        </motion.h2>

        <CardDescription className="text-muted-foreground h-full w-full bg-white px-1! pt-1.5! text-[11.25px] shadow-[-5px_0px_0px_0px] shadow-white sm:text-xs">
          <span>{position}</span>
          <br />
          <span>{period}</span>
          <br />
          <span>{type}</span>
          <br />
          <br />
          <pre className="hidden sm:block">{description}</pre>
          <pre className="block sm:hidden">{mobile_description}</pre>
        </CardDescription>
      </MotionCardContent>
    </Card>
  );
}

function Experience() {
  return (
    <section className="relative box-border flex w-full justify-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-7xl"
        >
          <Item className="w-full overflow-hidden px-5 sm:px-16">
            <ItemHeader className="justify-start gap-5">
              <div className="rounded-md bg-blue-300 p-1.5">
                <Waypoints className="fill-blue-100 stroke-blue-500" />
              </div>
              <div className="flex w-full flex-col gap-2">
                <b className="text-xl">Experience</b>
              </div>
            </ItemHeader>

            <ItemContent className="relative flex flex-row flex-wrap justify-center gap-4 p-4 sm:p-6">
              <div className="absolute top-0 -z-10 size-full overflow-hidden rounded-xl border-4 border-blue-300">
                <LetterGlitch
                  glitchSpeed={50}
                  centerVignette={true}
                  outerVignette={true}
                  smooth={true}
                />
              </div>

              <ExperienceCard
                src={experience_iaf}
                type={'📍 On-site'}
                position="💻 Frontend Developer"
                period="📅  May 2023 – Dec 2025 · 2 yrs 8 mos"
                title="✈️ Israeli Air Force "
                description={` • Built and maintained a mission-critical frontend platform,\ndeveloping scalable React and TypeScript interfaces and a clean\narchitecture focused on reliability and maintainability.\n\n • Improved frontend performance, contributing to an 11.2%\nproductivity increase, while collaborating with cross-functional\nteams in high-responsibility environments.`}
                mobile_description={`• Built and maintained a mission-critical\nfrontend platform, developing scalable\nReact and TypeScript interfaces and a\nclean architecture focused on reliability\nand maintainability.\n\n • Improved frontend performance,\ncontributing to an 11.2% productivity\nincrease, while collaborating with cross-\nfunctional teams in high-responsibility\nenvironments.`}
              />
              <ExperienceCard
                src={experience_freelance}
                type={'🌍 Remote'}
                position="💻 Full-Stack Developer"
                period="📅  Sep 2021 – Apr 2023 · 1 yr 8 mos"
                title="👨‍💻 Freelance | Self-Employed"
                description={` • Delivered end-to-end web solutions from requirements to\nproduction, building scalable React and TypeScript applications\nwith a strong focus on user experience and performance.\n\n • Developed backend features and API integrations while\ncollaborating directly with clients to translate business needs\ninto technical solutions and maintain clean, stable codebases.`}
                mobile_description={` • Delivered end-to-end web solutions\nfrom requirements to production, building\nscalable React and TypeScript applications\nwith a strong focus on user experience\nand performance.\n\n • Developed backend features and API\nintegrations while collaborating directly\nwith clients to translate business needs\ninto technical solutions and maintain\nclean, stable codebases.`}
              />
            </ItemContent>
          </Item>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Experience;
