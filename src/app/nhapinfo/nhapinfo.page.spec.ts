import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NhapinfoPage } from './nhapinfo.page';

describe('NhapinfoPage', () => {
  let component: NhapinfoPage;
  let fixture: ComponentFixture<NhapinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhapinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NhapinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
