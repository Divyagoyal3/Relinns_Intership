import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrl: './host-listener.component.css'
})
export class HostListenerComponent {
  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('Window resized');
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse entered');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse left');
  }

  onClick() {
    console.log('Clicked!');
}
}