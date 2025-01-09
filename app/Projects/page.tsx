'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 100,
		},
	},
};

const PROJECTS = [
	{
		title: 'VigilantEye',
		image: '/project-1.png',
		description:
			'A facial Recognition based web application to store and detect faces of thieves through pictures or live webcam.',
		technologies: [
			'Bootstrap',
			'Python',
			'JavaScript',
			'JQuery',
			'SQlite',
			'Django',
		],
		githubLink: 'https://github.com/usmanbangash98/VigilantEye',
	},
	{
		title: 'PEXEL',
		image: '/project-2.png',
		description:
			'An application where users can search for pictures and search related pictures will be fetched live from pexels API.',
		technologies: ['React', 'TailwindCss', 'Pexels API'],
		githubLink: 'https://github.com/usmanbangash98/pexel',
	},
	{
		title: 'Product Store',
		image: '/project-3.png',
		description:
			'An online product store where you can post a product with relevent information and desired price.',
		technologies: ['React', 'Chakra Ui', 'Express', 'Zustand', 'MongoDb'],
		githubLink: 'https://github.com/usmanbangash98/mern-product-store',
	},
	{
		title: 'iManage Website',
		image: '/project-4.png',
		description:
			'A website where one can store url, username and password in the localstorage.',
		technologies: ['TailwindCss', 'bg.ibelick', 'React', 'Vite'],
		githubLink: 'https://github.com/usmanbangash98/passmanager',
	},
	{
		title: 'BlogPost',
		image: '/project-5.png',
		description:
			'A platform where people can create posts and read posts of other people.',
		technologies: ['TailwindCss', 'Prisma', 'SQlite', 'Next.Js', 'Kinde'],
		githubLink: 'https://github.com/usmanbangash98/NextJs-blog-post',
	},
	{
		title: 'GreenEats',
		image: '/project-6.png',
		description:
			'GeenEats is a platform where people can search for their favourite food recipes and also share with others.',
		technologies: [
			'TailwindCss',
			'MongoDb',
			'ShadCn',
			'Next.Js',
			'React-toast',
		],
		githubLink: 'https://github.com/usmanbangash98/GreenEats',
	},
	{
		title: 'URL-Shoterner',
		image: '/project-7.png',
		description:
			'A place where you can shorten your long urls and share with others.',
		technologies: ['TailwindCss', 'MongoDb', 'TailwindCss', 'Next.Js'],
		githubLink: 'https://github.com/usmanbangash98/BitLink',
	},
	{
		title: 'Foodie',
		image: '/project-8.png',
		description:
			'A restaurant website where you can search for favourite food and place an order.',
		technologies: [
			'TailwindCss',
			'React Router',
			'MongoDb',
			'React.Js',
			'Node.Js',
			'Express.js',
		],
		githubLink: 'https://github.com/usmanbangash98',
	},
	{
		title: 'Attendance System',
		image: '/project-9.png',
		description:
			'Fullstack attendance management system with an admin Dashboard, Students can mark their attendance and submit leave request',
		technologies: [
			'TailwindCss',
			'Bcrypt',
			'MongoDb',
			'React.Js',
			'Node.Js',
			'Jsonwebtoken',
			'Multer',
		],
		githubLink: 'https://github.com/usmanbangash98/MERN-Attendance-',
	},
];

const Projects = () => {
	return (
		<div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
			<motion.h2
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='text-4xl font-bold text-center mb-16 underline underline-offset-8 decoration-blue-600 '
			>
				My Projects
			</motion.h2>
			<motion.ul
				variants={containerVariants}
				initial='hidden'
				animate='visible'
				className='max-w-5xl mx-auto space-y-12'
			>
				{PROJECTS.map((project, index) => (
					<motion.li
						key={index}
						variants={itemVariants}
						className='relative flex flex-col md:flex-row items-center md:items-start gap-8 py-6'
					>
						{/* Project Image */}
						<div className='w-full md:w-1/3'>
							<Image
								src={project.image}
								alt={project.title}
								width={300}
								height={200}
								className='rounded-md object-cover shadow-lg'
							/>
						</div>

						{/* Project Details */}
						<div className='w-full md:w-2/3'>
							<h3 className='text-2xl font-semibold mb-2 underline underline-offset-4 decoration-violet-600'>
								{project.title}
							</h3>
							<p className='text-gray-600 mb-3'>{project.description}</p>
							<div className='mb-3'>
								{project.technologies.map((tech, techIndex) => (
									<span
										key={techIndex}
										className='inline-block px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2 border-gray-500 border'
									>
										{tech}
									</span>
								))}
							</div>
							<div className='flex items-center space-x-4'>
								<Link
									href={project.githubLink}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center hover:text-sky-500 font-bold py-2 px-4 rounded transition-colors duration-300'
								>
									<FaGithub className='mr-1' />
									<span>Code</span>
								</Link>
							</div>
						</div>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

export default Projects;
