import jwt, { JwtPayload, Secret } from 'jsonwebtoken'

const generateToken=(payload:any,secret:any,expiresIn:any)=>{
    const token=jwt.sign(payload,secret,
 {
     algorithm:"HS256",
     expiresIn:expiresIn
 } 
)
return token
}

const varifyToken=(token:string,secret:Secret)=>{
   return jwt.verify(token, secret) as JwtPayload
}

export const jwtHelpers={
    generateToken,
    varifyToken
}