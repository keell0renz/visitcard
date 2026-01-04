'use client';

import { useState } from 'react';
import Image from 'next/image';
import { formatYCBatch } from '../utils/format';

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

export default function Experience({ experiences }: ExperienceProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedExperiences = isExpanded
    ? experiences
    : experiences.slice(0, 2);
  const hasMore = experiences.length > 2;

  return (
    <section id="experience" className="mb-8">
      <div className="relative border-l border-neutral-800 ml-2 space-y-12 py-2">
        {displayedExperiences.map((exp, index) => (
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

      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors uppercase tracking-widest bg-neutral-900/50 px-4 py-2 rounded-full border border-neutral-800 hover:border-neutral-700 cursor-pointer"
          >
            {isExpanded ? (
              <>
                <span>Show less</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:-translate-y-0.5 transition-transform"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </>
            ) : (
              <>
                <span>View {experiences.length - 2} more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-y-0.5 transition-transform"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
