import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {ProgressBarModule} from 'primeng/progressbar';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    ButtonModule,
    InputTextModule,
    ImageCropperModule,
    CalendarModule,
    AvatarGroupModule,
    AvatarModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    ToolbarModule,
    CardModule,
    TableModule,
    DialogModule,
    InputTextareaModule,
    ToastModule,
    ProgressBarModule,
    GalleriaModule,
    CarouselModule,
    ImageModule,
    SidebarModule
  ],
  exports:[
    ButtonModule,
    InputTextModule,
    ImageCropperModule,
    CalendarModule,
    AvatarGroupModule,
    AvatarModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    ToolbarModule,
    CardModule,
    TableModule,
    DialogModule,
    InputTextareaModule,
    ToastModule,
    ProgressBarModule,
    GalleriaModule,
    CarouselModule,
    ImageModule,
    SidebarModule
  ]
})
export class SharedModule {}
