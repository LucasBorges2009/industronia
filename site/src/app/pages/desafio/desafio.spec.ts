import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solucao } from './desafio';

describe('Solucao', () => {
  let component: Solucao;
  let fixture: ComponentFixture<Solucao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solucao],
    }).compileComponents();

    fixture = TestBed.createComponent(Solucao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
