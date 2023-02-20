import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessDefinition } from './schemas/ProcessDefinition';
import { Task } from './schemas/Task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CamundaRestService {
  private engineRestUrl = 'http://localhost:8080/engine-rest/'
  private backendApplicationURL = 'http://localhost:3000';
  private nodeServerUrl = "";
  
  constructor(private http: HttpClient) {

  }

  getTasks(): Observable<Task[]> {
    const url = this.backendApplicationURL + "/tasks";
    return this.http.get<any>(url).pipe(
      tap(form => this.log(`fetched tasks`)),
      catchError(this.handleError('getTasks', []))
    );
  }

  // getTaskFormKey(taskId: String): Observable<any> {
  //   const endpoint = `${this.engineRestUrl}task/${taskId}/form`;
  //   return this.http.get<any>(endpoint).pipe(
  //     tap(form => this.log(`fetched taskform`)),
  //     catchError(this.handleError('getTaskFormKey', []))
  //   );
  // }

  getVariableForTask(taskId: String, variable: String): Observable<any> {
    const url = this.backendApplicationURL + `/getVariableForTask?` + `taskId=` + taskId +`&variable=`+ variable;
    return this.http.get<any>(url).pipe(
      tap(form => this.log(`fetched variables`)),
      catchError(this.handleError('getVariablesForTask', []))
    );
  }

  postCompleteTask(taskId: String, variables: any): Observable<any> {
    return this.http.post<any>(this.nodeServerUrl + `completeTask/`+ `${taskId}`, variables).pipe(
      tap(tasks => this.log(`posted complete task`)),
      catchError(this.handleError('postCompleteTask', []))
    );
  }

  getProcessDefinitionTaskKey(processDefinitionKey: any): Observable<any> {
    const url = this.nodeServerUrl + `getProcessDefinitionTaskKey/` + `${processDefinitionKey}`
    return this.http.get<any>(url).pipe(
      tap(form => this.log(`fetched formkey`)),
      catchError(this.handleError('getProcessDeifnitionFormKey', []))
    );
  }

  getProcessDefinitions(): Observable<ProcessDefinition[]> {
    return this.http.get<ProcessDefinition[]>(this.nodeServerUrl + "getProcessDefinitions").pipe(
      tap(processDefinitions => console.log("Process definitions: ", processDefinitions)),
      catchError(this.handleError('getProcessDefinitions', []))
    );

    // return this.http.get<ProcessDefinition[]>(`http://localhost:8080/engine-rest/process-definition?latestVersion=true`).pipe(
    //   tap(processDefinitions => console.log("Process definitions: ", processDefinitions)),
    //   catchError(this.handleError('getProcessDefinitions', [])));
  }

  startProcessInstance(variables: any): Observable<any> {
    return this.http.post<any>(this.backendApplicationURL + `/startProcessInstance`, variables).pipe(
      tap(processDefinitions => this.log(`posted process instance`)),
      catchError(this.handleError('startProcessInstance', []))
    );
  }

  getRenderedForm(id: String): Observable<any> {
    const url = this.nodeServerUrl + `task/` + `${id}`
    return this.http.get<any>(url).pipe(
      tap(form => this.log(`fetched task form`)),
      catchError(this.handleError('getTaskForm', []))
    );
  }

  // deployProcess(fileToUpload: File): Observable<any> {
  //   const endpoint = `${this.engineRestUrl}deployment/create`;
  //   const formData = new FormData();

  //   formData.append('fileKey', fileToUpload, fileToUpload.name);

  //   return this.http.post(endpoint, formData);
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  testCall(): Observable<any> {
    const url = "http://localhost:3000/tasks";
    return this.http.get<any>(url).pipe(
      tap(form => this.log(`test called`)),
      catchError(this.handleError('test called error', []))
    );
  }

}