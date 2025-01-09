'use client';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `A passionate front-end developer with a knack for crafting robust and
          scalable web applications.I have honed my skills in front-end
          technologies like React and Next.js, as well as back-end technologies
          like SQlite and MongoDB. My goal is to leverage my expertise
          to create innovative solutions that drive business growth and deliver
          exceptional user experiences.
`;

export function TextGenerateEffectDemo() {
	return <TextGenerateEffect words={words} />;
}

export default TextGenerateEffectDemo;
