import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login';
import { AuthenticationService, BackendService, PagerService } from './_services';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from "ng2-charts";  
import { AboutComponent } from './about';
import { NotFoundPageComponent } from './notfoundpage';
import { ConfirmDialog } from './shared/dialog.component';
import { LoadingComponent } from  './loading';
import { AuthGuard } from './_guard';
import { EmployesComponent } from './employes/employes.component';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { CoreComponent } from './core/core.component';
import { CoreService } from './core.service';





import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MewemployeComponent } from './mewemploye/mewemploye.component';
import { MewempformComponent } from './mewempform/mewempform.component';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';






@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    NotFoundPageComponent,
    ConfirmDialog,
    LoadingComponent,
    AppComponent,
    EmployesComponent,
    EmpAddEditComponent,
    CoreComponent,
    MewemployeComponent,
    MewempformComponent,
    AdminComponent,
    RegisterComponent,
    
    
  



 

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ChartsModule,
    AppRoutingModule,
    MatToolbarModule,
   
    
  ],
  providers: [
    AuthGuard,
    BackendService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
