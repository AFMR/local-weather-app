import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CitySearchComponent } from './city-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule} from '@angular/material';
import { doesNotThrow } from 'assert';

describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule
      ],
      declarations: [
         CitySearchComponent 
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when search triggered should fire event', () => {
    component.searchEvent.subscribe((eventArgs) => 
      expect(eventArgs).toEqual('it works')
    )

    component.emitEvent('it works')
  });
});
