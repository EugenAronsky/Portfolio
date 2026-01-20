'use client';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';
import hero from '@/lib/pic/hero.png';
import { cn } from '@/lib/utils';
import { Usb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Item, ItemHeader } from '../ui/item';

function Hero() {
  const isXS = useMediaQuery('(min-width: 413px)');

  return (
    <header className="absolute flex h-84 w-full justify-center bg-linear-[130deg] from-blue-400 to-white shadow-[100px_0_0_0_#fff]">
      <div className="absolute flex h-full w-full justify-end">
        <Image
          src={hero}
          alt="Banner"
          className="h-full w-fit mask-[linear-gradient(120deg,transparent_30%,black_60%,black_100%)] object-cover object-top-right mix-blend-multiply"
        />
      </div>
      <Item className="z-10 h-full w-full max-w-7xl overflow-hidden px-5 py-10 lg:px-16">
        <ItemHeader className="size-full flex-col items-start justify-start gap-3">
          <div className="flex w-full items-center gap-2 *:shadow-[0_0_8px_2px] *:shadow-black/10">
            <div className="overflow-hidden rounded-sm bg-blue-900">
              <h1
                style={{
                  backgroundImage:
                    'linear-gradient(30deg, #155dfc 12%, transparent 12.5%, transparent 87%, #155dfc 87.5%, #155dfc), linear-gradient(150deg, #155dfc 12%, transparent 12.5%, transparent 87%, #155dfc 87.5%, #155dfc), linear-gradient(30deg, #155dfc 12%, transparent 12.5%, transparent 87%, #155dfc 87.5%, #155dfc), linear-gradient(150deg, #155dfc 12%, transparent 12.5%, transparent 87%, #155dfc 87.5%, #155dfc), linear-gradient(60deg, #155dfc77 25%, transparent 25.5%, transparent 75%, #155dfc77 75%, #155dfc77), linear-gradient(60deg, #155dfc77 25%, transparent 25.5%, transparent 75%, #155dfc77 75%, #155dfc77)',
                  backgroundSize: '20px 35px',
                  backgroundPosition: ' 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px',
                }}
                className={cn(
                  'px-4 py-2 font-sans! text-base font-extrabold text-white uppercase',
                  isXS && 'text-xl'
                )}
              >
                <span className="text-shadow-md">Frontend Developer</span>
              </h1>
            </div>
            <h2
              style={{
                background: `repeating-linear-gradient(45deg, #e9ecf1 0, #e9ecf1 1.2000000000000002px, #fefefe00 0, #fefefe00 50%), repeating-linear-gradient(-45deg, #e9ecf1 0, #e9ecf1 1.2000000000000002px, #fefefe 0, #fefefe 50%)`,
                backgroundSize: '12px 12px',
              }}
              className="flex h-fit shrink-0 gap-1 rounded-sm bg-white p-1 *:size-7"
            >
              <img src={'https://skillicons.dev/icons?i=react'} alt="React · " />
              <img src={'https://skillicons.dev/icons?i=nextjs'} alt="Next.js · " />
              <img src={'https://skillicons.dev/icons?i=ts'} alt="TypeScript" />
            </h2>
          </div>

          <div className="relative rounded-sm px-4 py-2 shadow-[0_0_8px_2px] shadow-black/10">
            <h3 className={cn('text-sm font-bold text-shadow-xs', isXS && 'text-base')}>
              Developing modern, scalable web
              <br />
              applications with a strong focus on
              <br />
              performance and usability
            </h3>
            <span
              style={{
                backgroundImage:
                  'repeating-linear-gradient(45deg, #e9ecf1AA 25%, transparent 25%, transparent 75%, #e9ecf1AA 75%, #e9ecf1AA), repeating-linear-gradient(45deg, #e9ecf1AA 25%, #fefefeAA 25%, #fefefeAA 75%, #e9ecf1AA 75%, #e9ecf1AA)',
                backgroundSize: '25.5px 25.5px',
                backgroundPosition: '0 0, 12.5px 12.5px',
              }}
              className="absolute top-0 left-0 -z-10 size-full rounded-sm bg-white opacity-65"
            />
          </div>

          <div className="flex h-fit gap-2 *:h-fit *:*:cursor-pointer *:*:shadow-[0_0_8px_2px] *:*:shadow-black/10">
            <Link href={'https://github.com/EugenAronsky'} target="_blank">
              <Button className="bg-[#242938]! p-0 pr-4 active:brightness-150!">
                <img src={'https://skillicons.dev/icons?i=github'} alt="" className="h-full" />
                <span>GitHub</span>
              </Button>
            </Link>
            <Link href={'https://wa.me/+972585208295'} target="_blank">
              <Button className="gap-0 bg-blue-600! p-0! pr-4! active:bg-blue-500!">
                <Usb className="size-9 p-2" />
                <span>Connect</span>
              </Button>
            </Link>
          </div>
        </ItemHeader>
      </Item>
    </header>
  );
}

export default Hero;
