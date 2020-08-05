export interface Product {
    id: number;
    title: string;
    imageSrc: string;
    details: string;
    isAddedToCart: boolean;
    productType: ProductsTypes;
    // isChild: boolean;
    // parentProductType: ProductsTypes;
}

export interface ParentProducts {
    pageProductType: ProductsTypes;
    pageTitle: string;
    children: Array<{ 
        childTitle: string;
        childProducts: Product[]
     }>;
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
    CushionCovers,
    BolstersCovers,
    BedSheets,
    RoundTableCovers,
    PrintedJackets,
    FullSleeveJacket,
    SleeveLessJacket,
    Rugs,
    DoorMat,
    SingingBowl,
    
}
