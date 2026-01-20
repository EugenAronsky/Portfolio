import { Cpu } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import LogoLoop from '../LogoLoop';
import { Item, ItemContent, ItemHeader } from '../ui/item';

const tools = [
  { tooltip: 'JavaScript', src: 'https://skillicons.dev/icons?i=js' },
  { tooltip: 'TypeScript', src: 'https://skillicons.dev/icons?i=ts' },
  { tooltip: 'HTML5', src: 'https://skillicons.dev/icons?i=html' },
  { tooltip: 'CSS', src: 'https://skillicons.dev/icons?i=css' },
  { tooltip: 'HTMX', src: 'https://skillicons.dev/icons?i=htmx' },
  { tooltip: 'React', src: 'https://skillicons.dev/icons?i=react' },
  { tooltip: 'Next.js', src: 'https://skillicons.dev/icons?i=next' },
  { tooltip: 'Node.js', src: 'https://skillicons.dev/icons?i=nodejs' },
  { tooltip: 'Express.js', src: 'https://skillicons.dev/icons?i=express' },
  { tooltip: 'Tailwind', src: 'https://skillicons.dev/icons?i=tailwind' },
  { tooltip: 'Docker', src: 'https://skillicons.dev/icons?i=docker' },
  { tooltip: 'Webpack', src: 'https://skillicons.dev/icons?i=webpack' },
  { tooltip: 'Git', src: 'https://skillicons.dev/icons?i=git' },
  { tooltip: 'Github', src: 'https://skillicons.dev/icons?i=github' },
  { tooltip: 'Nginx', src: 'https://skillicons.dev/icons?i=nginx' },
  { tooltip: 'Firebase', src: 'https://skillicons.dev/icons?i=firebase' },
  { tooltip: 'MongoDB', src: 'https://skillicons.dev/icons?i=mongodb' },
];

function Technologies() {
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
                <Cpu className="fill-blue-100 stroke-blue-500" />
              </div>
              <div className="flex w-full flex-col gap-2">
                <b className="text-xl">Technologies</b>
              </div>
            </ItemHeader>

            <ItemContent className="flex w-full flex-row flex-wrap justify-center">
              <LogoLoop
                fadeOut
                gap={20}
                speed={40}
                logos={tools}
                hoverSpeed={0}
                logoHeight={50}
                direction="left"
                fadeOutColor="#fff"
                ariaLabel="Technology partners"
              />
            </ItemContent>
          </Item>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Technologies;
