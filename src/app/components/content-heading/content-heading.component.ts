import {Component, Input} from '@angular/core';

@Component({
	selector: 'app-content-heading',
	templateUrl: './content-heading.component.html',
	styleUrls: ['./content-heading.component.scss'],
})
export class ContentHeadingComponent {
	@Input()
	icon = 'minus';
}
