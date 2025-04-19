import { useRole, userStatus } from "./user.constants"

export type Trole = typeof useRole[number]
export type TuserStatus = typeof userStatus[number]

export type Tuser ={
  id:string,
  email:string,
  password:string,
  role:Trole,
  status:TuserStatus,
  needsPasswordChange?:boolean,
  isDeleted?:boolean
}