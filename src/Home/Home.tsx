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
          <p className="text-desc h4-text">
          I have extensive experience as a UI/UX Designer and Graphic Designer, adept at conducting UX research, wireframing, and prototyping. At Diya Vision, I successfully redesigned a charitable foundation's website, resulting in increased adoptions and improved user engagement. As a Graphic Designer at Improve Yourself Weekend, I created visually compelling designs for social media and print materials. Additionally, as a Project Manager at Newverest, I led cross-functional teams, designed products, and optimized Amazon listings. With a strong skill set and a track record of delivering high-quality designs, I bring valuable expertise in creating exceptional user experiences and managing projects efficiently.
            </p>
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
          <p className="text-desc h4-text">
          I constantly pursue learning opportunities to enhance my skills in UI/UX design. At Beetroot Academy I acquired in-depth knowledge of Figma and learned effective competitor analysis and user research techniques. Demonstrating a strong understanding of design principles and current trends, I collaborated with team members to ideate, iterate, and refine design solutions. Additionally, my Bachelor's degree in Software Engineering has provided me with valuable knowledge of the limitations and capabilities of the technologies I work with. This background aids me in creating user experiences that are both seamless and efficient. Alongside my education, I have earned certificates in Graphic Design, Figma Autolayout Workshop, and Dare IT: Design Challenge, further showcasing my commitment to continuous growth and development.
            </p>
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
