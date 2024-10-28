import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience({ formData, fetchUserData }) {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchUserData(id); // Fetch data based on ID from Firebase
    }
  }, [id, fetchUserData]);

  const {
    schooling = 'S.V.Public School, Machilipatnam',
    intermediate = 'Star College, Machilipatnam',
    bachelors = 'VIT-AP University, Inavolu',
    experience1 = 'IET Club',
    experience2 = 'AWS Cloud Practitioner',
    experience3 = 'AWS Solutions Architect Associate'
  } = formData;

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2019"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<SchoolIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            {schooling}
          </h3>
          <p> Schooling </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<SchoolIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            {intermediate}
          </h3>
          <p> Intermediate </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2025"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<SchoolIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            {bachelors}
          </h3>
          <p> Bachelor's Degree</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            {experience1}
          </h3>
          <p>Member</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            {experience2}
          </h3>
          <p>Completed {experience2}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024 - 2025"
          iconStyle={{ background: "#e5dfed", color: "#c78888" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#efe0e9", color: "#000" , borderRadius: '20px' }}
        >
          <h3 className="vertical-timeline-element-title">
            {experience3}
          </h3>
          <p>Completed {experience3}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
