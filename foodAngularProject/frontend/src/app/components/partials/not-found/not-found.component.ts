import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  @Input()
  public visible:boolean = false;

  @Input()
  public notFoundMessage:string = "Nothing found";

  @Input()
  public resetLinkText:string = "Reset";

  @Input()
  public resetLinkRoute = "/"
}
