import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '../../../shared.module';
import { LoadingService } from '../../../core/services/loading/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [...SHARED_MODULES],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

}
