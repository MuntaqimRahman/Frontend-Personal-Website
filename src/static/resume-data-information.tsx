import { ResumeTableTileProps } from "../components/resume-table-tile/resume-table-tile";
import { SkillsBubblesProps } from "../components/skills-bubbles/skills-bubbles";

export const dataTypes = {
  experiences: "EXPERIENCES",
  projects: "PROJECTS",
  activities: "ACTIVITIES",
  skills: "SKILLS",
};

export interface resumeDataState {
  type: string;
  values: ResumeTableTileProps[] | SkillsBubblesProps[];
}
