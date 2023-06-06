import { Routes } from '@angular/router';
import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { DetailsUserComponent } from './details-user.component';

export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent },
    { path: 'edit', component: EditUserComponent },
    { path: 'details', component: DetailsUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'edit' }
];
