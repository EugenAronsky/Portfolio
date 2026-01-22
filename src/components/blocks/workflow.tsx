import { cn } from '@/lib/utils';
import {
  BrainCog,
  Figma,
  FileChartPie,
  FileSliders,
  HardDriveUpload,
  LucideProps,
  Play,
  WorkflowIcon,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Item, ItemContent, ItemHeader } from '../ui/item';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface WorkflowStepProps {
  index?: number;
  tooltip: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
}

function WorkflowStep(props: WorkflowStepProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            'flex flex-col items-center gap-1',
            (props.index ?? 0) % 2 !== 0 && 'mt-20'
          )}
        >
          <div className="aspect-square max-w-13 rounded-full bg-blue-200 p-2.5">
            <props.icon className="size-6 fill-blue-100 stroke-blue-400 sm:size-8" />
          </div>
          <b className="text-xs text-blue-300 sm:text-base">{props.tooltip}</b>
        </div>
      </TooltipTrigger>
      <TooltipContent>{props.tooltip}</TooltipContent>
    </Tooltip>
  );
}

const steps: WorkflowStepProps[] = [
  { icon: FileChartPie, tooltip: 'Analyze' },
  { icon: Figma, tooltip: 'Design' },
  { icon: BrainCog, tooltip: 'Build' },
  { icon: FileSliders, tooltip: 'Optimize' },
  { icon: HardDriveUpload, tooltip: 'Deploy' },
];

function Workflow() {
  return (
    <section className="relative box-border flex w-full justify-center bg-white">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-7xl bg-white"
        >
          <Item className="w-full overflow-hidden bg-white px-5 sm:px-16">
            <ItemHeader className="justify-start gap-5">
              <div className="rounded-md bg-blue-300 p-1.5">
                <WorkflowIcon className="fill-blue-100 stroke-blue-500" />
              </div>
              <div className="flex w-full flex-col gap-2">
                <b className="text-xl">Workflow</b>
              </div>
            </ItemHeader>

            <ItemContent className="relative flex min-w-0 flex-row justify-center bg-white">
              <div className="flex w-fit min-w-0 flex-row justify-center gap-3 bg-white">
                {steps.map((props, index) => {
                  const isFirst = index === 0;
                  const isLast = index === steps.length - 1;

                  return (
                    <React.Fragment key={props.tooltip}>
                      {isFirst ? (
                        <div className="relative flex h-13 w-10 min-w-0 items-center justify-center">
                          <div className="h-0.5 w-full bg-blue-100" />
                        </div>
                      ) : (
                        <div
                          className={cn(
                            'relative flex h-full w-20 min-w-0 items-center justify-center pb-6',
                            index % 2 !== 0 ? 'rotate-35' : '-rotate-35'
                          )}
                        >
                          <Play className="absolute size-4 fill-blue-100 stroke-blue-100 sm:size-5" />
                          <div className="h-0.5 w-full bg-blue-100" />
                        </div>
                      )}
                      <WorkflowStep {...props} index={index} />
                      {isLast && (
                        <div className="relative flex h-13 w-10 min-w-0 items-center justify-center">
                          <div className="h-0.5 w-full bg-blue-100" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <motion.div
                initial={{ x: '0%' }}
                whileInView={{
                  transition: {
                    duration: 10,
                    repeat: Infinity,

                    ease: 'linear',
                  },
                  x: ['-100%', '100%'],
                }}
                viewport={{ once: false }}
                className="pointer-events-none absolute mt-px h-[98%] min-w-full bg-black mix-blend-hue"
              />
            </ItemContent>
          </Item>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Workflow;
