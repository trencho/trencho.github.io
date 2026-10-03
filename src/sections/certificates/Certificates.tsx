import { m } from 'motion/react';
import { certificates } from '@/data';
import { cardSurface, focusRing, headingText } from '@/shared/theme/tokens';
import SectionHeading from '@/shared/ui/SectionHeading';
import Picture from '@/shared/ui/Picture';

const Certificates = () => (
  <div className='p-4 sm:p-6 lg:p-8'>
    <SectionHeading id='certificates-heading' className='p-6'>
      Certificates
    </SectionHeading>

    <div className='max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 text-center'>
      {certificates.map((certificate, index) => (
        <a
          key={certificate.title}
          href={certificate.url}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={certificate.title}
          className={`rounded-lg ${focusRing}`}
        >
          <m.div
            className={`w-48 sm:w-56 lg:w-72 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105 ${cardSurface} hover:bg-white/85 dark:hover:bg-[#241041]`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
          >
            <Picture
              src={certificate.imageSrc}
              alt={certificate.title}
              width='128'
              height='128'
              className='mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain select-none'
            />
            <h3
              className={`mt-4 text-lg sm:text-xl font-medium text-center line-clamp-2 ${headingText}`}
            >
              {certificate.title}
            </h3>
          </m.div>
        </a>
      ))}
    </div>
  </div>
);

export default Certificates;
