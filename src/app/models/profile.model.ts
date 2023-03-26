import { Gender } from "../enums/gender.enum";

export interface User
{
  id : string,
  name : string,
  nickName : string,
  email : string,
  password : string,
  photoUrl : string,
  birthDate : string | null,
  gender : Gender,
  homeCountry : string,
  biography : string,
  emailConfirmed : boolean,
  visitedCities : VisitedCities[],
  citiesToVisit : CitiesToVisit[]
}

export interface CitiesToVisit
{
  id : number,
  cityName : string,
  comment : string
}

export interface VisitedCities
{
  id : number,
  name : string,
  experience : string,
  recomandation : string,
  gallery : Gallery,
}

export interface Gallery
{
  galleryId : number,
  title : string,
  galleryImages : GalleryImage[]
}

export interface GalleryImage
{
  imageId : number,
  imageUrl : string,
  galleryId : number,
  gallery : Gallery
}
