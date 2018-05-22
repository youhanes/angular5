import { PostService } from './services/post.service';
import { GithubFollowersService } from './services/github-followers.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { EmailService } from './email.service';
import { ResumePipe } from './resume.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ProfileFollowersComponent } from './profile-followers/profile-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'followers', component: GithubFollowersComponent},
  { path: 'followers/:username', component: ProfileFollowersComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'signupform', component: SignupFormComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'contactform', component: ContactFormComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'panel', component: PanelComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ResumePipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    PageNotFoundComponent,
    HomeComponent,
    ProfileFollowersComponent,
    NavbarComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CoursesService,
    EmailService,
    PostService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
