import Image from 'next/image';

interface ExperienceItem {
  company: string;
  website: string;
  position: string;
  type: string;
  start_date: string;
  end_date: string;
  location: string;
  description: string;
  yc?: {
    batch: string;
    link: string;
  };
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

const formatYCBatch = (batch: string): string => {
  const parts = batch.split(' ');
  const season = parts[0];
  const year = parts[1];

  const seasonMap: { [key: string]: string } = {
    Summer: 'S',
    Spring: 'X',
    Fall: 'F',
    Winter: 'W',
  };

  const seasonLetter = seasonMap[season] || season.charAt(0);
  return `${seasonLetter}${year.slice(-2)}`;
};

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="mb-8">
      <div className="relative border-l border-neutral-800 ml-2 space-y-12 py-2">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-neutral-800 bg-neutral-800 group-hover:border-white/20 group-hover:bg-purple-500 transition-colors"></div>

            <div className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between flex-wrap gap-x-2">
                <h3 className="text-white font-medium text-base tracking-tight flex items-center gap-2">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    {exp.company}
                  </a>
                  {exp.yc && (
                    <a
                      href={exp.yc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src="/images/yc.svg"
                        alt="Y Combinator"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                      <span
                        className="text-sm font-medium -ml-0.5"
                        style={{ color: '#ff4000' }}
                      >
                        {formatYCBatch(exp.yc.batch)}
                      </span>
                    </a>
                  )}
                </h3>
                <span className="text-xs text-neutral-500 font-mono whitespace-nowrap">
                  {exp.start_date} - {exp.end_date}
                </span>
              </div>

              <div className="text-sm text-neutral-300 font-medium">
                {exp.position}
              </div>
              <div className="text-xs text-neutral-600 mb-2">
                {exp.location}
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed max-w-xl text-justify">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
