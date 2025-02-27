import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DragDropModule } from 'primeng/dragdrop';
import { DropdownModule } from 'primeng/dropdown';
import { DeferModule } from 'primeng/defer';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SidebarModule } from 'primeng/sidebar';
import { SpinnerModule } from 'primeng/spinner';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { AnimateModule } from 'primeng/animate';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { AutoFocusModule } from 'primeng/autofocus';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const modules = [
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        AccordionModule,
        AutoCompleteModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        //ButtonGroupModule,
        CheckboxModule,
        ChipsModule,
        ChipModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DragDropModule,
        DropdownModule,
        DeferModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        InputGroupModule,
        InputGroupAddonModule,
        ListboxModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        ProgressSpinnerModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        SidebarModule,
        SpinnerModule,
        SplitterModule,
        //StepperModule,
        StepsModule,
        TableModule,
        TagModule,
        ToastModule,
        ToolbarModule,
        TooltipModule,
        AnimateModule,
        CardModule,
        RippleModule,
        AutoFocusModule
];


@NgModule({
  imports: [...modules],
  exports:[...modules]
})
export class PrimengModule { }
