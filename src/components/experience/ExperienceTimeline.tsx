import React from 'react';
import { WorkExperience } from '@/data/experience';
import * as S from './ExperienceTimeline.style';

interface ExperienceTimelineProps {
  experience: WorkExperience;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experience }) => {
  return (
    <div className={S.card}>
      <div className={S.companyInfo}>
        <h2 className={S.companyName}>{experience.company}</h2>
        <h3 className={S.position}>{experience.position}</h3>
        <p className={S.period}>{experience.period}</p>
        <p className={S.location}>{experience.location}</p>
      </div>
      
      <div className={S.description}>
        <p>{experience.description}</p>
      </div>
      
      <div>
        <h3 className={S.sectionTitle}>주요 프로젝트</h3>
        <div className={S.timelineContainer}>
          {experience.projects.map((project, index) => (
            <div 
              key={index} 
              className={S.timelineItem}
            >
              <div className={S.timelineMarker}></div>
              <h4 className={S.timelineTitle}>{project.title}</h4>
              <p className={S.timelinePeriod}>{project.period}</p>
              <p className={S.timelineDescription}>{project.description}</p>
              <div className={S.techTagsContainer}>
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className={S.techTag}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;