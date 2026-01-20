'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Linkedin,
  MailQuestion,
  MessageCircleMore,
  MessageSquareIcon,
  PhoneCall,
  Send,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Item, ItemContent, ItemHeader } from '../ui/item';
import { PhoneInput } from '../ui/phone-input';
import { Separator } from '../ui/separator';

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 8 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});

type TContactSchema = z.infer<typeof contactSchema>;

function Contact() {
  const form = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema), // Connects Zod to React Hook Form
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<TContactSchema> = (data) => {
    console.log('Form submitted successfully:', data);
    // Handle form submission logic (e.g., API call)
  };

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
                <MessageSquareIcon className="fill-blue-100 stroke-blue-500" />
              </div>
              <div className="flex w-full flex-col gap-2">
                <b className="text-xl">Contact</b>
              </div>
            </ItemHeader>

            <ItemContent className="flex flex-row flex-wrap items-center justify-center gap-12">
              <div className="grid flex-1 grid-cols-2 gap-6 *:*:cursor-pointer *:*:px-6 md:grid-cols-4">
                <Link href={'mailto:eugenaronskiy@gmail.com'}>
                  <Card className="rounded-sm bg-blue-100 shadow-[inset_0_0_0_0] shadow-black/15 transition-all active:scale-95 active:shadow-[inset_0_0_10px_0]">
                    <CardContent className="flex items-center justify-center">
                      <MailQuestion
                        size={60}
                        className="fill-blue-50 stroke-blue-500 stroke-[1.25]"
                      />
                    </CardContent>
                  </Card>
                </Link>

                <Link href={'tel:+972 57-520-8295'}>
                  <Card className="rounded-sm bg-blue-100 shadow-[inset_0_0_0_0] shadow-black/15 transition-all active:scale-95 active:shadow-[inset_0_0_10px_0]">
                    <CardContent className="flex items-center justify-center">
                      <PhoneCall size={60} className="fill-blue-50 stroke-blue-500 stroke-[1.25]" />
                    </CardContent>
                  </Card>
                </Link>

                <Link href={'https://wa.me/+972585208295'}>
                  <Card className="rounded-sm bg-blue-100 shadow-[inset_0_0_0_0] shadow-black/15 transition-all active:scale-95 active:shadow-[inset_0_0_10px_0]">
                    <CardContent className="flex items-center justify-center">
                      <MessageCircleMore
                        size={60}
                        className="fill-blue-50 stroke-blue-500 stroke-[1.25]"
                      />
                    </CardContent>
                  </Card>
                </Link>

                <Link href={'https://www.linkedin.com/in/eugen-aronskiy/'}>
                  <Card className="rounded-sm bg-blue-100 shadow-[inset_0_0_0_0] shadow-black/15 transition-all active:scale-95 active:shadow-[inset_0_0_10px_0]">
                    <CardContent className="flex items-center justify-center">
                      <Linkedin size={60} className="fill-blue-50 stroke-blue-500 stroke-[1.25]" />
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </ItemContent>
          </Item>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Contact;
