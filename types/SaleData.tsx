type Month = 'Jan' | 'Feb' | 'March' | 'April' | 'May' | 'June' | 'July' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec'

export interface SaleData {
  name: Month | string
  shoes: number
  tshirts: number
  pants: number
}