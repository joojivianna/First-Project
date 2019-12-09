import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';

const appRoutes = [
    {path: 'home', component: HomeComponent},
    {path: 'books', component: BooksComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule    
    ]
})
export class AppRoutingModule {}