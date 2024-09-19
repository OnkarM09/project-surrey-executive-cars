export interface SafetyInfo {
  imagePath: string,
  headerTxt: string,
  infoTxt: string,
  altTxt : string
}


export interface Person{
  from_name : string,
  phone_number : number | null,
  from_email : string,
  message : string
}

export interface Service{
  imgPath : string,
  headerTxt : string,
  serviceTxt : string,
  iconClassName : string
}
