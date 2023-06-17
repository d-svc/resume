import './Home.scss'
import React from 'react'
import { type IProject, ProjectCard } from '../ProjectCard/ProjectCard'
import { MoveLine } from '../MoveLine/MoveLine'
import { Contact } from '../Contact/Contact'
import { projects as sProjects } from '../projects'

export function Home (): JSX.Element {
  const projects: IProject[] = [...sProjects]

  return (
    <div className="home-component ">
      <div className="hero-text container">
        <h1>
          {/* // eslint-disable-next-line react/no-unescaped-entities */}
          Hey there, I&apos;m Daria!
          <br /> A <span className="gradient">digital designer</span> based in Toronto
        </h1>
      </div>
      <div className="moving-line-container">
        <MoveLine />
      </div>
      <div className='container portfolio' id="portfolio">

        <div className="projects">
          {projects.map((proj: IProject) => {
            return <ProjectCard project={proj} key={proj.id} />
          })
          }
        </div>
      </div>
      <div className="container" id="about">
        <div className="experience ">
          <h2 className="title">My experience </h2>
          <p className="text-desc h4-text">Lorem ipsum dolor sit amet consectetur. Mauris libero pellentesque faucibus integer. At
            integer eget at magna. At sit praesent ultrices ullamcorper sed ultrices placerat. Commodo et diam ultrices
            mi massa sapien purus duis. Volutpat a morbi arcu tempus semper velit velit.</p>
        </div>
      </div>
      <div className="container">
        <div className="all-exp ">
          <div className="work-box">
            <div className="work-exp">
              <p className="position h4-text">Web/Graphic designer</p>
              <p className="company h4-text">Diya Vision</p>
            </div>
            <p className="time h5-text">Dec 2021 - Now</p>
          </div>
          <div className="work-box">
            <div className="work-exp">
              <p className="position h4-text">Graphic designer</p>
              <p className="company h4-text">Improve Yourself Weekend</p>
            </div>
            <p className="time h5-text">Dec 2021 - Now</p>
          </div>
          <div className="work-box">
            <div className="work-exp">
              <p className="position h4-text">Project Manager</p>
              <p className="company h4-text">Newverest</p>
            </div>
            <p className="time h5-text">Dec 2021 - Now</p>
          </div>
        </div>
      </div>
      <div className="container" id='education'>
        <div className="education ">
          <h2 className="title">My education </h2>
          <p className="text-desc h4-text">Lorem ipsum dolor sit amet consectetur. Mauris libero pellentesque faucibus integer. At
            integer eget at magna. At sit praesent ultrices ullamcorper sed ultrices placerat. Commodo et diam ultrices
            mi massa sapien purus duis. Volutpat a morbi arcu tempus semper velit velit.</p>
        </div>
      </div>
      <div className="container">
        <div className="all-exp ">
          <div className="work-box">
            <div className="work-exp">
              <p className="position h4-text">UI/UX Design</p>
              <p className="company h4-text">Beetroot Academy</p>
            </div>
            <p className="time h5-text">Dec 2021 - Now</p>
          </div>
          <div className="work-box">
            <div className="work-exp">
              <p className="position h4-text">Graphic design</p>
              <p className="company h4-text">Projector</p>
            </div>
            <p className="time h5-text">Dec 2021 - Now</p>
          </div>
          <div className="work-box">
            <div className="work-exp">
              <p className="position h4-text">Software Development - Bachelor</p>
              <p className="company h4-text">Zhytomyr Technological University</p>
            </div>
            <p className="time h5-text">Dec 2021 - Now</p>
          </div>
        </div>
      </div>
    </div>
  )
}
