export interface Product {
    id: number;
    title: string;
    imageSrc: string;
    details: string;
    isAddedToCart: boolean;
    productType: ProductsTypes;
    isChild: boolean;
    parentProductType: ProductsTypes;
}

export interface ParentProducts {
    title: string;
    parentProductType: ProductsTypes;
}


export enum ProductsTypes {
    MetalIncenseHolder,
    ResinFountain,
    CopperBottle,
    BackFlowFountain,
    CeramicFountain,
    CobraStand,
    IncenseHolder,
    BrassIncenseHolder,
    CeramicIncenseHolder,
    PaperMacheIncenseHolder,
    WoodenIncenseHolder,
    OilBurner,
    BrassOilBurner,
    SoftStoneOilBurner,
    ResinBurner,
    BrassResinBurner,
    WoodenResinBurner,
    TarotBox,
}
