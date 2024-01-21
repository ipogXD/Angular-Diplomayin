import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input()
  public title!: string;

  @Input()
  public margin? = '1rem 0 1rem 0.2rem';

  @Input()
  public fontSize? = '1.7rem';
}
