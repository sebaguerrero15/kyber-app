import { MoonLoader } from "react-spinners"
import { Suspense } from "react"


const Loading = () => {
  return (
    <div className="min-h-[80vh]">
      <div className="flex justify-center items-center">
        <Suspense> 
        <MoonLoader color="#03d4ff" className="text-center"/>
        </Suspense>
      </div>
    </div>
    
  )
}

export default Loading