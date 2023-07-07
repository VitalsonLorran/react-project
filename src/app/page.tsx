"use client"
import { students } from "@/students"
import { useState } from "react"
import { InputText } from "@/components/InputText"

const Page = () => {

  const studentsList = students

  return (
    <div className="flex flex-col bg-black w-screen h-screen items-align items-center">
      <div className="flex justify-evenly h-10 p-5 w-4/5 rounded-t bg-slate-800 items-center">
        <div>Name</div>
        <div>Status</div>
        <div>Grade 1</div>
        <div>Grade 2</div>
        <div>Final Grade</div>
      </div>
      <div>
        <ul>
           {studentsList.length > 0 &&
            studentsList.map(i =>
              <div className="flex p-2 justify-evenly w-screen bg-slate-500"> 
              <li>{i.name}</li>
              <li>{i.grade1}</li>
              <li>{i.grade2}</li>
              </div>
              )
           }
        </ul>
      </div>
      <InputText />
    </div>
  )
}
export default Page