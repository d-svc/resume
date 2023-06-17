import React from 'react'
import { useParams } from 'react-router-dom'
import { MoreProjects } from '../MoreProject/MoreProjects'
import './Project.scss'
import { projects } from '../projects'
import { type ContentModel, type IProject } from '../ProjectCard/ProjectCard'

function ImageContent ({ content }: { content: string }) {
  console.log(process.env.PUBLIC_URL + content)
  return <div className="image-content">
    <img src={process.env.PUBLIC_URL + content} alt="" />
  </div>
}

function TextContent ({ content }: { content: string }) {
  return <p className="text-content h3-text">
    {content}
  </p>
}

export function Project () {
  const { id } = useParams()
  const currentId = id ? +id || -1 : -1
  const currentProject = [...projects].find((item: IProject) => item.id === currentId)
  const { content }: { content: ContentModel } = currentProject ?? { content: {} }

  return <div className="project-component container">

    <div className="project-component-hero">
      <img src={process.env.PUBLIC_URL + content.heroImage} alt="" />
    </div>
    <div className="project-component-about">
      <h2 className='about-title'>
        About project
      </h2>
      <p className='about-text h3-text'>{content?.about}</p>
    </div>
    <div className="project-component-content">

      {content?.items?.map(({ content, type }: { content: string, type: string }, index) => {
        console.log({ content, type })
        if (type === 'image') {
          return <ImageContent content={content} key={index} />
        }

        if (type === 'text') {
          return <TextContent content={content} key={index} />
        }
      })}

    </div>
    <MoreProjects currentId={currentId} />
  </div>
}
