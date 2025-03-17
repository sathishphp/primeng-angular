import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Company } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  saveCompany(postObj:any):Observable<Company[]>{
    return this.http.post<Company[]>(environment.API_BACKEND_POINT+'/company/create',postObj).pipe(catchError(this.handleError));
  }

  getCompanyList():Observable<Company[]>{
    return this.http.get<Company[]>(environment.API_BACKEND_POINT+'/company/list').pipe(catchError(this.handleError));
  }

  getCompanyListById(id:any):Observable<Company[]>{
    return this.http.get<Company[]>(environment.API_BACKEND_POINT+'/company/list/'+id).pipe(catchError(this.handleError));
  }

  updateCompany(id:any,postObj:any):Observable<Company[]>{
    return this.http.put<Company[]>(environment.API_BACKEND_POINT+'/company/update/'+id,postObj).pipe(catchError(this.handleError));
  }

  updateCompanyStatus(id:any,postObj:any):Observable<Company[]>{
    return this.http.put<Company[]>(environment.API_BACKEND_POINT+'/company/update-status/'+id,postObj).pipe(catchError(this.handleError));
  }

  removeCompany(id:any):Observable<Company[]>{
    return this.http.get<Company[]>(environment.API_BACKEND_POINT+'/company/delete/'+id).pipe(catchError(this.handleError));
  }

  handleError(error: any) {
      let errorMessage = "";
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => new Error(errorMessage))
    }
}
