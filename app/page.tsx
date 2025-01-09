'use client';
import { BackgroundLines } from '@/components/ui/background-lines';
import Link from 'next/link';
import TextGenerateEffectDemo from './components/GenerateEffect';

export function Home() {
	return (
		<>
			<BackgroundLines className='flex items-center justify-center w-full flex-col px-4'>
				<h2 className='bg-clip-text text-transparent text-center bg-gradient-to-b from-blue-400 to-purple-600 dark:from-blue-200 dark:to-purple-400 text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight'>
					Hey, I am <br /> Usman Bangash
				</h2>
				<TextGenerateEffectDemo />
				<Link
					href={'mailto:usmanbangash21@gmail.com'}
					className='mt-3 inline-block text-neutral-700 dark:text-neutral-400 text-lg  hover:text-lime-600 cursor-pointer z-30 underline underline-offset-4 decoration-lime-500 -rotate-12 '
				>
					Contact Me 🚀
				</Link>
			</BackgroundLines>
		</>
	);
}

export default Home;
