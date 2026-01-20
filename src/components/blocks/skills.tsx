import skill_architecture from '@/lib/pic/skill-architecture.png';
import skill_design from '@/lib/pic/skill-design.png';
import skill_performance from '@/lib/pic/skill-performance.png';
import skill_scalable from '@/lib/pic/skill-scalable.png';
import skill_user from '@/lib/pic/skill-user.png';
import { BrainCircuit } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useState } from 'react';
import LetterGlitch from '../LetterGlitch';
import { Card, CardContent, CardDescription } from '../ui/card';
import { Item, ItemContent, ItemHeader } from '../ui/item';

interface SkillCardProps {
  title: string;
  description: string;
  src: string | StaticImport;
}
const MotionCardContent = motion(CardContent);

function SkillCard({ title, description, src }: SkillCardProps) {
  const [focused, setFocused] = useState(false);

  return (
    <Card
      tabIndex={1}
      style={{ borderStyle: 'outset' }}
      className="group cursor-target relative box-border flex h-43.25 w-80 cursor-pointer gap-2 overflow-hidden border-4 border-blue-300 p-2 transition-all duration-500 ease-in-out **:p-0 hover:scale-105"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
    >
      <Image src={src} className="size-full rounded-xl object-cover" alt="" />
      <MotionCardContent
        className="absolute flex size-[calc(100%-15px)] h-[calc(100%+1px)] flex-col items-end will-change-transform"
        initial={false}
        style={{ y: '73.5%' }}
        animate={focused ? { y: -1 } : { y: '73.5%' }}
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
            style={{
              mask: `radial-gradient(circle 16px at 100% 0, transparent 100%, black 100%)`,
            }}
          />

          <motion.span
            initial={false}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            animate={focused ? { paddingInline: 4 } : { paddingInline: 8 }}
            className="relative col-start-2 min-w-0 rounded-tl-xl bg-white py-1! shadow-[0_4px_0_0] shadow-white"
          >
            <div
              className="absolute top-3 left-0 size-4 -translate-x-full bg-white"
              style={{
                mask: `radial-gradient(circle 16px at 0 0%, transparent 100%, black 100%)`,
              }}
            />
            {title}
            <div
              className="absolute -top-4 -right-4 size-4 -translate-x-full bg-white"
              style={{
                mask: `radial-gradient(circle 16px at 0 0%, transparent 100%, black 100%)`,
              }}
            />
          </motion.span>
        </motion.h2>
        <CardDescription className="text-muted-foreground h-full w-full bg-white px-1! pt-1! shadow-[-5px_0px_0px_0px] shadow-white">
          <pre className="text-[11.25px] sm:text-xs">{description}</pre>
        </CardDescription>
      </MotionCardContent>
    </Card>
    // </GlassSurface>
  );
}

function Skills() {
  return (
    <section className="relative box-border flex w-full justify-center">
      {/* <TargetCursor spinDuration={2} hideDefaultCursor={true} parallaxOn={true} /> */}
      {/* <Image src={wallpaper} alt="" className="absolute size-full" /> */}
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
                <BrainCircuit className="fill-blue-100 stroke-blue-500" />
              </div>
              <div className="flex w-full flex-col gap-2">
                <b className="text-xl">My Skills</b>
              </div>
            </ItemHeader>

            <ItemContent className="relative flex flex-row flex-wrap justify-center gap-4 overflow-hidden rounded-xl border-white p-4 sm:p-6">
              <div className="absolute top-0 -z-10 size-full overflow-hidden rounded-xl border-4 border-blue-300">
                <LetterGlitch
                  glitchSpeed={50}
                  centerVignette={true}
                  outerVignette={true}
                  smooth={true}
                />
              </div>

              <SkillCard
                src={skill_architecture}
                title="🧱 Frontend Architecture"
                description={` • Designing clear and scalable frontend\narchitectures that support long-term\ngrowth and maintainability.\n\n • Focused on a clean structure,\nstable data flow, and clear\nseparation of concerns.`}
              />
              <SkillCard
                src={skill_performance}
                title="⚡Performance Optimization"
                description={` • Improving application speed and\nresponsiveness through efficient\nrendering and smart loading strategies.\n\n • Focused on smooth interactions,\nreduced bundle size, and consistent\nperformance in real-world usage.`}
              />
              <SkillCard
                src={skill_design}
                title="🎨 Design Systems"
                description={` • Building and maintaining design\nsystems with reusable components and\nconsistent styling.\n\n • Ensuring visual consistency,\nscalability, and easy collaboration\nacross teams.`}
              />
              <SkillCard
                src={skill_user}
                title="🧠 User Experience (UX)"
                description={` • Creating intuitive and user-centered\ninterfaces with a strong focus on\nusability and accessibility.\n\n • Balancing visual clarity and\nfunctionality to deliver seamless\nuser interactions.`}
              />
              <SkillCard
                src={skill_scalable}
                title="🚀 Scalable Frontend"
                description={` • Developing frontend solutions\nthat grow and adapt over time\nwith the product.\n\n • Focused on stability, maintainability,\n and flexibility as complexity and\nuser base increase.`}
              />
            </ItemContent>
          </Item>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Skills;
