import { Component, Input } from '@angular/core';
import { SHARED_MODULES } from '../../../shared.module';
import { LoadingComponent } from "../loading/loading.component";
  
@Component({
  selector: 'app-badget-user',
  imports: [SHARED_MODULES],
  templateUrl: './badget-user.component.html',
  styleUrl: './badget-user.component.scss'
})
export class BadgetUserComponent {
  @Input() imgUrl: string | undefined;

  ngOnInit(): void {
    
  }
}
