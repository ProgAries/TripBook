import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { Directive } from '@angular/core';
import { MessageService } from 'primeng/api';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add-gallery',
  templateUrl: './user-add-gallery.component.html',
  styleUrls: ['./user-add-gallery.component.scss']
})
export class UserAddGalleryComponent implements OnInit {

  @Input()
  galleryId: number|null = null;

  images: string[] = [];
  constructor(
    private _service : userService
  ) { }

  ngOnInit(): void {
  }

  onFileDrop(value: string) {
    if(!this.galleryId) return;

    console.log(this.galleryId);
    this.images.push(value);
    this._service.addImg(this.galleryId, value.split(",")[1]).subscribe();
  }


}

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @Output()
  fileDropped: EventEmitter<string> = new EventEmitter<string>();
  @HostBinding('class.fileover') fileOver!: boolean

  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  @HostListener('drop', ['$event']) onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if(files.length) {
      const fr = new FileReader();
      fr.readAsDataURL(files[0]);
      fr.onload = e => {
        this.fileDropped.emit(<string>e.target?.result);
      }
    }
  }
}
