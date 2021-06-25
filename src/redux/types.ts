export interface groups {
    id: number;
    img: string;
    name: string;
    type: "group" | "ad" | "source" | string;
    total?: statistics;
    sourseces: sourseces[];
}

export interface statistics {
    CPA: number;
    CPATarget: number;
    CR: number;
    CTR: number;
    clicks: number;
    counts: number;
    countsTarget: number;
    price: number;
    proceeds: number;
    sessions: number;
    shows: number;
    expenses: number;
}
export interface sourseces extends statistics {
    id: number;
    groupId: number;
    img: string;
    name?: string;
}

export type sort = keyof statistics;
