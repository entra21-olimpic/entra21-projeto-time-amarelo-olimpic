import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SegurancaService } from './seguranca.service';

const routes: Routes = [
  { path: "header", component: HeaderComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "profile", component: ProfileComponent, canActivate:[SegurancaService]},
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "settings", component: SettingsComponent},
  { path: "about", component: AboutComponent},
  { path: "faq", component: FaqComponent},
  { path: "admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
