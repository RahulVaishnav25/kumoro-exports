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
    IncenseSticks,
    BrassIncenseHolder,
    CeramicIncenseHolder,
    PaperMacheIncenseHolder,
    WoodenIncenseHolder,
    OilBurner,
    BrassOilBurner,
    SoftStoneOilBurner,
    CharcoalBurner,
    BrassCharcoalBurner,
    WoodenCharcoalBurner,
    TarotBox,
    CushionCovers,
    BolsterCovers,
    BedSheets,
    RoundTableCovers,
    // PrintedJackets,
    // FullSleeveJacket,
    // SleeveLessJacket,
    Rugs,
    DoorMat,
    SingingBowl,
    HandmadePaperDiaries,
    
}
