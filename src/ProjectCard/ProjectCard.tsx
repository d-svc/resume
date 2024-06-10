import React from 'react'
import './ProjectCard.scss'
import { useNavigate } from 'react-router-dom'

export interface ContentModel {
  heroImage?: string;
  about?: string
  items?: Array<{ type: string, content: string }>
  cardImage?: string
}

export interface IProject {
  imgUrl?: string
  name: string
  category: string
  id: number
  content?: ContentModel
}
interface CardProps {
  project: IProject
}

export function ProjectCard ({ project }: CardProps): JSX.Element {
  const { id, imgUrl, name, category } = project
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate(`/project/${id}`)
  }

  return <button className="project-card" onClick={() => { navigateTo() }}>
    <div className="project-card-image">
      {/* // eslint-disable-next-line no-extra-boolean-cast */}
      {imgUrl
        ? <img src={process.env.PUBLIC_URL + imgUrl} alt="" />
        : <></>}
    </div>
    <p className="project-card-name h4-text">
      {name}
    </p>
    <p className="project-card-category h4-text">
      {category}
    </p>
  </button>
}
