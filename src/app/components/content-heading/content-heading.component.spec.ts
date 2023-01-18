import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentHeadingComponent} from './content-heading.component';

describe('ContentHeadingComponent', () => {
	let component: ContentHeadingComponent;
	let fixture: ComponentFixture<ContentHeadingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ContentHeadingComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ContentHeadingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
