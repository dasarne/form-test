"use strict";
/* tslint:disable:no-unused-variable */
var testing_1 = require('@angular/core/testing');
var debug_panel_component_1 = require('./debug-panel.component');
describe('DebugPanelComponent', function () {
  var component;
  var fixture;
  beforeEach(testing_1.async(function () {
    testing_1.TestBed.configureTestingModule({
      declarations: [debug_panel_component_1.DebugPanelComponent]
    })
      .compileComponents();
  }));
  beforeEach(function () {
    fixture = testing_1.TestBed.createComponent(debug_panel_component_1.DebugPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', function () {
    expect(component).toBeTruthy();
  });
});
