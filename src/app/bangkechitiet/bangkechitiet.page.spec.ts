import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BangkechitietPage } from './bangkechitiet.page';

describe('BangkechitietPage', () => {
  let component: BangkechitietPage;
  let fixture: ComponentFixture<BangkechitietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangkechitietPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BangkechitietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
