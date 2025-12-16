import React from 'react'
import Ostroheader from '../components/ostroheader'
import Project from '../components/project'

export default function page() {
  return (
    <div className="h-screen flex flex-col items-center">
        <Ostroheader></Ostroheader>
        <div className="flex flex-col h-9/10 w-1/2">
          <div className="title uppercase text-6xl w-full border-b-lion border-b-2 mt-8 mb-8">our work</div>
          <div className="project-container flex flex-row w-full justify-between">
            <div className="col-left">
              <Project></Project>
            </div>
            <div className="col-middle">
              <div className="divider w-0.5 h-full bg-lion ml-20 mr-20"></div>
            </div>
            <div className="col-right">
              <Project></Project>
            </div>
          </div>
        </div>
    </div>
  )
}
