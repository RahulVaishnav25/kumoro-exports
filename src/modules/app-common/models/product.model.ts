export interface Product{
    id:number;
    title:string;
    imageSrc:string;
    details:string;
    isAddedToCart:boolean;
    productType:ProductsTypes;
    isChild:boolean;
    parentProductType:ProductsTypes;
}

export enum ProductsTypes {
    BackFlowFountain,CeramicFountain,ResinFountain,CobraStand,CopperBottle,IncenseHolder,BrassIncenseHolder,
    CeramicIncenseHolder,MetalIncenseHolder,PaperMacheIncenseHolder,WoodenIncenseHolder,
    OilBurner,BrassOilBurner,SoftStoneOilBurner,ResinBurner,BrassResinBurner,WoodenResinBurner,TarotBox
}