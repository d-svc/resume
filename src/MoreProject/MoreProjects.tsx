import React from 'react'
import './MoreProjects.scss'
import { projects } from '../projects'
import { type IProject, ProjectCard } from '../ProjectCard/ProjectCard'

export function MoreProjects ({ currentId }: { currentId: number }) {
  const ptojectShow = [...projects].filter((project: IProject) => project.id !== currentId)

  return <div className="more-projects">
    <h3 className="more-projects-title">
      More UI design projects
    </h3>
    <div className="more-projects-list">
      {ptojectShow.slice(0, 3).map((proj: IProject) => {
        return <ProjectCard project={proj} key={proj.id} />
      })
      }
    </div>
  </div>
}
