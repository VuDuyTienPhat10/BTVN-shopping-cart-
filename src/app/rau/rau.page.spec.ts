import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RauPage } from './rau.page';

describe('RauPage', () => {
  let component: RauPage;
  let fixture: ComponentFixture<RauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
