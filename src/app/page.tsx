"use client"
import { students } from "@/students"
import { InputText } from "@/components/InputText"

const Page = () => {

  const studentsList = students

  return (
    <div className="flex flex-col bg-black w-screen h-screen items-align items-center">
      <div className="flex justify-evenly h-10 p-5 w-4/5 rounded-t bg-slate-800 items-center">
        <div className="w-2/5">Name</div>
        <div>Status</div>
        <div>Grade 1</div>
        <div>Grade 2</div>
        <div>Final Grade</div>
      </div>
      <div className="w-full">
        <ul className="flex flex-col justify-center items-center">
           {studentsList.length > 0 &&
            studentsList.map(i =>
              <div className="flex justify-evenly p-2 w-4/5 bg-slate-500"> 
                <li className="w-2/5">{i.name}</li>
                <li>Status</li>
                <li>{i.grade1}</li>
                <li>{i.grade2}</li>
                <li>Final grade</li>
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