
export type Trole = 'super_admin' | 'admin' | 'doctor' | 'patient'
export type TuserStatus ='active'| 'bocked' | 'deleted'

export type Tuser ={
  id:string,
  email:string,
  password:string,
  role:Trole,
  status:TuserStatus,
  needsPasswordChange?:boolean,
  isDeleted?:boolean
}