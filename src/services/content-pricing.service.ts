/**
 * Content pricing service
 * Implements low-cost access logic
 *
 * Author: Saleem Shaik
 */

type ContentItem = {
  id: string;
  priceGBP: number;
};

export class ContentPricingService {
  isAffordable(item: ContentItem): boolean {
    return item.priceGBP <= 1;
  }
}

