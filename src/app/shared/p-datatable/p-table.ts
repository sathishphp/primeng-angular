export interface PTableColHeaderKeys {
    header: string,
    field: string,
    type: string,
    baseType?: string,
    width?: string,
    sortable?: boolean,
    selectOptions?: POptions[],
    show?: boolean,
    tooltip?: string,
    icon?: string,
    img?: string,
    class?: string,
    customFieldtoDisplay?: string,
    editable?: boolean,
    callBack?: Function,
    filterby?: string,
    overflow?: boolean,
    popover?: boolean,
    iconAction?: boolean
}

export interface POptions {
    action: string, 
    label: string, 
    icon?: string,
    visibility?: any,
    optionsCondition?: POptionCondition
}

export interface POptionCondition {
    onDataKey: string,
    onDataVal: string,
    newVal: string
}

export interface IpTableSetting {
    columns: IpTableColumn[];
    rows: any[];
    actionColumns: IpTableActionColumn[];
  }
  
  export interface IpTableActionColumn {
    iconClass: string;
    action: PTableActionTriggerEnum;
    tooltipTitle: string;
  }
  
  export enum PTableActionTriggerEnum {
    Edit,
    Delete,
    ChangeDesignation,
    Start,
    Complete,
  }
  
  export interface IpTableColumn {
    title: string;
    field: string;
    enabledSetting: IpTableEnableSetting;
    type: PTableColumnTypeEnum;
  }
  
  export interface IpTableEnableSetting {
    hasEditButton: boolean;
    hasDeleteButton: boolean;
    hasSorting: boolean;
    hasFiltering: boolean;
    // resizeable: boolean;
  }
  
  export enum PTableColumnTypeEnum {
    Integer = 1,
    Text = 2,
    Decimal = 3,
    DateTime = 4,
    Boolean = 5,
    List = 6,
    Dropdown = 7,
  }
  