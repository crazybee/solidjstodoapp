
export type ColumnName = "code" | "description" | "businessLine" | "itemType" | "solution" | "product" | "cisco" | "saleArticleGroup" | "stockBtwCode" ;

export type TabType = "OverviewMain" | "Details" | "ArticleGroup";

export interface TableRow {
    code: string,
    description: string,
    businessLine: string,
    itemType: string,
    solution: string,
    product: string,
    cisco: string, 
    saleArticleGroup: string,
    stockBtwCode: string
  };
