/**
 * Application entry point (conceptual)
 * Author: Saleem Shaik
 */

import { ContentPricingService } from './services/content-pricing.service';
import { AccessControlService } from './services/access-control.service';

const pricing = new ContentPricingService();
const access = new AccessControlService();

const sampleContent = { id: 'mental-health-101', priceGBP: 1 };

if (pricing.isAffordable(sampleContent) && access.canAccess({ hasPaid: true })) {
  console.log('Access granted to content');
}

