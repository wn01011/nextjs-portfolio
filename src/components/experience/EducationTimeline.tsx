import React from "react";
import { Education } from "@/data/education";
import * as S from "./EducationTimeline.style";

interface EducationTimelineProps {
  educations: Education[];
  showTitle?: boolean;
}

const EducationTimeline: React.FC<EducationTimelineProps> = ({
  educations,
  showTitle = true,
}) => {
  return (
    <div className={S.card}>
      {showTitle && <h3 className={S.sectionTitle}>교육</h3>}

      <div className={S.timelineContainer}>
        {educations.map((education, index) => (
          <div key={index} className={S.timelineItem}>
            <div className={S.timelineMarker}></div>
            <h4 className={S.timelineTitle}>{education.course}</h4>
            <p className={S.timelineInstitution}>{education.institution}</p>
            <p className={S.timelinePeriod}>{education.period}</p>

            {education.description && (
              <p className={S.timelineDescription}>{education.description}</p>
            )}

            {education.skills.length > 0 && (
              <div className={S.skillsContainer}>
                {education.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={S.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {education.highlights && education.highlights.length > 0 && (
              <ul className={S.highlightsList}>
                {education.highlights.map((highlight, hlIndex) => (
                  <li key={hlIndex} className={S.highlightItem}>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
