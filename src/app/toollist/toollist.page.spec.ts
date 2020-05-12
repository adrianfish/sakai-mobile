import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToollistPage } from './toollist.page';

describe('ToollistPage', () => {
  let component: ToollistPage;
  let fixture: ComponentFixture<ToollistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToollistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToollistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
