import { ZodError } from "zod"
import httpStatus from "http-status";

const handleZodError=(err:ZodError)=>{
    const error=err.issues.map((issue:any)=>{
        return {
            path:issue?.path[issue.path.length-1],
            message:issue.message
        }
    })

    return {
        statusCode:httpStatus.BAD_REQUEST,
        message:"Validation Error",
        error,
    }
}

export default handleZodError