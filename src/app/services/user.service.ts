import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CitiesToVisit, Gallery, User, VisitedCities } from '../models/profile.model';


@Injectable({
  providedIn: 'root'
})

export class userService {

  url : string = "https://localhost:7104/api/User"

  constructor(
    private client : HttpClient,
    private _router : Router
  ) {}

  getLoggedUser()
  {
    return this.client.get<User>(this.url +"/profil")
  }

  getlist(){
    return this.client.get<User[]>(this.url)
  }

  add(form : any) : Observable<User>
  {
    return this.client.post<User>(this.url, form)
  }

  delete(id : string) : Observable<void>
  {
    return this.client.delete<void>(this.url + '/' + id)
  }

  editInfo(form : any) : Observable<User>
  {
    return this.client.put<User>(this.url, form)
  }

  addCityToVisit(form : any){
    return this.client.patch<CitiesToVisit>(this.url, form)
  }
  deleteCityToVisit(id : number) : Observable<void>{
    return this.client.patch<void>(this.url + '/deleteCity/' + id, null)
  }

  addVisitedCity(form : any){
    return this.client.patch<VisitedCities>(this.url + '/AddVC', form)
  }
  deleteVisitedCity(id : number) : Observable<void>{
    return this.client.patch<void>(this.url + '/deleteVisitedCity/' + id, null)
  }

  navigateToHome(){
    this._router.navigate(['home'])
  }

  addGallery(id : number, form : any) {
    return this.client.patch<Gallery>(this.url + '/AddGallery/' + id, form)
  }

  addImg(id : number, img : string){
    return this.client.patch<any>(this.url + '/addImg/' + id, {img})
  }

  getThisGallery(galleryId : number){
    return this.client.get<Gallery>(this.url + '/gallery/' + galleryId)
  }

  deleteImg(id : number){
    return this.client.patch<any>(this.url + '/deleteImg/' + id, null)
  }

}
