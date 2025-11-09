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
  // Extract season and year from batch like "Summer 2025" or "Spring 2025"
  const parts = batch.split(' ');
  const season = parts[0];
  const year = parts[1];
  
  // Map season to letter
  const seasonMap: { [key: string]: string } = {
    'Summer': 'S',
    'Spring': 'X',
    'Fall': 'F',
    'Winter': 'W'
  };
  
  const seasonLetter = seasonMap[season] || season.charAt(0);
  return `${seasonLetter}${year.slice(-2)}`; // e.g., "S25" or "X25"
};

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="mt-4">
      {/* <h2 className="text-xl mb-4 fading-text">Experience</h2> */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-neutral-700 pl-4">
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex items-center gap-2">
                <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-neutral-200 transition-colors"
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
                    <span className="text-sm font-medium -ml-0.5" style={{ color: '#ff4000' }}>
                      {formatYCBatch(exp.yc.batch)}
                    </span>
                  </a>
                )}
              </div>
              <span className="text-sm text-neutral-500 whitespace-nowrap ml-4">
                {exp.start_date} - {exp.end_date}
              </span>
            </div>
            <p className="text-sm text-neutral-400 mb-1">
              {exp.position}
            </p>
            <p className="text-xs text-neutral-500 mb-2">{exp.location}</p>
            <p className="text-sm text-justify text-neutral-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

